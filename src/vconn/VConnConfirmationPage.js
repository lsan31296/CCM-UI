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
import { getVConnTradeConfirmation } from '../utils/api';
import { dateFormatter, sqlDateToDateString } from '../utils/helperFunctions';

export default function VConnConfirmationPage({...props}) {
    const [vConnConfirmationData, setVConnConfirmationData] = useState(null);
    const date = "2023-11-13";
    const data = [
        {
            Id: 1,
            Autofill: "Yes/No",
            Match: "False",
            OrderId: 1111,
            Cusip: "91282CJJ1",
            b_Side: "Buy",
            c_Side: "Buy",
            b_Face: 349000,
            c_Face: 20000,
            b_Price: 100.46,
            c_Price: 100.4453,
            b_TradeDate: "11/17/2023",
            c_TradeDate: "11/17/2023",
            b_SettleDate: "11/20/2023",
            c_SettleDate: "11/20/2023",
            b_Factor: 1.00,
            c_Factor: 0.98
        },
        {
            Id: 2,
            Autofill: "Yes/No",
            Match: "False",
            OrderId: 2222,
            Cusip: "912810TU2",
            b_Side: "Buy",
            c_Side: "Buy",
            b_Face: 190000,
            c_Face: 190000,
            b_Price: 94.5391,
            c_Price: 94.5391,
            b_TradeDate: "11/17/2023",
            c_TradeDate: "11/17/2023",
            b_SettleDate: "11/20/2023",
            c_SettleDate: "11/20/2023",
            b_Factor: 1.00,
            c_Factor: 1.00
        },
        {
            Id: 3,
            Autofill: "Yes/No",
            Match: "False",
            OrderId: 3333,
            Cusip: "912810TV0",
            b_Side: "Buy",
            c_Side: "Buy",
            b_Face: 703000,
            c_Face: 703000,
            b_Price: 102.3906,
            c_Price: 102.3906,
            b_TradeDate: "11/17/2023",
            c_TradeDate: "11/17/2023",
            b_SettleDate: "11/20/2023",
            c_SettleDate: "11/20/2023",
            b_Factor: 1.00,
            c_Factor: 1.00
        },
        {
            Id: 4,
            Autofill: "Yes/No",
            Match: "False",
            OrderId: 12345,
            Cusip: "91282CJJ1",
            b_Side: "Buy",
            c_Side: "Buy",
            b_Face: 20000,
            c_Face: 20000,
            b_Price: 100.4453,
            c_Price: 100.4453,
            b_TradeDate: "11/17/2023",
            c_TradeDate: "11/17/2023",
            b_SettleDate: "11/20/2023",
            c_SettleDate: "11/20/2023",
            b_Factor: 1.00,
            c_Factor: 1.00
        }

    ]

    const handleCarltonEditing = (e) => {
        console.log("Event: ", e);
        //For cell mode
        const isEditable = e.column.dataField && (e.column.dataField.startsWith('c') || e.column.dataField.startsWith('v'));
        if (isEditable) console.log(`Column ${e.column.dataField} is editable.`);
        e.column.showEditorAlways = false;
        //e.column.cancel = !isEditable;
        e.column.allowEditing = isEditable;
    };
    async function loadVConnConfirmation() {
        console.log("Loading VConn Confirmation trades!");
        const abortController = new AbortController();

        const response = await getVConnTradeConfirmation({ currDate: date });
        setVConnConfirmationData([...response]);

        return () => abortController.abort();
    }

    useEffect(() => {loadVConnConfirmation()}, [date]);

    return (
        <div id='vconn-confirmation-page-container' style={{ padding: "0% 1% 0% 1%"}} >
            <h1>Bloomberg Trade Confirmation Page</h1>
            <div id='vconn-data-grid-container'>
                <DataGrid dataSource={vConnConfirmationData} showBorders showRowLines showColumnLines hoverStateEnabled
                    keyExpr="c_TradeOrderId" allowColumnReordering allowColumnResizing columnAutoWidth height="83vh"
                    //onEditingStart={handleCarltonEditing}
                >
                    <ColumnFixing enabled={true} />
                    <HeaderFilter visible={true} />
                    <FilterRow visible={true} />
                    <Paging defaultPageSize={50} />
                    <Pager showPageSizeSelector showNavigationButtons allowedPageSizes={[10, 50, 100, 500, 1000]} showInfo />
                    <Editing
                        mode='cell' allowUpdating allowAdding allowDeleting confirmDelete
                    />
                    <Column dataField='' caption='AutoFill' fixed allowEditing={false}/>
                    <Column dataField='vConnMatch' caption='Match' />
                    <Column dataField='c_TradeOrderId' caption='Order ID' allowEditing={false}/>
                    <Column dataField='cusip' caption='Cusip' allowEditing={false}/>
                    <Column dataField='b_TxnType' caption='b_Side' allowEditing={false}/>
                    <Column dataField='c_TxnType' caption='c_Side' />
                    <Column dataField='b_TradeDate' caption='b_TradeDate' allowEditing={false} calculateDisplayValue={(data) => sqlDateToDateString(dateFormatter(data.b_TradeDate))} />
                    <Column dataField='b_SettleDate' caption='b_SettleDate' allowEditing={false} calculateDisplayValue={(data) => sqlDateToDateString(dateFormatter(data.b_SettleDate))} />
                    <Column dataField='c_TradeDate' caption='c_TradeDate' calculateDisplayValue={(data) => sqlDateToDateString(dateFormatter(data.c_TradeDate))} />
                    <Column dataField='c_SettleDate' caption='c_SettleDate' calculateDisplayValue={(data) => sqlDateToDateString(dateFormatter(data.c_SettleDate))} />
                    <Column dataField='b_AccruedInterest' caption='b_Accrued' allowEditing={false}/>
                    <Column dataField='c_AccruedInterest' caption='c_Accrued' />
                    <Column dataField='b_Price' caption='b_Price' allowEditing={false}/>
                    <Column dataField='c_Price' caption='c_Price' />
                    <Column dataField='b_Factor' caption='b_Factor' allowEditing={false}/>
                    <Column dataField='c_Factor' caption='c_Factor' />
                    <Column dataField='b_Quantity' caption='b_Quantity' allowEditing={false}/>
                    <Column dataField='c_Quantity' caption='c_Quantity' />
                    <Column dataField='b_CurrentFace' caption='b_CurrentFace' allowEditing={false}/>
                    <Column dataField='c_Face' caption='c_Face' />
                    <Column dataField='b_Principal' caption='b_Principal' allowEditing={false}/>
                    <Column dataField='c_Principal' caption='c_Principal' />
                    <Column dataField='b_dealerTicker' caption='b_DealerTicker' allowEditing={false}/>
                    <Column dataField='c_dealerTicker' caption='c_DealerTicker' />
                    <Column dataField='b_Broker' caption='b_Broker' allowEditing={false}/>
                    <Column dataField='b_BrokerName' caption='b_BrokerName' allowEditing={false}/>
                    <Column dataField='b_DirAlias' caption='b_DirAlias' allowEditing={false}/>
                    <Column dataField='platform' caption='Platform' />
                    <Column dataField='app' caption='App' allowEditing={false}/>
                    <Column dataField='fileName' caption='Filename' allowEditing={false}/>
                </DataGrid>
            </div>
        </div>
    )
}