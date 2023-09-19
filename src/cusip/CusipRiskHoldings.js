/**
 * This component is responsible for rendering risk holdings data for a single cusip. 
 * AKA 'Cusip Route'
 */

import { useParams } from "react-router";
import { formatAccountName, numberFormatter0, numberFormatter2, dollarFormatter, dollarFormatter0, formatWeight, dateFormatter, dataTableStyles, aggRowFilter, sqlDateToDateString, isApxPortfolioCode, smartURLSearch } from "../utils/helperFunctions";
import { useEffect, useState } from "react";
import { getRiskHoldings } from "../utils/api";
import SubHeaderComponent from "../components/SubHeaderComponent";
import CustomLoader from "../components/CustomLoader";
import DataTable from "react-data-table-component";
import PopModal from "../components/PopModal";
import ExportCSV from "../components/ExportCSV";
import CustomMaterialMenu from "../components/CustomMaterialMenu";
import ExpandedDetailsTable from "../components/ExpandedDetailsTable";
import "./CusipRiskHoldings.css";


export default function CusipRiskHoldings({ accountsInfo }) {
    let params = useParams();
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    const [modalTitle, setModalTitle] = useState(null);
    const [modalColumns, setModalColumns] = useState([]);
    const cusipParam = params.cusip;
    const bodyReq = {
        accounts: isApxPortfolioCode(accountsInfo, params.accounts) ? [params.accounts] : [smartURLSearch(accountsInfo, params.accounts).apx_portfolio_code],
        aoDate: params.aoDate, 
        positionView: params.positionView, 
        aggregateRows: (params.aggregateRows && params.aggregateRows !== 'n') ? 'ys' : 'n'
    };
    const accountObj = accountsInfo.find((row) => row.apx_portfolio_code === bodyReq.accounts[0]);

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

    async function loadCusipTable() {
        console.log("Loading Cusip Table!");
        const abortController = new AbortController();

        const res = await getRiskHoldings(bodyReq, abortController.signal);
        window.history.pushState(null, '', `/risk/${bodyReq.aoDate}/${bodyReq.positionView}/${bodyReq.accounts}/${bodyReq.aggregateRows}/${cusipParam}`);
        //const formattedRes = aggRowFilter(res, bodyReq.aggregateRows);
        const cusipRow = res.find((row) => row.bbg_cusip === cusipParam);
        console.log(cusipRow);
        setData([cusipRow]);
        setPending(false);
        return () => abortController.abort();
    }

    useEffect(() => {loadCusipTable()}, [params]);

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
            minWidth: "90px",
        },
        {
            name: <div>CS Group</div>,
            selector: (row) => row.carlton_SecurityGroup,
            center: true,
            compact: true,
            minWidth: "90px",
        },
        {
            name: <div>CS Type</div>,
            selector: (row) => row.carlton_SecurityType,
            compact: true,
            wrap: true,
            minWidth: "70px",
        },
        {
            name: <div>CS Sector</div>,
            selector: (row) => row.carlton_SecuritySector,
            compact: true,
            wrap: true,
            minWidth: "80px",
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
                minHeight: "80px",
            }
        }
    };
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
    ];
    const rowsPreExpanded = (row) => row.defaultExpanded = true;

    if (!data) {
        return <h1>Loading...</h1>
    } else {
        return (
            <div id="cusip-data-table-container">
                <PopModal data={modalData} isOpen={isModalOpen} onClose={handleModalClose} columns={modalColumns} modalTitle={modalTitle}/>
                <ExportCSV id={"risk-holdings-export"} csvData={data} fileName={`RiskHoldings-${cusipParam}-${dataTableStyles[params.positionView].title}-${bodyReq.accounts.toString()}-Agg_${bodyReq.aggregateRows}-${bodyReq.aoDate}`}/>
                <DataTable
                    title={<div style={{ display: "flex", justifyContent: "space-between"}}> <h3 style={{ color: "white" }}>{formatAccountName(accountObj.name)} {dataTableStyles[params.positionView].title} View CUSIP: {params.cusip}</h3> <h3 style={{ color: 'white'}}>{sqlDateToDateString(dateFormatter(params.aoDate))}</h3> </div>}
                    subHeader subHeaderComponent={SubHeaderComponent}  
                    columns={columnHeaders}
                    data={data}
                    highlightOnHover
                    striped
                    customStyles={customStyles}
                    conditionalRowStyles={conditionalRowStyles}
                    expandableRows expandableRowsComponent={ExpandedDetailsTable} 
                    expandableRowExpanded={rowsPreExpanded}
                    fixedHeader 
                    progressPending={pending} progressComponent={<CustomLoader/>}
                />
            </div>
        );
    }
}