import "./RiskHoldings.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRiskHoldings } from "../utils/api";
import DataTable from "react-data-table-component";
//import ExpandedTable from "./ExpandedTable";
import ExportCSV from "./ExportCSV";
import CustomMaterialMenu from "./CustomMaterialMenu";
import SubHeaderComponent from "./SubHeaderComponent";
import PopModal from "./PopModal";
import { formatAccountName, numberFormatter0, numberFormatter2, dollarFormatter, dollarFormatter0, formatWeight, dateFormatter, dataTableStyles, aggRowFilter, sqlDateToDateString } from "../utils/helperFunctions";
import CustomLoader from "./CustomLoader";
import ExpandedDetailsTable from "./ExpandedDetailsTable";

export default function RiskHoldings() {
    let params = useParams();
    const [filteredData, setFilteredData] = useState([]);
    const [response, setResponse] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    const [modalTitle, setModalTitle] = useState(null);
    const [modalColumns, setModalColumns] = useState([]);
    const [pending, setPending] = useState(true);
    const bodyReq = {
        accounts: [params.accounts], 
        aoDate: params.aoDate, 
        positionView: params.positionView, 
        aggregateRows: (params.aggregateRows && params.aggregateRows !== 'n') ? 'ys' : 'n'
    };
//HANDLER FUNCTIONS DECLARED HERE
    //MODAL HANDLERS HERE
    const handleRecentTradeModalOpen = (uspTradeRes, title, recentTradeModalColumns) => {
        setModalData(uspTradeRes);
        setModalTitle(title);
        setModalColumns(recentTradeModalColumns);
        setIsModalOpen(true);
    };
    const handleSecurityDetailModalOpen =  (securityDetailRes, title, securityDetailModal) => {
        setModalData(securityDetailRes);
        setModalTitle(title);
        setModalColumns(securityDetailModal);
        setIsModalOpen(true);
    };
    const handlePriceHistoryModalOpen = (priceHistoryRes, title, priceHistoryModalColumns) => {
        setModalData(priceHistoryRes);
        setModalTitle(title);
        setModalColumns(priceHistoryModalColumns);
        setIsModalOpen(true);
    };
    const handleShowLoansModalOpen = (showLoansRes, title, showLoansModalColumns) => {
        setModalData(showLoansRes);
        setModalTitle(title);
        setModalColumns(showLoansModalColumns);
        setIsModalOpen(true);
    };
    const handleAccountDetailsModalOpen = (accountDetailsRes, title, accountDetailsModalColumns) => {
        setModalData(accountDetailsRes);
        setModalTitle(title);
        setModalColumns(accountDetailsModalColumns);
        setIsModalOpen(true);
    };
    const handleModalClose = () => {
        setIsModalOpen(false);
    }
    const handleFilter = ({target}) => {
        //console.log("Typing: ", target.value);
        const newTableData = response.filter((row) => {
            return row.bbg_cusip.toLowerCase().includes(target.value.toLowerCase())
        });
        setFilteredData(newTableData);
    }

    const columnHeaders = [
        //Currently account_name and ticker are not working when being called to the middle-tier from its database.
        /*
        { 
            name: "Sort Order", 
            selector: (row) => numberFormatter0.format(row.sortOrder),
            sortable: true,
            minWidth: "135px",
            center: true,
        },
        */
        {
            name: <div>Marketing Asset Group</div>,
            selector: (row) => row.marketingAssetGroup,
            center: true,
            compact: true,
            conditionalCellStyles: [
                {
                    when: (row) => (row.sortOrder !== 1 && bodyReq.aggregateRows !== "n") || row.marketingAssetGroup === '-no data-',
                    style: {
                        color: "transparent"
                    }
                }
            ],
        },
        {
            name: <div>CS Group</div>,
            selector: (row) => row.carlton_SecurityGroup,
            center: true,
            compact: true,
            conditionalCellStyles: [
                {
                    when: (row) => (row.sortOrder !== 2 && bodyReq.aggregateRows !== "n") || row.carlton_SecurityGroup === '-no data-',
                    style: {
                        color: "transparent"
                    }
                }
            ]
        },
        {
            name: <div>CS Type</div>,
            selector: (row) => row.carlton_SecurityType,
            compact: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: (row) => (row.sortOrder !== 3 && bodyReq.aggregateRows !== "n") || row.carlton_SecurityType === '-no data-',
                    style: {
                        color: "transparent"
                    }
                }
            ]
        },
        {
            name: <div>CS Sector</div>,
            selector: (row) => row.carlton_SecuritySector,
            compact: true,
            wrap: true,
            conditionalCellStyles: [
                {
                    when: (row) => (row.sortOrder !== 4 && bodyReq.aggregateRows !== "n") || row.carlton_SecuritySector === '-no data-',
                    style: {
                        color: "transparent"
                    }
                }
            ]
        },
        {
            cell: row =>
                <div>
                    <CustomMaterialMenu size="small" row={row} handleModalOption1Open={handleRecentTradeModalOpen}
                        handleModalOption2Open={handleSecurityDetailModalOpen} handleModalOption3Open={handlePriceHistoryModalOpen}
                        handleModalOption4Open={handleShowLoansModalOpen} handleModalOption5Open={handleAccountDetailsModalOpen}
                    />
                </div>,
            allowOverFlow: true,
            button: true,
            minWidth: "40px",
            compact: true,
            center: true,
        },
        {
            name: "BBG Cusip",
            selector: (row) => row.bbg_cusip,
            sortable: true,
            maxWidth: "10px",
            compact: true,
            center: true,
        },
        {
            name: "Sec Name",
            selector: (row) => row.sec_name,
            sortable: true,
            compact: true,
            //minWidth: "125px",
            //center: true,
            wrap: true,
        },
        {
            name: "Coupon",
            selector: (row) => row.coupon,
            sortable: true,
            compact: true,
            minWidth: "70px",
            format: (row) => numberFormatter2.format(row.coupon),
            center: true,
        },
        {
            name: "Maturity",
            selector: (row) => row.maturity,
            sortable: true,
            compact: true,
            minWidth: "80px",
            center: true,
        },
        {
            name: "Price",
            selector: (row) => dollarFormatter.format(row.price),
            sortable: true,
            minWidth: "50px",
            compact: true,
            center: true,
        },
        {
            name: "Wght",
            selector: (row) => formatWeight(row.weight),
            sortable: true,
            minWidth: "65px",
            compact: true,
            center: true,
        },
        {
            name: <div>Orig Face</div>,
            selector: (row) => dollarFormatter0.format(row.orig_face),
            sortable: true,
            compact: true,
            center: true,
        },
        {
            name: <div>Curr Face</div>,
            selector: (row) => dollarFormatter0.format(row.curent_face),
            sortable: true,
            compact: true,
            //minWidth: "80px",
            center: true,
        },
        {
            name: <div>MKT Val</div>,
            selector: (row) => dollarFormatter0.format(row.mv),
            sortable: true,
            compact: true,
            //minWidth: '110px',
            center: true,
        },
        {
            name: "Factor",
            selector: (row) => numberFormatter2.format(row.factor),
            sortable: true,
            compact: true,
            minWidth: "60px",
            center: true,
        },
        {
            name: "DUR",
            selector: (row) => numberFormatter2.format(row.dur),
            sortable: true,
            compact: true,
            minWidth: "50px",
            center: true,
        },
        {
            name: "DUR Cont",
            selector: (row) => numberFormatter2.format(row.durCont),
            sortable: true,
            compact: true,
            minWidth: "80px",
            center: true,
        },
        {
            name: "YTW",
            selector: (row) => numberFormatter2.format(row.ytw),
            sortable: true,
            compact: true,
            minWidth: "60px",
            center: true,
        },
        {
            name: "YTW Cont",
            selector: (row) => numberFormatter2.format(row.ytwCont),
            sortable: true,
            compact: true,
            minWidth: "85px",
            center: true,
        },
        {
            name: "DxS",
            selector: (row) => numberFormatter0.format(row.dxS),
            sortable: true,
            compact: true,
            minWidth: "75px",
            center: true,
        },
        {
            name: "CONVX",
            selector: (row) => numberFormatter2.format(row.cnvx),
            sortable: true,
            compact: true,
            minWidth: "79px",
            center: true,
        },
        {
            name: "WAL",
            selector: (row) => numberFormatter2.format(row.wal),
            sortable: true,
            compact: true,
            minWidth: "60px",
            center: true,
        },
        {
            name: "OAS",
            selector: (row) => numberFormatter0.format(row.oas),
            sortable: true,
            compact: true,
            minWidth: "50px",
            center: true,
        },
        {
            name: "Agg RTG",
            selector: (row) => row.aggregate_rating,
            sortable: true,
            compact: true,
            minWidth: "75px",
            center: true,
        },
        {
            name: "Moody",
            selector: (row) => row.carlton_MoodyRating,
            sortable: true,
            compact: true,
            minWidth: "65px",
            center: true,
        },
        {
            name: <div>SP</div>,
            selector: (row) => row.carlton_SPRating,
            sortable: true,
            compact: true,
            minWidth: "40px",
            center: true,
            //maxWidth: "60px",
        },
        {
            name: <div>Fitch</div>,
            selector: (row) => row.carlton_FitchRating,
            sortable: true,
            compact: true,
            minWidth: "50px",
            center: true,
        },
        {
            name: <div>KRD 6M</div>,
            selector: (row) => numberFormatter2.format(row.krD_6M),
            sortable: true,
            compact: true,
            minWidth: "50px",
            center: true,
            conditionalCellStyles: [
                {
                    when: (row) => row.krD_6M < 0,
                    style: { color: 'red' }
                }
            ],
        },
        {
            name: <div>KRD 1YR</div>,
            selector: (row) => numberFormatter2.format(row.krD_1YR),
            sortable: true,
            compact: true,
            minWidth: "50px",
            center: true,
            conditionalCellStyles: [
                {
                    when: (row) => row.krD_1YR < 0,
                    style: { color: 'red' }
                }
            ],
        },
        {
            name: <div>KRD 2YR</div>,
            selector: (row) => numberFormatter2.format(row.krD_2YR),
            sortable: true,
            compact: true,
            minWidth: "50px",
            center: true,
            conditionalCellStyles: [
                {
                    when: (row) => row.krD_2YR < 0,
                    style: { color: 'red' }
                }
            ],
        },
        {
            name: <div>KRD 3YR</div>,
            selector: (row) => numberFormatter2.format(row.krD_3YR),
            sortable: true,
            compact: true,
            minWidth: "50px",
            center: true,
            conditionalCellStyles: [
                {
                    when: (row) => row.krD_3YR < 0,
                    style: { color: 'red' }
                }
            ],
        },
        {
            name: <div>KRD 5YR</div>,
            selector: (row) => numberFormatter2.format(row.krD_5YR),
            sortable: true,
            compact: true,
            minWidth: "50px",
            center: true,
            conditionalCellStyles: [
                {
                    when: (row) => row.krD_5YR < 0,
                    style: { color: 'red' }
                }
            ],
        },
        {
            name: <div>KRD 7YR</div>,
            selector: (row) => numberFormatter2.format(row.krD_7YR),
            sortable: true,
            compact: true,
            minWidth: "50px",
            center: true,
            conditionalCellStyles: [
                {
                    when: (row) => row.krD_7YR < 0,
                    style: { color: 'red' }
                }
            ],
        },
        {
            name: <div>KRD 10YR</div>,
            selector: (row) => numberFormatter2.format(row.krD_10YR),
            sortable: true,
            compact: true,
            minWidth: "50px",
            center: true,
            conditionalCellStyles: [
                {
                    when: (row) => row.krD_10YR < 0,
                    style: { color: 'red' }
                }
            ],
        },
        {
            name: <div>KRD 20YR</div>,
            selector: (row) => numberFormatter2.format(row.krD_20YR),
            sortable: true,
            compact: true,
            minWidth: "50px",
            center: true,
            conditionalCellStyles: [
                {
                    when: (row) => row.krD_20YR < 0,
                    style: { color: 'red' }
                }
            ],
        },
        {
            name: <div>KRD 30YR</div>,
            selector: (row) => numberFormatter2.format(row.krD_30YR),
            sortable: true,
            compact: true,
            minWidth: "50px",
            center: true,
            conditionalCellStyles: [
                {
                    when: (row) => row.krD_30YR < 0,
                    style: { color: 'red' }
                }
            ],
        },
        {
            name: <div>Book G/L</div>,
            selector: (row) => numberFormatter0.format(row.book_gain_loss),
            sortable: true,
            compact: true,
            //minWidth: "80px",
            conditionalCellStyles: [
                {
                    when: (row) => row.book_gain_loss < 0,
                    style: { color: 'red' }
                }
            ],
            center: true,
        },
        {
            name: <div>DOD G/L</div>,
            selector: (row) => numberFormatter0.format(row.dod_gain_loss),
            sortable: true,
            compact: true,
            //minWidth: "80px",
            conditionalCellStyles: [
                {
                    when: (row) => row.dod_gain_loss < 0,
                    style: { color: 'red' }
                }
            ],
            center: true,
        },
        {
            name: <div>DOD Return</div>,
            selector: (row) => numberFormatter2.format(row.dod_return),
            sortable: true,
            compact: true,
            //minWidth: "90px",
            conditionalCellStyles: [
                {
                    when: (row) => row.dod_gain_loss < 0,
                    style: { color: 'red' }
                }
            ],
            center: true,
        },
    ];
    const customStyles = {
        header: {
            style: {
                backgroundColor: dataTableStyles[params.positionView].bannerColor
            }
        },
        subHeader: {
            style: {
                minHeight: "45px"
            }
        },
        headRow: {
            style: {
                fontSize: "14px",
                color: "#1B3668",
                wordBreak: "break-word",
                minHeight: "45px"
            },
        },
        headCells: {
            style: {
                paddingLeft: "2px",
            }
        },
        cells: {
            style: {
                paddingRight: "2px",
                paddingLeft: "2px"
            }
        },
        rows: {
            style: {
                fontSize: "13px",
                minHeight: "20px",
            }
        }
    }
    //Set conditional row styles for aggregate row
    const conditionalRowStyles = [
        {
            when: row => row.sortOrder === 0,
            style: {
                fontWeight: 700,
                backgroundColor: dataTableStyles[params.positionView].aggMaGroupRowColor0,
                color: "white",
            }
        },
        {
            when: row => (row.sortOrder === 1),//identifies the aggregate rows
            style: {
                backgroundColor: dataTableStyles[params.positionView].aggMaGroupRowColor1,
                color: "white",
            }
        },
        {
            when: row => (row.sortOrder === 2),//identifies the aggregate rows
            style: {
                backgroundColor: dataTableStyles[params.positionView].aggMaGroupRowColor2,
                color: "white",
            }
        },
        {
            when: row => (row.sortOrder === 3),//identifies the aggregate rows
            style: {
                backgroundColor: dataTableStyles[params.positionView].aggMaGroupRowColor3,
                color: "white",
            }
        },
        {
            when: row => row.sortOrder === 4,//identifies the aggregate rows
            style: {
                backgroundColor: dataTableStyles[params.positionView].aggMaGroupRowColor4
            }
        },
        {
            when: row => row.sortOrder === 5,//identifies the aggregate rows
            style: {
                backgroundColor: dataTableStyles[params.positionView].aggMaGroupRowColor5
            }
        },
    ]

    async function loadTable() {
        console.log("Loading Table!");
        const abortController = new AbortController();
        const res = await getRiskHoldings(bodyReq, abortController.signal)
        const formattedRes = aggRowFilter(res, bodyReq.aggregateRows);
        setResponse(formattedRes);
        setFilteredData(formattedRes);
        setPending(false);
        return () => abortController.abort();
    }
    useEffect(() => {loadTable()}, [params]);

    //console.log("From RiskHoldings Component: ", bodyReq);

    if (!response) {
        <h1>Loading...</h1>
    } else {
        return (
            <div id="data-table-container" style={{ padding: "0px 2% 2% 2%", backgroundColor: "#F2F2F2" }}>
                <PopModal data={modalData} isOpen={isModalOpen} onClose={handleModalClose} columns={modalColumns} modalTitle={modalTitle}/>
                <ExportCSV id={"risk-holdings-export"} csvData={response} fileName={`RiskHoldings-${dataTableStyles[params.positionView].title}-${bodyReq.accounts.toString()}-Agg_${bodyReq.aggregateRows}-${bodyReq.aoDate}`}/>
                <input id="filter-bar" placeholder="Filter..." type="text" onChange={handleFilter} />
                <DataTable
                    title={<div style={{ display: "flex", justifyContent: "space-between"}}> <h3 style={{ color: "white" }}>Risk Holdings: {dataTableStyles[params.positionView].title} View</h3> <h3 style={{ color: 'white'}}>{sqlDateToDateString(dateFormatter(params.aoDate))}</h3> </div>}
                    subHeader subHeaderComponent={SubHeaderComponent}  
                    columns={columnHeaders}
                    data={filteredData}
                    highlightOnHover
                    striped
                    customStyles={customStyles}
                    conditionalRowStyles={conditionalRowStyles}
                    expandableRows expandableRowsComponent={ExpandedDetailsTable}
                    fixedHeader //fixedHeaderScrollHeight="710px"
                    //onRowDoubleClicked={handleDoubleClick}
                    pagination paginationPerPage={1000}
                    paginationRowsPerPageOptions={[100, 200, 300, 400, 500, 1000, 10000]}
                    paginationComponentOptions={{ selectAllRowsItem: true, selectAllRowsItemText: "All" }}
                    progressPending={pending} progressComponent={<CustomLoader/>}
                /> 
            </div>
        )
    }

}