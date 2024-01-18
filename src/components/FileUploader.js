import { FileUploader } from "devextreme-react";
import { useState } from "react";

/**
 * Purpose: Modular file uploading component that can be place in any page which requires a file
 * to be uploaded. Processing will take place in the middle-tier after research has been conducted
 * on how to save and use .csv files to update SQL Server.
 */
export default function FileUploaderComponent({...props}) {
    //DESTRUCTURE PROPS
    const {isMultiple, uploadMode} = props;
    //DECLARE STATE VARIABLES
    const [value, setValue] = useState([]);
    //DECLARE EVENT HANDLERS
    const handleChangedValue = (e) => {
        console.log("Changed file uploader value\n Event: ", e)
        setValue(e.value);
    }

    return (
        <FileUploader 
            value={value}
            onValueChanged={handleChangedValue}
            multiple={isMultiple}
            uploadMode={uploadMode}
        />
    )
}