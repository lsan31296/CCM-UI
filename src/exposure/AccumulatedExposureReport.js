import "./AccumulatedExposure.css";
import React, { useState } from "react";
import { calcDateByLookBack, calcLookBackDaysByDate, today } from "../utils/helperFunctions";
import { Button, DataGrid } from "devextreme-react";
import ExportCSV from "../components/ExportCSV";
import { Column, FilterRow, GroupPanel, Grouping, HeaderFilter, Pager, Paging } from "devextreme-react/cjs/data-grid";
import { getAccumulatedExposure } from "../utils/api";

/**
 * Very similar to the composition of the Trade History Landping page. 
 * Will be used by Impact Theme to show contribution amounts and weights of each theme in a DevExtreme DataGrid.
 * Returns a React Element.
 * @param {string} previousBD 
 * @returns {React.ReactElement}
 */
export default function AccumulatedExposureReport({...props}) {
    //const { previousBD, accountsInfo, securities, composites } = props;
    const [accumulatedExposureData, setAccumulatedExposureData ] = useState(null);
    const initialFormState = {
        startDate: today(),
        //endDate: "1990-01-01",
        fundTicker: "CRAFund",
        daysBack: "0"
    };
    const [formState, setFormState] = useState({...initialFormState});
    const [daysBackDateChange, setDaysBackDateChange] = useState(calcDateByLookBack(formState.startDate, formState.daysBack));
    const [craFundSwitch, setCraFundSwitch] = useState(false);
    const [compositeSwitch, setCompositeSwitch] = useState(false);
    const [mbsSwitch, setMbsSwitch] = useState(false);
    const [allSwitch, setAllSwitch] = useState(false);

    //EVENT HANDLERS
    const handleDaysBackDateChange = async({target}) => {
        console.log("Days Back Date Change: ", target.value)
        setDaysBackDateChange(target.value);
        setFormState({...formState, daysBack: calcLookBackDaysByDate(target.value, formState.startDate)});
    }
    const handleStartDateChange = ({target}) => {
        console.log("Date: ", target.value);
        setFormState({ ...formState, startDate: target.value });
        setDaysBackDateChange(calcDateByLookBack(target.value, formState.lookBack));
    }
    const handleLookBackChange = ({target}) => {
        console.log("Look Back: ", target.value);
        console.log("Data Type: ", typeof(target.value))
        if(target.value === "-1") {
            alert("Look Back Days must be a positive number or day of (0).");
            return;
        }
        setFormState({ ...formState, daysBack: target.value });
        setDaysBackDateChange(calcDateByLookBack(formState.startDate, target.value))
    }
    const handleAggSwitchChange = async ({target}) => {
        if (target.checked) {
            console.log("Checked!");
            setFormState({...formState, fundTicker: target.value})
        }
    }
    const clickSubmitButton = (event) => {
        document.getElementById('submit-accumulated-exposure-button').click();
    }
    const handleExportClick = (event) => {
        document.getElementById('accumulated-exposure-export').click();
    }
    const handleSubmitClick = async(event) => {
        event.preventDefault();
        console.log("Hit Generate Button!");
        let newFormState = {
            fundTicker: formState.fundTicker,
            startDate: daysBackDateChange,
            endDate: formState.startDate
        };
        console.log("Request Body: ", newFormState);
        const response = await getAccumulatedExposure({...newFormState});
        setAccumulatedExposureData([...response]);
    }

    return (
        <div id="accumulated-exposure-report-container">
            <h1>Accumulated Exposure Report</h1>
            <form id="accumulated-exposure-report-form" onSubmit={handleSubmitClick}>

                <div id="accumulated-exposure-input-group-1" className="input-group row" style={{ margin: "0% 0%" }}>
                    <div id="days-back-date-change" className="input-group-text col-2">
                        <label htmlFor="days-back-date-change"></label>
                        <input className="form-control" id="days-back-date-change" type="date" value={daysBackDateChange} name="days-back-date-change" pattern="\d{4}-\d{2}-\d{2}" onChange={handleDaysBackDateChange} />
                    </div>

                    <div className="input-group-text col-2">
                        <label htmlFor="startDate"></label>
                        <input className="form-control" id="startDate" type="date" name="startDate" value={formState.startDate} pattern="\d{4}-\d{2}-\d{2}" onChange={handleStartDateChange} />
                    </div>

                    <div className="input-group-text col-2">
                        <label htmlFor="lookBack" className="pe-1">Look Back Days</label>
                        <input type="number" className="form-control" id="lookBack" name="lookBack" value={formState.daysBack} placeholder="# of days" onChange={handleLookBackChange} />
                    </div>

                    <div className="input-group-text col-3">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="radio" id="CRAFundAggSwitch" value="CRAFund" name="aggSwitches" onChange={handleAggSwitchChange} defaultChecked />
                            <label className="form-check-label" htmlFor="noAggSwitch">CRAFund</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="radio" id="CompositeAggSwitch" value="Composite" name="aggSwitches" onChange={handleAggSwitchChange} />
                            <label className="form-check-label" htmlFor="CompositeAggSwitch">Composite</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="radio" id="MBSAggSwitch" value="MBS" name="aggSwitches" onChange={handleAggSwitchChange} />
                            <label className="form-check-label" htmlFor="MBSAggSwitch">MBS</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="radio" id="AllAggSwitch" value="All Fixed Income" name="aggSwitches" onChange={handleAggSwitchChange} />
                            <label className="form-check-label" htmlFor="AllAggSwitch">All Fixed Income</label>
                        </div>
                    </div>

                    <div id="accumulated-exposure-button-group" className="input-group-text col-3" style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <Button id="generate-accumulated-exposure-button" width={75} text="Generate" type="default" stylingMode="contained" onClick={clickSubmitButton} />
                        <Button id="export-button" width={75} text="Export" type="success" stylingMode="contained" onClick={handleExportClick} />
                        <ExportCSV id={"accumulated-exposure-export"} styleObj={{ display: "none", visibility: "hidden" }} /*csvData={selectedTradeHistoryRows.length > 0 ? selectedTradeHistoryRows : tradeHistoryData} fileName={`TradeHistory_${formState.cusips.toString()}_${formState.accounts.toString()}_${formState.startDate}_${formState.lookBack}`} */ />
                        <button id="submit-accumulated-exposure-button" style={{ display: "none", visibility: "hidden" }} type="submit"></button>
                        {/*<Button id="pop-up-body-button" width={93} text="Request Detail" type="default" stylingMode="outlined" onClick={() => setRequestDetailPopUpVisible(true)} /> */}
                    </div>
                </div>
            </form>

            <div id="accumulated-exposure-data-grid-container">
                <DataGrid dataSource={accumulatedExposureData} showBorders allowColumnResizing showColumnLines showRowLines rowAlternationEnabled
                    hoverStateEnabled height="74vh" columnAutoWidth//selectedRowKeys onSelectionChanged
                >
                    <HeaderFilter visible={true}/>
                    <FilterRow visible={true}/>
                    <Paging defaultPageSize={100} />
                    <Pager showPageSizeSelector showNavigationButtons allowedPageSizes={[10, 50, 100, 500, 1000]} showInfo/>
                    <Grouping contextMenuEnabled/>
                    <GroupPanel visible/>

                    <Column dataField="fund_ticker" caption="Account"/>
                    <Column dataField="cusip" caption="Cusip"/>
                    <Column dataField="pool_number" caption="Name"/>
                    <Column dataField="issuer" caption="Issuer"/>
                    <Column dataField="market_value" caption="Holding Market Value"/>
                    <Column dataField="" caption="Holding Weight(%)"/>
                    <Column dataField="security_group" caption="Group"/>
                    <Column dataField="security_sector" caption="Sector"/>
                    <Column dataField="security_type" caption="Type"/>
                    <Column dataField="" caption="Computed Rating"/>
                    <Column dataField="state_code" caption="State"/>
                    <Column dataField="ffiec_county_name" caption="County"/>
                    <Column dataField="census_tract" caption="Census Tract"/>
                    <Column dataField="loan_amount" caption="Loan Amount"/>
                    <Column dataField="contribution_amount" caption="Contribution Amount"/>
                    <Column dataField="weight" caption="Contribution Weight"/>
                    <Column dataField="contribution_comment" caption="Contribution Comment"/>

                    <Column dataField="ahr" caption="AHR"/>
                    <Column dataField="ahou" caption="AHou"/>
                    <Column dataField="agr" caption="Agr"/>
                    <Column dataField="art_cul" caption="ArtCul"/>
                    <Column dataField="dis_rec" caption="DisRec"/>
                    <Column dataField="ec_inc" caption="EcInc"/>
                    <Column dataField="ed_child" caption="EdChild"/>
                    <Column dataField="ent_dev" caption="EntDev"/>
                    <Column dataField="env_grn" caption="EnvGrn"/>
                    <Column dataField="gen_lens" caption="GenLens"/>
                    <Column dataField="hea" caption="Hea"/>
                    <Column dataField="hud_des" caption="HudDes"/>
                    <Column dataField="hcp" caption="HCP"/>
                    <Column dataField="min_nei" caption="MinNei"/>
                    <Column dataField="revit" caption="Revit"/>
                    <Column dataField="rural" caption="Rural"/>
                    <Column dataField="sen_dis" caption="SenDis"/>
                    <Column dataField="tod" caption="TOD"/>
                    <Column dataField="mcares" caption="MCares"/>
                    <Column dataField="covid" caption="Covid"/>
                    <Column dataField="sust_comm" caption="SustComm"/>
                    <Column dataField="human_emp" caption="HumanEmp"/>
                    <Column dataField="first_time_home_buyer" caption="FstTmHmBuyer"/>

                    <Column dataField="ahr_contribution" caption="AHR$"/>
                    <Column dataField="ahou_contribution" caption="Ahou$"/>
                    <Column dataField="agr_contribution" caption="Agr$"/>
                    <Column dataField="art_cul_contribution" caption="ArtCul$"/>
                    <Column dataField="dis_rec_contribution" caption="DisRec$"/>
                    <Column dataField="ec_inc_contribution" caption="EcInc$"/>
                    <Column dataField="ed_child_contribution" caption="EdChild$"/>
                    <Column dataField="ent_dev_contribution" caption="EntDev$"/>
                    <Column dataField="env_grn_contribution" caption="EnvGrn$"/>
                    <Column dataField="gen_lens_contribution" caption="GenLens$"/>
                    <Column dataField="hea_contribution" caption="Hea$"/>
                    <Column dataField="hud_des_contribution" caption="HudDes$"/>
                    <Column dataField="hcp_contribution" caption="HCP$"/>
                    <Column dataField="min_nei_contribution" caption="MinNei$"/>
                    <Column dataField="revit_contribution" caption="Revit$"/>
                    <Column dataField="rural_contribution" caption="Rural$"/>
                    <Column dataField="sen_dis_contribution" caption="SenDis$"/>
                    <Column dataField="tod_contribution" caption="TOD$"/>
                    <Column dataField="mcares_contribution" caption="MCares$"/>
                    <Column dataField="covid_contribution" caption="Covid$"/>
                    <Column dataField="sust_comm_contribution" caption="SustComm$"/>
                    <Column dataField="human_emp_contribution" caption="HumanEmp$"/>
                    <Column dataField="theme_contribution_total" caption="ThemeContributionTotal"/>

                    <Column dataField="ahr_weight" caption="AHR%"/>
                    <Column dataField="ahou_weight" caption="Ahou%"/>
                    <Column dataField="agr_weight" caption="Agr%"/>
                    <Column dataField="art_cul_weight" caption="ArtCul%"/>
                    <Column dataField="dis_rec_weight" caption="DisRec%"/>
                    <Column dataField="ec_inc_weight" caption="EcInc%"/>
                    <Column dataField="ed_child_weight" caption="EdChild%"/>
                    <Column dataField="ent_dev_weight" caption="EntDev%"/>
                    <Column dataField="env_grn_weight" caption="EnvGrn%"/>
                    <Column dataField="gen_lens_weight" caption="GenLens%"/>
                    <Column dataField="hea_weight" caption="Hea%"/>
                    <Column dataField="hud_des_weight" caption="HudDes%"/>
                    <Column dataField="hcp_weight" caption="HCP%"/>
                    <Column dataField="min_nei_weight" caption="MinNei%"/>
                    <Column dataField="revit_weight" caption="Revit%"/>
                    <Column dataField="rural_weight" caption="Rural%"/>
                    <Column dataField="sen_dis_weight" caption="SenDis%"/>
                    <Column dataField="tod_weight" caption="TOD%"/>
                    <Column dataField="mcares_weight" caption="MCares%"/>
                    <Column dataField="covid_weight" caption="Covid%"/>
                    <Column dataField="sust_comm_weight" caption="SustComm%"/>
                    <Column dataField="human_emp_weight" caption="HumanEmp%"/>
                    <Column dataField="theme_weight_total" caption="ThemeWeightTotal"/>

                    <Column dataField="tmbs_units" caption="Total Mortgages"/>
                    <Column dataField="non_tmbs_low_income_units" caption="Total Multifamily Units"/>
                    <Column dataField="difficut_development_area" caption="DDA"/>
                    <Column dataField="ffiec_distressed" caption="Distressed"/>
                    <Column dataField="hub_zone" caption="HubZone"/>
                    <Column dataField="rural_census_tract_and_msa" caption="Rural CT/MSA"/>
                    <Column dataField="persistent_poverty_county" caption="PPC"/>
                    <Column dataField="recap_loan" caption="RECAP CT"/>
                    <Column dataField="woman_borrower" caption="Woman Borrower"/>
                    <Column dataField="minority_borrower" caption="Minority Borrower"/>
                    <Column dataField="race" caption="Race"/>
                    <Column dataField="ethnicity" caption="Ethnicity"/>
                    <Column dataField="ffiec_tract_percent_minority" caption="Percent Minority CT"/>
                    <Column dataField="city" caption="City"/>
                    <Column dataField="row_count" caption="RowCount"/>
                    <Column dataField="loan_id" caption="LoanID"/>
                    <Column dataField="ffiec_percent_poverty" caption="Percent Poverty"/>
                    <Column dataField="job_units" caption="Job Units"/>
                </DataGrid>
            </div>
        </div>
    );
}