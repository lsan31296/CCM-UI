import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRiskHoldings } from "../utils/api";
import DataTable from "react-data-table-component";
import ExpandedTable from "./ExpandedTable";
import ExportCSV from "./ExportCSV";
import CustomMaterialMenu from "./CustomMaterialMenu";
import SubHeaderComponent from "./SubHeaderComponent";
import PopModal from "./PopModal";
import { formatAccountName, numberFormatter0, numberFormatter2, dollarFormatter, dollarFormatter0, formatWeight, dateFormatter, dataTableStyles } from "../utils/helperFunctions";

export default function RiskHoldings() {
    let params = useParams();
    const [tableData, setTableData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    const [modalTitle, setModalTitle] = useState(null);
    const [modalColumns, setModalColumns] = useState([]);
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

    const columnHeaders = [
        //Currently account_name and ticker are not working when being called to the middle-tier from its database.
        { 
            name: "Account Name", 
            selector: (row) => formatAccountName(row.account_name),
            sortable: true,
            minWidth: "135px",
            center: true,
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
            minWidth: "125px",
            center: true,
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
            name: "Orig Face",
            selector: (row) => row.orig_face,
            sortable: true,
            compact: true,
            minWidth: "80px",
            format: (row) => dollarFormatter0.format(row.orig_face),
            center: true,
        },
        {
            name: "Curr Face",
            selector: (row) => dollarFormatter0.format(row.curent_face),
            sortable: true,
            compact: true,
            minWidth: "80px",
            center: true,
        },
        {
            name: "MKT Val",
            selector: (row) => dollarFormatter0.format(row.mv),
            sortable: true,
            compact: true,
            minWidth: '110px',
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
            name: "SP",
            selector: (row) => row.carlton_SPRating,
            sortable: true,
            compact: true,
            minWidth: "30px",
            center: true,
            //maxWidth: "60px",
        },
        {
            name: "Fitch",
            selector: (row) => row.carlton_FitchRating,
            sortable: true,
            compact: true,
            minWidth: "40px",
            center: true,
        },
        {
            name: "6M",
            selector: (row) => numberFormatter2.format(row.krD_6M),
            sortable: true,
            compact: true,
            minWidth: "50px",
            center: true,
        },
        {
            name: "1YR",
            selector: (row) => numberFormatter2.format(row.krD_1YR),
            sortable: true,
            compact: true,
            minWidth: "50px",
            center: true,
        },
        {
            name: "2YR",
            selector: (row) => numberFormatter2.format(row.krD_2YR),
            sortable: true,
            compact: true,
            minWidth: "50px",
            center: true,
        },
        {
            name: "3YR",
            selector: (row) => numberFormatter2.format(row.krD_3YR),
            sortable: true,
            compact: true,
            minWidth: "50px",
            center: true,
        },
        {
            name: "5YR",
            selector: (row) => numberFormatter2.format(row.krD_5YR),
            sortable: true,
            compact: true,
            minWidth: "50px",
            center: true,
        },
        {
            name: "7YR",
            selector: (row) => numberFormatter2.format(row.krD_7YR),
            sortable: true,
            compact: true,
            minWidth: "50px",
            center: true,
        },
        {
            name: "10YR",
            selector: (row) => numberFormatter2.format(row.krD_10YR),
            sortable: true,
            compact: true,
            minWidth: "50px",
            center: true,
        },
        {
            name: "20YR",
            selector: (row) => numberFormatter2.format(row.krD_20YR),
            sortable: true,
            compact: true,
            minWidth: "50px",
            center: true,
        },
        {
            name: "30YR",
            selector: (row) => numberFormatter2.format(row.krD_30YR),
            sortable: true,
            compact: true,
            minWidth: "50px",
            center: true,
        },
        {
            name: "Book G/L",
            selector: (row) => numberFormatter0.format(row.book_gain_loss),
            sortable: true,
            compact: true,
            minWidth: "80px",
            conditionalCellStyles: [
                {
                    when: (row) => row.book_gain_loss < 0,
                    style: { color: 'red' }
                }
            ],
            center: true,
        },
        {
            name: "DOD G/L",
            selector: (row) => numberFormatter0.format(row.dod_gain_loss),
            sortable: true,
            compact: true,
            minWidth: "80px",
            conditionalCellStyles: [
                {
                    when: (row) => row.dod_gain_loss < 0,
                    style: { color: 'red' }
                }
            ],
            center: true,
        },
        {
            name: "Orig Trd Date",
            selector: (row) => dateFormatter(row.original_trade_date),
            sortable: true,
            compact: true,
            minWidth: "120px",
            center: true,
        },
    ];
    const customStyles = {
        header : {
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
            when: row => row.weight >= 0.9,
            style: {
                fontWeight: 700
            }
        },
        {
            when: row => row.weight < 0.99 && row.aggregate_rating === "" && row.sec_name === "",//identifies the aggregate rows
            style: {
                backgroundColor: dataTableStyles[params.positionView].aggMaGroupRowColor
            }
        },
    ]

    async function loadTable() {
        console.log("Loading Table!");
        const abortController = new AbortController();
        const response = await getRiskHoldings({accounts: [params.accounts], aoDate: params.aoDate, positionView: params.positionView, aggregateRows: params.aggregateRows ? params.aggregateRows : 'n'}, abortController.signal)
        setTableData(response);
        return () => abortController.abort();
    }
    useEffect(() => {loadTable()}, [params]);

    console.log("From RiskHoldings Component: ", params);

    if (!tableData) {
        <h1>Loading...</h1>
    } else {
        return (
            <div style={{ padding: "30px 2% 100px", backgroundColor: "#F2F2F2" }}>
                <PopModal data={modalData} isOpen={isModalOpen} onClose={handleModalClose} columns={modalColumns} modalTitle={modalTitle}/>
                <DataTable
                    title={<div style={{ display: "flex", justifyContent: "space-between"}}> <h3 style={{ color: "white" }}>Risk Holdings: {dataTableStyles[params.positionView].title} View</h3> <h3 style={{ color: 'white'}}>{params.aoDate}</h3> </div>}
                    subHeader subHeaderComponent={SubHeaderComponent}  
                    columns={columnHeaders}
                    data={tableData}
                    highlightOnHover
                    striped
                    customStyles={customStyles}
                    conditionalRowStyles={conditionalRowStyles}
                    expandableRows expandableRowsComponent={ExpandedTable}
                    fixedHeader fixedHeaderScrollHeight="710px"
                    //onRowDoubleClicked={handleDoubleClick}
                    pagination
                /> 
            </div>
        )
    }

}