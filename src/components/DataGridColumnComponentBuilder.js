import DataGrid, { Column, Selection, Paging, FilterRow } from 'devextreme-react/data-grid';

/**
 * The purpose of this component is to build an array of columns based on the dynamic fields
 * of the data that is fed into the component. Additionally, based on these column names,
 * the columns will additionally have its own formatting.
 * Column components and others that would go into a DataGrid can be created in an array.
 * Component should return and array.
 * @example
 * const data = [
 *  {
 *   "previously_Owned": "",
 *   "series_identifier": "",
 *   "last_Purchased_Date": "",
 *   "portfolio_Base_Code": "CRAFund",
 *   "account_Name": "CCM Community Impact Bond Fund",
 *   "trade_Date": "2023-12-29T00:00:00",
 *   "settle_Date": "2024-01-03T00:00:00",
 *   "buy_Sell": "B",
 *   "cusip": "02079KAD9",
 *   "pool_Name": "ALPHABET INC",
 *   "security_Type": "CORP",
 *   "coupon": 1.1,
 *   "maturity_Date": "2030-08-15T00:00:00",
 *   "orig_Face": 13060000,
 *   "price": 83.161,
 *   "reference": "",
 *   "counter_Party": "Seelaus & Co.",
 *   "duration": 6.191,
 *   "duration_Contribution": 0.0241,
 *   "yield": 4.047,
 *   "accrued_Interest": 55069.6666,
 *   "principal": 10860826.6,
 *   "net_Amount": 10915896.27
 *   },...
 * ];
 * const columnBuilder = DataGridColumnComponentBuilder(data);
 * //returns 
 * //   [
 * //       <Columm dataField="previouslyOwned" caption="Previously Owned"
 * //           format={{ type: "currency", precision: 6 }}
 * //       />,
 * //       ...
 * //   ];
 * @param {Object[]} data - Array of account objects
 * @param {string|number|DateString} data[].propertyName - The properties of each account within the array
 * @returns {Column[]} An array of DataGrid Property Components such as Column, Selection, Paging, FilterRow
 */
export default function DataGridColumComponentBuilder(data) {
        const singleDataObj = data[0];
        const columnBuilder = [];

        for (const [key,value] of Object.entries(singleDataObj)) {
            //Data Scenarios: 1) Money 2) Date String 3) Percentage 4) Decimal 5) Simple String
            
            switch(key.toLowerCase()) {
                //1) Money
                case "orig_face":
                case "principal":
                    columnBuilder.push(
                        <Column dataField={`${key}`}
                            dataType="number"
                            format="currency"
                        />
                    );
                    break;
                case "price":
                    columnBuilder.push(
                        <Column dataField={`${key}`}
                            dataType="number"
                            format={{ type: "currency", precision: 6 }}
                        />
                    );
                    break;
                case "accrued_interest":
                case "net_amount":
                    columnBuilder.push(
                        <Column dataField={`${key}`}
                            dataType="number"
                            format={{ type: "currency", precision: 2 }}
                        />
                    );
                    break;
                //2) Date String
                case "last_purchased_date":
                case "trade_date":
                case "settle_date":
                case "maturity_date":
                    columnBuilder.push(
                        <Column dataField={`${key}`}
                            dataType="date"
                        />
                    );
                    break;
                //3) Percentage
                case "duration":
                case "duration_contribution":
                case "yield":
                case "coupon":
                    columnBuilder.push(
                        <Column dataField={`${key}`} dataType="number" />
                    );
                    break;
                //4) Decimal
                //5) Simple String
                default:
                    console.log(`No direct case was specified for Field: ${key} = ${value} }. Returned as is`);
                    columnBuilder.push(
                        <Column dataField={`${key}`} />
                    );
            }
            
            
        }//end of data object loop

    return columnBuilder;
}

