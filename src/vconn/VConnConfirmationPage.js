/**
 * This component is responsible for displaying the DataGrid will confirm whether the Carlton data is matching 
 * up with the data from BBG. Using pulls from two places and placing synonymous columns together will allow
 * for the user to compare quickly and decide whether or not to Autofill or have it done Manually. Conditional
 * styling will be used to determine quickly if an account is a match to the BBG data. Note that BBG is read only
 * whereas Carlton is the data we can change through the editable fields of the DataGrid.
 */
import DataGrid, { Column, Editing, Paging, HeaderFilter, FilterRow, Pager, ColumnFixing, Button, Lookup } from 'devextreme-react/data-grid';
import { useEffect, useState } from 'react';
import { getDealerData, getVConnTradeConfirmation, saveVConnTrades } from '../utils/api';
import { dateFormatter, sqlDateToDateString, today, yesterday } from '../utils/helperFunctions';
//import { Popup } from 'devextreme-react'; ..Made a reusable PopUp component used for Login Authentication
import "./VConnConfirmationPage.css";
import useToken from '../login/useToken';
import PopUpLogin from '../login/PopUpLogin';


export default function VConnConfirmationPage({...props}) {
    const { token, setToken, removeToken } = useToken();
    const [vConnConfirmationData, setVConnConfirmationData] = useState(null);
    const [originalData, setOriginalData] = useState(null);
    const [changedRows, setChangedRows] = useState(null);
    let changesTempArr = [];
    const date = sqlDateToDateString(today());
    //const date = sqlDateToDateString(yesterday(today()));
    //let password;
    //let username;
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
    const [popUpVisible, setPopUpVisible] = useState(false);
    const [approveAll, setApproveAll] = useState(false);
    const [approvedAllRows, setApprovedAllRows] = useState([]);
    const [dealerData, setDealerData] = useState(null);
    //const [successfulLogin, setSuccessfulLogin] = useState(false);

    //HANDLES CONDITIONAL RENDERING
    const handleCellUnMatchingStyles = (e) => {
        //console.log("Event: ", e);
        if (e.rowType === "data") {
            switch (e.column.dataField) {
                case 'c_TxnType':
                case 'b_TxnType':
                    if (e.data.c_TxnType !== e.data.b_TxnType) {
                        e.cellElement.style.cssText = "color: white; background-color: salmon"
                    }
                    break;
                case 'c_TradeDate':
                case 'b_TradeDate':
                    if (e.data.c_TradeDate !== e.data.b_TradeDate) {
                        e.cellElement.style.cssText = "color: white; background-color: salmon"
                    }
                    break;
                case 'c_SettleDate':
                case 'b_SettleDate':
                    if (e.data.c_SettleDate !== e.data.b_SettleDate) {
                        e.cellElement.style.cssText = "color: white; background-color: salmon"
                    }
                    break;
                case 'c_AccruedInterest':
                case 'b_AccruedInterest':
                    if (e.data.c_AccruedInterest.toFixed(2) !== e.data.b_AccruedInterest.toFixed(2)) {
                        e.cellElement.style.cssText = "color: white; background-color: salmon"
                    }
                    break;
                case 'c_Price':
                case 'b_Price':
                    if (e.data.c_Price.toFixed(2) !== e.data.b_Price.toFixed(2)) {
                        e.cellElement.style.cssText = "color: white; background-color: salmon"
                    }
                    break;
                case 'c_Factor':
                case 'b_Factor':
                    if (e.data.c_Factor.toFixed(2) !== e.data.b_Factor.toFixed(2)) {
                        e.cellElement.style.cssText = "color: white; background-color: salmon"
                    }
                    break;
                case 'c_Quantity':
                case 'b_Quantity':
                    if (e.data.c_Quantity.toFixed(2) !== e.data.b_Quantity.toFixed(2)) {
                        e.cellElement.style.cssText = "color: white; background-color: salmon"
                    }
                    break;
                case 'c_Face':
                case 'b_CurrentFace':
                    if (e.data.c_Face.toFixed(2) !== e.data.b_CurrentFace.toFixed(2)) {
                        e.cellElement.style.cssText = "color: white; background-color: salmon"
                    }
                    break;
                case 'c_Principal':
                case 'b_Principal':
                    if (e.data.c_Principal.toFixed(2) !== e.data.b_Principal.toFixed(2)) {
                        //console.log("Principal columns do not match: ", e.data.c_Principal.toFixed(2), e.data.b_Principal.toFixed(2));
                        e.cellElement.style.cssText = "color: white; background-color: salmon"
                    }
                    break;
                /* case 'c_dealerTicker':
                case 'b_dealerTicker':
                    if (e.data.c_dealerTicker !== e.data.b_dealerTicker) {
                        e.cellElement.style.cssText = "color: white; background-color: salmon"
                    }
                    break;
                */
            }
        }
    };
    async function loadVConnConfirmation() {
        console.log("Loading VConn Confirmation trades!");
        const abortController = new AbortController();

        const response = await getVConnTradeConfirmation({ currDate: date });
        //const response = await getVConnTradeConfirmation({ currDate: '01/04/2024' });
        

        //Traverse through data and assigned new fillId for those that do not have one
        response.forEach((trade, i) => {
            if(trade.fillID === 0 || trade.fillID === null) {
                trade.fillID = i;
            }
        })
        setOriginalData(JSON.parse(JSON.stringify(response)));
        setVConnConfirmationData([...response]);
        
        if (token) {
            console.log("Token: ", token)
            setIsPasswordCorrect(true);
            //setSuccessfulLogin(true);
        }
        return () => abortController.abort();
    }

    async function loadDealerData() {
        console.log("Loading Dealer Data!");
        const abortController = new AbortController();

        const response = await getDealerData(abortController.signal);
        //console.log("Dealer Data:", response);
        setDealerData([...response]);
        
        return () => abortController.abort();
    }
    
    //HANDLES WHAT IS TO BE DONE WITH THE SAVED CHANGE
    const handleSaved = (e) => {
        if (isPasswordCorrect) {
            console.log("onSaved!: ", e);
            const savedChanges = e.changes[0].data;
            changesTempArr.push(e.changes[0].data);
            setChangedRows([...changesTempArr]);
            console.log("Changes: ", e.changes[0].data);
            //Actually need to reconstruct data here since this is where it is all being saved. 
            const updatedVConnData = [...vConnConfirmationData];
            const updatedRow = vConnConfirmationData.find((element, i) => {
                if (element.fillID === e.changes[0].key) {
                    
                    updatedVConnData[i] = savedChanges;
                    console.log("Updated vConnConfirmationDat State: ", updatedVConnData);

                    setVConnConfirmationData([
                        ...updatedVConnData
                    ]);
                }
            });

            //Filter all approved rows and stick them in approvedAllRows array
            const approvedRows = updatedVConnData.filter((element) => element.vConnMatch === true);
            setApprovedAllRows([...approvedRows]);
        } 
    }
    //HANDLES CHANGE REJECTION IF USER IS NOT LOGGED IN
    const handleEnteringSave = (e) => {
        console.log("Entering Save: ")
        if (!isPasswordCorrect) {
            e.cancel = true;
            e.changes = [];
            alert(`Please revert your changes and login.`);
            return;
        } else {
            console.log(e);
            if(e.changes.length === 0) {
                console.log("Entering save changes is empty");
                e.cancel = true;
            } else {
                //Fill in apprrovedAllRows Array
                console.log("Entering save ending.");
            }
        }
    }
    //HANDLES AND KEEPS TRACK OF ALL CHANGES MADE IN ONE SESSION
    const handleSubmitSave = async () => {
        console.log("Current VConnConfirmationData State: ", vConnConfirmationData);
        console.log("Logged In: ", isPasswordCorrect);
        console.log("original Data: ", originalData);
        if (isPasswordCorrect) {
            if (approvedAllRows.length > 0) {
                console.log("Saving Approved all rows!", approvedAllRows);
                //Reconstruct rows here
                const reconstructedData = approvedAllRows.map((row, i) => {
                    const origRow = originalData.find((origRow) => row.fillID === origRow.fillID);
                    if (origRow) {
                        console.log("Original Row: ", origRow);
                        return {...row, orig_FillID: origRow.fillID, orig_b_TradeOrderId: origRow.b_TradeOrderId, orig_c_TradeOrderId: origRow.c_TradeOrderId,
                            orig_Cusip: origRow.cusip, orig_VConnMatch: origRow.vConnMatch, orig_b_TradeDate: origRow.b_TradeDate, orig_b_SettleDate: origRow.b_SettleDate,
                            orig_c_TradeDate: origRow.c_TradeDate, orig_c_SettleDate: origRow.c_SettleDate, orig_b_AccruedInterest: origRow.b_AccruedInterest,
                            orig_c_AccruedInterest: origRow.c_AccruedInterest, orig_b_Price: origRow.b_Price, orig_c_Price: origRow.c_Price, orig_b_Factor: origRow.b_Factor,
                            orig_c_Factor: origRow.c_Factor, orig_b_Quantity: origRow.b_Quantity, orig_c_Quantity: origRow.c_Quantity, orig_b_CurrentFace: origRow.b_CurrentFace,
                            orig_c_Face: origRow.c_Face, orig_b_Principal: origRow.b_Principal, orig_c_Principal: origRow.c_Principal, orig_c_dealerTicker: origRow.c_dealerTicker,
                            orig_b_dealerTicker: origRow.b_dealerTicker, orig_b_Broker: origRow.b_Broker, orig_b_BrokerName: origRow.b_BrokerName, orig_b_DirAlias: origRow.b_DirAlias,
                            orig_Platform: origRow.platform, orig_App: origRow.app, orig_fileName: origRow.fileName, orig_b_TxnType: origRow.b_TxnType, orig_c_TxnType: origRow.c_TxnType,
                            orig_securityType: origRow.securityType
                        }
                    } else {
                        console.log("Could not find the original row.");
                    }
                });
                console.log("Reconstructed Data: ", reconstructedData);
                //const approvedRowsAffected = await saveVConnTrades(approvedAllRows);
                const approvedRowsAffected = await saveVConnTrades(reconstructedData);
                //const approvedRowsAffected = [reconstructedData];//for testing
                if (approvedRowsAffected > 0) {
                    alert(`${approvedRowsAffected} ${approveAll ? "Approved" : "Unapproved"} row(s) updated!`);
                    return;
                } else if (approvedRowsAffected === 0) {
                    alert(`No rows were ${approveAll ? "approved" : "unapproved"}. Either because you didn't change anything or you entered the password incorrectly.`)
                    return;
                }
                setApprovedAllRows([]);
                setOriginalData(JSON.parse(JSON.stringify(await getVConnTradeConfirmation({ currDate: date }) )));//no that changes have been made, sets original data to previous data before change
            } else {
                //Nothing has been approved, do not allow user to submit
                alert(`Nothing has been approved, you may not update without approving.`);
                //setChangedRows([...changesTempArr]);
                /*
                console.log("changedRows State: ", changedRows);
                //Reconstruct rows here
                const reconstructedChangedRows = changedRows.map((row, i) => {
                    const origRow = originalData.find((origRow) => row.fillID === origRow.fillID);
                    if (origRow) {
                        //console.log("Original Row: ", origRow);
                        return {...row, orig_fillID: origRow.fillID, orig_b_TradeOrderId: origRow.b_TradeOrderId, orig_c_TradeOrderId: origRow.c_TradeOrderId,
                            orig_cusip: origRow.cusip, orig_vConnMatch: origRow.vConnMatch, orig_b_TradeDate: origRow.b_TradeDate, orig_b_SettleDate: origRow.b_SettleDate,
                            orig_c_TradeDate: origRow.c_TradeDate, orig_c_SettleDate: origRow.c_SettleDate, orig_b_AccruedInterest: origRow.b_AccruedInterest,
                            orig_c_AccruedInterest: origRow.c_AccruedInterest, orig_b_Price: origRow.b_Price, orig_c_Price: origRow.c_Price, orig_b_Factor: origRow.b_Factor,
                            orig_c_Factor: origRow.c_Factor, orig_b_Quantity: origRow.b_Quantity, orig_c_Quantity: origRow.c_Quantity, orig_b_CurrentFace: origRow.b_CurrentFace,
                            orig_c_Face: origRow.c_Face, orig_b_Principal: origRow.b_Principal, orig_c_Principal: origRow.c_Principal, orig_c_dealerTicker: origRow.orig_c_dealerTicker,
                            orig_b_dealerTicker: origRow.b_dealerTicker, orig_b_Broker: origRow.b_Broker, orig_b_BrokerName: origRow.b_BrokerName, orig_b_DirAlias: origRow.b_DirAlias,
                            orig_platform: origRow.platform, orig_app: origRow.app, orig_fileName: origRow.fileName, orig_b_TxnType: origRow.b_TxnType, orig_c_TxnType: origRow.c_TxnType
                        }
                    } else {
                        console.log("Could not find the original row.");
                    }
                });
                console.log("Reconstructed Changed Rows: ", reconstructedChangedRows);
                //const rowsAffected = await saveVConnTrades(reconstructedChangedRows);
                const rowsAffected = reconstructedChangedRows.length;
                if (rowsAffected > 0) {
                    alert(`${rowsAffected} row(s) updated!`);
                    //return;
                } else if (rowsAffected === 0) {
                    alert(`No rows were affected. Either because you didn't change anything or you entered the password incorrectly.`)
                    //return;
                }
                
                changesTempArr = [];
                setChangedRows([]);
                //setOriginalData(JSON.parse(JSON.stringify(await getVConnTradeConfirmation({ currDate: date }))));//no that changes have been made, sets original data to previous data before change
                */
            }
        } else if (!isPasswordCorrect) {
            
            alert(`Please login before making any changes.`);
            return;
        }
        //Now create an endpoint that updates the db and create a dependency for a new state variable updatedVConnConfirmationTradeData
    }
    /*HANDLES POP UP LOGIN FORM
    const handleLogin = (e) => {
        console.log("Logging In!")
        console.log("Today's date: ", sqlDateToDateString(today()));
        e.preventDefault();
        //Need to implment token here.
        if(password === 'ccmisthebest') {
            console.log("Successful Login.");
            setIsPasswordCorrect(true);
            setPopUpVisible(false);
        } else {
            console.log("Unsuccessful Login.");
            setIsPasswordCorrect(false);
            alert(`No rows were affected. Username/Password is incorrect.`)
            return;
        }
    }
    const handleLoginCancel = () => {
        setPopUpVisible(false);
    }
    const handlePopUpInputChange = ({target}) => {
        //console.log("Pop Up value: ", target.value);
        //setPopUpForm({...popUpForm, [target.name]: target.value})
        target.name === 'password' ? password = target.value : username = target.value;
    } */
    const renderMatchCellValue = (rowData) => {
        //console.log("renderMatchCellValue", rowData);
        switch (true) {
            case (rowData.c_TxnType !== rowData.b_TxnType):
                return false;
            case (rowData.c_TradeDate !== rowData.b_TradeDate):
                return false;
            case (rowData.c_SettleDate !== rowData.b_SettleDate):
                return false;
            case (rowData.c_AccruedInterest.toFixed(2) !== rowData.b_AccruedInterest.toFixed(2)):
                return false;
            case (rowData.c_Price.toFixed(2) !== rowData.b_Price.toFixed(2)):
                return false;
            case (rowData.c_Factor.toFixed(2) !== rowData.b_Factor.toFixed(2)):
                return false;
            case (rowData.c_Quantity.toFixed(2) !== rowData.b_Quantity.toFixed(2)):
                return false;
            case (rowData.c_Face.toFixed(2) !== rowData.b_CurrentFace.toFixed(2)):
                return false;
            case (rowData.c_Principal.toFixed(2) !== rowData.b_Principal.toFixed(2)):
                return false;
            default:
                //console.log("Match!");
                return true;
        }
    }
    const handleApproveAllClick = (columnData) => {
        if (isPasswordCorrect) {
            console.log("Clicked Approve All!");
            //console.log("Original Data: ", originalData);
            changesTempArr = [...vConnConfirmationData];
            changesTempArr.forEach((row, index) => {
                row.vConnMatch = true;
            });
            console.log("Approve Data: ", changesTempArr);
            setApprovedAllRows([...changesTempArr]);
            setApproveAll(!approveAll);
        } else if (!isPasswordCorrect) {
            alert(`Please login before making any changes.`);
            return;
        }
        
    }
    const handleUnApproveAllClick = (columnData) => {
        if (isPasswordCorrect) {
            console.log("Unapproved Click!");
            changesTempArr = [...vConnConfirmationData];
            changesTempArr.forEach((row, index) => {
                row.vConnMatch = false;
            });
            console.log("Unapprove Data: ", changesTempArr);
            setApprovedAllRows([...changesTempArr]);
            setApproveAll(!approveAll);
        } else if (!isPasswordCorrect) {
            alert(`Please login before making any changes.`);
            return;
        }
    }
    const handleApproveAllHeaderRender = (columnData) => {
        return (
            <div id='approve-column-header'>
                Approve
                <button id='approve-column-button' className='btn btn-primary btn-sm' type='button' onClick={approveAll ? handleUnApproveAllClick : handleApproveAllClick}>All</button>
                
            </div>
        );
    }
    const handleLogout = () => {
        console.log("Clicked Logout button!");
        removeToken();
        setIsPasswordCorrect(false);
    }

    //LOADS VCONN CONFIRMATION TRADE DATA FOR TODAY'S DATE
    useEffect(() => {
        loadVConnConfirmation();
        loadDealerData();
    }, [date]);

    return (
        <div id='vconn-confirmation-page-container' style={{ padding: "0% 1% 0% 1%"}} >
            <div className='row' id='page-title'>
                <h1 className='col'>Bloomberg Trade Confirmation Page</h1>
                <div className='col-1'>
                    <button style={{ float: "right" }} id='submit-bloomber-confirmation-edits-button' className='btn btn-sm btn-primary' type='button' onClick={handleSubmitSave}>Save</button>
                    {
                        isPasswordCorrect ?
                        <button style={{ float: "right" }} id='logout-bloomberg-confirmation-edits-button' className='btn btn-sm btn-danger' type='button' onClick={handleLogout}>Logout</button>
                        :
                        <button style={{ float: "right" }} id='login-bloomberg-confirmation-edits-button' className='btn btn-sm btn-success' type='button' onClick={() => isPasswordCorrect ? alert(`You're already logged in.`) : setPopUpVisible(true)}>Login</button>
                    }
                </div>
            </div>
            <div id='vconn-data-grid-container'>
                {/* 
                <Popup visible={popUpVisible} onHiding={() => setPopUpVisible(false)} dragEnabled width={600}
                    height={600} title='Login Credentials'
                >
                    <form id="pop-up-body-form" onSubmit={handleLogin}>
                        <div id='username-input-container'>
                            <label htmlFor="username" className="form-label">Username</label>
                            <input className="form-control" name='username' id="username" onChange={handlePopUpInputChange} />
                        </div>
                        <div>
                            <label htmlFor="password" className="form-label">Password</label>
                            <input className="form-control" id="password" name='password' type='password' onChange={handlePopUpInputChange} />
                        </div>
                        <button className="btn btn-primary btn-sm" type="submit">Submit</button>
                        <button className="btn btn-danger btn-sm" type="button" onClick={handleLoginCancel}>Cancel</button>
                    </form>
                </Popup>
                 */}
                <PopUpLogin popUpVisible={popUpVisible} setPopUpVisible={setPopUpVisible} setIsPasswordCorrect={setIsPasswordCorrect} 
                    setToken={setToken}
                />
                <DataGrid dataSource={vConnConfirmationData} showBorders showRowLines showColumnLines hoverStateEnabled
                    keyExpr="fillID" allowColumnResizing columnAutoWidth height="83vh"
                    onCellPrepared={handleCellUnMatchingStyles} onSaved={handleSaved} onSaving={handleEnteringSave}
                >
                    <ColumnFixing enabled={true} />
                    <HeaderFilter visible={true} />
                    <FilterRow visible={true} />
                    <Paging defaultPageSize={100} />
                    <Pager showPageSizeSelector showNavigationButtons allowedPageSizes={[10, 50, 100, 500, 1000]} showInfo />
                    <Editing
                        mode='cell' allowUpdating confirmDelete allowEditing
                    />
                    <Column dataField='fillID' caption='Fill ID' allowEditing={false}/>
                    {/*<Column caption='Approve' fixed fixedPosition='left' type='buttons'>
                        <Button type='success' text='YES' stylingMode='contained' onClick={handleYesClick} render={handleAutoFillYesRendering}/>
                        <Button type='danger' text='NO' stylingMode='contained' onClick={handleNoClick} render={handleAutoFillNoRendering}/>
                    </Column> */}
                    <Column dataField='vConnMatch' caption='Approve' fixed fixedPosition='left' headerCellRender={handleApproveAllHeaderRender}
                        allowSorting={false} allowEditing={isPasswordCorrect}
                    />
                    <Column caption='Match' allowEditing={false} calculateCellValue={renderMatchCellValue} />
                    <Column dataField='c_TradeOrderId' caption='Order ID' allowEditing={false}/>
                    <Column dataField='cusip' caption='Cusip' allowEditing={isPasswordCorrect}/>
                    <Column dataField='b_TxnType' caption='b_Side' allowEditing={false} />
                    <Column dataField='c_TxnType' caption='c_Side' allowEditing={false}/>
                    <Column dataField='b_TradeDate' caption='b_TradeDate' allowEditing={false} calculateDisplayValue={(data) => sqlDateToDateString(dateFormatter(data.b_TradeDate))} />
                    <Column dataField='b_SettleDate' caption='b_SettleDate' allowEditing={false} calculateDisplayValue={(data) => sqlDateToDateString(dateFormatter(data.b_SettleDate))} />
                    <Column dataField='c_TradeDate' caption='c_TradeDate' allowEditing={false} calculateDisplayValue={(data) => sqlDateToDateString(dateFormatter(data.c_TradeDate))} />
                    <Column dataField='c_SettleDate' caption='c_SettleDate' allowEditing={false} calculateDisplayValue={(data) => sqlDateToDateString(dateFormatter(data.c_SettleDate))} />
                    <Column dataField='b_AccruedInterest' caption='b_Accrued' allowEditing={false} format={{ type: "currency", precision: 4 }}/>
                    <Column dataField='c_AccruedInterest' caption='c_Accrued'allowEditing={isPasswordCorrect} format={{ type: "currency", precision: 4 }}/>
                    <Column dataField='b_Price' caption='b_Price' allowEditing={false} format={{ type: "currency", precision: 6 }}/>
                    <Column dataField='c_Price' caption='c_Price' allowEditing={isPasswordCorrect} format={{ type: "currency", precision: 6 }}/>
                    <Column dataField='b_Factor' caption='b_Factor' allowEditing={false}/>
                    <Column dataField='c_Factor' caption='c_Factor' allowEditing={isPasswordCorrect}/>
                    <Column dataField='b_Quantity' caption='b_Quantity' allowEditing={false} format={{ type: "currency", precision: 2 }}/>
                    <Column dataField='c_Quantity' caption='c_Quantity' allowEditing={isPasswordCorrect} format={{ type: "currency", precision: 2 }}/>
                    <Column dataField='b_CurrentFace' caption='b_CurrentFace' allowEditing={false} format={{ type: "currency", precision: 2 }}/>
                    <Column dataField='c_Face' caption='c_Face' allowEditing={isPasswordCorrect} format={{ type: "currency", precision: 2 }}/>
                    <Column dataField='b_Principal' caption='b_Principal' allowEditing={false} format={{ type: "currency", precision: 2 }}/>
                    <Column dataField='c_Principal' caption='c_Principal' allowEditing={isPasswordCorrect} format={{ type: "currency", precision: 2 }}/>
                    <Column dataField='b_dealerTicker' caption='b_DealerTicker' allowEditing={false}/>
                    <Column dataField='c_dealerTicker' caption='c_DealerTicker' allowEditing={isPasswordCorrect}>
                        <Lookup dataSource={dealerData} displayExpr="name" valueExpr="id" />
                    </Column>
                    <Column dataField='b_Broker' caption='b_Broker' allowEditing={false}/>
                    <Column dataField='b_BrokerName' caption='b_BrokerName' allowEditing={false}/>
                    <Column dataField='b_DirAlias' caption='b_DirAlias' allowEditing={false}/>
                    <Column dataField='platform' caption='Platform' allowEditing={false}/>
                    <Column dataField='app' caption='App' allowEditing={false}/>
                    <Column dataField='fileName' caption='Filename' allowEditing={false}/>
                </DataGrid>
            </div>
        </div>
    )
}