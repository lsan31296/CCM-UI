/* This file represents the API we would be using to fetch our data from */
// API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000"
const API_BASE_URL = "http://localhost:5000";
//const API_BASE_URL = "http://ccm-web01:5000";

//Defines the default headers for these function to work with 'json-server'
const headers = new Headers();
headers.append("Content-Type", "application/json");

/**
 * Fetch 'json' from the specified URL and handle error status codes and ignore 'AbortError's'
 * @param URL
 * the url for the request
 * @param options
 * any options for fetch
 * @param onCancel
 * value to return if fetch call is aborted. Default value is defined
 * @returns {Promise<Error|any>}
 * a promise that resolves to the 'json' data or an error
 * If the response is not in the 200 - 399 range the promise is rejected
 */
async function fetchJson(URL, options, onCancel) {
    try {
        const response = await fetch(URL, options);
        if (response.status === 204) {
            return null;
        }

        const payload = await response.json();
        console.log("Payload: ", payload);
        if (payload.error) {
            return Promise.reject({ message: payload.error });
        }
        return payload;
    } catch (error) {
        if (error.name !== "AbortError") {
            console.error(error.stack);
            throw error;
        }
    }
    return Promise.resolve(onCancel);
}

/**
 * Used for the middle-tier's `get-account-date` api
 * @param {*} params 
 * Any parameters that should go into the query string when making the call to server. 
 * such as, id = 12 and open_date = 2019-03-26 will be turned into a query string.
 * @param {*} signal 
 * Optional signal for a new AbortController if a cancel button is involved.
 * @returns {Array[Object]}
 * May return and array of one or more account object with various related data fields
 */
export async function getAccountDate(params, signal) {
    const url = new URL(`${API_BASE_URL}/get-account-date`);
    Object.entries(params).forEach(([key, value]) => 
        url.searchParams.append(key, value.toString())
    );
    const options = {
        headers,
    }
    //console.log("URL:", url)
    return await fetchJson(url, options)
}

/**
 * Use to get all accounts from middle-tier's `get-accounts' api
 * @param {*} signal 
 * Options signal for a new AortController if a cancel button is involved.
 * @returns {Array[Objects]}
 * All json data in an array of objects
 */
export async function getAllAccounts(signal) {
    const url = `${API_BASE_URL}/get-accounts`;
    return await fetchJson(url, signal, []);
}

/**
 * This function will be used to send an HTTP request to fetch risk accounts names'
 * @param {*} signal 
 * Optional signal for AbortController if necessary.
 * [
    {
    "value": "CRAIX",
    "label": ""//Full Name
    },
    {
    "value": "MaryReynoldsBabcock",
    "label": ""//Full Name
    },
 * ] 
 * @returns {Array.prototype} 
 * [
    {
    "name": "(CRAIX) - CCM Community Impact Bond Fund",
    "apx_portfolio_code": "CRAIX"
    },
    {
    "name": "(MRBF) - The Mary Reynolds Babcock Foundation",
    "apx_portfolio_code": "MaryReynoldsBabcock"
    },
 * ] 
 * 
 */
export async function fetchAllRiskAccounts(signal) {
    const url = `${API_BASE_URL}/get-risk-accounts`;
    return await fetchJson(url, signal);
}

export async function getRiskHoldings(params, signal) {
    const url = new URL(`${API_BASE_URL}/get-risk-holdings`);
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify(params),
        signal,
    }
    return await fetchJson(url, options);
}

export async function getBusinessDay(params) {
    //console.log("Params: ", params);
    const url = new URL(`${API_BASE_URL}/get-next-business-day`);
    Object.entries(params).forEach(([key, value]) =>
    url.searchParams.append(key, value.toString())
    );
    return await fetchJson(url, {headers}, []);
}
/**
 * Returns data regarding a particular trade specified by account and cusip.
 * @param {*} params
 * Object containing key and value pair(s) set to parameter and value of parameter, respectively. 
 * @returns {JSON}
 * JSON of response from HTTP request. Should have 24 fields regarding that particular trade for that account.
 */
export async function getUspTrade(params) {
    //console.log("Params: ", params);
    const url = new URL(`${API_BASE_URL}/get-usp-trades`);
    Object.entries(params).forEach(([key, value]) => 
        url.searchParams.append(key, value.toString())
    );
    //console.log(url);
    return await fetchJson(url, {headers}, []);
}

export async function getSecurityDetail(params) {
    const url = new URL(`${API_BASE_URL}/get-security-detail`);
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value.toString())
    });
    return await fetchJson(url, {headers}, []);
}

export async function getPriceHistory(params) {
    const url = new URL(`${API_BASE_URL}/get-price-history`);
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value.toString())
    });
    return await fetchJson(url, {headers}, []);
}

export async function getShowLoans(params) {
    const url = new URL(`${API_BASE_URL}/get-show-loans`);
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value.toString())
    });
    return await fetchJson(url, {headers}, []);
}

export async function getAccountDetails(params) {
    const url = new URL(`${API_BASE_URL}/get-account-details`);
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value.toString())
    })
    return await fetchJson(url, {headers}, []);
}

export async function getAllShareholders(signal) {
    const url = `${API_BASE_URL}/get-all-shareholders`;
    return await fetchJson(url, signal);
}

export async function getAccountTDPerf(params, signal) {
    const url = new URL(`${API_BASE_URL}/get-account-td-perf`);
    Object.entries(params).forEach(([key,value]) => {
        url.searchParams.append(key, value.toString())
    })
    return await fetchJson(url, {headers, signal});
}

export async function getSecurities(signal) {
    const url = `${API_BASE_URL}/get-securities`;
    return await fetchJson(url, signal);
}
/**
 * Returns all trade history records based on the parameters passed in the following object.
 * Primarily used to populate the DataGrid in the Trade History Landing Page.
 * @param {*} params
 * Params are an object in the following format:
 *  {
        startDate: "2023-10-11",
        lookBack: "365",
        cusips: 
            [
                "3132D6BS8",
                "025816CW7"
            ],
        accounts: 
            [
                "MCF",
                "UBS_10_NPT"
            ]
    }
 * @param {*} signal 
 * @returns 
 */
export async function getTradeHistoryLanding(params, signal) {
    const url = new URL(`${API_BASE_URL}/get-trade-history-landing`);
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify(params),
        signal,
    }
    return await fetchJson(url, options);
}

export async function getPreviousPortfolioTargets(signal) {
    const url = `${API_BASE_URL}/get-sonic-target-inputs`;
    return await fetchJson(url, signal);
}

//NEED TO CREATE THE POST REQUEST TO UPDATE PORTFOLIO TARGETS
export async function savePortfolioTargets(params, signal) {
    const url = new URL(`${API_BASE_URL}/update-sonic-target-inputs`);
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify(params),
        signal,
    }
    return await fetchJson(url, options);
}

export async function getVConnTradeConfirmation(params, signal) {
    const url = new URL(`${API_BASE_URL}/get-vconn-trade-confirmation`);
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value.toString())
    });
    return await fetchJson(url, {headers}, []);
}

export async function saveVConnTrades(params, signal) {
    const url = new URL(`${API_BASE_URL}/update-vconn-trade-confirmation`);
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify(params),
        signal,
    }
    return await fetchJson(url, options);
}

export async function unApproveVConnTrades(params, signal) {
    const url = new URL(`${API_BASE_URL}/unapprove-vconn-trade-confirmation`);
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify(params),
        signal,
    }
    return await fetchJson(url, options);
}

export async function getWatchlistRecords(signal) {
    const url = new URL(`${API_BASE_URL}/get-watchlist`);
    return await fetchJson(url, signal);
}

export async function updateWatchListRecords(params, signal) {
    const url = new URL(`${API_BASE_URL}/update-watchlist`);
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify(params),
        signal,
    }
    return await fetchJson(url, options);
}

export async function createWatchListRecord(params, signal) {
    const url = new URL(`${API_BASE_URL}/create-watchlist`);
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify(params),
        signal,
    }
    return await fetchJson(url, options);
}

export async function deleteWatchListRecord(params, signal) {
    const url = new URL(`${API_BASE_URL}/delete-watchlist`);
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value.toString())
    });
    const options = {
        method: "POST",
        headers
    };
    return await fetchJson(url, options, []);
}
export async function getWebUser(params, signal) {
    const url = new URL(`${API_BASE_URL}/get-webuser`);
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value.toString())
    });
    return await fetchJson(url, {headers}, []);
}

export async function updateWebUserLoginTime(params, signal) {
    const url = new URL(`${API_BASE_URL}/update-webuser-login-time`);
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value.toString())
    });
    return await fetchJson(url, {headers}, []);
}

/**
 * Changes the password of an existing web user account. Must know original password.
 * @param {*} params
 * Parameters include an object with the following keys: username, currentPassword, newPassword 
 * @param {*} signal 
 * Optional abort signal used to cancel async operation. Typically used inside of a useEffect React Hook
 * @returns 
 * Returns a 1 if the proper row was affected, -1 if no match exists due to incorrect username or password.
 */
export async function updateWebUserPassword(params, signal) {
    const url = new URL(`${API_BASE_URL}/update-webuser-password`);
    Object.entries(params).forEach(([key,value]) => {
        url.searchParams.append(key, value.toString())
    });
    return await fetchJson(url, {headers}, []);
}

export async function getAllAccountscomposites(params, signal) {
    const url = new URL(`${API_BASE_URL}/get-accounts-composites`);
    Object.entries(params).forEach(([key,value]) => {
        url.searchParams.append(key, value.toString())
    })
    return await fetchJson(url, {headers}, []);
}

/*
 * Implement time change for data change, log timestamp and payload itself. In WebLog table.
 */