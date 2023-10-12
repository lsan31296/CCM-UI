import React, { useState } from 'react';
import DataGrid, { Column, Selection, Paging, FilterRow } from 'devextreme-react/data-grid';
import DropDownBox from 'devextreme-react/drop-down-box';
import { Resizable } from 'devextreme-react';


export default function DropDownBoxDataGrid({...props}) {
    const [dropDownVisible, setDropDownVisible] = useState(false)
    const [dropDownWidth, setDropDownWidth] = useState(400);
    const [dropDownHeight, setDropDownHeight] = useState(37);

    const handleResize = (width, height) => {
        setDropDownHeight(height);
        setDropDownWidth(width);
    }

    return (
        
        <div id='drop-down-data-grid-container' className={props.classNames}>
            <Resizable width={dropDownWidth} height={dropDownHeight} onResize={handleResize} minWidth={200} minHeight={37}
                style={{ position: "relative", maxWidth: "47vw", maxHeight: "615px", overflow: "auto" }}
            >
                <DropDownBox
                    value={dropDownVisible}
                    onValueChanged={(e) => setDropDownVisible(e.value)}
                    dataSource={props.data}
                    valueExpr="ID"
                    displayExpr="ID"
                    placeholder={props.placeHolderString}
                    //width={dropDownWidth}
                    //height={dropDownHeight}
                    width="100%"
                    height="auto"
                >

                    <DataGrid
                        dataSource={props.data}
                        showBorders={true}
                        remoteOperations={false}
                        onSelectionChanged={props.onChange}
                        selectedRowKeys={props.selectedRows}
                        keyExpr="ID"
                        allowColumnReordering allowColumnResizing showColumnLines showRowLines hoverStateEnabled
                    >
                        {/* <Column dataField="ID" caption="ID" /> */}

                        {props.columns}
                    </DataGrid>

                </DropDownBox>
            </Resizable>
            {/*
            <div>
                <h3>Selected Rows:</h3>
                <ul>
                    {props.selectedRows.map((item) => (
                        <li key={item.ID}>{`${item.marketingAssetGroup} || ${item.securityGroup} || ${item.securityType} || ${item.securitySector}`}</li>
                    ))}
                </ul>
            </div>
            */}

        </div>

    );
};

