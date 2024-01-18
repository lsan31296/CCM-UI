import FileUploaderComponent from "../components/FileUploader";

/**
 * Purpose: To host a page solely for the creation and testing of a DevExtreme's
 * FileUploader component. Inteded use of the compnent is to quickly upload csv files
 * and process them into the corresponding databases.
 */
export default function FileUploadingPage({...props}) {


    return (
        <div id="file-uploading-page-container">
            <h1>File Uploading Page</h1>
            <FileUploaderComponent isMultiple={true} uploadMode={"useButtons"}/>
        </div>
    )
}