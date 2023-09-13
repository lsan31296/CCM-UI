/*
This component is responsible for rendering a data table component showing all shareholders. 
*/
import "./ShareHolders.css";
import { useEffect, useState } from "react"
import { getAllShareholders } from "../utils/api";
import { dateFormatter, shareholderDateSorterMMDDYYY1, shareholderDateSorterMMDDYYY2, shareholderNameSorter, sqlDateToDateString } from "../utils/helperFunctions";
import CustomLoader from "../components/CustomLoader";
import ExportCSV from "../components/ExportCSV";
import DataTable from "react-data-table-component";

export default function ShareHolders() {
    const [response, setResponse] = useState(null);
    const [pending, setPending] = useState(true);
    const [filteredData, setFilteredData] = useState([]);
    
    async function loadShareholders() {
        console.log("Loading Shareholders!");
        const abortController = new AbortController();
        const res = await getAllShareholders(abortController.signal);
        setResponse(res);
        setFilteredData(res)
        setPending(false);
        return () => abortController.abort();
    }
    useEffect(() => {loadShareholders()}, []);

    const handleFilter = ({target}) => {
        const newTableData = response.filter((row) => {
            return row.account_name.toLowerCase().includes(target.value.toLowerCase()) 
            || row.shareholder_name.toLowerCase().includes(target.value.toLowerCase()) 
            || row.account_number.toString().includes(target.value)
            || row.tracker_id.toString().includes(target.value)
            || row.shareholder_name.toLowerCase().includes(target.value.toLowerCase())
            || row.shareholder_subtype.toLowerCase().includes(target.value.toLowerCase());
        })
        setFilteredData(newTableData);
    }

    const columnHeaders = [
        {
            name: <div>Account</div>,
            selector: row => row.account_name,
            center: true,
            compact: true,
            maxWidth: '280px',
            reorder: true,
            sortable: true,
            sortFunction: shareholderNameSorter,
        },
        {
            name: <div>Number</div>,
            selector: row => row.account_number,
            center: true,
            compact: true,
            maxWidth: '100px',
            reorder: true,
            sortable: true,
        },
        {
            name: <div>Ticker</div>,
            selector: row => row.account_ticker,
            center: true,
            compact: true,
            maxWidth: '100px',
            reorder: true,
        },
        {
            name: <div>Represent Client</div>,
            selector: (row,index) => <input className="form-check-input" type="checkbox" value="" disabled checked={row.assessment_represent_client === true ? true : false }/>,
            center: true,
            compact: true,
            maxWidth: '100px',
            reorder: true,
        },
        {
            name: <div>Open Date</div>,
            selector: row => sqlDateToDateString(dateFormatter(row.open_date)),
            center: true,
            compact: true,
            maxWidth: '100px',
            reorder: true,
            sortable: true,
            sortFunction: shareholderDateSorterMMDDYYY1,
            conditionalCellStyles: [
                {
                    when: (row) => (row.open_date.includes("0001-01-01")),
                    style: {
                        color: "transparent"
                    }
                }
            ]
        },
        {
            name: <div>Close Date</div>,
            selector: row => sqlDateToDateString(dateFormatter(row.close_date)),
            center: true,
            compact: true,
            maxWidth: '100px',
            reorder: true,
            sortable: true,
            sortFunction: shareholderDateSorterMMDDYYY2,
            conditionalCellStyles: [
                {
                    when: (row) => (row.close_date.includes("0001-01-01")),
                    style: {
                        color: "transparent"
                    }
                }
            ]
        },
        {
            name: <div>Primary Relationship Mgr</div>,
            selector: row => row.primary_relationship_manager,
            center: true,
            compact: true,
            maxWidth: '110px',
            wrap: true,
            reorder: true,
        },
        {
            name: <div>Secondary Relationship Mgr</div>,
            selector: row => row.secondary_relationship_manager,
            center: true,
            compact: true,
            maxWidth: '110px',
            wrap: true,
            reorder: true,
        },
        {
            name: <div>Shareholder</div>,
            selector: row => row.shareholder_name,
            center: true,
            compact: true,
            maxWidth: '250px',
            wrap: true,
            reorder: true,
        },
        {
            name: <div>Subtype</div>,
            selector: row => row.shareholder_subtype,
            //center: true,
            compact: true,
            maxWidth: '120px',
            reorder: true,
            wrap: true,
        },
        {
            name: <div>Targeting Text</div>,
            selector: row => row.targeting_text,
            center: true,
            compact: true,
            maxWidth: '350px',
            wrap: true,
            reorder: true,
        },
        {
            name: <div>Tracker id</div>,
            selector: row => row.tracker_id,
            center: true,
            compact: true,
            maxWidth: '100px',
            reorder: true,
            sortable: true,
        },
    ];

    return (
        <div id="shareholder-data-table-container">
            <ExportCSV id={"shareholders-export"} csvData={response} fileName={`ShareholdersTable}`} />
            <input id="filter-bar" placeholder="Filter..." type="text" onChange={handleFilter} />
            <DataTable
                title={<div style={{ display: "flex", justifyContent: "space-between" }}> <h3 style={{ color: "black" }}>Shareholders View</h3> </div>}
                columns={columnHeaders}
                data={filteredData}
                highlightOnHover
                striped
                //customStyles={customStyles}
                //conditionalRowStyles={conditionalRowStyles}
                fixedHeader //fixedHeaderScrollHeight="710px"
                //onRowDoubleClicked={handleDoubleClick}
                pagination paginationPerPage={10000}
                paginationRowsPerPageOptions={[100, 200, 300, 400, 500, 1000, 10000]}
                paginationComponentOptions={{ selectAllRowsItem: true, selectAllRowsItemText: "All" }}
                progressPending={pending} progressComponent={<CustomLoader />}
            />
        </div>
    )
}