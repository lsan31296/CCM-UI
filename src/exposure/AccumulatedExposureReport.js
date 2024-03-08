import "./AccumulatedExposure.css";
import React, { useCallback, useState } from "react";
import { calcDateByLookBack, calcLookBackDaysByDate, today } from "../utils/helperFunctions";
import { Button, DataGrid } from "devextreme-react";
import ExportCSV from "../components/ExportCSV";
import { Column, FilterRow, GroupItem, GroupPanel, Grouping, HeaderFilter, LoadPanel, Pager, Paging, Summary, TotalItem } from "devextreme-react/cjs/data-grid";
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
    const [loadPanelVisible, setLoadPanelVisible] = useState(false);

    //EVENT HANDLERS
    const handleDaysBackDateChange = async({target}) => {
        console.log("Days Back Date Change: ", target.value)
        setDaysBackDateChange(target.value);
        setFormState({...formState, daysBack: calcLookBackDaysByDate(target.value, formState.startDate)});
    }
    const handleStartDateChange = ({target}) => {
        console.log("Date: ", target.value);
        setFormState({ ...formState, startDate: target.value, daysBack: calcLookBackDaysByDate(daysBackDateChange, target.value) });
        //setDaysBackDateChange(calcDateByLookBack(target.value, formState.daysBack));

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
        setLoadPanelVisible(true);
        console.log("Hit Generate Button!");
        let newFormState = {
            fundTicker: formState.fundTicker,
            startDate: daysBackDateChange,
            endDate: formState.startDate
        };
        console.log("Request Body: ", newFormState);
        const response = await getAccumulatedExposure({...newFormState});
        setAccumulatedExposureData([...response]);
        setLoadPanelVisible(false);
    }
    const calculatePercentDisplay = (dataField, decimal) => {
        return (rowData) => {
            return (rowData[dataField] * 100).toFixed(decimal) + "%";
        }
    }
    const calculateTotalPercentDisplay = (itemInfo) => {
        //Need to divide this value by corresponding theme contribution total.
        return (itemInfo.value * 100 ).toFixed(2) + "%";
    }
    const calculateThemeWeightTotal = (options) => {
        //Name of TotailItem name
        if(options.name === "customThemeWeightTotal") {
            //Select at which point things should be initiated/calculated
            //Start of calculation process
            if(options.summaryProcess === "start") {
                options.totalValue = 0;
            }


        }
    }

    return (
        <div id="accumulated-exposure-report-container">
            <h1>(Alpha) Accumulated Exposure Report</h1>
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
                        <ExportCSV id={"accumulated-exposure-export"} styleObj={{ display: "none", visibility: "hidden" }} csvData={accumulatedExposureData} fileName={ `Accumulated_Exposure_Report_${daysBackDateChange.toString()}_${formState.startDate.toString()}_${formState.fundTicker}` } />
                        <button id="submit-accumulated-exposure-button" style={{ display: "none", visibility: "hidden" }} type="submit"></button>
                        {/*<Button id="pop-up-body-button" width={93} text="Request Detail" type="default" stylingMode="outlined" onClick={() => setRequestDetailPopUpVisible(true)} /> */}
                    </div>
                </div>
            </form>

            <div id="accumulated-exposure-data-grid-container">
                <DataGrid dataSource={accumulatedExposureData} showBorders allowColumnResizing showColumnLines showRowLines rowAlternationEnabled
                    hoverStateEnabled height="74vh" columnAutoWidth//selectedRowKeys onSelectionChanged
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
                    <Column dataField="pool_number" caption="Name"/>
                    <Column dataField="issuer" caption="Issuer"/>
                    <Column dataField="market_value" caption="Holding Market Value" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    {/*<Column dataField="" caption="Holding Weight(%)"/> */}
                    <Column dataField="security_group" caption="Group"/>
                    <Column dataField="security_sector" caption="Sector"/>
                    <Column dataField="security_type" caption="Type"/>
                    <Column dataField="" caption="Computed Rating"/>
                    <Column dataField="state_code" caption="State"/>
                    <Column dataField="ffiec_county_name" caption="County"/>
                    <Column dataField="census_tract" caption="Census Tract"/>
                    <Column dataField="loan_amount" caption="Loan Amount" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="contribution_amount" caption="Contribution Amount" dataType="number" format={{ type: "currency", precision: 0 }}/>
                    <Column dataField="weight" caption="Contribution Weight" dataType="number" calculateDisplayValue={calculatePercentDisplay("weight", 4)}/>
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

                    <Summary calculateCustomSummary={calculateThemeWeightTotal}>
                        <TotalItem column="contribution_amount" summaryType="sum" valueFormat={{ type: "currency", precision:0 }} displayFormat="{0}" dataType="string" alignment="left"/>
                        
                        <TotalItem column="ahr_contribution" summaryType="sum" valueFormat={{ type: "currency", precision:0 }} displayFormat="{0}" dataType="string" alignment="left"/>
                        <TotalItem column="ahou_contribution" summaryType="sum" valueFormat={{ type: "currency", precision:0 }} displayFormat="{0}" dataType="string" alignment="left"/>
                        <TotalItem column="agr_contribution" summaryType="sum" valueFormat={{ type: "currency", precision:0 }}  displayFormat="{0}" dataType="string" alignment="left"/>
                        <TotalItem column="art_cul_contribution" summaryType="sum" valueFormat={{ type: "currency", precision:0 }}  displayFormat="{0}" dataType="string" alignment="left"/>
                        <TotalItem column="dis_rec_contribution" summaryType="sum" valueFormat={{ type: "currency", precision:0 }}  displayFormat="{0}" dataType="string" alignment="left"/>
                        <TotalItem column="ec_inc_contribution" summaryType="sum" valueFormat={{ type: "currency", precision:0 }}  displayFormat="{0}" dataType="string" alignment="left"/>
                        <TotalItem column="ed_child_contribution" summaryType="sum" valueFormat={{ type: "currency", precision:0 }}  displayFormat="{0}" dataType="string" alignment="left"/>
                        <TotalItem column="ent_dev_contribution" summaryType="sum" valueFormat={{ type: "currency", precision:0 }}  displayFormat="{0}" dataType="string" alignment="left"/>
                        <TotalItem column="env_grn_contribution" summaryType="sum" valueFormat={{ type: "currency", precision:0 }}  displayFormat="{0}" dataType="string" alignment="left"/>
                        <TotalItem column="gen_lens_contribution" summaryType="sum" valueFormat={{ type: "currency", precision:0 }}  displayFormat="{0}" dataType="string" alignment="left"/>
                        <TotalItem column="hea_contribution" summaryType="sum" valueFormat={{ type: "currency", precision:0 }}  displayFormat="{0}" dataType="string" alignment="left"/>
                        <TotalItem column="hud_des_contribution" summaryType="sum" valueFormat={{ type: "currency", precision:0 }}  displayFormat="{0}" dataType="string" alignment="left"/>
                        <TotalItem column="hcp_contribution" summaryType="sum" valueFormat={{ type: "currency", precision:0 }}  displayFormat="{0}" dataType="string" alignment="left"/>
                        <TotalItem column="min_nei_contribution" summaryType="sum" valueFormat={{ type: "currency", precision:0 }}  displayFormat="{0}" dataType="string" alignment="left"/>
                        <TotalItem column="revit_contribution" summaryType="sum" valueFormat={{ type: "currency", precision:0 }}  displayFormat="{0}" dataType="string" alignment="left"/>
                        <TotalItem column="rural_contribution" summaryType="sum" valueFormat={{ type: "currency", precision:0 }}  displayFormat="{0}" dataType="string" alignment="left"/>
                        <TotalItem column="sen_dis_contribution" summaryType="sum" valueFormat={{ type: "currency", precision:0 }}  displayFormat="{0}" dataType="string" alignment="left"/>
                        <TotalItem column="tod_contribution" summaryType="sum" valueFormat={{ type: "currency", precision:0 }}  displayFormat="{0}" dataType="string" alignment="left"/>
                        <TotalItem column="mcares_contribution" summaryType="sum" valueFormat={{ type: "currency", precision:0 }}  displayFormat="{0}" dataType="string" alignment="left"/>
                        <TotalItem column="covid_contribution" summaryType="sum" valueFormat={{ type: "currency", precision:0 }}  displayFormat="{0}" dataType="string" alignment="left"/>
                        <TotalItem column="sust_comm_contribution" summaryType="sum" valueFormat={{ type: "currency", precision:0 }}  displayFormat="{0}" dataType="string" alignment="left"/>
                        <TotalItem column="human_emp_contribution" summaryType="sum" valueFormat={{ type: "currency", precision:0 }}  displayFormat="{0}" dataType="string" alignment="left"/>
                        <TotalItem column="theme_contribution_total" summaryType="sum" valueFormat={{ type: "currency", precision:0 }}  displayFormat="{0}" dataType="string" alignment="left"/>
                        
                        <TotalItem column="ahr_weight" summaryType="sum"  customizeText={calculateTotalPercentDisplay} dataType="string" alignment="left"/>
                        <TotalItem column="ahou_weight" summaryType="sum" customizeText={calculateTotalPercentDisplay} dataType="string" alignment="left"/>
                        <TotalItem column="agr_weight" summaryType="sum" customizeText={calculateTotalPercentDisplay} dataType="string" alignment="left"/>
                        <TotalItem column="art_cul_weight" summaryType="sum" customizeText={calculateTotalPercentDisplay} dataType="string" alignment="left"/>
                        <TotalItem column="dis_rec_weight" summaryType="sum" customizeText={calculateTotalPercentDisplay} dataType="string" alignment="left"/>
                        <TotalItem column="ec_inc_weight" summaryType="sum" customizeText={calculateTotalPercentDisplay} dataType="string" alignment="left"/>
                        <TotalItem column="ed_child_weight" summaryType="sum" customizeText={calculateTotalPercentDisplay} dataType="string" alignment="left"/>
                        <TotalItem column="ent_dev_weight" summaryType="sum" customizeText={calculateTotalPercentDisplay} dataType="string" alignment="left"/>
                        <TotalItem column="env_grn_weight" summaryType="sum" customizeText={calculateTotalPercentDisplay} dataType="string" alignment="left"/>
                        <TotalItem column="gen_lens_weight" summaryType="sum" customizeText={calculateTotalPercentDisplay} dataType="string" alignment="left"/>
                        <TotalItem column="hea_weight" summaryType="sum" customizeText={calculateTotalPercentDisplay} dataType="string" alignment="left"/>
                        <TotalItem column="hud_des_weight" summaryType="sum" customizeText={calculateTotalPercentDisplay} dataType="string" alignment="left"/>
                        <TotalItem column="hcp_weight" summaryType="sum" customizeText={calculateTotalPercentDisplay} dataType="string" alignment="left"/>
                        <TotalItem column="min_nei_weight" summaryType="sum" customizeText={calculateTotalPercentDisplay} dataType="string" alignment="left"/>
                        <TotalItem column="revit_weight" summaryType="sum" customizeText={calculateTotalPercentDisplay} dataType="string" alignment="left"/>
                        <TotalItem column="rural_weight" summaryType="sum" customizeText={calculateTotalPercentDisplay} dataType="string" alignment="left"/>
                        <TotalItem column="sen_dis_weight" summaryType="sum" customizeText={calculateTotalPercentDisplay} dataType="string" alignment="left"/>
                        <TotalItem column="tod_weight" summaryType="sum" customizeText={calculateTotalPercentDisplay} dataType="string" alignment="left"/>
                        <TotalItem column="mcares_weight" summaryType="sum" customizeText={calculateTotalPercentDisplay} dataType="string" alignment="left"/>
                        <TotalItem column="covid_weight" summaryType="sum" customizeText={calculateTotalPercentDisplay} dataType="string" alignment="left"/>
                        <TotalItem column="sust_comm_weight" summaryType="sum" customizeText={calculateTotalPercentDisplay} dataType="string" alignment="left"/>
                        <TotalItem column="human_emp_weight" summaryType="sum" customizeText={calculateTotalPercentDisplay} dataType="string" alignment="left"/>
                    
                    </Summary>
                </DataGrid>
            </div>
        </div>
    );
}