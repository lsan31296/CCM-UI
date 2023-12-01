/**
 * This component is responsible for displaying the DataGrid will confirm whether the Carlton data is matching 
 * up with the data from BBG. Using pulls from two places and placing synonymous columns together will allow
 * for the user to compare quickly and decide whether or not to Autofill or have it done Manually. Conditional
 * styling will be used to determine quickly if an account is a match to the BBG data. Note that BBG is read only
 * whereas Carlton is the data we can change through the editable fields of the DataGrid.
 */
import { Button } from 'devextreme-react/button';
import DataGrid, { Column, Editing, Paging, Lookup, HeaderFilter, FilterRow, Pager, ColumnFixing } from 'devextreme-react/data-grid';
import { Col } from 'devextreme-react/responsive-box';
import { useEffect, useState } from 'react';
import { getVConnTradeConfirmation, saveVConnTrades } from '../utils/api';
import { dateFormatter, sqlDateToDateString } from '../utils/helperFunctions';
import { Popup } from 'devextreme-react';

export default function VConnConfirmationPage({...props}) {
    const [vConnConfirmationData, setVConnConfirmationData] = useState(null);
    const [changedRows, setChangedRows] = useState(null);
    let changesTempArr = [];
    const date = "2023-11-13";
    const [password, setPassword] = useState(null);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
    const [popUpVisible, setPopUpVisible] = useState(false);
    const initialFormState = {username: "", password: ""};
    const [popUpForm, setPopUpForm] = useState({...initialFormState});

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
                case 'c_CurrentFace':
                case 'b_Face':
                    if (e.data.c_CurrentFace.toFixed(2) !== e.data.b_Face.toFixed(2)) {
                        e.cellElement.style.cssText = "color: white; background-color: salmon"
                    }
                    break;
                case 'c_Principal':
                case 'b_Principal':
                    if (e.data.c_Principal.toFixed(2) !== e.data.b_Principal.toFixed(2)) {
                        e.cellElement.style.cssText = "color: white; background-color: salmon"
                    }
                    break;
                case 'c_dealerTicker':
                case 'b_dealerTicker':
                    if (e.data.c_dealerTicker !== e.data.b_dealerTicker) {
                        e.cellElement.style.cssText = "color: white; background-color: salmon"
                    }
                    break;
            }
        }
    };
    async function loadVConnConfirmation() {
        console.log("Loading VConn Confirmation trades!");
        const abortController = new AbortController();

        const response = await getVConnTradeConfirmation({ currDate: date });
        setVConnConfirmationData([...response]);

        return () => abortController.abort();
    }

    const handleSaved = (e) => {
        if (isPasswordCorrect) {
            console.log("onSaved!: ", e);
            const savedChanges = e.changes[0].data;
            changesTempArr.push(e.changes[0].data);
            console.log("Changes: ", e.changes[0].data);

            const updatedRow = vConnConfirmationData.find((element, i) => {
                if (element.fillID === e.changes[0].data.key) {
                    const updatedVConnData = [...vConnConfirmationData];
                    updatedVConnData[i] = savedChanges;
                    console.log("Updated vConnConfirmationDat State: ", updatedVConnData);

                    setVConnConfirmationData([
                        ...updatedVConnData
                    ]);
                }
            });
        } 
    }

    const handleEnteringSave = (e) => {
        console.log("Entering Save: ", e)
        if (!isPasswordCorrect) {
            e.cancel = true;
            e.changes = [];
            alert(`Please revert your changes and login.`);
            return;
        }
    }

    const handleSubmitSave = async () => {
        console.log("Current VConnConfirmationData State: ", vConnConfirmationData);
        console.log("Logged In: ", isPasswordCorrect);
        if (isPasswordCorrect) {
            setChangedRows([...changesTempArr]);
            console.log("changedRows State: ", changesTempArr);
            const rowsAffected = await saveVConnTrades(changesTempArr);
            if (rowsAffected > 0) {
                alert(`${rowsAffected} row(s) updated!`);
                return;
            } else if (rowsAffected === 0) {
                alert(`No rows were affected. Either because you didn't change anything or you entered the password incorrectly.`)
                return;
            }
            changesTempArr = [];
        } else if (!isPasswordCorrect) {
            
            alert(`Please login before making any changes.`);
            return;
        }
        //Now create an endpoint that updates the db and create a dependency for a new state variable updatedVConnConfirmationTradeData
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (popUpForm.password === 'ccmisthebest') {
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
        console.log("Pop Up value: ", target.value);
        setPopUpForm({...popUpForm, [target.name]: target.value})
    }

    useEffect(() => {loadVConnConfirmation()}, [date]);

    return (
        <div id='vconn-confirmation-page-container' style={{ padding: "0% 1% 0% 1%"}} >
            <div className='row' id='page-title'>
                <h1 className='col'>Bloomberg Trade Confirmation Page</h1>
                <div className='col-1'>
                    <button style={{ float: "right" }} id='submit-bloomber-confirmation-edits-button' className='btn btn-sm btn-primary' type='button' onClick={handleSubmitSave}>Save</button>
                    <button style={{ float: "right" }} id='login-bloomber-confirmation-edits-button' className='btn btn-sm btn-success' type='button' onClick={() => isPasswordCorrect ? alert(`You're already logged in.`) : setPopUpVisible(true)}>Login</button>
                </div>
            </div>
            <div id='vconn-data-grid-container'>
                <Popup visible={popUpVisible} onHiding={() => setPopUpVisible(false)} dragEnabled width={600}
                    height={600} title='Login Credentials'
                >
                    <form id="pop-up-body-form" onSubmit={handleLogin}>
                        <div id='username-input-container'>
                            <label htmlFor="username" className="form-label">Username</label>
                            <input className="form-control" name='username' id="username" value={popUpForm.username} onChange={handlePopUpInputChange} />
                        </div>
                        <div>
                            <label htmlFor="password" className="form-label">Password</label>
                            <input className="form-control" id="password" name='password' value={popUpForm.password} onChange={handlePopUpInputChange} />
                        </div>
                        <button className="btn btn-primary btn-sm" type="submit">Submit</button>
                        <button className="btn btn-danger btn-sm" onClick={handleLoginCancel}>Cancel</button>
                    </form>
                </Popup>
                <DataGrid dataSource={vConnConfirmationData} showBorders showRowLines showColumnLines hoverStateEnabled
                    keyExpr="fillID" allowColumnResizing columnAutoWidth height="83vh"
                    onCellPrepared={handleCellUnMatchingStyles} onSaved={handleSaved} onSaving={handleEnteringSave}
                >
                    <ColumnFixing enabled={true} />
                    <HeaderFilter visible={true} />
                    <FilterRow visible={true} />
                    <Paging defaultPageSize={50} />
                    <Pager showPageSizeSelector showNavigationButtons allowedPageSizes={[10, 50, 100, 500, 1000]} showInfo />
                    <Editing
                        mode='cell' allowUpdating allowAdding allowDeleting confirmDelete
                    />
                    <Column dataField='fillID' caption='Fill ID' allowEditing={false}/>
                    <Column dataField='' caption='AutoFill' fixed allowEditing={false}/>
                    <Column dataField='vConnMatch' caption='Match' allowEditing={false}/>
                    <Column dataField='c_TradeOrderId' caption='Order ID' allowEditing={false}/>
                    <Column dataField='cusip' caption='Cusip' allowEditing={false}/>
                    <Column dataField='b_TxnType' caption='b_Side' allowEditing={false} />
                    <Column dataField='c_TxnType' caption='c_Side' allowEditing={false}/>
                    <Column dataField='b_TradeDate' caption='b_TradeDate' allowEditing={false} calculateDisplayValue={(data) => sqlDateToDateString(dateFormatter(data.b_TradeDate))} />
                    <Column dataField='b_SettleDate' caption='b_SettleDate' allowEditing={false} calculateDisplayValue={(data) => sqlDateToDateString(dateFormatter(data.b_SettleDate))} />
                    <Column dataField='c_TradeDate' caption='c_TradeDate' allowEditing={false} calculateDisplayValue={(data) => sqlDateToDateString(dateFormatter(data.c_TradeDate))} />
                    <Column dataField='c_SettleDate' caption='c_SettleDate' allowEditing={false} calculateDisplayValue={(data) => sqlDateToDateString(dateFormatter(data.c_SettleDate))} />
                    <Column dataField='b_AccruedInterest' caption='b_Accrued' allowEditing={false}/>
                    <Column dataField='c_AccruedInterest' caption='c_Accrued' />
                    <Column dataField='b_Price' caption='b_Price' allowEditing={false}/>
                    <Column dataField='c_Price' caption='c_Price' />
                    <Column dataField='b_Factor' caption='b_Factor' allowEditing={false}/>
                    <Column dataField='c_Factor' caption='c_Factor' />
                    <Column dataField='b_Quantity' caption='b_Quantity' allowEditing={false}/>
                    <Column dataField='c_Quantity' caption='c_Quantity' />
                    <Column dataField='b_CurrentFace' caption='b_CurrentFace' allowEditing={false}/>
                    <Column dataField='c_Face' caption='c_Face' allowEditing={false}/>
                    <Column dataField='b_Principal' caption='b_Principal' allowEditing={false}/>
                    <Column dataField='c_Principal' caption='c_Principal' allowEditing={false}/>
                    <Column dataField='b_dealerTicker' caption='b_DealerTicker' allowEditing={false}/>
                    <Column dataField='c_dealerTicker' caption='c_DealerTicker' allowEditing={false}/>
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