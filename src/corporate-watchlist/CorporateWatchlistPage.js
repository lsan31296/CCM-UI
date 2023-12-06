/**
 * This page will be responsible for rendering a data grid with update, add and delete features in order to
 * show company's watchlist for corporations, impact and various other themes. Still a work in progress and just an
 * idea from Andy currently. Should have the following columns(for now):
 *  Issuer, Cusip, Reason, Action, To-Do
 */

import { DataGrid } from "devextreme-react";
import { Column, Editing, FilterRow, HeaderFilter } from "devextreme-react/data-grid";
import { useRef, useState } from "react"

export default function CorporateWatchlistPage() {
    const [corpWatchlistData, setCorpWatchlistData] = useState([{
        issuer: "Sample Issuer",
        cusip: "Sample CUSIP",
        reason: "Sample ReAsOn",
        action: "AcTiOn",
        todo: "Things to do"
    }]);//Definitely needs to be stored in a database somewhere as it will not hold data after every refresh
    const dataGrid = useRef(null);



    return (
        <div id="corporate-watchlist-page-container">
            <h1>Corporate Watchlist Page</h1>

            <DataGrid dataSource={corpWatchlistData} showBorders allowColumnReordering allowColumnResizing showColumnLines 
                rowAlternationEnabled hoverStateEnabled height="80vh" 
            >
                <HeaderFilter visible />
                <FilterRow visible />
                <Editing mode="cell" allowAdding allowDeleting allowUpdating confirmDelete/>
                <Column dataField="issuer" caption="Issuer"/>
                <Column dataField="cusip" caption="Cusip"/>
                <Column dataField="reason" caption="Reason"/>
                <Column dataField="action" caption="Action"/>
                <Column dataField="todo" caption="To-Do"/>
            </DataGrid>
        </div>
    )
}