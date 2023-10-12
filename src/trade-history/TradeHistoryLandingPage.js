/**
 * This component is responsible for displaying the form to be filled for retrieving data for trade
 * history of particular securities and/or accounts(funds).
 * Form Parameters: 
 *  Trade Date, Look Back, Trade and Settlement Date, CUSIP(s), Sec Name/Pool Number, Account(s), Trade Type(s)
 *  Security 1)Group 2)Type 3)Sector
 */
import "./TradeHistoryLandingPage.css"
import { useState } from "react";
import SingleSelectMenu from "../components/SingleSelectMenu";
import MultiSelectMenu from "../components/MultiSelectMenu";
import { accountLabelNameSorter, removeUnwanteds } from "../utils/helperFunctions";
import { Button } from 'devextreme-react/button';
import DropDownBoxDataGrid from "../components/DropDownBoxDataGrid";
import DataGrid, { Column, Selection, Paging, FilterRow, HeaderFilter } from 'devextreme-react/data-grid';
//import CustomMultiSelect from "../components/CustomMultiSelect";

export default function TradeHistoryLandingPage({...props}) {//({ previousBD, accountsInfo }) {
    //console.log("Props: ", props);
    const { previousBD, accountsInfo, securities } = props;
    //MOCK DATA
    const dateTypeSelectRows = [
        { value: "TD", label: "Trade Date" },
        { value: "SD", label: "Settlement Date" },
    ]
    /*
    const cusipDataRows = [
        { value: "0E035TE", label: "0E035TE" },
        { value: "DUMMYCUSIP", label: "DUMMYCUSIP" },
    ]
    */
    const cusipDataRows = securities.map((security) => {
        const updatedRow = { 
            ID: security.id,
            cusip: security.cusip,
            pool_number: security.pool_number
        }
        return updatedRow;
    })
    
    const cusipColumns = [
        <Selection mode="multiple" />,
        <HeaderFilter visible={true} />,
        <FilterRow visible={true} />,
        <Paging defaultPageSize={15} />,
        <Column dataField="cusip" caption="Cusip"/>,
        <Column dataField="pool_number" caption="Pool Number"/>
    ]
    const securityComboSelectData = [
        { 
            marketingAssetGroup: "ABS",
            securityGroup: "Securitized",
            securityType: "ABS",
            securitySector: "Consumer",
        },
    ]
    const securityComboSelectRows = securityComboSelectData.map((row, index)=> {
        const option = {
            value: row,
            label: <tr key={index} className="label" style={{ display: "flex", alignItems: "left"}}>
                        <td>{row.marketingAssetGroup} --</td>
                        <td>{row.securityGroup} --</td>
                        <td>{row.securityType} --</td>
                        <td>{row.securitySector}</td>
                    </tr>
        }

        return option;
    });
    const tradeTypeMultiSelectRows = [
        { value: "buy", label: "Buy"},
        { value: "sell", label: "Sell"},
        { value: "maturity", label: "Maturity"},
        { value: "called", label: "Called"},
    ]
    const securityTypeDataRows = [
        { ID: 1, marketingAssetGroup: 'ABS', securityGroup: 'Securitized', securityType: 'ABS', securitySector: 'Consumer' },
        { ID: 2, marketingAssetGroup: 'ABS', securityGroup: 'Securitized', securityType: 'ABS', securitySector: 'SBA Participation Certificates' },
        { ID: 3, marketingAssetGroup: 'ABS', securityGroup: 'Securitized', securityType: 'ABS', securitySector: 'Small Business Investment Company' },
        { ID: 4, marketingAssetGroup: 'ABS', securityGroup: 'Securitized', securityType: 'ABS', securitySector: 'Solar' },
        { ID: 5, marketingAssetGroup: 'Agency MBS', securityGroup: 'Securitized', securityType: 'Agency MBS', securitySector: 'Fannie Mae' },
        { ID: 6, marketingAssetGroup: 'Agency MBS', securityGroup: 'Securitized', securityType: 'Agency MBS', securitySector: 'Freddie Mac' },
        { ID: 7, marketingAssetGroup: 'CMBS', securityGroup: 'Securitized', securityType: 'Agency CMBS', securitySector: 'Fannie Mae ACE' },
        { ID: 8, marketingAssetGroup: 'CMBS', securityGroup: 'Securitized', securityType: 'Agency CMBS', securitySector: 'Fannie Mae DUS' },
        { ID: 9, marketingAssetGroup: 'CMBS', securityGroup: 'Securitized', securityType: 'Agency CMBS', securitySector: 'Freddie CMBS' },
        { ID: 10, marketingAssetGroup: 'CMBS', securityGroup: 'Securitized', securityType: 'Agency CMBS', securitySector: 'Freddie K' },
        { ID: 11, marketingAssetGroup: 'CMBS', securityGroup: 'Securitized', securityType: 'Agency CMBS', securitySector: 'Freddie P' },
        { ID: 12, marketingAssetGroup: 'CMBS', securityGroup: 'Securitized', securityType: 'Agency CMBS', securitySector: 'Freddie Q' },
        { ID: 13, marketingAssetGroup: 'CMBS', securityGroup: 'Securitized', securityType: 'Agency CMBS', securitySector: 'Ginnie Mae REMICS' },
        // Add more data here
    ];
    const securityTypeColumns = [
        <Selection mode="multiple" />,
        <HeaderFilter visible={true} />,
        <FilterRow visible={true} />,
        <Paging defaultPageSize={15} />,
        <Column dataField="marketingAssetGroup" caption="MAG" />,
        <Column dataField="securityGroup" caption="Group" />,
        <Column dataField="securityType" caption="Type" />,
        <Column dataField="securitySector" caption="Sector" />
    ];
    const tradeHistoryData = [
        {
            ID: 1,
            account: "MCF",
            accrued: 56.34,
            advPortfolioId: 1475,
            advSecurityId: 45404,
            carlAllocationId: 45404,
            carlOrderId: 21799,
            comment: "",
            curr_face: 143507.18928,
            cusip: "31418E882",
            dealer: "Wells Fargo Security",
            dealerId: 0,
            isTBA: false,
            net_money: 114500.21,
            orig_face: 156000,
            pool_name: "FN MA4562",
            price: 79,
            reference: "",
            save_by: "usp_get_trades",
            save_date_time: "2023-10-09T14:54:39.567",
            sec_name: "FN MA4562",
            settle_date: "2023-08-08T00:00:00",
            symbol: "31418EB82",
            trade_date: "2023-08-03T00:00:00",
            trans_type: "SELL"
        },
        {
            ID: 2,
            account: "MCF",
            accrued: 217.6156,
            advPortfolioId: 1475,
            advSecurityId: 14022,
            carlAllocationId: 35418,
            carlOrderId: 17982,
            comment: "",
            curr_face: 137988.682,
            cusip: "31418E882",
            dealer: "Nomura Securities",
            dealerId: 0,
            isTBA: false,
            net_money: 113400.4,
            orig_face: 150000,
            pool_name: "FN MA4562",
            price: 78.015625,
            reference: "",
            save_by: "usp_get_trades",
            save_date_time: "2023-10-09T14:54:39.567",
            sec_name: "FN MA4562",
            settle_date: "2022-10-28T00:00:00",
            symbol: "31418EB82",
            trade_date: "2022-10-25T00:00:00",
            trans_type: "SELL"
        },
        {
            ID: 3,
            account: "MCF",
            accrued: 4693.0831,
            advPortfolioId: 1475,
            advSecurityId: 14022,
            carlAllocationId: 31091,
            carlOrderId: 15858,
            comment: "",
            curr_face: 4912361.4792,
            cusip: "31418E882",
            dealer: "JP Morgan",
            dealerId: 0,
            isTBA: false,
            net_money: 4688793.34,
            orig_face: 5340000,
            pool_name: "FN MA4562",
            price: 88.71875,
            reference: "",
            save_by: "usp_get_trades",
            save_date_time: "2023-10-09T14:54:39.567",
            sec_name: "FN MA4562",
            settle_date: "2022-05-17T00:00:00",
            symbol: "31418EB82",
            trade_date: "2022-05-12T00:00:00",
            trans_type: "BUY"
        },
    ]
    //DEFINE CONSTANTS/STATE VARIABLES
    const initialFormState = {
        startDate: previousBD, //Ex: 2023-09-26
        lookBack: 1,
        dateType: "TD", //Can be: Trade Date or Settlement Date
        cusips: [], //synonymous with 'Security' dropdown in Carlton
        accounts: [], //synonymous with 'Funds' checkbox in Carlton
        securityCombo: [
            {
                marketingAssetGroup: "",
                securityGroup: "",
                securityType: "",
                securitySector: "",
            }
        ], //synonymous with 'Security Type' dropdown in Carlton
        tradeTypes: [] //as is in Carlton: Buy, Sell, Maturity, Called
    }
    const [formState, setFormState] = useState({...initialFormState});
    const [selectedSecurityTypeRows, setSelectedSecurityTypeRows] = useState([]);
    const [selectedCusipRows, setSelectedCusipRows] = useState([]);
    //const [selectedData, setSelectedData] = useState([]);
    const dateTypeSelectStyles = {
        /**
         * Possibly responsible for the actual individual options in the drop down once dropdown indicator has been clicked.
         * @param {*} baseStyles 
         * @param {*} state 
         * @returns 
         */
        option: (baseStyles, state) => ({
            ...baseStyles,
            color: "black",
            alignItems: "center",
            display: "flex",
            width: "auto",
            //backgroundColor: "blue"
        }),
        /**
         * Seems to be responsible for the container of the actual dropdown once indicator has been clicked.
         * Possibly is the parent or grand parent of the option components. Is behind each options component.
         * @param {*} baseStyles 
         * @returns 
         */
        menu: (baseStyles) => ({
            ...baseStyles, 
            zIndex: 9999,
            //backgroundColor: "orange"
        }),
        /**
         * The direct container of the selec dropdown. May be the container of all other components. including control, menu, option.
         * @param {*} baseStyles 
         * @param {*} state 
         * @returns 
         */
        container: (baseStyles, state) => ({
            ...baseStyles,
            //backgroundColor: "pink"
        }),
        /**
         * Control component is what is displayed prior to clicking anything. This is where you will see placeholder text
         * in addition to the dropdown indicator. Responsible for the positioning of <ValueContainer> and <IndicatorContainer>
         * @param {*} baseStyles 
         * @param {*} state 
         * @returns 
         */
        control: (baseStyles, state) => ({
            ...baseStyles,
            width: "100%",
            //backgroundColor: "green"
        }),
        input: (baseStyles, state) => ({
            ...baseStyles,
            //backgroundColor: "yellow"
        }),
    }
    const cusipMultiSelectStyles = {
        option: (baseStyles, state) => ({
            ...baseStyles,
            color: "black",
        }),
        menu: provided => ({ ...provided, zIndex: 9999}),
        control: (baseStyles, state) => ({
            ...baseStyles,
            width: "100%"
        })
    }
    const securityComboMultiSelectStyles = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            display: "flex",
            width: "100%"
        }),
        
    }
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
            label: account.ticker
        }
        return newAccount;
    });
    accountsMultiSelectRows = accountsMultiSelectRows.sort(accountLabelNameSorter);
    //console.log("Rows: ", accountsMultiSelectRows);
    //DEFINE EVENT HANDLERS
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
        setFormState({ ...formState, lookBack: Number(target.value) });
    }
    const handleSingleSelectChange = async(values, actionMeta) => {
        console.log("dateType selected: ", values);
        if (values && values.value.length > 0) {
            setFormState({ ...formState, dateType: values.value})
        }
    }
    const handleSelectMenuClose = async(values, actionMeta) => {
        console.log("Menu Closed!", formState);
    }
    const handleCusipMultSelectChange = async(values, actionMeta) => {
        console.log("Cusip Multi Select: ", values, actionMeta);
        if (values) {
            const cusipsArr = values.map((value) => value.value);
            setFormState({ ...formState, cusips: [...cusipsArr] })
        }
    }
    const handleCusipDropDownDataGridMultiChange = async(event) => {
        console.log("Cusip Drop Down Data Grid!", event.selectedRowKeys);
        setSelectedCusipRows(event.selectedRowKeys);
        const selectedDate = event.selectedRowsData.map((rowData) => {
            return rowData.cusip;
        })
        setFormState({ ...formState, cusips: [...selectedDate] });
    }
    const handleSecurityTypeDropDownDataGridMultiChange = async(event) => {
        console.log("Security Type Drop Down Data Grid!", event.selectedRowKeys)
        setSelectedSecurityTypeRows(event.selectedRowKeys);
        const selectedData = event.selectedRowsData.map((rowData) => ({
            //ID: rowData.ID,
            marketingAssetGroup: rowData.marketingAssetGroup,
            securityGroup: rowData.securityGroup,
            securityType: rowData.securityType,
            securitySector: rowData.securitySector
        }));
        console.log("Selected Row Data: ", selectedData);
        //setSelectedData(selectedData);
        setFormState({ ...formState, securityCombo: [...selectedData]});
    }
    const handleAccountMultiSelectChange = async(values, actionMeta) => {
        console.log("Accounts Multi Select: ", values);
        if (values) {
            const apxPortCodeArr = values.map((value) => value.value.apx_portfolio_code);
            setFormState({ ...formState, accounts: [...apxPortCodeArr] });
        }
    }
    const handleTradeTypeMultiSelectChange = async(values, actionMeta) => {
        console.log("Trade Type Multi Select: ", values);
        if (values) {
            const tradeTypeArr = values.map((value) => value.value);
            setFormState({ ...formState, tradeTypes: [...tradeTypeArr] });
        }
    }
    const handleSubmitClick = async(event) => {
        event.preventDefault();
        console.log("Hit Generate button!", formState)
    }
    const clickSubmitButton = (event) => {
        document.getElementById('submit-trade-history-button').click();
    }

    if (!previousBD || !accountsInfo || !securities) {
        return <h1>Loading...</h1>
    } else {
        return (
            <div id="trade-history-landing-page-container" style={{ padding: "0% 1%"}}>
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
                        <SingleSelectMenu name="dateTypesingleSelect" classNames={"basic-single input-group-text col-2"} placeHolderString={"Select Date Type..."} required rowsForSelect={dateTypeSelectRows} handleSingleSelectChange={handleSingleSelectChange} handleSelectMenuClose={handleSelectMenuClose} selectStyles={dateTypeSelectStyles}/>
                        {/*
                        <MultiSelectMenu name="cusipMultiSelect" classNames={"basic-multi-select input-group-text col-2"} placeHolderString={"Select Security..."} required rowsForSelect={cusipSelectRows} handleMultiSelectChange={handleCusipMultSelectChange} handleSelectMenuClose={handleSelectMenuClose} selectStyles={cusipMultiSelectStyles}/>
                        <CustomMultiSelect classNames={"basic-multi-select input-group-text col"} options={securityComboSelectRows} placeHolderString="Select Security Type..."
                            name="securityComboMultiSelect" required selectStyles={securityComboMultiSelectStyles}
                        /> 
                        <MultiSelectMenu name="securityMultiSelect" classNames={"basic-multi-select input-group-text col"} placeHolderString={"Security Type..."} required rowsForSelect={securityComboSelectRows} handleMultiSelectChange={handleSecurityComboMultSelectChange} handleSelectMenuClose={handleSelectMenuClose}
                            selectStyles={securityComboMultiSelectStyles}
                        />
                        */}
                        <MultiSelectMenu name="accountMultiSelect" classNames={"basic-multi-select input-group-text col-2"} placeHolderString={"Select Accounts..."}
                            required rowsForSelect={accountsMultiSelectRows} handleSelectMenuClose={handleSelectMenuClose} handleMultiSelectChange={handleAccountMultiSelectChange}
                            selectStyles={accountMultiSelectStyles}
                        />
                        <MultiSelectMenu name="tradeTypeMultiSelect" classNames={"basic-multi-select input-group-text col-2"} placeHolderString={"Select Trade Type..."}
                            required rowsForSelect={tradeTypeMultiSelectRows} handleSelectMenuClose={handleSelectMenuClose} handleMultiSelectChange={handleTradeTypeMultiSelectChange}
                            selectStyles={accountMultiSelectStyles}
                        />
                        <div id="trade-history-button-group" className="input-group-text col-2">
                            <Button id="generate-trade-history-button" width={75} text="Generate" type="default" stylingMode="contained" onClick={clickSubmitButton}/>
                            <Button id="export-button" width={75} text="Export" type="success" stylingMode="contained" />
                            <button id="submit-trade-history-button" style={{ visibility: "hidden"}} type="submit"></button>
                        </div>
                    </div>
                    <div className="input-group row" style={{ margin: "0% 0%"}}>
                        <div className="input-group-text col">
                            <DropDownBoxDataGrid name="cusipDropDownDataGridMulti" /*classNames='input-group-text col'*/ placeHolderString='Select Security...'
                        onChange={handleCusipDropDownDataGridMultiChange} selectedRows={selectedCusipRows} data={cusipDataRows}
                        columns={cusipColumns}
                            />
                        </div>
                        <div className="input-group-text col">
                            <DropDownBoxDataGrid name="securityDropDownDataGridMulti" /*classNames='input-group-text col'*/ placeHolderString='Select Security Type...'
                        onChange={handleSecurityTypeDropDownDataGridMultiChange} selectedRows={selectedSecurityTypeRows} data={securityTypeDataRows}
                        columns={securityTypeColumns}
                        />
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
                    <h3>Trade History</h3>
                    <DataGrid dataSource={tradeHistoryData} showBorders remoteOperations={false} allowColumnReordering
                        allowColumnResizing showColumnLines showRowLines rowAlternationEnabled hoverStateEnabled
                    >
                        <Selection mode="multiple"/>
                        <HeaderFilter visible={true} />
                        <FilterRow visible={true} />
                        <Paging defaultPageSize={100} />
                        <Column dataField="trade_date" caption="Trade Date" dataType="date" />
                        <Column dataField="settle_date" caption="Settle Date" dataType="date" />
                        <Column dataField="trans_type" caption="Trans Type" />
                        <Column dataField="account" caption="Account" />
                        <Column dataField="advPortfolioId" caption="Advent Port ID" />
                        <Column dataField="advSecurityId" caption="Advent Security ID" />
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
