import dayjs from "dayjs";

export function landingPageLinksData1(previousBD) {

    return (
        [
            {
                key: "Risk and Holdings",
                items: [
                    {
                        name: "UI Single Account Holdings Report",
                        description: <div>
                            <p>Sample Link: '/risk/:aoDate/:positionView/:accounts/:aggregateRows'</p>
                            <p>Each variable that has ':' before it is a variable you must insert yourself. The format follows:</p>
                            <ul>
                                <li>aoDate - 'YYYY-MM-DD'</li>
                                <li>positionView - Either 'TD','SD','ID','LT'</li>
                                <li>accounts - 'Ticker', 'Name', 'Portfolio Code. Smart Search feature.</li>
                                <li>aggregateRows - 'n' or 'ys' for no aggregate or aggregation by security group, type and sector.</li>
                            </ul>
                        </div>,
                        link: `/risk/${previousBD}/TD/Archdiocese_of_Boston/ys`,
                        id : "#landing-page-link-ui-single-page-account-holdings-report"
                    },
                    {
                        name: "UI Single Account Single Cusip Holdings Report",
                        description: <div>
                            <p>Sample Link: '/risk/:aoDate/:positionView/:accounts/:aggregateRows/:cusip'</p>
                            <p>Each variable that has ':' before it is a variable you must insert yourself. The format follows:</p>
                            <ul>
                                <li>aoDate - 'YYYY-MM-DD'</li>
                                <li>positionView - Either 'TD','SD','ID','LT'</li>
                                <li>accounts - 'Ticker', 'Name', 'Portfolio Code. Smart Search feature.</li>
                                <li>aggregateRows - 'n' or 'ys' for no aggregate or aggregation by security group, type and sector.</li>
                                <li>cusip - Seven digit cusip, letters in all caps. MUST ADD THIS MANUALLY.</li>
                            </ul>
                        </div>,
                        link: `/risk/${previousBD}/TD/Archdiocese_of_Boston/ys`,
                        id: "#landing-page-link-ui-single-page-account-single-cusip-holdings-report"
                    },
                    {
                        name: "Daily Risk File",
                        description: <div>
                            <p>TBD</p>
                        </div>,
                        link: `#`,
                        id: "#landing-page-link-daily-risk-file"
                    },
                    {
                        name: "KRDs Active",
                        description: <div>
                            <p>Active KRD's Tableau Report</p>
                        </div>,
                        //link: `/activeKRDS`,
                        link: `https://prod-useast-a.online.tableau.com/t/ccmtableau/views/KRDs/ActiveKRDs/2e2ec5f8-3d03-4b64-9d3e-26c611cf4bec/71488f7f-2837-4d03-983a-dd5fb984586c`,
                        id: "#landing-page-krds"
                    },
                    {
                        name: "KRDs By Port",
                        description: <div>
                            <p>Port KRD's Tableau Report</p>
                        </div>,
                        link: `https://prod-useast-a.online.tableau.com/t/ccmtableau/views/KRDs/KRDs/c5dee9e9-760d-4e22-9aff-922efaad0299/8834628f-ff11-4617-a604-63b045c79faa`,
                        id: "#landing-page-krds-by-port"
                    },
                    {
                        name: "Corporate Watchlist",
                        description: <div>
                            <p>TBD</p>
                        </div>,
                        link: `/corporate-watchlist`,
                        id: "#landing-page-corporate-watchlist"
                    }
                ],
                overallCount: 6
            }
        ]
    );
}

export function landingPageLinksData2(previousBD) {

    return (
        [
            {
                key: "Tools",
                items: [
                    {
                        name: "Trade History",
                        description: <div>
                            <p>Sample Link: '/trade-history'</p>
                            <p>Will bring up a page that will further have a form to fill out in order to set parameters of what trade history you'd like to look at.</p>
                            <p>Instead of filling out the form, there will be a copy and paste portion for which data can be injected into the form directly.</p>
                            <p>Once either one of these methods has been filled, fell free to hit the 'Generate' button.</p>
                        </div>,
                        link: `/trade-history`,
                        id: "#landing-page-link-trade-history"
                    },
                    {
                        name: "Shareholders",
                        description: <div>
                            <p>Sample: '/shareholders'</p>
                            <p>Page displays a list of active shareholders currently holding accounts with us.</p>
                            <p>Also displays some added information such as Number, Ticker, Open/Close Date, etc</p>
                        </div>,
                        link: `/shareholders`,
                        id: "#landing-page-shareholders"
                    },
                    {
                        name: "Portfolio Targets",
                        description: <div>
                            <p>Sample: '/portfolio-targets'</p>
                            <p>Page which displays trading strategies for securities based</p>
                            <p>on benchmark/live data.</p>
                        </div>,
                        link: `/portfolio-targets`,
                        id: "#landing-page-portfolio-targets",
                    },
                    {
                        name: "Bloomberg Confirmation Page",
                        description: <div>
                            <p>Sample: '/vconn-confirmation'</p>
                            <p>Page which displays whether BBG and Carlton trades</p>
                            <p>are a confirmed match. Trades are editable if such a case</p>
                            <p>occurs.</p>
                        </div>,
                        link: `/bloomberg-confirmation`,
                        id: "#landing-page-bloomberg-confirmation",
                    }
                ],
                overallCount: 4
            }
        ]
    );
}

export function landingPageLinksData3(previousBD) {
    return (
        [
            {
                key: "Performance",
                items: [
                    {
                        name: "Daily Performance",
                        description: <div>
                            <p>Sample Link: '/performance'</p>
                            <p>Will bring up a page that displays all active accounts in a table with their respective performance numbers. </p>
                            <p>Each account name is a clickable link to a risk holdings data table for that particular account.</p>
                            <p>Just ensure that the date and aggregation type is correct.</p>
                        </div>,
                        link: `/performance`,
                        id: "#landing-page-link-performance"
                    },
                    {
                        name: "Attribution",
                        description: <div>
                            <p>TBD</p>
                        </div>,
                        link: `#`,
                        id: "#landing-page-link-attribution"
                    }
                ],
                overallCount: 2
            }
        ]
    );
}

export function landingPageLinksData4(previousBD) {
    return (
        [
            {
                key: "Monthly/Quarterly Reporting and Meetings",
                items: [
                    {
                        name: "ITVC Directory",
                        description: <div>
                            <p>TBD</p>
                        </div>,
                        link: `#`,
                        id: "#landing-page-link-itvc-directory"
                    },
                    {
                        name: "PM Monthly Meeting", 
                        description: <div>
                            <p>TBD</p>
                        </div>,
                        link: `#`,
                        id: "#landing-page-link-pm-monthly-meeting"
                    },
                    {
                        name: "MCT",
                        description: <div>
                            <p>https://mctmco.com/login.action?sctSession=reset</p>
                        </div>,
                        link: `https://mctmco.com/login.action?sctSession=reset`,
                        id: "#landing-page-link-mct"
                    }
                ],
                overallCount: 3
            }
        ]
    );
}

export const dataTableStyles = {
    TD: {
        title: "Trade Date",
        bannerColor: "#1B3668",
        aggMaGroupRowColor0: "#045787",
        aggMaGroupRowColor1: "#0776a6",
        aggMaGroupRowColor2: "#138bb0",
        aggMaGroupRowColor3: "#26a1c7",
        aggMaGroupRowColor4: "#9ad4e6",
        aggMaGroupRowColor5: "#b4eafa",
    },
    SD: {
        title: "Settlement Date",
        bannerColor: "#0b850d",
        aggMaGroupRowColor0: "#0e8c19",
        aggMaGroupRowColor1: "#139e16",
        aggMaGroupRowColor2: "#25c428",
        aggMaGroupRowColor3: "#40de43",
        aggMaGroupRowColor4: "#a4f5a6",
        aggMaGroupRowColor5: "#c9f0ca",
    },
    ID: {
        title: "Intraday Trade",
        bannerColor: "#590396",
        aggMaGroupRowColor0: "#540185",
        aggMaGroupRowColor1: "#6105a3",
        aggMaGroupRowColor2: "#770cc4",
        aggMaGroupRowColor3: "#9027db",
        aggMaGroupRowColor4: "#ce98f5",
        aggMaGroupRowColor5: "#e7cdfa",
    },
    LT: {
        title: "Lot-Level Trade Date",
        bannerColor: "#e37005",
        aggMaGroupRowColor0: "#8c4b0e",
        aggMaGroupRowColor1: "#994f09",
        aggMaGroupRowColor2: "#b3651d",
        aggMaGroupRowColor3: "#cc7e35",
        aggMaGroupRowColor4: "#e8c19e",
        aggMaGroupRowColor5: "#fae6d4",

    }
}


function convertArrayOfObjectsToCSV(dataArray) {
    let result;

    const columnDelimiter = ',';
    const lineDelimiter = '\n';
    const keys = Object.keys(dataArray[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    dataArray.forEach(item => {
        let ctr = 0;
        keys.forEach(key => {
            if (ctr > 0) result += columnDelimiter;

            result += item[key];
            // eslint-disable-next-line no-plusplus
            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
}

export function downloadCSV(dataArray) {
    const link = document.createElement('a');
    let csv = convertArrayOfObjectsToCSV(dataArray);
    if (csv == null) return;

    const filename = 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute('href', encodeURI(csv));
    link.setAttribute('download', filename);
    link.click();
}

export function fileNameConstructor(hashMap, tabIndex) {
    const tabObj = hashMap[`tab${tabIndex}`];
    const view = tabObj.tableStyle[`${tabObj.req.positionView}`].title;
    const aggChoiceString = tabObj.req.aggregateRows;
    const accountArr = tabObj.req.accounts;
    //console.log("hashMap accounts", accountArr);
    let aggView;
    let accountList = "";


    switch(aggChoiceString) {
        case 'n':
            aggView = 'NoAgg'
            break;
        case 'y':
            aggView = 'AggByMarketAssetGRoup'
            break;
        case 'yg':
            aggView = 'AggByCarltonSecGroup'
            break;
        case 'yt':
            aggView = 'AggByCarltonSecType'
            break;
        case 'ys':
            aggView = 'AggByCarltonSecSector'
            break;
        default:
            console.log(`Not a valid aggregate choice: ${aggChoiceString}`);
    }

    if(accountArr.length > 0) {
        if(accountArr.length === 1) {
            accountList = accountArr[0];
        } else {
            accountList = accountArr.join(",");
        }
    }
    //console.log("Account List after forEach logic: ", accountList);
    let title = `Risk Holdings ${view}_${tabObj.req.aoDate}_${aggView}_for(${accountList})`;
    return title;
}

export const dollarFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export const dollarFormatter0 = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: '0'
})

export const numberFormatter0 = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
})

export const numberFormatter2 = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
})

export const numberFormatter4 = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
})

export function filterRiskAccounts(arrayOfRiskAccounts, json) {
    //const json = multiData;
    //match arrayOfApxCodes in json and return name
    const result = arrayOfRiskAccounts.map((account) => {
        let apxCode = "";

        for (let i=0; i < json.length; i++) {
            if (account.value === json[i].apx_portfolio_code) {
                apxCode = json[i].apx_portfolio_code;
                break;
            }
        }

        return apxCode;
    });

    return result;//SHOULD BE EDITED TO MAKE A CALL TO API `GET-RISK-HOLDINGS`
}
/**
 * Formats a Date object to YYYY-MM-DD
 * Not exported because the UI should generally avoid working directly with Date instances.
 * @param {Date Object} newDate 
 * instance of a date object
 * @returns {string}
 * specified date in the format YYYY-MM-DD
 */
function asDateString(newDate) {
    return `${newDate.getFullYear().toString(10)}-${(newDate.getMonth() + 1).toString(10).padStart(2, "0")}-${newDate.getDate().toString(10).padStart(2, "0")}`;
}

/**
 * Used to create today's date in the following format.
 * @returns {string}
 * today's date in the format YYYY-MM-DD
 */
export function today() {
    return asDateString(new Date());
}

export function yesterday(currentDate) {
    let [year, month, day] = currentDate.split("-");
    month -=1;
    const date = new Date(year, month, day);
    date.setMonth(date.getMonth());
    date.setDate(date.getDate() - 1);
    return asDateString(date);
}


export function splitTableIntoFour(dataRows) {
    let first, second, third, fourth;
    let m, n, o;

    m = Math.ceil(dataRows.length / 4);
    n = Math.ceil((2 * dataRows.length) / 4);
    o = Math.ceil((3 * dataRows.length) / 4);

    first = dataRows.slice(0, m);
    second = dataRows.slice(m, n);
    third = dataRows.slice(n, o);
    fourth = dataRows.slice(o, dataRows.length);

    return [first, second, third, fourth];
}

export function formatWeight(weight) {
    return Number(weight).toLocaleString(undefined, {style: 'percent', minimumFractionDigits: 2} );
}

export function formatSwitch(key, value) {
    switch(typeof(value)) {
        case 'boolean':
                return <input className="form-check-input" type="checkbox" value="" disabled checked={value === true ? true : false }/>;
        case 'string':
            if (key === "ao_date" || key === "original_trade_date" || key.includes("date")) {
                return value.slice(0, 10);
            } else if(key === "account_name") {
                return formatAccountName(value);
            } else {
                return value || <input className="form-check-input" type="checkbox" value="" disabled checked={value === true ? true : false }/>;;
            }
        case 'number':
                if (key === "weight") {
                    return formatWeight(value);
                } else if (["accrued", "orig_face", "curent_face", "price", "mv", "mv_accrued", ""].includes(key)) {
                    return dollarFormatter.format(value);
                } else {
                    return numberFormatter2.format(value) || null;
                }
        default:
                return value;
    }
}

//FUNCTION THAT CALCULATES MOST RECENT BUSINESS DAY (EXCLUDES WEEKENDS AND HOLIDAYS)
export function lastBusinessDay(date) {
    const prevDate = new Date(date);
    const prevDayOfWeek = prevDate.getDay();
    const weekDayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const holidayArr2023 = [
        "2023-01-02",//New Years (celebrated on Sunday, observed Monday)
        "2023-01-16",//MLK Day
        "2023-02-20",//President's Day
        "2023-05-29",//Memorial Day
        "2023-06-19",//Juneteenth National Independence Day
        "2023-07-04",//Independence Day
        "2023-09-04",//Labor Day
        "2023-10-09",//Columbus Day
        "2023-11-11",//Veteran's Day (celebrate Saturday)
        "2023-11-23",//Thanksgiving Day
        "2023-12-25",//Christmas Day
    ]
    
    console.log("Previous Date Object: ", prevDate);
    console.log("Previous Day of Week: ", weekDayArr[prevDayOfWeek], prevDayOfWeek);

    if(prevDayOfWeek === 0 || prevDayOfWeek === 6) {
        console.log("Previous Date has fallen on a weekend!")
        return lastBusinessDay(asDateString(prevDate));
    } else if( holidayArr2023.includes(asDateString(prevDate)) ) {
        console.log("Previous Date has fallen on a Federal Holiday!")
        return lastBusinessDay(asDateString(prevDate));
    }

    return asDateString(prevDate);
}

//Function is responsible for adding requests into cache
export async function addDataIntoCache(cacheName, url, response) {
    const data = new Response(JSON.stringify(response));

    if ('caches' in window) {
        caches.open(cacheName).then((cache) => {
            cache.put(url, data);
            console.log("Data added into cache!");
        });
    }
}

export function formatAccountName(accountString) {
    const closedParenthesisIndex = accountString.indexOf(")");

    if(closedParenthesisIndex < 0) return accountString;

    return accountString.slice(closedParenthesisIndex + 4);
}

export function formatAccountTicker(ticker) {
    if (ticker.includes("(")) {
        return ticker.slice(1,-1);
    }
    return ticker;
}

const unwantedElements = ["CCM_INTERNAL_SMA", "CCMNX-Adjusted", "Alternative Impact Fund - Cash Sleeve", "Alternative Impact Fund - FI Sleeve", "Equity Impact Core Fund", "Equity IMact SMID Fund", "Test Acct"];
/*
* Helper function is going to be used to find the indeces of unwanted variable using 
* formatAccount_name().
* Will take in the dropDownData as a parameter, which is an array.
* Returns an array of unwanted indices.
*/
export function removeUnwanteds(data) {
    let array = [];
    data.forEach((object, index) => {
        if (!unwantedElements.includes(object.name)) {
            array.push(object);
        }
    });
    
    return array;
}
/**
 * This function is not working as expected due to the condition within if statement
 * and the data not being as clean as we expected. 
 * @param {*} data 
 * @param {*} aoDate 
 * @returns 
 */
export function removeUnwantedsAndFilterOut(data, aoDate) {
    let array = [];
    data.forEach((object, index) => {
        if (!unwantedElements.includes(object.name)) {
            array.push(object);
        }
    });
    console.log("Array after removing unwanteds: ", array);
    const result = array.filter((object) => {
        if (object.open_date <= aoDate && object.close_date > aoDate) {
            return object;
        } else {
            return;
        }
    });
    
    return result;
}

/**
 * This function is used to remove a certain tab from an ordered hashMap. It then renames
 * every property after the deleted tab to maintain order.
 * @param {Integer} tabIndexToRemove
 * The index of the tab you'd like to remove. Starts from 0.
 * @param {Object} hash 
 * Object used as a hashMap to save necessary state data for a particular tab.
 * For Example:
 * hashMap = {
 *  tab0: {
 *      data: [],
 *      req: {...},
 *      tableStyle: {...}
 *  },
 *  tab1: {...},
 *  ...
 * }
 * @returns 
 */
export function removeAndRenamObjectProps(tabIndexToRemove, hash) {
    if (Object.entries(hash).length-1 === tabIndexToRemove) {
        delete hash[`tab${tabIndexToRemove}`];
        return hash;
    }

    const tempHash = {...hash};
    const tempHashLength = Object.entries(tempHash).length;

    for(let i=tabIndexToRemove; i<tempHashLength; i++) {
        if (i === tempHashLength-1) {
            delete tempHash[`tab${i}`]
            break;
        }
        tempHash[`tab${i}`] = {...tempHash[`tab${i+1}`]};
    }

    return tempHash;
}

export function dateFormatter(date) {
    if(date.includes('0001-01-01')) {
        return "";
    } else {
        return date.slice(0,10);
    }
}
export function sqlDateToDateString(date) {
    if(date === "") return;
    return dayjs(date).format("MM/DD/YYYY");
}

export function calcDateByLookBack(endDate, lookBack) {
    const date = dayjs(endDate);
    return date.subtract(lookBack, 'day').format("YYYY-MM-DD");
}

export function calcLookBackDaysByDate(startDate, endDate) {
    const start = dayjs(startDate);
    const end = dayjs(endDate);
    return end.diff(start, 'day').toString();
}

export function aggRowFilter(resData, aggregateRows) {
    let newResData = [];
    switch (aggregateRows) {
        case "n"://No Aggregate Rows
            newResData = resData;
            break;
        case "y"://Aggregate by Marketing Asset Group
            newResData = resData.filter((row) => row.sortOrder === 0 || row.sortOrder === 1 || row.sortOrder === 100);
            break;
        case "yg"://Agregate by Carlton Security Group
            newResData = resData.filter((row) => row.sortOrder === 0 || row.sortOrder === 1 || row.sortOrder === 2
            || row.sortOrder === 100);
            break;
        case "yt"://Aggregate by Carlton Security Type
            newResData = resData.filter((row) => row.sortOrder === 0 || row.sortOrder === 1 || row.sortOrder === 2 
            || row.sortOrder === 3 || row.sortOrder === 100);
            break;
        case "ys"://Aggregate by Carlton Security Sector
            newResData = resData.filter((row) => row.sortOrder === 0 || row.sortOrder === 1 || row.sortOrder === 2 
            || row.sortOrder === 3 || row.sortOrder === 4 || row.sortOrder === 5 || row.sortOrder === 100);
            break;
        default:
            console.log(`Ran out of Aggregate Row options for: ${aggregateRows}`);
    }

    return newResData;
}

export function moveElementInArray(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
};
//For Modal in CustomMaterialMenu
export const dateSorterMMDDYYY = (rowA, rowB) => {
    const a = sqlDateToDateString(dateFormatter(rowA.aoDate));
    const b = sqlDateToDateString(dateFormatter(rowB.aoDate));

    let aa = a.split('/');
    let bb = b.split('/');
    //console.log(`Comparing a: ${aa} to b: ${bb}.`);
    //console.log(`${aa[2] - bb[2]}, ${aa[0] - bb[0]}, ${aa[1] - bb[1]}`);

    return aa[2] - bb[2] || aa[0] - bb[0] || aa[1] - bb[1];
}
//For Shareholders Page Opening Date
export const shareholderDateSorterMMDDYYY1 = (rowA, rowB) => {

    const a = sqlDateToDateString((rowA.open_date).slice(0,10));
    const b = sqlDateToDateString((rowB.open_date).slice(0,10));
    //console.log(`${a} and ${b}`);

    let aa = a.split('/');
    let bb = b.split('/');
    //console.log(`Comparing a: ${aa} to b: ${bb}.`);
    //console.log(`${aa[2] - bb[2]}, ${aa[0] - bb[0]}, ${aa[1] - bb[1]}`);

    return aa[2] - bb[2] || aa[0] - bb[0] || aa[1] - bb[1];
}
//For Shareholders Page Closing Date
export const shareholderDateSorterMMDDYYY2 = (rowA, rowB) => {
    const a = sqlDateToDateString((rowA.close_date).slice(0,10));
    const b = sqlDateToDateString((rowB.close_date).slice(0,10));

    let aa = a.split('/');
    let bb = b.split('/');
    //console.log(`Comparing a: ${aa} to b: ${bb}.`);
    //console.log(`${aa[2] - bb[2]}, ${aa[0] - bb[0]}, ${aa[1] - bb[1]}`);

    return aa[2] - bb[2] || aa[0] - bb[0] || aa[1] - bb[1];
}
//For Dashboard: sorts by ticker after formatting data.
export const accountNameSorter = (rowA, rowB) => {
    const a = formatAccountTicker(rowA.ticker);
    const b = formatAccountTicker(rowB.ticker);
    //console.log(`Comparing ${a} to ${b}`);

    return ('' + a).localeCompare(b);
}
//For Shareholders Page: sorts by ticker
export const shareholderNameSorter = (rowA, rowB) => {
    const a = (rowA.account_ticker);
    const b = (rowB.account_ticker);
    //console.log(`Comparing ${a} to ${b}`);

    return ('' + a).localeCompare(b);
}
//For Trade History Landing Page: sorts by ticker after formatting data.
export const accountLabelNameSorter = (rowA, rowB) => {
    const a = formatAccountTicker(rowA.label);//label points to accounts ticker
    const b = formatAccountTicker(rowB.label);
    //console.log(`Comparing ${a} to ${b}`);

    return ('' + a).localeCompare(b);
}

export function omitNullColumns(data, columns) {
    const allColNames = Object.keys(data[0]); //Array of all column names
    const emptyColNames = []; //Array of arrays, each array represent 
    const colNamesOmitted = []; //Keys that are declared null/empty columns

    data.forEach((row) => {
        const colsNoData = [];
        Object.entries(row).forEach(([key, value]) => {
            if(!value || [value].includes("0001-01-01T00:00:00")) {
                colsNoData.push(key);
            }
        })
        emptyColNames.push(colsNoData);
    })

    allColNames.forEach((nameKey) => {
        if (emptyColNames.every((currArr) => currArr.includes(nameKey))) {
            colNamesOmitted.push(nameKey)
        }
    })

    console.log("Total Number of Columns: ", allColNames.length);

    colNamesOmitted.forEach((colName) => {
        const indexToOmit = columns.findIndex((row) => row.id === colName);
        indexToOmit >= 0 ? columns[indexToOmit].omit = true : console.log(`${colName} doesn't need to be omitted.`);
    })
    return columns;
}

//Need one function that tests whether or not the params.accounts is a match to the apx_portfolio_code
//Returns true if it matches, returns false otherwise
export function isApxPortfolioCode(accountsInfo, paramString) {
    const found = accountsInfo.find((account) => account.apx_portfolio_code === paramString);

    if (found) {
        //console.log("This is an apx_portfolio_code match: ", found);
        return true;
    } else {
        //console.log(`'${paramString}' is not an apx_portfolio_code match.`);
        return false;
    }
}
//Need another function that is called if previous function returns false.
//This function will be responsible for taking the params.accounts string and finding the first match 
//that includes string. Then it returns the matching apx_portfolio_code.
export function smartURLSearch(accountsInfo, paramString) {
    const found = accountsInfo.find((account) => {
        return account.name.toLowerCase().includes(paramString.toLowerCase())
            || account.ticker.toLowerCase().includes(paramString.toLowerCase())
            || account.apx_portfolio_code.toLowerCase().includes(paramString.toLowerCase());
    });

    //console.log("Closest match: ", found);
    return found;
}
/**
 * This returned matching apx_portfolio_code will be used to rewrite that portion of the url. Most likely using 
 * 'window.history.pushState(null, '', newUrl);'
 */

export function perfDataConstructor(accountsInfo, perfData) {
    const result = [];

    accountsInfo.forEach((row) => {
        const found = perfData.find((perfRow) => perfRow.account === row.apx_portfolio_code);

        if(found) {
            //console.log("Found: ", found.account);
            const newRowData = { ...found, ...row};
            result.push(newRowData);
        } else {
            console.log("This account's apx_protfolio_code (from accountsInfo in perfData) was not found: ", row.apx_portfolio_code);
        }
    })//end of account traversal
    console.log("Result length: ", result.length);
    return result;
}

