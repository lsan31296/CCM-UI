/**
 * Responsible for displaying a Data Grid that has updateable cells, for which other cells are then
 * calculated and displayed in conjunction. These input cells will also be saved after hitting a 'Run' button.
 */

export default function PortfolioTargetsPage({...props}) {

    return (
        <div id="portfolio-targets-page-container">
            <h1>Portfolio Targets</h1>
            <form id="portfolio-targets-form">

                {/*<div className="container">*/}


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
                    <label htmlFor="activeOadTarget" className="col-form-label col-1">Target</label>
                    <div className="col-1">
                        <input className="form-control" id="activeAodTarget" name="activeOadTarget" placeholder="Ex 0.00" disabled />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDTarget6M" name="activeKRDTarget6M" placeholder="Ex 0.00" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDTarget1Y" name="activeKRDTarget1Y" placeholder="4" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDTarget2Y" name="activeKRDTarget2Y" placeholder="5" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDTarget3Y" name="activeKRDTarget3Y" placeholder="6" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDTarget5Y" name="activeKRDTarget5Y" placeholder="7" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDTarget7Y" name="activeKRDTarget7Y" placeholder="8" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDTarget10Y" name="activeKRDTarget10Y" placeholder="9" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDTarget20Y" name="activeKRDTarget20Y" placeholder="10" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDTarget30Y" name="activeKRDTarget30Y" placeholder="11" />
                    </div>

                </div>

                <div className="row" id="min-tolerance-row">
                    <label htmlFor="activeOadMinTolerance" className="col-form-label col-1">Min Tolerance</label>
                    <div className="col-1">
                        <input className="form-control" id="activeAodMinTolerance" name="activeOadMinTolerance" placeholder="Ex -0.03" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMinTolerance6M" name="activeKRDMinTolerance6M" placeholder="Ex -0.03" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMinTolerance1Y" name="activeKRDMinTolerance1Y" placeholder="4" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMinTolerance2Y" name="activeKRDMinTolerance2Y" placeholder="5" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMinTolerance3Y" name="activeKRDMinTolerance3Y" placeholder="6" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMinTolerance5Y" name="activeKRDMinTolerance5Y" placeholder="7" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMinTolerance7Y" name="activeKRDMinTolerance7Y" placeholder="8" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMinTolerance10Y" name="activeKRDMinTolerance10Y" placeholder="9" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMinTolerance20Y" name="activeKRDMinTolerance20Y" placeholder="10" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMinTolerance30Y" name="activeKRDMinTolerance30Y" placeholder="11" />
                    </div>

                </div>

                <div className="row" id="max-tolerance-row">
                    <label htmlFor="activeOadMaxTolerance" className="col-form-label col-1">Max Tolerance</label>
                    <div className="col-1">
                        <input className="form-control" id="activeAodMaxTolerance" name="activeOadMaxTolerance" placeholder="Ex 0.03" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMaxTolerance6M" name="activeKRDMaxTolerance6M" placeholder="Ex 0.03" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMaxTolerance1Y" name="activeKRDMaxTolerance1Y" placeholder="4" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMaxTolerance2Y" name="activeKRDMaxTolerance2Y" placeholder="5" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMaxTolerance3Y" name="activeKRDMaxTolerance3Y" placeholder="6" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMaxTolerance5Y" name="activeKRDMaxTolerance5Y" placeholder="7" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMaxTolerance7Y" name="activeKRDMaxTolerance7Y" placeholder="8" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMaxTolerance10Y" name="activeKRDMaxTolerance10Y" placeholder="9" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMaxTolerance20Y" name="activeKRDMaxTolerance20Y" placeholder="10" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMaxTolerance30Y" name="activeKRDMaxTolerance30Y" placeholder="11" />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="" name="" placeholder="12" />
                    </div>
                </div>

                <div className="row" id="min-row">
                    <label htmlFor="activeOadMin" className="col-form-label col-1">Min</label>
                    <div className="col-1">
                        <input className="form-control" id="activeOadMin" name="activeOadMin" placeholder="Ex -0.03" disabled />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMin6M" name="activeKRDMin6M" placeholder="Ex -0.03" disabled/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMin1Y" name="activeKRDMin1Y" placeholder="4" disabled/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMin2Y" name="activeKRDMin2Y" placeholder="5" disabled/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMin3Y" name="activeKRDMin3Y" placeholder="6" disabled/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMin5Y" name="activeKRDMin5Y" placeholder="7" disabled/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMin5Y" name="activeKRDMin7Y" placeholder="8" disabled/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMin10Y" name="activeKRDMin10Y" placeholder="9" disabled/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMin20Y" name="activeKRDMin20Y" placeholder="10" disabled/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMin30Y" name="activeKRDMin30Y" placeholder="11" disabled/>
                    </div>

                </div>

                <div className="row" id="max-row">
                    <label htmlFor="activeOadMax" className="col-form-label col-1">Max</label>
                    <div className="col-1">
                        <input className="form-control" id="activeOadMax" name="activeOadMax" placeholder="Ex 0.03" disabled />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMax6M" name="activeKRDMax6M" placeholder="Ex 0.03" disabled />
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMax1Y" name="activeKRDMax1Y" placeholder="4" disabled/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMax2Y" name="activeKRDMax2Y" placeholder="5" disabled/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMax3Y" name="activeKRDMax3Y" placeholder="6" disabled/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMax5Y" name="activeKRDMax5Y" placeholder="7" disabled/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMax7Y" name="activeKRDMax7Y" placeholder="8" disabled/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMax10Y" name="activeKRDMax10Y" placeholder="9" disabled/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMax20Y" name="activeKRDMax20Y" placeholder="10" disabled/>
                    </div>

                    <div className="col-1">
                        <input className="form-control" id="activeKRDMax30Y" name="activeKRDMax30Y" placeholder="11" disabled/>
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
                        <input className="form-control" id="sectorAllocationTarget" name="sectorAllocationTarget" placeholder="Ex 5%"/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationABS" name="sectorAllocationABS" placeholder="Ex 5%"/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationCash" name="sectorAllocationCash" placeholder="Ex 5%"/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationCorporate" name="sectorAllocationCorporate" placeholder="Ex 5%"/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationGovt" name="sectorAllocationGovt" placeholder="Ex 5%"/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMultiFamMBS" name="sectorAllocationMultiFamMBS" placeholder="Ex 5%"/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMuni" name="sectorAllocationMuni" placeholder="Ex 5%"/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationSingleFamMBS" name="sectorAllocationSingleFamMBS" placeholder="Ex 5%"/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationSingleTotal" name="sectorAllocationTotal" placeholder="Ex 5%" disabled/>
                    </div>
                </div>

                <div className="row" id="sector-allocation-min-tolerance-row">
                    <label htmlFor="sectorAllocationMinTolerance" className="col-form-label col-1">Min Tolerance</label>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMinTolerance" name="sectorAllocationMinTolerance" placeholder="Ex 5%"/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationABS" name="sectorAllocationABS" placeholder="Ex 5%"/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationCash" name="sectorAllocationCash" placeholder="Ex 5%"/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationCorporate" name="sectorAllocationCorporate" placeholder="Ex 5%"/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationGovt" name="sectorAllocationGovt" placeholder="Ex 5%"/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMultiFamMBS" name="sectorAllocationMultiFamMBS" placeholder="Ex 5%"/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMuni" name="sectorAllocationMuni" placeholder="Ex 5%"/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationSingleFamMBS" name="sectorAllocationSingleFamMBS" placeholder="Ex 5%"/>
                    </div>
                </div>

                <div className="row" id="sector-allocation-max-tolerance-row">
                    <label htmlFor="sectorAllocationMaxTolerance" className="col-form-label col-1">Max Tolerance</label>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMaxTolerance" name="sectorAllocationMaxTolerance" placeholder="Ex 5%"/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationABS" name="sectorAllocationABS" placeholder="Ex 5%"/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationCash" name="sectorAllocationCash" placeholder="Ex 5%"/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationCorporate" name="sectorAllocationCorporate" placeholder="Ex 5%"/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationGovt" name="sectorAllocationGovt" placeholder="Ex 5%"/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMultiFamMBS" name="sectorAllocationMultiFamMBS" placeholder="Ex 5%"/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMuni" name="sectorAllocationMuni" placeholder="Ex 5%"/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationSingleFamMBS" name="sectorAllocationSingleFamMBS" placeholder="Ex 5%"/>
                    </div>
                </div>

                <div className="row" id="sector-allocation-min-row">
                    <label htmlFor="sectorAllocationMin" className="col-form-label col-1">Min</label>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMin" name="sectorAllocationMin" placeholder="Ex 5%" disabled/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationABS" name="sectorAllocationABS" placeholder="Ex 5%" disabled/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationCash" name="sectorAllocationCash" placeholder="Ex 5%" disabled/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationCorporate" name="sectorAllocationCorporate" placeholder="Ex 5%" disabled/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationGovt" name="sectorAllocationGovt" placeholder="Ex 5%" disabled/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMultiFamMBS" name="sectorAllocationMultiFamMBS" placeholder="Ex 5%" disabled/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMuni" name="sectorAllocationMuni" placeholder="Ex 5%" disabled/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationSingleFamMBS" name="sectorAllocationSingleFamMBS" placeholder="Ex 5%" disabled/>
                    </div>
                </div>

                <div className="row" id="sector-allocation-max-row">
                    <label htmlFor="sectorAllocationMax" className="col-form-label col-1">Max</label>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMax" name="sectorAllocationMax" placeholder="Ex 5%" disabled/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationABS" name="sectorAllocationABS" placeholder="Ex 5%" disabled/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationCash" name="sectorAllocationCash" placeholder="Ex 5%" disabled/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationCorporate" name="sectorAllocationCorporate" placeholder="Ex 5%" disabled/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationGovt" name="sectorAllocationGovt" placeholder="Ex 5%" disabled/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMultiFamMBS" name="sectorAllocationMultiFamMBS" placeholder="Ex 5%" disabled/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationMuni" name="sectorAllocationMuni" placeholder="Ex 5%" disabled/>
                    </div>
                    <div className="col-1">
                        <input className="form-control" id="sectorAllocationSingleFamMBS" name="sectorAllocationSingleFamMBS" placeholder="Ex 5%" disabled/>
                    </div>
                </div>
                {/*</div>*/}



            </form>
            
        </div>
    )
}