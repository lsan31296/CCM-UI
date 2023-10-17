/**
 * This component is responsible for displaying the form to be filled for retrieving data for trade
 * history of particular securities and/or accounts(funds).
 * Form Parameters: 
 *  Trade Date, Look Back, CUSIP(s), Account(s)
 */
import "./TradeHistoryLandingPage.css"
import { useState } from "react";
import MultiSelectMenu from "../components/MultiSelectMenu";
import { accountLabelNameSorter, removeUnwanteds } from "../utils/helperFunctions";
import { Button } from 'devextreme-react/button';
import DropDownBoxDataGrid from "../components/DropDownBoxDataGrid";
import DataGrid, { Column, Selection, Paging, FilterRow, HeaderFilter, Pager } from 'devextreme-react/data-grid';
import { getTradeHistoryLanding } from "../utils/api";
import ExportCSV from "../components/ExportCSV";
import { Popup } from "devextreme-react";

export default function TradeHistoryLandingPage({...props}) {
    //console.log("Props: ", props);
    const { previousBD, accountsInfo, securities } = props;
    const cusipDataRows = securities.map((security) => {
        const updatedRow = { 
            ID: security.id,
            cusip: security.cusip,
            pool_number: security.pool_number
        }
        return updatedRow;
    }) //Data that goes into 'Select Security...' DropDown DataGrid component
    cusipDataRows.unshift({ID: 0, cusip: "~all_securities~", pool_number: "~all_securities~"});
    const cusipColumns = [
        <Selection mode="multiple" allowSelectAll={false} />,
        <HeaderFilter visible={true} />,
        <FilterRow visible={true} />,
        <Paging defaultPageSize={15} />,
        <Column dataField="cusip" caption="Cusip"/>,
        <Column dataField="pool_number" caption="Pool Number"/>
    ] //Defines columns for 'Select Security...' DropDown DataGrid component 

    //DEFINE CONSTANTS/STATE VARIABLES
    const initialFormState = {
        startDate: previousBD, //Ex: 2023-09-26
        lookBack: "1",
        cusips: [], //synonymous with 'Security' dropdown in Carlton
        accounts: [], //synonymous with 'Funds' checkbox in Carlton
    };
    const [formState, setFormState] = useState({...initialFormState});
    const [popUpFormState, setPopUpFormState] = useState(`${JSON.stringify(initialFormState, undefined, 4)}`);
    const [popUpVisible, setpopUpVisible] = useState(false);
    //const [selectedSecurityTypeRows, setSelectedSecurityTypeRows] = useState([]);
    const [selectedCusipRows, setSelectedCusipRows] = useState([]);
    const [tradeHistoryData, setTradeHistoryData] = useState([]);

    const accountMultiSelectStyles = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            display: "flex",
            width: "100%"
        }),
        menu: (baseStyles, state) => ({
            ...baseStyles, 
            zIndex: 9999,
            //backgroundColor: "orange"
        }),
    }
    let accountsMultiSelectRows = removeUnwanteds(accountsInfo).map((account) => {
        const newAccount = {
            value: {...account},
            label: account.name
        }
        return newAccount;
    });
    accountsMultiSelectRows = accountsMultiSelectRows.sort(accountLabelNameSorter);
    //console.log("Rows: ", accountsMultiSelectRows);

    //DEFINE EVENT HANDLERS
    const handlePopUpSubmit = async(event) => {
        event.preventDefault();
        console.log("Pop Up Data: ", popUpFormState);
        const response = await getTradeHistoryLanding({...JSON.parse(popUpFormState)});
        if (response.length > 0) {
            setFormState({...JSON.parse(popUpFormState)});
            setTradeHistoryData([...response]);
            setpopUpVisible(false);
        }

    };
    const handlePopUpCancel = () => {
        if (popUpFormState.length <= 0) {
            setPopUpFormState(`${JSON.stringify(initialFormState, undefined, 4)}`);
        }
        setpopUpVisible(false);
    }
    const handlePopUpTextAreaChange = ({target}) => {
        console.log("Pop Up: ", target.value);
        setPopUpFormState(target.value);
    };
    const handleStartDateChange = ({target}) => {
        console.log("Date: ", target.value);
        setFormState({ ...formState, startDate: target.value });
    }
    const handleLookBackChange = ({target}) => {
        //console.log("Look Back: ", target.value);
        //console.log("Data Type: ", typeof(target.value))
        if(target.value === "0") {
            alert("Look Back Days must be at least 1.");
            return;
        }
        setFormState({ ...formState, lookBack: target.value });
    }
    const handleSelectMenuClose = async(values, actionMeta) => {
        console.log("Menu Closed!", formState);
    }
    const handleCusipDropDownDataGridMultiChange = async(event) => {
        console.log("Cusip Drop Down Data Grid!", event.selectedRowKeys);
        if (event.selectedRowKeys.length > 10) {
            alert("You may not manually select more than 10 securities at a time.")
            return;
        }
        setSelectedCusipRows(event.selectedRowKeys);
        const selectedDate = event.selectedRowsData.map((rowData) => {
            return rowData.cusip;
        })
        setFormState({ ...formState, cusips: [...selectedDate] });
    }
    const handleAccountMultiSelectChange = async(values, actionMeta) => {
        console.log("Accounts Multi Select: ", values);
        if (values) {
            const apxPortCodeArr = values.map((value) => value.value.apx_portfolio_code);
            setFormState({ ...formState, accounts: [...apxPortCodeArr] });
        }
    }
    const handleSubmitClick = async(event) => {
        event.preventDefault();
        console.log("Hit Generate button!", formState)
        const response = await getTradeHistoryLanding({...formState});
        setTradeHistoryData([...response]);
    }
    const clickSubmitButton = (event) => {
        document.getElementById('submit-trade-history-button').click();
    }
    const handleExportClick = (event) => {
        document.getElementById('trade-history-landing-export').click();
    }

    if (!previousBD || !accountsInfo || !securities) {
        return <h1>Loading...</h1>
    } else {
        return (
            <div id="trade-history-landing-page-container" style={{ padding: "0% 1% 2% 1%" }}>
                <h1>Trade History Landing Page</h1>
                <form id="trade-history-form" onSubmit={handleSubmitClick}>
                    <div id="trade-history-input-group-container-1" className="input-group row" style={{ margin: "0% 0%"}}>
                        <div className="input-group-text col-2">
                            <label htmlFor="startDate"></label>
                            <input className="form-control" id="startDate" type="date" name="startDate" value={formState.startDate} pattern="\d{4}-\d{2}-\d{2}" onChange={handleStartDateChange}/>
                        </div>
                        <div className="input-group-text col-2">
                            <label htmlFor="lookBack" className="pe-1">Look Back Days</label>
                            <input type="number" className="form-control" id="lookBack" name="lookBack" value={formState.lookBack} placeholder="# of days" onChange={handleLookBackChange} />
                        </div>
                        <MultiSelectMenu name="accountMultiSelect" classNames={"basic-multi-select input-group-text col-2"} placeHolderString={"Select Accounts..."}
                            required rowsForSelect={accountsMultiSelectRows} handleSelectMenuClose={handleSelectMenuClose} handleMultiSelectChange={handleAccountMultiSelectChange}
                            selectStyles={accountMultiSelectStyles}
                        />
                        <div className="input-group-text col">
                            <DropDownBoxDataGrid name="cusipDropDownDataGridMulti" /*classNames='input-group-text col'*/ placeHolderString='Select Security...'
                        onChange={handleCusipDropDownDataGridMultiChange} selectedRows={selectedCusipRows} data={cusipDataRows}
                        columns={cusipColumns} resizableMaxWidth={"30vw"}
                            />
                        </div>
                        <div id="trade-history-button-group" className="input-group-text col" style={{ display:"flex", justifyContent: "space-evenly"}}>
                            <Button id="generate-trade-history-button" width={75} text="Generate" type="default" stylingMode="contained" onClick={clickSubmitButton} />
                            <Button id="export-button" width={75} text="Export" type="success" stylingMode="contained" onClick={handleExportClick}/>
                            <ExportCSV id={"trade-history-landing-export"} styleObj={{display: "none", visibility: "hidden"}} csvData={tradeHistoryData} fileName={`TradeHistory_${formState.cusips.toString()}_${formState.accounts.toString()}_${formState.startDate}_${formState.lookBack}`} />
                            <button id="submit-trade-history-button" style={{ display: "none", visibility: "hidden" }} type="submit"></button>
                            <Button id="pop-up-body-button" width={93} text="Request Detail" type="default" stylingMode="outlined" onClick={() => setpopUpVisible(true)}/>
                        </div>
                    </div>
                </form>
                    {/**
                     * Need a Data Grid here with the following columns:
                     * Trade Date, Settle Date, Transaction Type, Account, Advent Portfolio ID, Advent Security ID, Security Name, Pool Name
                     * CUSIP, Symbol, Original Face, Current Face, Price, Accrued, Net Money, Dealer
                     * Ensure there is an if statement checking to see that the row data for Data Grid exists.
                     */}
                <div id="trade-history-data-grid-container">
                    <Popup  visible={popUpVisible} onHiding={() => setpopUpVisible(false)} dragEnabled hideOnOutsideClick width={600}
                        height={600} title="Data Body"
                    >
                        <form id="pop-up-body-form" onSubmit={handlePopUpSubmit}>
                            <div>
                                <label htmlFor="popUpForm" className="form-label">Request</label>
                                <textarea className="form-control" id="pop-up-body-text-area" rows="6" value={popUpFormState} onChange={handlePopUpTextAreaChange}></textarea>
                            </div>
                            <button className="btn btn-primary btn-sm" type="submit">Submit</button>
                            <button className="btn btn-danger btn-sm" onClick={handlePopUpCancel}>Cancel</button>
                        </form>
                    </Popup>
                    <DataGrid dataSource={tradeHistoryData} showBorders remoteOperations={false} allowColumnReordering
                        allowColumnResizing showColumnLines showRowLines rowAlternationEnabled hoverStateEnabled
                        height="75vh"
                    >
                        <Selection mode="multiple"/>
                        <HeaderFilter visible={true} />
                        <FilterRow visible={true} />
                        {/* <Scrolling mode="virtual"/>*/}
                        <Paging defaultPageSize={50} />
                        <Pager showPageSizeSelector showNavigationButtons allowedPageSizes={[10, 50, 100, 500, 1000]} showInfo/>
                        <Column dataField="securityGroup" caption="Group"/>
                        <Column dataField="securityType" caption="Type"/>
                        <Column dataField="securitySector" caption="Sector"/>
                        <Column dataField="cusip" caption="Cusip" />
                        <Column dataField="trade_date" caption="Trade Date" dataType="date" />
                        <Column dataField="settle_date" caption="Settle Date" dataType="date" />
                        <Column dataField="trans_type" caption="Trans Type" />
                        <Column dataField="account" caption="Account" />
                        <Column dataField="sec_name" caption="Security Name" />
                        <Column dataField="pool_name" caption="Pool Name" />
                        <Column dataField="orig_face" caption="Original Face" dataType="number" format="currency" />
                        <Column dataField="curr_face" caption="Current Face" dataType="number" format="currency" />
                        <Column dataField="price" caption="Price" dataType="number" format="currency"/>
                        <Column dataField="accrued" caption="Accrued" dataType="number" format="currency" />
                        <Column dataField="net_money" caption="Net Money" dataType="number" format="currency" />
                        <Column dataField="dealer" caption="Dealer" />
                    </DataGrid>
                </div>

            </div>
        );
    }
    
}
