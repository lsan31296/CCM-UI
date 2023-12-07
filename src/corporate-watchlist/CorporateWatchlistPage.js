/**
 * This page will be responsible for rendering a data grid with update, add and delete features in order to
 * show company's watchlist for corporations, impact and various other themes. Still a work in progress and just an
 * idea from Andy currently. Should have the following columns(for now):
 *  Issuer, Cusip, Reason, Action, To-Do
 */

import { DataGrid } from "devextreme-react";
import { Column, Editing, FilterRow, HeaderFilter } from "devextreme-react/data-grid";
import { useEffect, useState } from "react"
import { getWatchlistRecords, updateWatchListRecords } from "../utils/api";

export default function CorporateWatchlistPage({...props}) {
    const [corpWatchlistData, setCorpWatchlistData] = useState(null);
    const [updatedRows, setUpdatedRows] = useState([]);
    

    async function loadCorporateWatchlist() {
        console.log("Loading Corporate Watchlist records!");
        const abortController = new AbortController();
        const response = await getWatchlistRecords();
        setCorpWatchlistData([...response]);

        return () => abortController.abort();
    }
    useEffect(() => {loadCorporateWatchlist()}, []);

    const handleAfterSave = (e) => {
        console.log("Saved the following record", e.changes[0]);

        corpWatchlistData.find((element, i) => {
            if (element.cusip === e.changes[0].key) {
                const updatedData = [...corpWatchlistData];
                updatedData[i] = e.changes[0].data;
                console.log("Updated Record: ", e.changes[0].data);
                const tempObj = e.changes[0].data;
                setUpdatedRows([...updatedRows, tempObj]);
                setCorpWatchlistData([...updatedData]);
            }
        });
        /*
        if(!updatedRow) {
            alert(`Error. Row was not found when searched by Cusip!`);
            return;
        }
        */
        console.log("Updated row successfully!");
    }

    const handleSubmitUpdateClick = async () => {
        console.log("Submitted following changes: ", updatedRows);
        const recordsUpdated = await updateWatchListRecords([...updatedRows]);
        if (recordsUpdated > 0) {
            alert(`${recordsUpdated} records were updated!`);
            return;
        }
    }

    return (
        <div id="corporate-watchlist-page-container">
            <div className="row">
                <h1 className="col">Corporate Watchlist Page</h1>
                <div id="button container" className="col-1">
                    <button style={{ float: "right" }} className="btn btn-sm btn-primary" type="button" onClick={handleSubmitUpdateClick}>Submit</button>
                </div>
            </div>
            <DataGrid dataSource={corpWatchlistData} showBorders allowColumnReordering allowColumnResizing showColumnLines 
                rowAlternationEnabled hoverStateEnabled height="80vh" onSaved={handleAfterSave} keyExpr="cusip"
            >
                <HeaderFilter visible />
                <FilterRow visible />
                <Editing mode="cell" allowAdding allowDeleting allowUpdating confirmDelete/>
                <Column dataField="issuer" caption="Issuer"/>
                <Column dataField="cusip" caption="Cusip" allowEditing={false}/>
                <Column dataField="reason" caption="Reason"/>
                <Column dataField="action" caption="Action"/>
                <Column dataField="toDo" caption="To-Do"/>
            </DataGrid>
        </div>
    )
}