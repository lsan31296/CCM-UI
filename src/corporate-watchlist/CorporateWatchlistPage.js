/**
 * This page will be responsible for rendering a data grid with update, add and delete features in order to
 * show company's watchlist for corporations, impact and various other themes. Still a work in progress and just an
 * idea from Andy currently. Should have the following columns(for now):
 *  Issuer, Cusip, Reason, Action, To-Do
 */

import { DataGrid } from "devextreme-react";
import { Column, Editing, FilterRow, HeaderFilter } from "devextreme-react/data-grid";
import { useState } from "react"

export default function CorporateWatchlistPage({...props}) {
    const [corpWatchlistData, setCorpWatchlistData] = useState([{
        issuer: "",
        cusip: "",
        reason: "",
        action: "",
        todo: ""
    }]);


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