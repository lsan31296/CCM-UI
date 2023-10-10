import Select from "react-select";

export default function SingleSelectMenu({ selectStyles ,rowsForSelect, handleSingleSelectChange, handleSelectMenuClose, placeHolderString, classNames }) {
    return (
        <Select 
            className={classNames}
            id="singleSelect"
            classNamePrefix="select"
            options={rowsForSelect}
            name="issuers"
            onChange={handleSingleSelectChange}
            closeMenuOnSelect={true}
            onMenuClose={handleSelectMenuClose}
            placeholder={placeHolderString}
            styles={selectStyles}
            isSearchable={true}
            isClearable={true}
        />
    )
}