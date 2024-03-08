import { useState } from "react"
import { today } from "../utils/helperFunctions";
import { getAccountExposure } from "../utils/api";
import ExportCSV from "../components/ExportCSV";
import { Button, DataGrid } from "devextreme-react";
import { FilterRow, GroupPanel, Grouping, HeaderFilter, Pager, Paging, LoadPanel, Column } from "devextreme-react/cjs/data-grid";



export default function AccountExposureReport({...props}) {

    const [accountExposureData, setAccountExposureData] = useState(null);
    const initialFormState = {
        fund: "CRAFund",
        asOfDate: today()
    };
    const [formState, setFormState] = useState({...initialFormState});
    const [loadPanelVisible, setLoadPanelVisible] = useState(false);

    //EVENT HANDLING
    const handleasOfDateChange = ({target}) => {
        console.log("asOfDate: ", target.value);
        setFormState({...formState, asOfDate: target.value});
    };
    const handleAggSwitchChange = ({target}) => {
        if (target.checked) {
            console.log("Checked!");
            setFormState({...formState, fund: target.value})
        }
    };
    const clickSubmitButton = (event) => {
        document.getElementById('submit-account-exposure-button').click();
    }
    const handleExportClick = (event) => {
        document.getElementById('account-exposure-export').click();
    }
    const handleSubmitClick = async(event) => {
        event.preventDefault();
        setLoadPanelVisible(true);
        console.log("Hit Generate Button!");
        console.log("Request Body: ", formState);
        const response = await getAccountExposure({...formState});
        setAccountExposureData([...response]);
        setLoadPanelVisible(false);
    }
    //DATA GRID CUSTOM FUNCTIONS/SETTINGS
    const calculatePercentDisplay = (dataField, decimal) => {
        return (rowData) => {
            return (rowData[dataField] * 100).toFixed(decimal) + "%";
        }
    }
    const calculateTotalPercentDisplay = (itemInfo) => {
        //Need to divide this value by corresponding theme contribution total.
        return (itemInfo.value * 100 ).toFixed(2) + "%";
    }

    return (
        <div id="account-exposure-report-container">
            <h1>Fund Exposure Report</h1>
            <form id="account-exposure-report-form" onSubmit={handleSubmitClick}>
                <div id="account-exposure-input-group-1" className="input-group row" style={{ margin: "0% 0%" }}>
                    <div className="input-group-text col-4">
                        <label htmlFor="asOfDate"></label>
                        <input className="form-control" id="asOfDate" type="date" name="asOfDate" value={formState.asOfDate} pattern="\d{4}-\d{2}-\d{2}" onChange={handleasOfDateChange} />
                    </div>

                    <div className="input-group-text col-4">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="radio" id="CRAFundAggSwitch" value="CRAFund" name="aggSwitches" onChange={handleAggSwitchChange} defaultChecked />
                            <label className="form-check-label" htmlFor="noAggSwitch">CRAFund</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="radio" id="CompositeAggSwitch" value="Composite" name="aggSwitches" onChange={handleAggSwitchChange} />
                            <label className="form-check-label" htmlFor="CompositeAggSwitch">Composite</label>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="radio" id="AllAggSwitch" value="All Fixed Income" name="aggSwitches" onChange={handleAggSwitchChange} />
                            <label className="form-check-label" htmlFor="AllAggSwitch">All Fixed Income</label>
                        </div>
                    </div>

                    <div id="account-exposure-button-group" className="input-group-text col-4" style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <Button id="generate-account-exposure-button" width={75} text="Generate" type="default" stylingMode="contained" onClick={clickSubmitButton} />
                        <Button id="export-button" width={75} text="Export" type="success" stylingMode="contained" onClick={handleExportClick} />
                        <ExportCSV id={"account-exposure-export"} styleObj={{ display: "none", visibility: "hidden" }} csvData={accountExposureData} fileName={ `Account_Exposure_Report_${formState.asOfDate.toString()}_${formState.fund.toString()}` } />
                        <button id="submit-account-exposure-button" style={{ display: "none", visibility: "hidden" }} type="submit"></button>
                        {/*<Button id="pop-up-body-button" width={93} text="Request Detail" type="default" stylingMode="outlined" onClick={() => setRequestDetailPopUpVisible(true)} /> */}
                    </div>
                </div>
            </form>

            <div id="accunt-exposure-data-grid-container">
                <DataGrid dataSource={accountExposureData} showBorders allowColumnResizing showColumnLines showRowLines rowAlternationEnabled
                    hoverStateEnabled height="74vh" columnAutoWidth
                >
                    <LoadPanel visible={loadPanelVisible} text="Loading themes, designations, security, loan and exposure models" height={120}/>
                    <HeaderFilter visible={true}/>
                    <FilterRow visible={true}/>
                    <Paging defaultPageSize={100} />
                    <Pager showPageSizeSelector showNavigationButtons allowedPageSizes={[10, 50, 100, 500, 1000]} showInfo/>
                    <Grouping contextMenuEnabled/>
                    <GroupPanel visible/>
                    
                    <Column dataField="fund_ticker" caption="Account"/>
                    <Column dataField="cusip" caption="Cusip"/>
                    <Column dataField="contribution_amount" caption="Contribution Amount" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="weight" caption="Contribution Weight" dataType="number" calculateDisplayValue={calculatePercentDisplay("weight", 4)}/>
                    <Column dataField="state_code" caption="State"/>
                    <Column dataField="ffiec_county_name" caption="County"/>
                    <Column dataField="census_tract" caption="Census Tract"/>

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
                    <Column dataField="market_value" caption="Holding Market Value" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="weight" caption="Holding Weight(%)" dataType="number" format={{ type: "fixedPoint", precision: 4}}/> 
                    <Column dataField="loan_amount" caption="Loan Amount" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="contribution_comment" caption="Contribution Comment"/>
                    <Column dataField="security_group" caption="Group"/>
                    <Column dataField="security_sector" caption="Sector"/>
                    <Column dataField="security_type" caption="Type"/>
                    <Column dataField="pool_number" caption="Name"/>
                    <Column dataField="issuer" caption="Issuer"/>

                    <Column dataField="ahr_contribution" caption="AHR$" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="ahou_contribution" caption="Ahou$" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="agr_contribution" caption="Agr$" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="art_cul_contribution" caption="ArtCul$" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="dis_rec_contribution" caption="DisRec$" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="ec_inc_contribution" caption="EcInc$" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="ed_child_contribution" caption="EdChild$" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="ent_dev_contribution" caption="EntDev$" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="env_grn_contribution" caption="EnvGrn$" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="gen_lens_contribution" caption="GenLens$" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="hea_contribution" caption="Hea$" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="hud_des_contribution" caption="HudDes$" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="hcp_contribution" caption="HCP$" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="min_nei_contribution" caption="MinNei$" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="revit_contribution" caption="Revit$" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="rural_contribution" caption="Rural$" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="sen_dis_contribution" caption="SenDis$" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="tod_contribution" caption="TOD$" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="mcares_contribution" caption="MCares$" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="covid_contribution" caption="Covid$" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="sust_comm_contribution" caption="SustComm$" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="human_emp_contribution" caption="HumanEmp$" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="theme_contribution_total" caption="ThemeContributionTotal" dataType="number" format={{ type: "currency", precision: 0 }}/>

                    <Column dataField="ahr_weight" caption="AHR%" dataType="number" calculateDisplayValue={calculatePercentDisplay("ahr_weight", 2)} />
                    <Column dataField="ahou_weight" caption="Ahou%" calculateDisplayValue={calculatePercentDisplay("ahou_weight", 2)}/>
                    <Column dataField="agr_weight" caption="Agr%" calculateDisplayValue={calculatePercentDisplay("agr_weight", 2)}/>
                    <Column dataField="art_cul_weight" caption="ArtCul%" calculateDisplayValue={calculatePercentDisplay("art_cul_weight", 2)}/>
                    <Column dataField="dis_rec_weight" caption="DisRec%" calculateDisplayValue={calculatePercentDisplay("dis_rec_weight", 2)}/>
                    <Column dataField="ec_inc_weight" caption="EcInc%" calculateDisplayValue={calculatePercentDisplay("ec_inc_weight", 2)}/>
                    <Column dataField="ed_child_weight" caption="EdChild%" calculateDisplayValue={calculatePercentDisplay("ed_child_weight", 2)}/>
                    <Column dataField="ent_dev_weight" caption="EntDev%" calculateDisplayValue={calculatePercentDisplay("ent_dev_weight", 2)}/>
                    <Column dataField="env_grn_weight" caption="EnvGrn%" calculateDisplayValue={calculatePercentDisplay("env_grn_weight", 2)}/>
                    <Column dataField="gen_lens_weight" caption="GenLens%" calculateDisplayValue={calculatePercentDisplay("gen_lens_weight", 2)}/>
                    <Column dataField="hea_weight" caption="Hea%" calculateDisplayValue={calculatePercentDisplay("hea_weight", 2)}/>
                    <Column dataField="hud_des_weight" caption="HudDes%" calculateDisplayValue={calculatePercentDisplay("hud_des_weight", 2)}/>
                    <Column dataField="hcp_weight" caption="HCP%" calculateDisplayValue={calculatePercentDisplay("hcp_weight", 2)}/>
                    <Column dataField="min_nei_weight" caption="MinNei%" calculateDisplayValue={calculatePercentDisplay("min_nei_weight", 2)}/>
                    <Column dataField="revit_weight" caption="Revit%" calculateDisplayValue={calculatePercentDisplay("revit_weight", 2)}/>
                    <Column dataField="rural_weight" caption="Rural%" calculateDisplayValue={calculatePercentDisplay("rural_weight", 2)}/>
                    <Column dataField="sen_dis_weight" caption="SenDis%" calculateDisplayValue={calculatePercentDisplay("sen_dis_weight", 2)}/>
                    <Column dataField="tod_weight" caption="TOD%" calculateDisplayValue={calculatePercentDisplay("tod_weight", 2)}/>
                    <Column dataField="mcares_weight" caption="MCares%" calculateDisplayValue={calculatePercentDisplay("mcares_weight", 2)}/>
                    <Column dataField="covid_weight" caption="Covid%" calculateDisplayValue={calculatePercentDisplay("covid_weight", 2)}/>
                    <Column dataField="sust_comm_weight" caption="SustComm%" calculateDisplayValue={calculatePercentDisplay("sust_comm_weight", 2)}/>
                    <Column dataField="human_emp_weight" caption="HumanEmp%" calculateDisplayValue={calculatePercentDisplay("human_emp_weight", 2)}/>
                    <Column dataField="theme_weight_total" caption="ThemeWeightTotal" calculateDisplayValue={calculatePercentDisplay("theme_weight_total", 2)}/>

                    <Column dataField="tracker_loan_id" caption="Tracker Loan ID" />
                    {/*
                    <Column dataField="sd.SecurityID" caption="Tracker SecurityID"/>
                    <Column dataField="s.SeriesNumber" caption="Series Number"/>
                    */}
                    <Column dataField="tmbs_units" caption="Affordable Mortgages"/>
                    <Column dataField="non_tmbs_low_income_units" caption="LMI Multifamily Units"/>
                    <Column dataField="tmbs_units_loan_total" caption="Affordable Mortgages Loan Total"/>
                    <Column dataField="non_tmbs_low_income_units_loan_total" caption="LMI Multifamily Units Loan Total"/>
                </DataGrid>
            </div>

        </div>
    )
}