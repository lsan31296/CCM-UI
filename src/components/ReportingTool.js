/**
 * The purpose of this component is to create a modular reporting tool that will build the necessary columns based on the data.
 * In other words, if data is fed into the tool and contains 30 fields, it will automatically generate 30 columns.
 * Adding formatting and things of that nature will take a backseat as this is meant to merely show the data.
 */

import { useParams } from "react-router"
import { isApxPortfolioCode, removeUnwanteds } from "../utils/helperFunctions";
import MultiSelectMenu from "./MultiSelectMenu";
import { useState } from "react";

export default function ReportingTool({...props}) {
    const {accountsInfo, previousBD} = props;
    let params = useParams();
    const initialFormState = {
        startDate: previousBD, //Ex: 2023-09-26
        //lookBack: "1",
        //cusips: [], //synonymous with 'Security' dropdown in Carlton
        accounts: [], //synonymous with 'Funds' checkbox in Carlton
    };
    const [formState, setFormState] = useState({...initialFormState});//Form data that will be sent as API request body
    let accountsMultiSelectRows = removeUnwanteds(accountsInfo).map((account) => {
        const newAccount = {
            value: {...account},
            label: account.name
        }
        return newAccount;
    });
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


    //DEFINE EVENT HANDLERS
    const handleSelectMenuClose = async(values, actionMeta) => {
        console.log("Menu Closed!", formState);
    }
    const handleAccountMultiSelectChange = async(values, actionMeta) => {
        console.log("Accounts Multi Select: ", values);
        if (values) {
            const apxPortCodeArr = values.map((value) => value.value.apx_portfolio_code);
            setFormState({ ...formState, accounts: [...apxPortCodeArr] });
        }
    }
    const handleDateChange = ({target}) => {
        console.log("Date: ", target.value);
        setFormState({...formState, startDate: target.value});
    }

    if (!previousBD || !accountsInfo) {
        return <h1>Loading...</h1>
    } else {
        return (
            <div id="reporting-tool-container">
                <h3>Reporting Tool</h3>
                <form id="reporting-tool-form">
                    <div id="reporting-tool-input-group-container-1" className="input-group row" style={{ margin: "0% 0%"}}>
                        <div id="aoDate-input-change" className="input-group-text col-2">
                            <label htmlFor="aoDate"></label>
                            <input className="form-control" id="aoDate" type="date" name="aoDate" pattern="\d{4}-\d{2}-\d{2}" value={formState.startDate} onChange={handleDateChange}/>
                        </div>

                        <MultiSelectMenu name="accountMultiSelect" classNames={"basic-multi-select input-group-text col-3"} placeHolderString={"Select Accounts..."}
                            required rowsForSelect={accountsMultiSelectRows} handleSelectMenuClose={handleSelectMenuClose} handleMultiSelectChange={handleAccountMultiSelectChange}
                            selectStyles={accountMultiSelectStyles}
                        />
                    </div>
                </form>
            </div>
        )
    }

}