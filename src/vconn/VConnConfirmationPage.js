/**
 * This component is responsible for displaying the DataGrid will confirm whether the Carlton data is matching 
 * up with the data from BBG. Using pulls from two places and placing synonymous columns together will allow
 * for the user to compare quickly and decide whether or not to Autofill or have it done Manually. Conditional
 * styling will be used to determine quickly if an account is a match to the BBG data. Note that BBG is read only
 * whereas Carlton is the data we can change through the editable fields of the DataGrid.
 */
import { Button } from 'devextreme-react/button';
import DataGrid, { Column, Editing, Paging, Lookup } from 'devextreme-react/data-grid';
import { Col } from 'devextreme-react/responsive-box';

export default function VConnConfirmationPage({...props}) {
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


    return (
        <div id='vconn-confirmation-page-container' style={{ padding: "0% 1% 0% 1%"}} >
            <h1>VConn Confirmation Page</h1>
            <div id='vconn-data-grid-container'>
                <DataGrid dataSource={data} showBorders showRowLines showColumnLines hoverStateEnabled 
                    keyExpr="Id" allowColumnReordering allowColumnResizing 
                >

                <Editing 
                    mode='row' allowUpdating allowAdding allowDeleting
                />
                <Column dataField='Id' caption='ID'/>
                <Column dataField='Autofill' caption='AutoFill'/>
                <Column dataField='Match'/>
                <Column dataField='OrderId'/>
                <Column dataField='Cusip'/>
                <Column dataField='b_Side'/>
                <Column dataField='c_Side'/>
                <Column dataField='b_Face'/>
                <Column dataField='c_Face'/>
                <Column dataField='b_Price'/>
                <Column dataField='c_Price'/>
                <Column dataField='b_TradeDate' dataType='date'/>
                <Column dataField='c_TradeDate' dataType='date'/>
                <Column dataField='b_SettleDate' dataType='date'/>
                <Column dataField='c_SettleDate' dataType='date'/>
                <Column dataField='b_Factor'/>
                <Column dataField='c_Factor'/>
                </DataGrid>
            </div>
        </div>
    )
}