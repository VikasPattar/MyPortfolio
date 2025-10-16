import {useState, useRef} from 'react'
import axios from "axios";


const FileUploadModal = () => {
    const baseUrl = "http://localhost:4000"
    const [file, setFile] = useState(null);     //variable to store the selected file
    const fileInputRef = useRef(null);  //reference to the hidden file input element

    // runs when files are selected
    // only single file selection is allowed | sets the first file from the FileList object to the file variable defined above
    const handleFiles = (selectedFiles) => {
        setFile(selectedFiles[0]);
    };

    // runs when a file is dropped in the file dropping area
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        handleFiles(e.dataTransfer.files);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    // runs when clicked on the file dropping area
    const handleClick = () => {
        fileInputRef.current.click();
    };

    // runs when form is submitted
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target   //form element
        let data = new FormData(form)   //form data object | this is not readable in console

        //converting form data into object  | this is readable in console
        let formData = Object.fromEntries(data.entries())   
        console.log(formData)

        axios.put(`${baseUrl}/admin/edit/profile-pic`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    // JSX for file upload form
    const fileUpload = <form action="#" onSubmit={handleSubmit} className="text-center">
        <div
            className="d-flex flex-column align-items-center justify-content-center border border-2 rounded-4 p-5 text-center"
            style={{
                cursor: "pointer",
                transition: "all 0.3s ease",
                minHeight: "250px",
            }}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={handleClick}
        >
            {/* Hidden File Input */}
            <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => handleFiles(e.target.files)}
                className="d-none"
                name="profilePic"
            />

            {/* Upload Icon */}
            <i className="bi bi-cloud-arrow-up display-3 mb-3"></i>

            {/* Message */}
            <p className="fs-5 mb-1">Drag & Drop your file here</p>
            <p className="small">or click to browse</p>

            {/* Uploaded Files List */}

            <ul className="list-unstyled mt-3 text-start w-100">
                {file && (
                    <li
                        className="border-top py-2 d-flex justify-content-between align-items-center"
                    >
                        <span>{file.name}</span>
                        <small>{(file.size / 1024).toFixed(1)} KB</small>
                    </li>
                )}
            </ul>
        </div>
        <button className="btn btn-outline-info mt-4 px-4">Save</button>
    </form>

    return (
        <div
            className="modal fade"
            id="fileUploadModal"
            tabIndex="-1"
            aria-labelledby="fileUploadModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content border-0 px-4 pb-5 shadow-lg rounded-4">

                    {/* Header */}
                    <div className="modal-header border-0 ">
                        <h5
                            className="modal-title fw-bold"
                            id="fileUploadModalLabel"
                            style={{ letterSpacing: "0.5px" }}
                        >
                            Profile Pic
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    {/* Body */}
                    {fileUpload}
                </div>
            </div>
        </div>
    )
}

export default FileUploadModal