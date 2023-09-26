/**
 * This component is responsible for displaying the form to be filled for retrieving data for trade
 * history of particular securities and/or accounts(funds).
 * Form Parameters: 
 *  Trade Date, Look Back, Trade and Settlement Date, CUSIP(s), Sec Name/Pool Number, Account(s), Trade Type(s)
 *  Security 1)Group 2)Type 3)Sector
 */

import { useState } from "react";

export default function TradeHistoryLandingPage({ previousBD, accountsInfo}) {
    const initialFormState = {
        startDate: previousBD,
        lookBack: 1,
        positionView: "TD",
        cusips: [],
    }
    const [formState, setFormState] = useState({...initialFormState});

    //DEFINE EVENT HANDLERS
    const handleStartDateChange = ({target}) => {
        console.log("Date: ", target.value);
        setFormState({ ...formState, startDate: target.value });
    }
    const handleLookBackChange = ({target}) => {
        console.log("Look Back: ", target.value);
        console.log("Data Type: ", typeof(target.value))
        if(target.value === "0") {
            alert("Look Back Days must be at least 1.");
            return;
        }
        setFormState({ ...formState, lookBack: Number(target.value) });
    }

    if (!previousBD || !accountsInfo) {
        return <h1>Loading...</h1>
    } else {
        return (
            <div id="trade-history-landing-page-container">
                <h1>Trade History Landing Page</h1>
                <form id="trade-history-form">

                    <div id="trade-history-input-group-container" className="input-group row">
                        <div className="input-group-text col-3">
                            <label htmlFor="startDate" ></label>
                            <input className="form-control" id="startDate" type="date" name="startDate" value={formState.startDate} pattern="\d{4}-\d{2}-\d{2}" onChange={handleStartDateChange}/>
                        </div>
                        <div className="input-group-text col-2">
                            <label htmlFor="lookBack" className="pe-1">Look Back Days</label>
                            <input type="number" className="form-control" id="lookBack" name="lookBack" value={formState.lookBack} placeholder="# of days" onChange={handleLookBackChange} />
                        </div>
                    </div>

                </form>
            </div>
        );
    }
    
}