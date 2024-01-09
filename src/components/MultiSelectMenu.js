import Select from "react-select";

export default function MultiSelectMenu({ selectStyles ,rowsForSelect, handleMultiSelectChange, handleSelectMenuClose, placeHolderString, classNames }) {

    return (
        <Select 
            isMulti
            hideSelectedOptions
            name="issuers"
            options={rowsForSelect}
            classNamePrefix="select"
            className={classNames}
            theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                    ...theme.colors,
                    //primary25: 'lightblue',
                    primary: 'black',
                },
            })}
            styles={selectStyles}
            onChange={handleMultiSelectChange}
            closeMenuOnSelect={false}
            onMenuClose={handleSelectMenuClose}
            placeholder={placeHolderString}
            
        />
    )
}