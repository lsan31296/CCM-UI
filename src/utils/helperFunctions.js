import dayjs from "dayjs";

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

export const allAccounts = [
    {
        "id": 1,
        "version": -4652356949243855000,
        "name": "(CRAIX) - CCM Community Impact Bond Fund",
        "number": "1088513L",
        "ticker": "CRAFund",
        "open_date": "0001-01-01T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 0,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\US Bank\\CCM Community Impact Bond Fund Delivery Instructions 2021.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 1,
        "apx_portfolio_code": "CRAIX",
        "apx_portfolio_id": 292,
        "apx_custodian": ""
    },
    {
        "id": 2,
        "version": -2735878495216337000,
        "name": "(MRBF) - The Mary Reynolds Babcock Foundation",
        "number": "A18F50071102",
        "ticker": "MRBF",
        "open_date": "0001-01-01T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 10,
        "ima_id": 1,
        "composite_affiliation_id": 1,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Royal Bank of Canada\\RBC Delivery Instructions - STEP OUT 2020.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 3,
        "apx_portfolio_code": "MaryReynoldsBabcock",
        "apx_portfolio_id": 296,
        "apx_custodian": "RBC"
    },
    {
        "id": 3,
        "version": -2591763307140481000,
        "name": "(PRIM) - Pension Reserves Investment Management Board",
        "number": "PRMF50850002",
        "ticker": "PRIM",
        "open_date": "0001-01-01T00:00:00",
        "close_date": "2022-06-17T00:00:00",
        "custodian_id": 8,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\BNY Mellon\\PRIM (MA)\\MA PRIM Delivery Instructions GSP.pdf",
        "fax_number": "1-888-227-6172",
        "fax_cover_to": "TS8ASGMailbox@BNYMELLON.com",
        "fax_phone": "",
        "fax_cover_subject": "PRIM (MA)  919465",
        "fax_cover_body": "MA PRIM:\r\n\r\nBROKER DELIVERY INSTRUCTIONS INCLUDED",
        "tracker_id": 5,
        "apx_portfolio_code": "MA_PRIM",
        "apx_portfolio_id": 299,
        "apx_custodian": "BNY Mellon"
    },
    {
        "id": 4,
        "version": -2519705713102553000,
        "name": "(SOC) - Sisters of Charity of the Blessed Virgin Mary",
        "number": "120005960060",
        "ticker": "SOC",
        "open_date": "0001-01-01T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 0,
        "composite_affiliation_id": 1,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 6,
        "apx_portfolio_code": "Sisters_of_Charity",
        "apx_portfolio_id": 311,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 5,
        "version": -2231475336950841300,
        "name": "(CCMNX) - Alternative Income Fund - FI Sleeve",
        "number": "19-1439",
        "ticker": "CCMNX",
        "open_date": "0001-01-01T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 0,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\US Bank\\CCMNX - Pershing (Options)\\Pershing - Foreign Trade Settlement Instructions.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 33,
        "apx_portfolio_code": "EQ_LONG-SHORT",
        "apx_portfolio_id": 629,
        "apx_custodian": "US Bank"
    },
    {
        "id": 6,
        "version": -2159417742912913400,
        "name": "(NIC) - New Island Capital",
        "number": "26-49762",
        "ticker": "NIC",
        "open_date": "0001-01-01T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 9,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Northern Trust\\New Island Capital\\New Island Delivery Instructions.pdf",
        "fax_number": "1-312-630-6266",
        "fax_cover_to": "Northern Trust Company\r\n(312) 630-6266\r\nPhone: (312) 557-7970",
        "fax_phone": "1-312-557-7970",
        "fax_cover_subject": "New Island Capital - #26-49762",
        "fax_cover_body": "",
        "tracker_id": 34,
        "apx_portfolio_code": "New_Island_Capital",
        "apx_portfolio_id": 667,
        "apx_custodian": "NORTHERN TRUST"
    },
    {
        "id": 7,
        "version": -2087360148874985500,
        "name": "(SWIFT) - Swift Foundation",
        "number": "1702-7005",
        "ticker": "SWIFT",
        "open_date": "0001-01-01T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 11,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Charles Schwab\\SWIFT Foundation\\NEW SWIFT Foundation Delivery Instructions.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 35,
        "apx_portfolio_code": "SWIFT_Foundation",
        "apx_portfolio_id": 840,
        "apx_custodian": "Schwab"
    },
    {
        "id": 8,
        "version": -1799129772723273700,
        "name": "(CTBK) - Community Trust Bancorp",
        "number": "747LN807",
        "ticker": "CTBK",
        "open_date": "2018-02-28T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 4,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Raymond James\\Community Trust Bank\\Community Trust Bancorp_ Raymond James_02052018.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 52,
        "apx_portfolio_code": "Community_Trust",
        "apx_portfolio_id": 1111,
        "apx_custodian": "Raymond James"
    },
    {
        "id": 9,
        "version": -1727072178685345800,
        "name": "(MS1_020591) - A.J. & A.G. Frankel Family Fund",
        "number": "013-020591-658",
        "ticker": "MS1_020591",
        "open_date": "2018-06-06T00:00:00",
        "close_date": "2021-03-05T00:00:00",
        "custodian_id": 7,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 53,
        "apx_portfolio_code": "MS1_020591",
        "apx_portfolio_id": 0,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 10,
        "version": -1655014584647417900,
        "name": "(MS2_012280) - South Mountain Company Ret Pl",
        "number": "MS2_012280",
        "ticker": "MS2_012280",
        "open_date": "2018-08-10T00:00:00",
        "close_date": "2021-03-21T00:00:00",
        "custodian_id": 7,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 55,
        "apx_portfolio_code": "MS2_012280",
        "apx_portfolio_id": 1174,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 11,
        "version": -1582956990609490000,
        "name": "(RBC1_95538) - Akonadi Foundation",
        "number": "31395538",
        "ticker": "RBC1_95538",
        "open_date": "2019-01-01T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 10,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Royal Bank of Canada\\RBC Delivery Instructions - STEP OUT 2020.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 56,
        "apx_portfolio_code": "RBC1_95538",
        "apx_portfolio_id": 1193,
        "apx_custodian": "RBC"
    },
    {
        "id": 12,
        "version": -1510899396571562000,
        "name": "(AOB) - Archdiocese of Boston",
        "number": "KS2G",
        "ticker": "AOB",
        "open_date": "2019-03-26T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 1,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\State Street\\Archdiocese of Boston\\Archdiocese of Boston - State Street Instrux.pdf",
        "fax_number": "1-617-774-0171",
        "fax_cover_to": "State Street Corporation ",
        "fax_phone": "Christine DiRienzo – 617-985-2407",
        "fax_cover_subject": "ARCHDIOCESE OF BOSTON – SSB Acct:  KS2G",
        "fax_cover_body": "",
        "tracker_id": 57,
        "apx_portfolio_code": "Archdiocese_of_Boston",
        "apx_portfolio_id": 1195,
        "apx_custodian": "Statestreet"
    },
    {
        "id": 13,
        "version": -1438841802533634000,
        "name": "(CIP) - Capital Impact Partners",
        "number": "P87965",
        "ticker": "CIP",
        "open_date": "2019-02-11T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 0,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Federal Home Loan Bank - Atlanta\\Capital Impact Partners\\CIP - FHLB Atlanta DTC Instructions - CCM 5.22.19.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 58,
        "apx_portfolio_code": "Capital_Impact_Partners",
        "apx_portfolio_id": 1194,
        "apx_custodian": "Federal Home Loan Bank - Atlanta"
    },
    {
        "id": 14,
        "version": -1294726614457778200,
        "name": "(BFT) - Brakeman Family Trust LLC",
        "number": "668163638",
        "ticker": "BFT",
        "open_date": "2019-02-07T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 17,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\Fidelity\\Fidelity SSI.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 60,
        "apx_portfolio_code": "Brakeman_Family_Trust",
        "apx_portfolio_id": 1197,
        "apx_custodian": "Fidelity"
    },
    {
        "id": 15,
        "version": -1222669020419850200,
        "name": "(RBC2_05592) - Dalton-Choi Family Trust",
        "number": "32105592",
        "ticker": "RBC2_05592",
        "open_date": "2019-02-15T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 10,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Royal Bank of Canada\\RBC Delivery Instructions - STEP OUT 2020.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 61,
        "apx_portfolio_code": "RBC2_05592",
        "apx_portfolio_id": 1199,
        "apx_custodian": "RBC"
    },
    {
        "id": 16,
        "version": -1150611426381922300,
        "name": "(KTE) - Brian Patrick Kariger Revocable Trust",
        "number": "241-045119-180",
        "ticker": "KTE",
        "open_date": "2019-02-20T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 62,
        "apx_portfolio_code": "Kariger_Tax_Exempt",
        "apx_portfolio_id": 1202,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 17,
        "version": -1078553832343994400,
        "name": "(RBC3_12190) - Zaitlin Nienberg Family Living Trust",
        "number": "32112190",
        "ticker": "RBC3_12190",
        "open_date": "2019-02-26T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 10,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Royal Bank of Canada\\RBC Delivery Instructions - STEP OUT 2020.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 63,
        "apx_portfolio_code": "RBC3_12190",
        "apx_portfolio_id": 1204,
        "apx_custodian": "RBC"
    },
    {
        "id": 18,
        "version": -1006496238306066400,
        "name": "(MS4_089272) - Sisters of the Good Shepherd",
        "number": "628-089272",
        "ticker": "MS4_089272",
        "open_date": "2019-03-01T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 64,
        "apx_portfolio_code": "MS4_089272",
        "apx_portfolio_id": 1206,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 19,
        "version": -934438644268138500,
        "name": "(MS5_089285) - The Pelletier Trust",
        "number": "628-089285",
        "ticker": "MS5_089285",
        "open_date": "2019-03-01T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 65,
        "apx_portfolio_code": "MS5_089285",
        "apx_portfolio_id": 1207,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 20,
        "version": -4002420228607705000,
        "name": "(PARK) - The Park Foundation",
        "number": "4485009",
        "ticker": "PARK",
        "open_date": "2019-05-14T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 9,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Royal Bank of Canada\\RBC Delivery Instructions - STEP OUT 2020.pdf",
        "fax_number": "1-312-630-6266",
        "fax_cover_to": "Northern Trust Company\r\n(312) 630-6266\r\nPhone: (312) 557-7970",
        "fax_phone": "1-312-557-7970",
        "fax_cover_subject": "The Park Foundation - #44-85009",
        "fax_cover_body": "Note:\r\n\r\nThe attached trades are being affirmed by Community Capital Management in order to facilitate settlement between RBC DTC: 0235 or FED Instructions: 021000018 BK OF NYC/DSP and Northern Trust.\r\nNorthern Trust Account: 44-85009\r\nNorthern Trust Account Name: The Park Foundation",
        "tracker_id": 66,
        "apx_portfolio_code": "Park_Foundation",
        "apx_portfolio_id": 1210,
        "apx_custodian": "NORTHERN TRUST"
    },
    {
        "id": 21,
        "version": -790323456192282600,
        "name": "(MS6_040337) - Housing Assistance Council",
        "number": "675-040337",
        "ticker": "MS6_040337",
        "open_date": "2019-04-15T00:00:00",
        "close_date": "2021-03-04T00:00:00",
        "custodian_id": 7,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 67,
        "apx_portfolio_code": "MS6_040337",
        "apx_portfolio_id": 0,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 22,
        "version": -718265862154354700,
        "name": "(RBC4_26979) - WAK Investments LLC",
        "number": "321-26979",
        "ticker": "RBC4_26979",
        "open_date": "2019-04-23T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 10,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Royal Bank of Canada\\RBC Delivery Instructions - STEP OUT 2020.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 68,
        "apx_portfolio_code": "RBC4_26979",
        "apx_portfolio_id": 1213,
        "apx_custodian": "RBC"
    },
    {
        "id": 23,
        "version": -646208268116426800,
        "name": "(MS7_017994) - Robert O Slater & Valerie A Slater JT TEN",
        "number": "959-017994",
        "ticker": "MS7_017994",
        "open_date": "2019-04-23T00:00:00",
        "close_date": "2021-10-21T00:00:00",
        "custodian_id": 7,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 69,
        "apx_portfolio_code": "MS7_017994",
        "apx_portfolio_id": 1212,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 24,
        "version": -574150674078498800,
        "name": "(SWTZ2) - Swartz CRUT",
        "number": "628537274",
        "ticker": "SWTZ2",
        "open_date": "2019-05-06T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 17,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\Fidelity\\Fidelity SSI.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 70,
        "apx_portfolio_code": "Swartz_CRUT",
        "apx_portfolio_id": 1216,
        "apx_custodian": "Fidelity"
    },
    {
        "id": 25,
        "version": -502093080040570900,
        "name": "(SWTZ1) - Swartz Foundation",
        "number": "628537275",
        "ticker": "SWTZ1",
        "open_date": "2019-05-06T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 17,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\Fidelity\\Fidelity SSI.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 71,
        "apx_portfolio_code": "Swartz_Foundation",
        "apx_portfolio_id": 1215,
        "apx_custodian": "Fidelity"
    },
    {
        "id": 26,
        "version": -430035486002642940,
        "name": "(MS8_043729) - Julio Casoy",
        "number": "736-043729",
        "ticker": "MS8_043729",
        "open_date": "2019-05-15T00:00:00",
        "close_date": "2021-03-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 72,
        "apx_portfolio_code": "MS8_043729",
        "apx_portfolio_id": 0,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 27,
        "version": -357977891964715000,
        "name": "(MS9_090991) - Missionary Sisters of the Sacred Heart",
        "number": "628-090991",
        "ticker": "MS9_090991",
        "open_date": "2019-05-16T00:00:00",
        "close_date": "2022-07-07T00:00:00",
        "custodian_id": 7,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 73,
        "apx_portfolio_code": "MS9_090991",
        "apx_portfolio_id": 1223,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 28,
        "version": -285920297926787070,
        "name": "(MS10_014086) - Steven A Zrucky",
        "number": "271-014086",
        "ticker": "MS10_014086",
        "open_date": "2019-07-16T00:00:00",
        "close_date": "2021-11-09T00:00:00",
        "custodian_id": 7,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 75,
        "apx_portfolio_code": "MS10_014086",
        "apx_portfolio_id": 1231,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 29,
        "version": -213862703888859140,
        "name": "(MS_CES_MNUCC) - Minnesota United Church of Christ",
        "number": "101090083",
        "ticker": "MS_CES_MNUCC",
        "open_date": "2019-07-22T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 76,
        "apx_portfolio_code": "MS_CES_MNUCC",
        "apx_portfolio_id": 1233,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 30,
        "version": -69747515813003260,
        "name": "(MS_CES_EB1) - East Bay Community Foundation Intermed. Term Pool",
        "number": "662-061712-429",
        "ticker": "MS_CES_EB1",
        "open_date": "2019-08-30T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 79,
        "apx_portfolio_code": "MS_CES_EB1",
        "apx_portfolio_id": 1236,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 31,
        "version": 74649147239563260,
        "name": "(MS_CES_EB2) - East Bay Community Foundation Long-Term Divs. Core",
        "number": "662-061714-429",
        "ticker": "MS_CES_EB2",
        "open_date": "2019-08-30T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 80,
        "apx_portfolio_code": "MS_CES_EB2",
        "apx_portfolio_id": 1237,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 32,
        "version": 146706741277491200,
        "name": "(MS12_093029) - Kemper Educational & Charitable Fund",
        "number": "628-093029",
        "ticker": "MS12_093029",
        "open_date": "2019-10-01T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 81,
        "apx_portfolio_code": "MS12_093029",
        "apx_portfolio_id": 1243,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 33,
        "version": 218764335315419140,
        "name": "(MS_CES_Sapelo) - The Sapelo Foundation",
        "number": "628093244",
        "ticker": "MS_CES_Sapelo",
        "open_date": "2019-10-25T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 82,
        "apx_portfolio_code": "MS_CES_Sapelo",
        "apx_portfolio_id": 1248,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 34,
        "version": 434937117429202940,
        "name": "(Diane_S_Isenberg) - Diane Susan Isenberg Custody",
        "number": "150022650200",
        "ticker": "Diane_S_Isenberg",
        "open_date": "2019-11-13T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 6,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\sharedusers\\Trading\\CCM Onboarding\\Delivery Instructions\\US Bank\\Diane Susan Isenberg Custody\\Diane Susan Isenberg Custody Domestic Trade Settlement Instructions - Standard.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 85,
        "apx_portfolio_code": "Diane_S_Isenberg",
        "apx_portfolio_id": 1261,
        "apx_custodian": "US Bank"
    },
    {
        "id": 35,
        "version": 3986630167891017700,
        "name": "(MS15_056786) - Ellen P Guthrie",
        "number": "473-056786",
        "ticker": "MS15_056786",
        "open_date": "2019-12-17T00:00:00",
        "close_date": "2023-09-12T00:00:00",
        "custodian_id": 7,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 86,
        "apx_portfolio_code": "MS15_056786",
        "apx_portfolio_id": 1266,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 36,
        "version": 579052305505058800,
        "name": "(MS16_052183) - Kathleen E Walsh",
        "number": "677-052183",
        "ticker": "MS16_052183",
        "open_date": "2020-01-13T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 87,
        "apx_portfolio_code": "MS16_052183",
        "apx_portfolio_id": 1271,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 37,
        "version": 651109899542986800,
        "name": "(MS_CES_MSFFW) - Ms. Foundation for Women, Inc.",
        "number": "628095106",
        "ticker": "MS_CES_MSFFW",
        "open_date": "2020-02-18T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 88,
        "apx_portfolio_code": "MS_CES_MSFFW",
        "apx_portfolio_id": 1290,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 38,
        "version": 795225087618842600,
        "name": "(MS_CES_NEBF) - N E Bio Labs Foundation",
        "number": "398038704",
        "ticker": "MS_CES_NEBF",
        "open_date": "2020-02-26T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 90,
        "apx_portfolio_code": "MS_CES_NEBF",
        "apx_portfolio_id": 1297,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 39,
        "version": 867282681656770600,
        "name": "(MS_CES_MSFDN) - Morgan Stanley Foundation Inc.",
        "number": "628097069",
        "ticker": "MS_CES_MSFDN",
        "open_date": "0001-01-01T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 91,
        "apx_portfolio_code": "MS_CES_MSFDN",
        "apx_portfolio_id": 1300,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 40,
        "version": 939340275694698500,
        "name": "(MS_CES_HIF) - Heifer International Foundation",
        "number": "088-011249-126",
        "ticker": "MS_CES_HIF",
        "open_date": "0001-01-01T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 92,
        "apx_portfolio_code": "MS_CES_HIF",
        "apx_portfolio_id": 1301,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 41,
        "version": 1011397869732626400,
        "name": "(MS17_018573) - Meredith Ann Koester TTEE",
        "number": "946-018573",
        "ticker": "MS17_018573",
        "open_date": "2020-08-04T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 93,
        "apx_portfolio_code": "MS17_018573",
        "apx_portfolio_id": 1304,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 42,
        "version": 1083455463770554400,
        "name": "(RBC6_75658) - SEIU LOCAL 1021",
        "number": "32275658",
        "ticker": "RBC6_75658",
        "open_date": "2020-09-03T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 10,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Royal Bank of Canada\\RBC Delivery Instructions - STEP OUT 2020.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 94,
        "apx_portfolio_code": "RBC6_75658",
        "apx_portfolio_id": 1305,
        "apx_custodian": "RBC"
    },
    {
        "id": 43,
        "version": 1155513057808482300,
        "name": "(MS18_052258) - E P Guthrie & J A Mankovich CO",
        "number": "473-052258",
        "ticker": "MS18_052258",
        "open_date": "2020-10-14T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 95,
        "apx_portfolio_code": "MS18_052258",
        "apx_portfolio_id": 1306,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 44,
        "version": 1227570651846410200,
        "name": "(MS19_100960) - GERALD GLEICH",
        "number": "487-100960",
        "ticker": "MS19_100960",
        "open_date": "2020-10-20T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 96,
        "apx_portfolio_code": "MS19_100960",
        "apx_portfolio_id": 1307,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 45,
        "version": 1371685839922266000,
        "name": "(SOSC) - Sisters of St. Casimir Trust",
        "number": "210008CCM",
        "ticker": "SOSC",
        "open_date": "2020-11-24T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 2,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\SEI\\Sisters of St Casimir (SOSC)\\DVP Account Setup Instructions v1020_Sisters of St. Casimir.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 98,
        "apx_portfolio_code": "Sisters_of_St_Casimir",
        "apx_portfolio_id": 1309,
        "apx_custodian": "SEI"
    },
    {
        "id": 46,
        "version": 1443743433960194000,
        "name": "(MS_CES_DS1) - Dominican Outreach Foundation",
        "number": "628-101912",
        "ticker": "MS_CES_DS1",
        "open_date": "2020-12-17T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 99,
        "apx_portfolio_code": "MS_CES_DS1",
        "apx_portfolio_id": 1338,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 47,
        "version": 1515801027998122000,
        "name": "(MS_CES_DS2) - Mother Samuel Coughlin Charitable Trust",
        "number": "628-101901",
        "ticker": "MS_CES_DS2",
        "open_date": "2020-12-18T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 100,
        "apx_portfolio_code": "MS_CES_DS2",
        "apx_portfolio_id": 1339,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 48,
        "version": 1587858622036050000,
        "name": "(MS_CES_DS3) - Sinsinawa Dominicans Inc",
        "number": "628-101866",
        "ticker": "MS_CES_DS3",
        "open_date": "2020-12-18T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 101,
        "apx_portfolio_code": "MS_CES_DS3",
        "apx_portfolio_id": 1340,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 49,
        "version": -7831953253158879000,
        "name": "OLD_MS21_BAD",
        "number": "863-019426",
        "ticker": "OLD_MS21_BAD",
        "open_date": "2020-12-24T00:00:00",
        "close_date": "2021-02-22T00:00:00",
        "custodian_id": 7,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 102,
        "apx_portfolio_code": "MS21_019426",
        "apx_portfolio_id": 0,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 52,
        "version": 8375512232397636000,
        "name": "CCM_INTERNAL_SMA",
        "number": "001051009500",
        "ticker": "CCM_INTERNAL_SMA",
        "open_date": "0001-01-01T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 0,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 0,
        "apx_portfolio_code": "CCM_INTERNAL_SMA",
        "apx_portfolio_id": 0,
        "apx_custodian": "US Bank"
    },
    {
        "id": 53,
        "version": -9086226652987392000,
        "name": "Equity Impact Core Fund",
        "number": "19-7268",
        "ticker": "QUAGX",
        "open_date": "0001-01-01T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 0,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 0,
        "apx_portfolio_code": "QUAGX",
        "apx_portfolio_id": 0,
        "apx_custodian": ""
    },
    {
        "id": 54,
        "version": -9014169058949464000,
        "name": "Equity Impact SMID Fund",
        "number": "19-7271",
        "ticker": "QUSVX",
        "open_date": "0001-01-01T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 0,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 0,
        "apx_portfolio_code": "QUSVX",
        "apx_portfolio_id": 0,
        "apx_custodian": ""
    },
    {
        "id": 55,
        "version": -8942111464911536000,
        "name": "CCMNX-Adjusted",
        "number": "",
        "ticker": "CCMNX-Adjusted",
        "open_date": "0001-01-01T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 0,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 0,
        "apx_portfolio_code": "CCMNX-Adjusted",
        "apx_portfolio_id": 0,
        "apx_custodian": ""
    },
    {
        "id": 56,
        "version": 1731973810111905800,
        "name": "(MS_CES_FSNA) - Felician Sisters of North America Endowment Trust",
        "number": "628103208",
        "ticker": "MS_CES_FSNA",
        "open_date": "2021-02-08T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 103,
        "apx_portfolio_code": "MS_CES_FSNA",
        "apx_portfolio_id": 1342,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 57,
        "version": 723167493580914700,
        "name": "(IHM) - Sisters, Servants of the Immaculate Heart of Mary",
        "number": "16036-CCM",
        "ticker": "IHM",
        "open_date": "2021-03-31T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 2,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Separate Accounts\\1Custodian\\SEI\\SEI Private Trust\\IHM\\Delivery Instructions\\DVP Account Setup Instructions v1020_Sisters Servants of the Immaculate Heart of Mary.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 89,
        "apx_portfolio_code": "IHM",
        "apx_portfolio_id": 1345,
        "apx_custodian": "SEI"
    },
    {
        "id": 58,
        "version": 1299628245884338200,
        "name": "(MS21_019426) - Ossatura B.V.",
        "number": "863-019426",
        "ticker": "MS21_019426",
        "open_date": "2021-02-22T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 97,
        "apx_portfolio_code": "MS21_019426",
        "apx_portfolio_id": 1348,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 59,
        "version": 1804031404149833700,
        "name": "(MS_CES_MBF) - Mary Black Foundation, Inc.",
        "number": "628103579",
        "ticker": "MS_CES_MBF",
        "open_date": "2021-03-02T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 104,
        "apx_portfolio_code": "MS_CES_MBF",
        "apx_portfolio_id": 1344,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 60,
        "version": 1876088998187761700,
        "name": "(MS_CES_SMC) - South Mountain Company Retirement Plan 401k",
        "number": "030018269",
        "ticker": "MS_CES_SMC",
        "open_date": "2021-03-23T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 105,
        "apx_portfolio_code": "MS_CES_SMC",
        "apx_portfolio_id": 1416,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 61,
        "version": -8509765900683969000,
        "name": "Alternative Impact Fund - FI Sleeve",
        "number": "19-1439",
        "ticker": "CCMNX_IG",
        "open_date": "0001-01-01T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 0,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 0,
        "apx_portfolio_code": "CCMNX_IG",
        "apx_portfolio_id": 0,
        "apx_custodian": ""
    },
    {
        "id": 62,
        "version": -8437708306646041000,
        "name": "Alternative Impact Fund - Cash Sleeve",
        "number": "19-1442",
        "ticker": "CCMNX_Cash",
        "open_date": "0001-01-01T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 0,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 0,
        "apx_portfolio_code": "CCMNX_Cash",
        "apx_portfolio_id": 0,
        "apx_custodian": ""
    },
    {
        "id": 63,
        "version": 1948146592225689600,
        "name": "(OWNS) - OWNS - Impact Shares Affordable Housing MBS ETF",
        "number": "993054",
        "ticker": "OWNS",
        "open_date": "2021-06-21T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 0,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\BNY Mellon\\OWNS\\OWNS - IMPACT SHRS AFFRDBLE HSING MBS ETF - BNY Settlement Instructions.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 106,
        "apx_portfolio_code": "OWNS",
        "apx_portfolio_id": 1421,
        "apx_custodian": "BNY Mellon"
    },
    {
        "id": 64,
        "version": 2020204186263617500,
        "name": "(PFM_BCERS) - Bucks County Employees Retirement System & Trust",
        "number": "25091407",
        "ticker": "PFM_BCERS",
        "open_date": "2021-07-15T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 18,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\Principal Financial\\Bucks County\\Bucks County Delivery Instructions - Principal Solutions.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 107,
        "apx_portfolio_code": "PFM_BCERS",
        "apx_portfolio_id": 1422,
        "apx_custodian": "Wells Fargo"
    },
    {
        "id": 65,
        "version": -5991138795603362000,
        "name": "(MS_CES_BSF) - Bonfils-Stanton Foundation",
        "number": "835016545",
        "ticker": "MS_CES_BSF",
        "open_date": "2021-07-09T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 108,
        "apx_portfolio_code": "MS_CES_BSF",
        "apx_portfolio_id": 1424,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 66,
        "version": 2164319374339473400,
        "name": "(MS22_088325) - Sarah Delaney TTEE",
        "number": "559-088325",
        "ticker": "MS22_088325",
        "open_date": "2021-07-23T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 109,
        "apx_portfolio_code": "MS22_088325",
        "apx_portfolio_id": 1425,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 68,
        "version": 2236376968377401300,
        "name": "(UBS_1) - Andrea Nugit-Pecorino",
        "number": "Y633777",
        "ticker": "UBS_1",
        "open_date": "2021-08-24T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 16,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\UBS\\UBS Delivery Instrux 03.2022- Step-out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 110,
        "apx_portfolio_code": "UBS_1_Nugit-Pecorino",
        "apx_portfolio_id": 1426,
        "apx_custodian": "UBS"
    },
    {
        "id": 71,
        "version": 2308434562415329300,
        "name": "(UBS_2_MTFFF) - The M&T Fantastic Family Foundation Dtd 12/08/16",
        "number": "Y632946",
        "ticker": "UBS_2_MTFFF",
        "open_date": "2021-09-02T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 16,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\UBS\\UBS Delivery Instrux 03.2022- Step-out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 111,
        "apx_portfolio_code": "UBS_2_MTFFF",
        "apx_portfolio_id": 1430,
        "apx_custodian": "UBS"
    },
    {
        "id": 72,
        "version": 2380492156453257000,
        "name": "(UBS_3_LFT) - The Laufer Family Trust Dtd 11/26/1990",
        "number": "Y632940",
        "ticker": "UBS_3_LFT",
        "open_date": "2021-09-13T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 16,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\UBS\\UBS Delivery Instrux 03.2022- Step-out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 112,
        "apx_portfolio_code": "UBS_3_LFT",
        "apx_portfolio_id": 1434,
        "apx_custodian": "UBS"
    },
    {
        "id": 73,
        "version": 2452549750491185000,
        "name": "(MS_CES_AMPLT) - Adam Marc Pisoni Living Trust",
        "number": "129-211154",
        "ticker": "MS_CES_AMPLT",
        "open_date": "2021-09-23T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 113,
        "apx_portfolio_code": "MS_CES_AMPLT",
        "apx_portfolio_id": 1435,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 74,
        "version": 2524607344529113000,
        "name": "(TAO_VEGA) - Tao Vega LLC",
        "number": "44-09030",
        "ticker": "TAO_VEGA",
        "open_date": "2021-09-23T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 9,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\Northern Trust\\Tao Vega\\Tao Vega - Northern Trust SSIs.pdf",
        "fax_number": "1-312-630-6266",
        "fax_cover_to": "Northern Trust Company\r\n(312) 630-6266\r\nPhone: (312) 557-7970",
        "fax_phone": "1-312-557-7970",
        "fax_cover_subject": "Tao Vega LLC - #44-09030",
        "fax_cover_body": "",
        "tracker_id": 114,
        "apx_portfolio_code": "TAO_VEGA",
        "apx_portfolio_id": 1436,
        "apx_custodian": "NORTHERN TRUST"
    },
    {
        "id": 75,
        "version": 2596664938567041000,
        "name": "(RBC7_28959) - Moses Cone-Wesley Long Comm Health Fdn Inc",
        "number": "32428959",
        "ticker": "RBC7_28959",
        "open_date": "2021-10-08T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 10,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Royal Bank of Canada\\RBC Delivery Instructions - STEP OUT 2020.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 115,
        "apx_portfolio_code": "RBC7_28959",
        "apx_portfolio_id": 1437,
        "apx_custodian": ""
    },
    {
        "id": 77,
        "version": 539677707487674400,
        "name": "(MS23_044345) - Brian Friedman & Vanessa Slinger-Friedman",
        "number": "398-044345",
        "ticker": "MS23_044345",
        "open_date": "2021-10-20T00:00:00",
        "close_date": "2023-09-08T00:00:00",
        "custodian_id": 7,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 116,
        "apx_portfolio_code": "MS23_044345",
        "apx_portfolio_id": 1439,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 78,
        "version": 2740780126642897000,
        "name": "(LEE) - Lee Memorial Health System dba Lee Health",
        "number": "15945-CCM",
        "ticker": "LEE",
        "open_date": "2021-12-21T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 2,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\SEI\\Lee Health\\DVP Account Setup Instructions v1020_Lee Health.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 117,
        "apx_portfolio_code": "LEE",
        "apx_portfolio_id": 1457,
        "apx_custodian": "SEI"
    },
    {
        "id": 79,
        "version": 2812837720680825000,
        "name": "(UBS_4_NE_Laufer) - Non-Exempt Mstr Nugit Tr FBO Diana Laufer",
        "number": "Y634225",
        "ticker": "UBS_4_NE_Laufer",
        "open_date": "2022-01-11T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 16,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\UBS\\UBS Delivery Instrux 03.2022- Step-out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 118,
        "apx_portfolio_code": "UBS_4_NE_Laufer",
        "apx_portfolio_id": 1460,
        "apx_custodian": "UBS"
    },
    {
        "id": 80,
        "version": 2884895314718753000,
        "name": "(UBS_5_NE_N-P) - Non-Exempt Mstr Nugit Tr FBO Andrea Nugit Pecorino",
        "number": "Y634194",
        "ticker": "UBS_5_NE_N-P",
        "open_date": "2022-01-11T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 16,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\UBS\\UBS Delivery Instrux 03.2022- Step-out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 119,
        "apx_portfolio_code": "UBS_5_NE_N-P",
        "apx_portfolio_id": 1461,
        "apx_custodian": "UBS"
    },
    {
        "id": 81,
        "version": 2956952908756680700,
        "name": "(UBS_6_E_Laufer) - Exempt Mstr Nugit Tr FBO Diana Laufer",
        "number": "Y634201",
        "ticker": "UBS_6_E_Laufer",
        "open_date": "2022-01-11T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 16,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\UBS\\UBS Delivery Instrux 03.2022- Step-out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 120,
        "apx_portfolio_code": "UBS_6_E_Laufer",
        "apx_portfolio_id": 1462,
        "apx_custodian": "UBS"
    },
    {
        "id": 82,
        "version": 3029010502794608600,
        "name": "(UBS_7_E_N-P) - Exempt Mstr Nugit Tr FBO Andrea Nugit Pecorino",
        "number": "Y634208",
        "ticker": "UBS_7_E_N-P",
        "open_date": "0001-01-01T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 16,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\UBS\\UBS Delivery Instrux 03.2022- Step-out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 121,
        "apx_portfolio_code": "UBS_7_E_N-P",
        "apx_portfolio_id": 1463,
        "apx_custodian": "UBS"
    },
    {
        "id": 83,
        "version": 3101068096832536600,
        "name": "(MS24_175163) - Katonah United Methodist",
        "number": "052-175163",
        "ticker": "MS24_175163",
        "open_date": "2022-01-12T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 122,
        "apx_portfolio_code": "MS24_175163",
        "apx_portfolio_id": 1464,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 84,
        "version": 1759834343838056400,
        "name": "(MS25_012076) - Father Amando Llorente, S",
        "number": "088-012076",
        "ticker": "MS25_012076",
        "open_date": "2022-01-21T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 123,
        "apx_portfolio_code": "MS25_012076",
        "apx_portfolio_id": 1465,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 85,
        "version": 3245183284908392400,
        "name": "(NCF) - The Nathan Cummings Foundation",
        "number": "44-11576",
        "ticker": "NCF",
        "open_date": "2022-01-31T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 9,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\Northern Trust\\Nathan Cummings\\Nathan Cummings - Northern Trust SSIs.pdf",
        "fax_number": "1-312-630-6266",
        "fax_cover_to": "Northern Trust Company  (312) 630-6266  Phone: (312) 557-7970",
        "fax_phone": "1-312-557-7970",
        "fax_cover_subject": "The Nathan Cummings Foundation - #44-11576",
        "fax_cover_body": "",
        "tracker_id": 124,
        "apx_portfolio_code": "Nathan_Cummings",
        "apx_portfolio_id": 1466,
        "apx_custodian": "NORTHERN TRUST"
    },
    {
        "id": 86,
        "version": 3317240878946320400,
        "name": "(ASCN) - Ascension Alpha Fund, LLC",
        "number": "AQZ92",
        "ticker": "ASCN",
        "open_date": "2021-02-24T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 9,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\Northern Trust\\Ascension\\Ascension - Northern Trust SSIs.pdf",
        "fax_number": "1-312-630-6266",
        "fax_cover_to": "Northern Trust Company  (312) 630-6266  Phone: (312) 557-7970",
        "fax_phone": "1-312-557-7970",
        "fax_cover_subject": "Ascension Alpha Fund, LLC - #AQZ92",
        "fax_cover_body": "",
        "tracker_id": 125,
        "apx_portfolio_code": "ASCN",
        "apx_portfolio_id": 1467,
        "apx_custodian": "NORTHERN TRUST"
    },
    {
        "id": 90,
        "version": 3389298472984248300,
        "name": "(RBC8_90792) - The Alamance Community & Health Foundation",
        "number": "32490792",
        "ticker": "RBC8_90792",
        "open_date": "2022-03-07T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 10,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\Royal Bank of Canada\\RBC Delivery Instructions - STEP OUT 2020.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 126,
        "apx_portfolio_code": "RBC8_90792",
        "apx_portfolio_id": 1470,
        "apx_custodian": "RBC"
    },
    {
        "id": 91,
        "version": 3461356067022176000,
        "name": "(MS26_111374) - Astellas Global Health",
        "number": "628-111374",
        "ticker": "MS26_111374",
        "open_date": "2022-03-17T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 127,
        "apx_portfolio_code": "MS26_111374",
        "apx_portfolio_id": 1471,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 100,
        "version": 3533413661060104000,
        "name": "(UBS_8_PFLT) - Pecorino Family Legacy Trust Dtd 09/01/2020",
        "number": "Y636090",
        "ticker": "UBS_8_PFLT",
        "open_date": "2022-03-29T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 16,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\UBS\\UBS Delivery Instrux 03.2022- Step-out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 130,
        "apx_portfolio_code": "UBS_8_PFLT",
        "apx_portfolio_id": 1473,
        "apx_custodian": "UBS"
    },
    {
        "id": 101,
        "version": 3434816059645886500,
        "name": "(MCF) - Marguerite Casey Foundation",
        "number": "B72F4070752",
        "ticker": "MCF",
        "open_date": "2022-05-12T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 8,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\BNY Mellon\\MCF\\Marguerite Casey Foundation - US Settlement Instructions 05_04_22.pdf",
        "fax_number": "1-800-247-0847",
        "fax_cover_to": "settlementsCSEUS2@bnymellon.com",
        "fax_phone": "",
        "fax_cover_subject": "MCF – 407075",
        "fax_cover_body": "Acct# 407075 \r\nMarguerite Casey Foundation/Community Capital Management, LLC",
        "tracker_id": 131,
        "apx_portfolio_code": "MCF",
        "apx_portfolio_id": 1475,
        "apx_custodian": "BNY Mellon"
    },
    {
        "id": 102,
        "version": 3677528849135960000,
        "name": "(UBS_9_TEFF) - The Eileen Fisher Foundation",
        "number": "PY36008",
        "ticker": "UBS_9_TEFF",
        "open_date": "2022-05-25T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 16,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\UBS\\UBS Delivery Instrux 03.2022- Step-out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 132,
        "apx_portfolio_code": "UBS_9_TEFF",
        "apx_portfolio_id": 1478,
        "apx_custodian": "UBS"
    },
    {
        "id": 108,
        "version": 2718973508234248000,
        "name": "Test Acct",
        "number": "testNum",
        "ticker": "test",
        "open_date": "2018-07-01T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 0,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 0,
        "apx_portfolio_code": "zzForwardContractPlaceholder",
        "apx_portfolio_id": 838,
        "apx_custodian": "US Bank"
    },
    {
        "id": 111,
        "version": 3749586443173888000,
        "name": "(PMI) - Project Management Institute",
        "number": "210017CCM",
        "ticker": "PMI",
        "open_date": "2022-07-01T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 2,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\SEI\\PMI\\DVP Account Setup Instructions v1020_PMI.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 133,
        "apx_portfolio_code": "PMI",
        "apx_portfolio_id": 1479,
        "apx_custodian": "SEI"
    },
    {
        "id": 113,
        "version": -2447648119064625000,
        "name": "(TRSY) - PA Treasury",
        "number": "IN8FFI170002",
        "ticker": "TRSY",
        "open_date": "0001-01-01T00:00:00",
        "close_date": "2018-06-01T00:00:00",
        "custodian_id": 0,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 7,
        "apx_portfolio_code": "PA_Treasury",
        "apx_portfolio_id": 298,
        "apx_custodian": ""
    },
    {
        "id": 114,
        "version": -2663820901178409000,
        "name": "(SWIF) - PA SWIF",
        "number": "CPWFFD036002",
        "ticker": "SWIF",
        "open_date": "0001-01-01T00:00:00",
        "close_date": "2018-12-01T00:00:00",
        "custodian_id": 0,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 4,
        "apx_portfolio_code": "PA_SWIF",
        "apx_portfolio_id": 300,
        "apx_custodian": ""
    },
    {
        "id": 115,
        "version": -2807936089254265000,
        "name": "(HERON) - The F.B. Heron Foundation",
        "number": "001050981030",
        "ticker": "HERON",
        "open_date": "0001-01-01T00:00:00",
        "close_date": "2019-12-19T00:00:00",
        "custodian_id": 0,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 2,
        "apx_portfolio_code": "FB_Heron",
        "apx_portfolio_id": 310,
        "apx_custodian": ""
    },
    {
        "id": 116,
        "version": -2375590525026697000,
        "name": "(MEYER) - The Meyer Memorial Trust",
        "number": "97311703",
        "ticker": "MEYER",
        "open_date": "0001-01-01T00:00:00",
        "close_date": "2020-05-31T00:00:00",
        "custodian_id": 0,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 23,
        "apx_portfolio_code": "Meyer_Memorial",
        "apx_portfolio_id": 312,
        "apx_custodian": ""
    },
    {
        "id": 117,
        "version": -2303532930988769300,
        "name": "(NYS) - NYS Economic Fund",
        "number": " 19-1430",
        "ticker": "NYS",
        "open_date": "0001-01-01T00:00:00",
        "close_date": "2017-11-17T00:00:00",
        "custodian_id": 0,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 32,
        "apx_portfolio_code": "NYS_FUND",
        "apx_portfolio_id": 498,
        "apx_custodian": ""
    },
    {
        "id": 118,
        "version": -2015302554837057500,
        "name": "(UCF) - United Church Funds",
        "number": "UC3F10012802",
        "ticker": "UCF",
        "open_date": "0001-01-01T00:00:00",
        "close_date": "2020-08-18T00:00:00",
        "custodian_id": 0,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 36,
        "apx_portfolio_code": "United_Church_Funds",
        "apx_portfolio_id": 872,
        "apx_custodian": ""
    },
    {
        "id": 119,
        "version": -1943244960799129600,
        "name": "(MNRV) - Minerva Pleiades Trust",
        "number": "4473580",
        "ticker": "MNRV",
        "open_date": "2017-06-05T00:00:00",
        "close_date": "2020-11-30T00:00:00",
        "custodian_id": 0,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 37,
        "apx_portfolio_code": "Minerva",
        "apx_portfolio_id": 1053,
        "apx_custodian": ""
    },
    {
        "id": 120,
        "version": -1871187366761201700,
        "name": "(DNVR) - The Denver Foundation",
        "number": "XPY900052",
        "ticker": "DNVR",
        "open_date": "2018-01-01T00:00:00",
        "close_date": "2020-06-22T00:00:00",
        "custodian_id": 0,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 38,
        "apx_portfolio_code": "Denver_Foundation",
        "apx_portfolio_id": 1108,
        "apx_custodian": ""
    },
    {
        "id": 121,
        "version": -1366784208495706000,
        "name": "(MS3_050411) - Muffy Ferro",
        "number": "124-050411",
        "ticker": "MS3_050411",
        "open_date": "2019-01-30T00:00:00",
        "close_date": "2019-07-26T00:00:00",
        "custodian_id": 0,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 59,
        "apx_portfolio_code": "MS3_050411",
        "apx_portfolio_id": 1196,
        "apx_custodian": ""
    },
    {
        "id": 122,
        "version": -141805109850931200,
        "name": "(RBC5_55190) - The Bay and Paul Foundations Inc",
        "number": "32155190",
        "ticker": "RBC5_55190",
        "open_date": "2019-07-24T00:00:00",
        "close_date": "2020-08-28T00:00:00",
        "custodian_id": 0,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 77,
        "apx_portfolio_code": "RBC5_55190",
        "apx_portfolio_id": 1234,
        "apx_custodian": ""
    },
    {
        "id": 123,
        "version": 290821929353347100,
        "name": "(MS13_011029) - Texas Womens Foundation Endowment",
        "number": "088-011029",
        "ticker": "MS13_011029",
        "open_date": "2019-11-01T00:00:00",
        "close_date": "2020-07-10T00:00:00",
        "custodian_id": 0,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 83,
        "apx_portfolio_code": "MS13_011029",
        "apx_portfolio_id": 1251,
        "apx_custodian": ""
    },
    {
        "id": 124,
        "version": 362879523391275000,
        "name": "(MS14_011040) - Texas Womens Foundation DAF",
        "number": "088-011040",
        "ticker": "MS14_011040",
        "open_date": "2019-11-01T00:00:00",
        "close_date": "2020-07-10T00:00:00",
        "custodian_id": 0,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 84,
        "apx_portfolio_code": "MS14_011040",
        "apx_portfolio_id": 1252,
        "apx_custodian": ""
    },
    {
        "id": 125,
        "version": 1659916216073977900,
        "name": "(MS20_018705) - Ossatura B.V.",
        "number": "863-018705",
        "ticker": "MS20_018705",
        "open_date": "2020-12-24T00:00:00",
        "close_date": "2021-02-18T00:00:00",
        "custodian_id": 0,
        "ima_id": 0,
        "composite_affiliation_id": 0,
        "delivery_instructions": "",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 102,
        "apx_portfolio_code": "MS20_018705",
        "apx_portfolio_id": 1341,
        "apx_custodian": ""
    },
    {
        "id": 126,
        "version": 3821644037211816000,
        "name": "(SCF) - Schwab Charitable Fund",
        "number": "7484-5308",
        "ticker": "SCF",
        "open_date": "2022-08-30T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 11,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\Charles Schwab\\Schwab Charitable Fund\\Schwab Charitable Delivery Instructions.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 134,
        "apx_portfolio_code": "SCF",
        "apx_portfolio_id": 1489,
        "apx_custodian": "Schwab"
    },
    {
        "id": 127,
        "version": 3893701631249744000,
        "name": "(RBC9_24196) - Asian Law Caucus",
        "number": "32524196",
        "ticker": "RBC9_24196",
        "open_date": "2022-08-23T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 10,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\Royal Bank of Canada\\RBC Delivery Instructions - STEP OUT 2020.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 135,
        "apx_portfolio_code": "RBC9_24196",
        "apx_portfolio_id": 1490,
        "apx_custodian": "RBC"
    },
    {
        "id": 128,
        "version": 3965759225287672000,
        "name": "(RBC10_51567) - All-One-God-Faith, Inc.",
        "number": "32551567",
        "ticker": "RBC10_51567",
        "open_date": "2022-08-30T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 10,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\Royal Bank of Canada\\RBC Delivery Instructions - STEP OUT 2020.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 136,
        "apx_portfolio_code": "RBC10_51567",
        "apx_portfolio_id": 1491,
        "apx_custodian": "RBC"
    },
    {
        "id": 129,
        "version": 4037816819325600000,
        "name": "(PLT) - Pleiades Trust",
        "number": "44-15151",
        "ticker": "PLT",
        "open_date": "2022-09-01T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 9,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\Northern Trust\\Pleiades Trust\\Pleiades Trust - Northern Trust SSIs.pdf",
        "fax_number": "1-312-630-6266",
        "fax_cover_to": "Northern Trust Company (312) 630-6266 Phone: (480) 692-4603",
        "fax_phone": "1-480-692-4603",
        "fax_cover_subject": "Pleiades Trust - #44-15151",
        "fax_cover_body": "",
        "tracker_id": 137,
        "apx_portfolio_code": "PLT",
        "apx_portfolio_id": 1492,
        "apx_custodian": "NORTHERN TRUST"
    },
    {
        "id": 130,
        "version": 4109874413363527700,
        "name": "(UBS_10_NPT) - National Philanthropic Trust",
        "number": "V302486",
        "ticker": "UBS_10_NPT",
        "open_date": "2022-09-15T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 16,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\UBS\\UBS Delivery Instrux 03.2022- Step-out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 138,
        "apx_portfolio_code": "UBS_10_NPT",
        "apx_portfolio_id": 1494,
        "apx_custodian": "UBS"
    },
    {
        "id": 131,
        "version": -6997560271413707000,
        "name": "(UBS_11_MMGT) - Malia McInerney 2016 Gift Trust U/A/D 6/20/2016",
        "number": "Y426514",
        "ticker": "UBS_11_MMGT",
        "open_date": "2023-03-16T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 16,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\UBS\\UBS Delivery Instrux 03.2022- Step-out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 140,
        "apx_portfolio_code": "UBS_11_MMGT",
        "apx_portfolio_id": 1510,
        "apx_custodian": "UBS"
    },
    {
        "id": 132,
        "version": -706913400302600200,
        "name": "(FSM) - Franciscan Sisters of Mary",
        "number": "040005950603",
        "ticker": "FSM",
        "open_date": "2023-02-28T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 6,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\US Bank\\FSM\\Franciscan Sisters of Mary (FSM) - Domestic SSIs.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 149,
        "apx_portfolio_code": "FSM",
        "apx_portfolio_id": 1511,
        "apx_custodian": "US Bank"
    },
    {
        "id": 133,
        "version": -995143776454312000,
        "name": "(MJT) -   Mary and Joseph Trust",
        "number": "040005950302",
        "ticker": "MJT",
        "open_date": "2023-02-28T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 6,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\US Bank\\MJT\\Mary and Joseph Trust (MJT)- Domestic SSIs.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 150,
        "apx_portfolio_code": "MJT",
        "apx_portfolio_id": 1512,
        "apx_custodian": "US Bank"
    },
    {
        "id": 134,
        "version": -4795154913799700000,
        "name": "(TC_SMH) - St. Margarets Housing LLC",
        "number": "44-18725",
        "ticker": "TC_SMH",
        "open_date": "2023-04-05T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 9,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\Northern Trust\\St. Margaret's Housing LLC\\St. Margaret's Housing LLC - Northern Trust SSIs.pdf",
        "fax_number": "1-312-630-6266",
        "fax_cover_to": "Northern Trust Company  (312) 630-6266  Phone: (312) 557-7970",
        "fax_phone": "(312) 557-7970",
        "fax_cover_subject": "Trinity Church - St. Margaret's Housing, LLC  Acct # 44-18725",
        "fax_cover_body": "",
        "tracker_id": 151,
        "apx_portfolio_code": "TC_SMH",
        "apx_portfolio_id": 1519,
        "apx_custodian": "NORTHERN TRUST"
    },
    {
        "id": 135,
        "version": -9064363955190759000,
        "name": "(RBC11_09196) - Alameda County Community Food Bank",
        "number": "32509196",
        "ticker": "RBC11_09196",
        "open_date": "2023-04-11T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 10,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\Royal Bank of Canada\\RBC Delivery Instructions - STEP OUT 2020.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 152,
        "apx_portfolio_code": "RBC11_09196",
        "apx_portfolio_id": 1520,
        "apx_custodian": "RBC"
    },
    {
        "id": 136,
        "version": 8950638190469841000,
        "name": "(SCFLP) - Schwab Charitable Fund LP Donor LS Donor",
        "number": "41225709",
        "ticker": "SCFLP",
        "open_date": "2023-04-27T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 11,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\Charles Schwab\\Schwab Charitable Fund LP Donor LS Donor\\Schwab Charitable - LP Donor- SSIs.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 153,
        "apx_portfolio_code": "SCFLP",
        "apx_portfolio_id": 1521,
        "apx_custodian": "Schwab"
    },
    {
        "id": 137,
        "version": 3350592373741584400,
        "name": "(CVP) - The Carl Victor Page Memorial Foundation",
        "number": "291225",
        "ticker": "CVP",
        "open_date": "2023-04-26T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 8,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\BNY Mellon\\CVP\\The Carl Victor Page Memorial Foundation - US Settlement Instructions - USNet.pdf",
        "fax_number": "1-800-247-0847",
        "fax_cover_to": "settlementsCSEUS2@bnymellon.com",
        "fax_phone": "",
        "fax_cover_subject": "C V Page Mem Acct #291225",
        "fax_cover_body": "Acct: 291225 The Carl Victor Page Memorial Foundation/Community Capital Management LLC",
        "tracker_id": 154,
        "apx_portfolio_code": "CVP",
        "apx_portfolio_id": 1522,
        "apx_custodian": "BNY Mellon"
    },
    {
        "id": 138,
        "version": -1923186561583677400,
        "name": "(MS_CES_CLF) - The Clara Lionel Foundation",
        "number": "628-118458",
        "ticker": "MS_CES_CLF",
        "open_date": "2023-06-09T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 156,
        "apx_portfolio_code": "MS_CES_CLF",
        "apx_portfolio_id": 1525,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 139,
        "version": -8909880368170009000,
        "name": "(NPTLP) - National Philanthropic Trust LP",
        "number": "291226",
        "ticker": "NPTLP",
        "open_date": "2023-05-26T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 8,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\BNY Mellon\\NPTLP\\National Philanthropic Trust LP- USNet.pdf",
        "fax_number": "1-800-247-0847",
        "fax_cover_to": "settlementsCSEUS2@bnymellon.com",
        "fax_phone": "",
        "fax_cover_subject": "National Philanthropic Trust Acct #291226",
        "fax_cover_body": "Acct: 291226 National Philanthropic Trust/Community Capital Management LLC",
        "tracker_id": 157,
        "apx_portfolio_code": "NPTLP",
        "apx_portfolio_id": 1526,
        "apx_custodian": "BNY Mellon"
    },
    {
        "id": 140,
        "version": -1630937470432444400,
        "name": "(RBC12_55012) - HIDDEN LEAF FOUNDATION",
        "number": "32655012",
        "ticker": "RBC12_55012",
        "open_date": "2023-06-23T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 10,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\Royal Bank of Canada\\RBC Delivery Instructions - STEP OUT 2020.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 158,
        "apx_portfolio_code": "RBC12_55012",
        "apx_portfolio_id": 1531,
        "apx_custodian": "RBC"
    },
    {
        "id": 141,
        "version": 2057533714128175000,
        "name": "(MS_CES_LAWMO) - Legal Aid of Western Missouri",
        "number": "295-044443",
        "ticker": "MS_CES_LAWMO",
        "open_date": "2023-07-17T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 159,
        "apx_portfolio_code": "MS_CES_LAWMO",
        "apx_portfolio_id": 1533,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 142,
        "version": 1884470583916232700,
        "name": "(RBC13_82149) - Garfield Foundation",
        "number": "32682149",
        "ticker": "RBC13_82149",
        "open_date": "2023-08-03T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 10,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\Royal Bank of Canada\\RBC Delivery Instructions - STEP OUT 2020.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 160,
        "apx_portfolio_code": "RBC13_82149",
        "apx_portfolio_id": 1538,
        "apx_custodian": "RBC"
    },
    {
        "id": 143,
        "version": 3933624911339192300,
        "name": "(MS27_095228-) - Mary Lou Hatcher",
        "number": "604-095228",
        "ticker": "MS27_095228",
        "open_date": "2023-08-09T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 161,
        "apx_portfolio_code": "MS27_095228",
        "apx_portfolio_id": 1539,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 144,
        "version": 4005682505377120000,
        "name": "(MS28_059763) - Center for Energy and Env",
        "number": "390-059763",
        "ticker": "MS28_059763",
        "open_date": "2023-08-09T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 7,
        "ima_id": 2,
        "composite_affiliation_id": 0,
        "delivery_instructions": "\\\\ccm-fs-01\\SharedUsers\\Trading\\CCM Onboarding\\Delivery Instructions\\Morgan Stanley\\Morgan Stanley Settlement Instructions-Generic Step-Out.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 162,
        "apx_portfolio_code": "MS28_059763",
        "apx_portfolio_id": 1540,
        "apx_custodian": "Morgan Stanley"
    },
    {
        "id": 145,
        "version": 7628606304247874000,
        "name": "(RBC14_84807) - Pilgrim Place in Claremont",
        "number": "32684807",
        "ticker": "RBC14_84807",
        "open_date": "2023-09-01T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 10,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\Royal Bank of Canada\\RBC Delivery Instructions - STEP OUT 2020.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 163,
        "apx_portfolio_code": "RBC14_84807",
        "apx_portfolio_id": 1541,
        "apx_custodian": "RBC"
    },
    {
        "id": 146,
        "version": 2516462175275450400,
        "name": "(RBC15_90177) - People’s Support Foundation",
        "number": "32690177",
        "ticker": "RBC15_90177",
        "open_date": "2023-09-05T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 10,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "S:\\Trading\\CCM Onboarding\\Delivery Instructions\\Royal Bank of Canada\\RBC Delivery Instructions - STEP OUT 2020.pdf",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 164,
        "apx_portfolio_code": "RBC15_90177",
        "apx_portfolio_id": 1542,
        "apx_custodian": "RBC"
    },
    {
        "id": 147,
        "version": 8319657058886484000,
        "name": "(MADF) - The Dan and Margaret Maddox Fund",
        "number": "UB9002075",
        "ticker": "MADF",
        "open_date": "2023-09-12T00:00:00",
        "close_date": "0001-01-01T00:00:00",
        "custodian_id": 5,
        "ima_id": 1,
        "composite_affiliation_id": 0,
        "delivery_instructions": "",
        "fax_number": "",
        "fax_cover_to": "",
        "fax_phone": "",
        "fax_cover_subject": "",
        "fax_cover_body": "",
        "tracker_id": 165,
        "apx_portfolio_code": "MADF",
        "apx_portfolio_id": 1543,
        "apx_custodian": "Pershing"
    }
];

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