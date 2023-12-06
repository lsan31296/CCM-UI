import "./Dashboard.css";

import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import CustomLoader from "../components/CustomLoader";
import { accountNameSorter, numberFormatter4, perfDataConstructor, today } from "../utils/helperFunctions";
import { getAccountTDPerf } from "../utils/api";

//Responsible for displaying a form which should list out all potential risk holdings accounts,
//and general user input regarding ao_Date, position view, aggregate rows, etc.
export default function Dashboard({ previousBD, accountsInfo }) {

    const [perfData, setPerfData] = useState(null);
    const [pending, setPending] = useState(true);
    const initialFormState = {
        aoDate: previousBD,
        positionView: "TD",
        aggregateRows: "n",
    };
    const [formState, setFormState] = useState({...initialFormState});

    async function loadDashboard() {
        console.log("Loading Perf Data!");
        const abortController = new AbortController();
        const res = await getAccountTDPerf({aoDate: formState.aoDate}, abortController.signal);
        console.log("Perf Data: ", res);
        setPerfData([...perfDataConstructor(accountsInfo, res).sort(accountNameSorter)]);
        setPending(false);
        return () => abortController.abort();
    }
    useEffect(() => {
        loadDashboard() 
    }, [accountsInfo, formState.aoDate]);

    const handleDateChange = async({target}) => {
        console.log("Date: ", target.value);
        setFormState({...formState, aoDate: target.value});
    };
    const handlePositionSwitch = async({target}) => {
        console.log("Position View: ", target.value);
        if (target.value === "ID") {
            setFormState({...formState, aoDate: today(), positionView: target.value });
        } else {
            setFormState({...formState, positionView: target.value});
        }
    }
    const handleAggSwitchChange = async({target}) => {
        console.log("Agg Switch: ", target.value);
        setFormState({...formState, aggregateRows: target.value});
    }
    const columnHeaders = [
        {
            id: "name",
            name: "Account List",
            selector: row => <a href={`/risk/${formState.aoDate}/${formState.positionView}/${row.apx_portfolio_code}/${formState.aggregateRows}`}>{row.name}</a>,
            compact: true,
            minWidth: "350px",
            sortable: true,
            sortFunction: accountNameSorter,
        },
        {
            id: "daily",
            name: "Daily",
            compact: true,
            selector: row => numberFormatter4.format(row.dailyReturn),
        },
        {
            id: "dailyActive",
            name: "Active",
            compact: true,
        },
        {
            id: "mtd",
            name: "MTD",
            compact: true,
            selector: row => numberFormatter4.format(row.mtdReturn),
        },
        {
            id: "mtdActive",
            name: "Active",
            compact:true,
        },
        {
            id: "qtd",
            name: "QTD",
            compact: true,
            selector: row => numberFormatter4.format(row.qtdReturn),
        },
        {
            id: "qtdActive",
            name: "Active",
            compact: true,
        },
        {
            id: "ytd",
            name: "YTD",
            compact: true,
            selector: row => numberFormatter4.format(row.ytdReturn),
        },
        {
            id: "ytdActive",
            name: "Active",
            compact: true,
        },
    ];
    const customStyles = {
        header: {
            style: {
                backgroundColor: "#1B3668",
                color: "#fefefe"
            }
        },
        headRow: {
            style: {
                backgroundColor: "#f0b207",
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
    };

    if (!previousBD || !perfData) {
        return <h1>Loading...</h1>;
    } else {
        return (
            <div id="dashboard-container">
                <form id="risk-form">
                    <div id="input-group-container" className="input-group row">
                        <div className="input-group-text col-4">
                            <label htmlFor="aoDate"></label>
                            <input className="form-control" id="aoDate" type="date" name="aoDate" value={formState.aoDate} pattern="\d{4}-\d{2}-\d{2}" onChange={handleDateChange}/>
                        </div>

                        <div className="input-group-text col-4">
                            <div className="form-check pe-2">
                                <input className="form-check-input" type="radio" value="TD" name="RiskHoldingView" id="trade_date" onChange={handlePositionSwitch} defaultChecked />
                                <label className="form-check-label" htmlFor="trade_date">Trade Date</label>
                            </div>
                            <div className="form-check pe-2">
                                <input className="form-check-input" type="radio" value='SD' name="RiskHoldingView" id="settlement_date" onChange={handlePositionSwitch} />
                                <label className="form-check-label" htmlFor="settlement_date">Settlement Date</label>
                            </div>
                            <div className="form-check pe-2">
                                <input className="form-check-input" type="radio" value='ID' name="RiskHoldingView" id="intra_trade_date" onChange={handlePositionSwitch} />
                                <label className="form-check-label" htmlFor="intra_trade_date">Intraday</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" value='LT' name="RiskHoldingView" id="lot_level_trade_date" onChange={handlePositionSwitch} />
                                <label className="form-check-label" htmlFor="lot_level_trade_date">Lot-Level</label>
                            </div>
                        </div>

                        <div className="input-group-text col-3">
                            <div className="form-check form-switch pe-2">
                                <input className="form-check-input" type="radio" id="noAggSwitch" name="aggRows" value="n" onChange={handleAggSwitchChange} defaultChecked />
                                <label className="form-check-label" htmlFor="noAggSwitch">Do Not Aggregate</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="radio" id="secAggSwitch" name="aggRows" value="ys" onChange={handleAggSwitchChange} />
                                <label className="form-check-label" htmlFor="secAggSwitch">Sector</label>
                            </div>
                        </div>
                    </div>
                </form>
                <div id="dashboard-data-table-container">
                    <DataTable
                        title={<h1>Performance Dashboard</h1>}
                        columns={columnHeaders}
                        data={perfData}
                        customStyles={customStyles}
                        highlightOnHover
                        progressPending={pending} progressComponent={<CustomLoader />}
                        fixedHeader
                    />
                </div>
            </div>
        )
    }
    
}