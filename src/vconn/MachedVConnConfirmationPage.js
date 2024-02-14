import DataGrid, { Column, Paging, HeaderFilter, FilterRow, Pager, ColumnFixing } from 'devextreme-react/data-grid';
import { useCallback, useEffect, useState } from 'react';
import { getMatchingVConnTradeConfirmation } from '../utils/api';
import { dateFormatter, sqlDateToDateString, today } from '../utils/helperFunctions';

export default function MatchedVConnConfirmationPage({...props}) {
    const date = sqlDateToDateString(today());
    const [ vConnConfirmationData, setVConnConfirmationData ] = useState(null);

    /* HOOK FUNCTIONS AND useEffect */
    async function loadMatchedVConnConfirmation() {
        console.log("Loading Matched VConnConfirmation Trades!");
        const abortController = new AbortController();

        const response = await getMatchingVConnTradeConfirmation({ currDate: date });
        setVConnConfirmationData(response);
        if (response.length === 0) {
            alert(`There are not trades for ${date}`);
        }
        return () => abortController.abort();
    }

    useEffect(() => {loadMatchedVConnConfirmation()}, [date]);

    /*CONDITIONAL RENDERING/FORMATTING OD CELLS OR CELL STYLES */
    const renderMatchCellValue = useCallback((rowData) => {
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
    })
    const handleApproveAllHeaderRender = useCallback((columnData) => {
        //console.log("handleApproveAllHeaderRender: ", columnData)
        return (
            <div id='approve-column-header'>
                Approve
                <button id='approve-column-button' className='btn btn-primary btn-sm' type='button'>All</button>
                
            </div>
        );
    })

    return (
        <div id="matched-vconn-confirmation-page-container">
            <div className="row" id="page-title">
                <h1 className="col">Matched Bloomberg Trade Confirmation Page</h1>
            </div>
            <div id='matched-vconn-data-grid-container'>
            <DataGrid dataSource={vConnConfirmationData} showBorders showRowLines showColumnLines hoverStateEnabled
                    keyExpr="fillID" allowColumnResizing columnAutoWidth height="83vh"
                >
                    <ColumnFixing enabled={true} />
                    <HeaderFilter visible={true} />
                    <FilterRow visible={true} />
                    <Paging defaultPageSize={100} />
                    <Pager showPageSizeSelector showNavigationButtons allowedPageSizes={[10, 50, 100, 500, 1000]} showInfo />
                    <Column dataField='fillID' caption='Fill ID' />
                    <Column dataField='vConnMatch' caption='Approve' fixed fixedPosition='left' headerCellRender={handleApproveAllHeaderRender}
                        allowSorting={false} 
                    />
                    <Column caption='Match'  calculateCellValue={renderMatchCellValue} />
                    <Column dataField='c_TradeOrderId' caption='Order ID' />
                    <Column dataField='cusip' caption='Cusip' />
                    <Column dataField='securityType' caption='Security Type' />
                    <Column dataField='b_TxnType' caption='b_Side'  />
                    <Column dataField='c_TxnType' caption='c_Side' />
                    <Column dataField='b_TradeDate' caption='b_TradeDate'  calculateDisplayValue={(data) => sqlDateToDateString(dateFormatter(data.b_TradeDate))} />
                    <Column dataField='b_SettleDate' caption='b_SettleDate'  calculateDisplayValue={(data) => sqlDateToDateString(dateFormatter(data.b_SettleDate))} />
                    <Column dataField='c_TradeDate' caption='c_TradeDate'  calculateDisplayValue={(data) => sqlDateToDateString(dateFormatter(data.c_TradeDate))} />
                    <Column dataField='c_SettleDate' caption='c_SettleDate'  calculateDisplayValue={(data) => sqlDateToDateString(dateFormatter(data.c_SettleDate))} />
                    <Column dataField='b_AccruedInterest' caption='b_Accrued'  format={{ type: "currency", precision: 4 }}/>
                    <Column dataField='c_AccruedInterest' caption='c_Accrued' format={{ type: "currency", precision: 4 }}/>
                    <Column dataField='b_Price' caption='b_Price'  format={{ type: "currency", precision: 6 }}/>
                    <Column dataField='c_Price' caption='c_Price'  format={{ type: "currency", precision: 6 }}/>
                    <Column dataField='b_Factor' caption='b_Factor' />
                    <Column dataField='c_Factor' caption='c_Factor' />
                    <Column dataField='b_Quantity' caption='b_Quantity'  format={{ type: "currency", precision: 2 }}/>
                    <Column dataField='c_Quantity' caption='c_Quantity'  format={{ type: "currency", precision: 2 }}/>
                    <Column dataField='b_CurrentFace' caption='b_CurrentFace'  format={{ type: "currency", precision: 2 }}/>
                    <Column dataField='c_Face' caption='c_Face'  format={{ type: "currency", precision: 2 }}/>
                    <Column dataField='b_Principal' caption='b_Principal'  format={{ type: "currency", precision: 2 }}/>
                    <Column dataField='c_Principal' caption='c_Principal'  format={{ type: "currency", precision: 2 }}/>
                    <Column dataField='b_dealerTicker' caption='b_DealerTicker' />
                    <Column dataField='c_dealerTicker' caption='c_DealerTicker' />
                    <Column dataField='b_Broker' caption='b_Broker' />
                    <Column dataField='b_BrokerName' caption='b_BrokerName' />
                    <Column dataField='b_DirAlias' caption='b_DirAlias' />
                    <Column dataField='platform' caption='Platform' />
                    <Column dataField='app' caption='App' />
                    <Column dataField='fileName' caption='Filename' />
                </DataGrid>
            </div>
        </div>
    );
}