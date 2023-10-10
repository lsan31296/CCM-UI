//This component will be responsible for displaying a custom table within the Multi-Select dropdown
//DOES NOT WORK HOW WE INTENDED
import Select, { components } from "react-select";
import DataTable from "react-data-table-component"
/**
 * Currently am not able to get the table headers that are displayed in the Menu() component to scale 
 * and line up with the children that are being shown. 
 * @param {*} props 
 * @returns {jsx} CustomMultiSelect component
 */
const Menu = (props) => {
    console.log("Menu props: ", props);
    return (
        <>
            <components.Menu {...props}>
                <table id="security-combo-multi-select-table">
                    <thead>
                        <tr>
                            <th>Marketing Asset Group</th>
                            <th>Group</th>
                            <th>Type</th>
                            <th>Sector</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.children}
                    </tbody>
                </table>
            </components.Menu>
        </>
    );
};
const Option = (props) => {
    console.log("Option props: ", props)
    return (
        <>
            <components.Option {...props}>{props.children}
            {/* POTENTIALLY NEED TO ASSEMBLE DATA TABLE APP IN HERE */}
            </components.Option>
        </>
    );
};

export default function CustomMultiSelect({...props}) {
    console.log("CustomMultiSelect prop: ", props)
    return (
        //<div id="custom-multi-select-container" className={props.classNames}>
            <Select
                styles={props.selectStyles}
                className={props.classNames}
                isMulti closeMenuOnSelect={false} closeMenuOnScroll={false}
                options={props.options}
                components={{ Menu, Option }}
                securityComboColumnHeaders={props.securityComboColumnHeaders}
                securityComboStyles={props.securityComboStyles}
                placeholder={props.placeHolderString}
            />
        //</div>
    )
}