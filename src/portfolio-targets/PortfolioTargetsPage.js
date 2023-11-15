/**
 * Responsible for displaying a Data Grid that has updateable cells, for which other cells are then
 * calculated and displayed in conjunction. These input cells will also be saved after hitting a 'Run' button.
 */

import { useState } from "react"

export default function PortfolioTargetsPage({...props}) {
    //DECLARE FORM VARIABLES
    const initialFormState = {
        activeOADTarget: "",
        activeOADMinTolerance: "",
        activeOADMaxTolerance: "",
        activeOADMin: "",
        activeOADMax: "",
        activeKRDTarget6M: "",
        activeKRDMinTolerance6M: "",
        activeKRDMaxTolerance6M: "",
        activeKRDMin6M: "",
        activeKRDMax6M: "",
        activeKRDTarget1Y: "",
        activeKRDMinTolerance1Y: "",
        activeKRDMaxTolerance1Y: "",
        activeKRDMin1Y: "",
        activeKRDMax1Y: "",
        activeKRDTarget2Y: "",
        activeKRDMinTolerance2Y: "",
        activeKRDMaxTolerance2Y: "",
        activeKRDMin2Y: "",
        activeKRDMax2Y: "",
        activeKRDTarget3Y: "",
        activeKRDMinTolerance3Y: "",
        activeKRDMaxTolerance3Y: "",
        activeKRDMin3Y: "",
        activeKRDMax3Y: "",
        activeKRDTarget5Y: "",
        activeKRDMinTolerance5Y: "",
        activeKRDMaxTolerance5Y: "",
        activeKRDMin5Y: "",
        activeKRDMax5Y: "",
        activeKRDTarget7Y: "",
        activeKRDMinTolerance7Y: "",
        activeKRDMaxTolerance7Y: "",
        activeKRDMin7Y: "",
        activeKRDMax7Y: "",
        activeKRDTarget10Y: "",
        activeKRDMinTolerance10Y: "",
        activeKRDMaxTolerance10Y: "",
        activeKRDMin10Y: "",
        activeKRDMax10Y: "",
        activeKRDTarget20Y: "",
        activeKRDMinTolerance20Y: "",
        activeKRDMaxTolerance20Y: "",
        activeKRDMin20Y: "",
        activeKRDMax20Y: "",
        activeKRDTarget30Y: "",
        activeKRDMinTolerance30Y: "",
        activeKRDMaxTolerance30Y: "",
        activeKRDMin30Y: "",
        activeKRDMax30Y: "",
        sectorAllocationTarget: "",
        sectorAllocationMinTolerance: "",
        sectorAllocationMaxTolerance: "",
        sectorAllocationMin: "",
        sectorAllocationMax: "",
        sectorAllocationTargetABS: "",
        sectorAllocationMinToleranceABS: "",
        sectorAllocationMaxToleranceABS: "",
        sectorAllocationMinABS: "",
        sectorAllocationMaxABS: "",
        sectorAllocationTargetCash: "",
        sectorAllocationMinToleranceCash: "",
        sectorAllocationMaxToleranceCash: "",
        sectorAllocationMinCash: "",
        sectorAllocationMaxCash: "",
        sectorAllocationTargetCorporate: "",
        sectorAllocationMinToleranceCorporate: "",
        sectorAllocationMaxToleranceCorporate: "",
        sectorAllocationMinCorporate: "",
        sectorAllocationMaxCorporate: "",
        sectorAllocationTargetGovt: "",
        sectorAllocationMinToleranceGovt: "",
        sectorAllocationMaxToleranceGovt: "",
        sectorAllocationMinGovt: "",
        sectorAllocationMaxGovt: "",
        sectorAllocationTargetMultiFamMBS: "",
        sectorAllocationMinToleranceMultiFamMBS: "",
        sectorAllocationMaxToleranceMultiFamMBS: "",
        sectorAllocationMinMultiFamMBS: "",
        sectorAllocationMaxMultiFamMBS: "",
        sectorAllocationTargetMuni: "",
        sectorAllocationMinToleranceMuni: "",
        sectorAllocationMaxToleranceMuni: "",
        sectorAllocationMinMuni: "",
        sectorAllocationMaxMuni: "",
        sectorAllocationTargetSingleFamMBS: "",
        sectorAllocationMinToleranceSingleFamMBS: "",
        sectorAllocationMaxToleranceSingleFamMBS: "",
        sectorAllocationMinSingleFamMBS: "",
        sectorAllocationMaxSingleFamMBS: "",
        sectorAllocationTotal: "",
    }
    const [formState, setFormState] = useState({...initialFormState});

    //DECLARE EVENT HANDLER FUNCTIONS
    const handleSave = (event) => {
        event.preventDefault();
        console.log("Form State: ", formState)
    }
    const handleInputChange = ({target}) => {
        setFormState({...formState, [target.name]: target.value})
    }

    return (
        <div id="portfolio-targets-page-container">
            <h1>Portfolio Targets</h1>
            <form id="portfolio-targets-form" onSubmit={handleSave}>

                {/*<div className="container">*/}
        <div id="portfolio-target-button-container" style={{ float: "right"}}>
            <button className="btn btn-primary btn-sm">Save</button>
        </div>

                <div className="row" id="header-row">
                    <div className="col-1"></div>
                    <div className="col-1">
                        <h5>Active OAD(bps)</h5>
                    </div>
                    <div className="col-1">
                        <h5>Active KRDs(bps)</h5>
                    </div>
                </div>

                <div className="row" id="subheader-row">
                    <div className="col-2"></div>

                    <div className="col-1">
                        <h6>6M</h6>
                    </div>
                    <div className="col-1">
                        <h6>1Y</h6>
                    </div>
                    <div className="col-1">
                        <h6>2Y</h6>
                    </div>
                    <div className="col-1">
                        <h6>3Y</h6>
                    </div>
                    <div className="col-1">
                        <h6>5Y</h6>
                    </div>
                    <div className="col-1">
                        <h6>7Y</h6>
                    </div>
                    <div className="col-1">
                        <h6>10Y</h6>
                    </div>
                    <div className="col-1">
                        <h6>20Y</h6>
                    </div>
                    <div className="col-1">
                        <h6>30Y</h6>
                    </div>

                </div>

                <div className="row" id="target-row">
                    <label htmlFor="activeOADTarget" className="col-form-label col-1">Target</label>
                    <div className="col-1">
                        <input className="form-control" id="activeAodTarget" name="activeOADTarget" placeholder="Ex 0.00" disabled value={formState.activeOADTarget}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDTarget6M" name="activeKRDTarget6M" placeholder="Ex 0.00" onChange={handleInputChange} value={formState.activeKRDTarget6M}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDTarget1Y" name="activeKRDTarget1Y" placeholder="4" onChange={handleInputChange} value={formState.activeKRDTarget1Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDTarget2Y" name="activeKRDTarget2Y" placeholder="5" onChange={handleInputChange} value={formState.activeKRDTarget2Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDTarget3Y" name="activeKRDTarget3Y" placeholder="6" onChange={handleInputChange} value={formState.activeKRDTarget3Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDTarget5Y" name="activeKRDTarget5Y" placeholder="7" onChange={handleInputChange} value={formState.activeKRDTarget5Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDTarget7Y" name="activeKRDTarget7Y" placeholder="8" onChange={handleInputChange} value={formState.activeKRDTarget7Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDTarget10Y" name="activeKRDTarget10Y" placeholder="9" onChange={handleInputChange} value={formState.activeKRDTarget10Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDTarget20Y" name="activeKRDTarget20Y" placeholder="10" onChange={handleInputChange} value={formState.activeKRDTarget20Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDTarget30Y" name="activeKRDTarget30Y" placeholder="11" onChange={handleInputChange} value={formState.activeKRDTarget30Y}/>
                    </div>

                </div>

                <div className="row" id="min-tolerance-row">
                    <label htmlFor="activeOADMinTolerance" className="col-form-label col-1">Min Tolerance</label>
                    <div className="col-1">
                        <input className="form-control" id="activeAodMinTolerance" name="activeOADMinTolerance" placeholder="Ex -0.03" onChange={handleInputChange} value={formState.activeOADMinTolerance}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMinTolerance6M" name="activeKRDMinTolerance6M" placeholder="Ex -0.03" onChange={handleInputChange} value={formState.activeKRDMinTolerance6M}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMinTolerance1Y" name="activeKRDMinTolerance1Y" placeholder="4" onChange={handleInputChange} value={formState.activeKRDMinTolerance1Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMinTolerance2Y" name="activeKRDMinTolerance2Y" placeholder="5" onChange={handleInputChange} value={formState.activeKRDMinTolerance2Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMinTolerance3Y" name="activeKRDMinTolerance3Y" placeholder="6" onChange={handleInputChange} value={formState.activeKRDMinTolerance3Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMinTolerance5Y" name="activeKRDMinTolerance5Y" placeholder="7" onChange={handleInputChange} value={formState.activeKRDMinTolerance5Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMinTolerance7Y" name="activeKRDMinTolerance7Y" placeholder="8" onChange={handleInputChange} value={formState.activeKRDMinTolerance7Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMinTolerance10Y" name="activeKRDMinTolerance10Y" placeholder="9" onChange={handleInputChange} value={formState.activeKRDMinTolerance10Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMinTolerance20Y" name="activeKRDMinTolerance20Y" placeholder="10" onChange={handleInputChange} value={formState.activeKRDMinTolerance20Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMinTolerance30Y" name="activeKRDMinTolerance30Y" placeholder="11" onChange={handleInputChange} value={formState.activeKRDMinTolerance30Y}/>
                    </div>

                </div>

                <div className="row" id="max-tolerance-row">
                    <label htmlFor="activeOADMaxTolerance" className="col-form-label col-1">Max Tolerance</label>
                    <div className="col-1">
                        <input className="form-control" id="activeAodMaxTolerance" name="activeOADMaxTolerance" placeholder="Ex 0.03" onChange={handleInputChange} value={formState.activeKRDMaxTolerance}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMaxTolerance6M" name="activeKRDMaxTolerance6M" placeholder="Ex 0.03" onChange={handleInputChange} value={formState.activeKRDMaxTolerance6M}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMaxTolerance1Y" name="activeKRDMaxTolerance1Y" placeholder="4" onChange={handleInputChange} value={formState.activeKRDMaxTolerance1Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMaxTolerance2Y" name="activeKRDMaxTolerance2Y" placeholder="5" onChange={handleInputChange} value={formState.activeKRDMaxTolerance2Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMaxTolerance3Y" name="activeKRDMaxTolerance3Y" placeholder="6" onChange={handleInputChange} value={formState.activeKRDMaxTolerance3Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMaxTolerance5Y" name="activeKRDMaxTolerance5Y" placeholder="7" onChange={handleInputChange} value={formState.activeKRDMaxTolerance5Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMaxTolerance7Y" name="activeKRDMaxTolerance7Y" placeholder="8" onChange={handleInputChange} value={formState.activeKRDMaxTolerance7Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMaxTolerance10Y" name="activeKRDMaxTolerance10Y" placeholder="9" onChange={handleInputChange} value={formState.activeKRDMaxTolerance10Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMaxTolerance20Y" name="activeKRDMaxTolerance20Y" placeholder="10" onChange={handleInputChange} value={formState.activeKRDMaxTolerance20Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMaxTolerance30Y" name="activeKRDMaxTolerance30Y" placeholder="11" onChange={handleInputChange} value={formState.activeKRDMaxTolerance30Y}/>
                    </div>

                </div>

                <div className="row" id="min-row">
                    <label htmlFor="activeOADMin" className="col-form-label col-1">Min</label>
                    <div className="col-1">
                        <input className="form-control" id="activeOADMin" name="activeOADMin" placeholder="Ex -0.03" disabled value={formState.activeOADMin}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMin6M" name="activeKRDMin6M" placeholder="Ex -0.03" disabled value={formState.activeKRDMin6M}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMin1Y" name="activeKRDMin1Y" placeholder="4" disabled value={formState.activeKRDMin1Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMin2Y" name="activeKRDMin2Y" placeholder="5" disabled value={formState.activeKRDMin2Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMin3Y" name="activeKRDMin3Y" placeholder="6" disabled value={formState.activeKRDMin3Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMin5Y" name="activeKRDMin5Y" placeholder="7" disabled value={formState.activeKRDMin5Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMin5Y" name="activeKRDMin7Y" placeholder="8" disabled value={formState.activeKRDMin7Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMin10Y" name="activeKRDMin10Y" placeholder="9" disabled value={formState.activeKRDMin10Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMin20Y" name="activeKRDMin20Y" placeholder="10" disabled value={formState.activeKRDMin20Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMin30Y" name="activeKRDMin30Y" placeholder="11" disabled value={formState.activeKRDMin30Y}/>
                    </div>

                </div>

                <div className="row mb-3" id="max-row">
                    <label htmlFor="activeOADMax" className="col-form-label col-1">Max</label>
                    <div className="col-1">
                        <input className="form-control" id="activeOADMax" name="activeOADMax" placeholder="Ex 0.03" disabled value={formState.activeOADMax}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMax6M" name="activeKRDMax6M" placeholder="Ex 0.03" disabled value={formState.activeKRDMax6M}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMax1Y" name="activeKRDMax1Y" placeholder="4" disabled value={formState.activeKRDMax1Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMax2Y" name="activeKRDMax2Y" placeholder="5" disabled value={formState.activeKRDMax2Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMax3Y" name="activeKRDMax3Y" placeholder="6" disabled value={formState.activeKRDMax3Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMax5Y" name="activeKRDMax5Y" placeholder="7" disabled value={formState.activeKRDMax5Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMax7Y" name="activeKRDMax7Y" placeholder="8" disabled value={formState.activeKRDMax7Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMax10Y" name="activeKRDMax10Y" placeholder="9" disabled value={formState.activeKRDMax10Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMax20Y" name="activeKRDMax20Y" placeholder="10" disabled value={formState.activeKRDMax20Y}/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMax30Y" name="activeKRDMax30Y" placeholder="11" disabled value={formState.activeKRDMax30Y}/>
                    </div>

                </div>

                <div className="row" id="sector-allocation-header-row">
                    <div className="col-2">
                        <h5 style={{ float: "right"}}>Sector Allocation %</h5>
                    </div>
                </div>

                <div className="row" id="sector-allocation-subheader-row">
                    <div className="col-2"></div>
                    <div className="col-1">
                        <h6>ABS</h6>
                    </div>
                    <div className="col-1">
                        <h6>Cash</h6>
                    </div>
                    <div className="col-1">
                        <h6>Corporate</h6>
                    </div>
                    <div className="col-1">
                        <h6>Govt</h6>
                    </div>
                    <div className="col-1">
                        <h6>MultiFam MBS</h6>
                    </div>
                    <div className="col-1">
                        <h6>Muni</h6>
                    </div>
                    <div className="col-1">
                        <h6>SingleFam MBS</h6>
                    </div>
                    <div className="col-1">
                        <h6>Total</h6>
                    </div>
                </div>

                <div className="row" id="sector-allocation-target-row">
                    <label htmlFor="sectorAllocationTarget" className="col-form-label col-1">Target</label>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationTarget" name="sectorAllocationTarget" placeholder="Ex 5%"onChange={handleInputChange} value={formState.sectorAllocationTarget}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationTargetABS" name="sectorAllocationTargetABS" placeholder="Ex 5%"onChange={handleInputChange} value={formState.sectorAllocationTargetABS}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationTargetCash" name="sectorAllocationTargetCash" placeholder="Ex 5%"onChange={handleInputChange} value={formState.sectorAllocationTargetCash}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationTargetCorporate" name="sectorAllocationTargetCorporate" placeholder="Ex 5%"onChange={handleInputChange} value={formState.sectorAllocationTargetCorporate}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationTargetGovt" name="sectorAllocationTargetGovt" placeholder="Ex 5%"onChange={handleInputChange} value={formState.sectorAllocationTargetGovt}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationTargetMultiFamMBS" name="sectorAllocationTargetMultiFamMBS" placeholder="Ex 5%"onChange={handleInputChange} value={formState.sectorAllocationTargetMultiFamMBS}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationTargetMuni" name="sectorAllocationTargetMuni" placeholder="Ex 5%"onChange={handleInputChange} value={formState.sectorAllocationTargetMuni}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationTargetSingleFamMBS" name="sectorAllocationTargetSingleFamMBS" placeholder="Ex 5%"onChange={handleInputChange} value={formState.sectorAllocationTargetSingleFamMBS}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationTotal" name="sectorAllocationTotal" placeholder="Ex 5%" disabled value={formState.sectorAllocationTotal}/>
                    </div>
                </div>

                <div className="row" id="sector-allocation-min-tolerance-row">
                    <label htmlFor="sectorAllocationMinTolerance" className="col-form-label col-1">Min Tolerance</label>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMinTolerance" name="sectorAllocationMinTolerance" placeholder="Ex 5%"onChange={handleInputChange} value={formState.sectorAllocationMinTolerance}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMinToleranceABS" name="sectorAllocationMinToleranceABS" placeholder="Ex 5%"onChange={handleInputChange} value={formState.sectorAllocationMinToleranceABS}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMinToleranceCash" name="sectorAllocationMinToleranceCash" placeholder="Ex 5%"onChange={handleInputChange} value={formState.sectorAllocationMinToleranceCash}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMinToleranceCorporate" name="sectorAllocationMinToleranceCorporate" placeholder="Ex 5%"onChange={handleInputChange} value={formState.sectorAllocationMinToleranceCorporate}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMinToleranceGovt" name="sectorAllocationMinToleranceGovt" placeholder="Ex 5%"onChange={handleInputChange} value={formState.sectorAllocationMinToleranceGovt}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMinToleranceMultiFamMBS" name="sectorAllocationMinToleranceMultiFamMBS" placeholder="Ex 5%"onChange={handleInputChange} value={formState.sectorAllocationMinToleranceMultiFamMBS}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMinToleranceMuni" name="sectorAllocationMinToleranceMuni" placeholder="Ex 5%"onChange={handleInputChange} value={formState.sectorAllocationMinToleranceMuni}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMinToleranceSingleFamMBS" name="sectorAllocationMinToleranceSingleFamMBS" placeholder="Ex 5%"onChange={handleInputChange} value={formState.sectorAllocationMinToleranceSingleFamMBS}/>
                    </div>
                </div>

                <div className="row" id="sector-allocation-max-tolerance-row">
                    <label htmlFor="sectorAllocationMaxTolerance" className="col-form-label col-1">Max Tolerance</label>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMaxTolerance" name="sectorAllocationMaxTolerance" placeholder="Ex 5%"onChange={handleInputChange} value={formState.sectorAllocationMaxTolerance}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMaxToleranceABS" name="sectorAllocationMaxToleranceABS" placeholder="Ex 5%"onChange={handleInputChange} value={formState.sectorAllocationMaxToleranceABS}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMaxToleranceCash" name="sectorAllocationMaxToleranceCash" placeholder="Ex 5%"onChange={handleInputChange} value={formState.sectorAllocationMaxToleranceCash}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMaxToleranceCorporate" name="sectorAllocationMaxToleranceCorporate" placeholder="Ex 5%"onChange={handleInputChange} value={formState.sectorAllocationMaxToleranceCorporate}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMaxToleranceGovt" name="sectorAllocationMaxToleranceGovt" placeholder="Ex 5%"onChange={handleInputChange} value={formState.sectorAllocationMaxToleranceGovt}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMaxToleranceMultiFamMBS" name="sectorAllocationMaxToleranceMultiFamMBS" placeholder="Ex 5%"onChange={handleInputChange} value={formState.sectorAllocationMaxToleranceMultiFamMBS}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMaxToleranceMuni" name="sectorAllocationMaxToleranceMuni" placeholder="Ex 5%"onChange={handleInputChange} value={formState.sectorAllocationMaxToleranceMuni}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMaxToleranceSingleFamMBS" name="sectorAllocationMaxToleranceSingleFamMBS" placeholder="Ex 5%"onChange={handleInputChange} value={formState.sectorAllocationMaxToleranceSingleFamMBS}/>
                    </div>
                </div>

                <div className="row" id="sector-allocation-min-row">
                    <label htmlFor="sectorAllocationMin" className="col-form-label col-1">Min</label>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMin" name="sectorAllocationMin" placeholder="Ex 5%" disabled value={formState.sectorAllocationMin}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMinABS" name="sectorAllocationMinABS" placeholder="Ex 5%" disabled value={formState.sectorAllocationMinABS}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMinCash" name="sectorAllocationMinCash" placeholder="Ex 5%" disabled value={formState.sectorAllocationMinCash}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMinCorporate" name="sectorAllocationMinCorporate" placeholder="Ex 5%" disabled value={formState.sectorAllocationMinCorporate}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMinGovt" name="sectorAllocationMinGovt" placeholder="Ex 5%" disabled value={formState.sectorAllocationMinGovt}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMinMultiFamMBS" name="sectorAllocationMinMultiFamMBS" placeholder="Ex 5%" disabled value={formState.sectorAllocationMinMultiFamMBS}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMinMuni" name="sectorAllocationMinMuni" placeholder="Ex 5%" disabled value={formState.sectorAllocationMinMuni}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMinSingleFamMBS" name="sectorAllocationMinSingleFamMBS" placeholder="Ex 5%" disabled value={formState.sectorAllocationMinSingleFamMBS}/>
                    </div>
                </div>

                <div className="row" id="sector-allocation-max-row">
                    <label htmlFor="sectorAllocationMax" className="col-form-label col-1">Max</label>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMax" name="sectorAllocationMax" placeholder="Ex 5%" disabled value={formState.sectorAllocationMax}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMaxABS" name="sectorAllocationMaxABS" placeholder="Ex 5%" disabled value={formState.sectorAllocationMaxABS}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMaxCash" name="sectorAllocationMaxCash" placeholder="Ex 5%" disabled value={formState.sectorAllocationMaxCash}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMaxCorporate" name="sectorAllocationMaxCorporate" placeholder="Ex 5%" disabled value={formState.sectorAllocationMaxCorporate}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMaxGovt" name="sectorAllocationMaxGovt" placeholder="Ex 5%" disabled value={formState.sectorAllocationMaxGovt}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMaxMultiFamMBS" name="sectorAllocationMaxMultiFamMBS" placeholder="Ex 5%" disabled value={formState.sectorAllocationMaxMultiFamMBS}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMaxMuni" name="sectorAllocationMaxMuni" placeholder="Ex 5%" disabled value={formState.sectorAllocationMaxMuni}/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMaxSingleFamMBS" name="sectorAllocationMaxSingleFamMBS" placeholder="Ex 5%" disabled value={formState.sectorAllocationMaxSingleFamMBS}/>
                    </div>
                </div>
                {/*</div>*/}



            </form>
            
        </div>
    )
}