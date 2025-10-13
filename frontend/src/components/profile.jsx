import React, { useRef, useState } from "react";
const Profile = () => {
    // const openDialog = () => {

    // }

    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFiles = (selectedFiles) => {
        setFile(selectedFiles[0]);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        handleFiles(e.dataTransfer.files);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const fileUpload = <div
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
            multiple
            ref={fileInputRef}
            onChange={(e) => handleFiles(e.target.files)}
            className="d-none"
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


    return (
        <>
            <div className="container">
                <div className="row my-4 ">
                    <div className="col-12 col-md-3 col-lg-3">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="rounded-circle shadow border position-relative" style={{ height: '200px', width: '200px' }}>
                                <span className="position-absolute rounded-circle p-2 border btn btn-outline-info border-info" style={{ bottom: '1%', right: '7%' }}>
                                    <i className="fa-solid fa-pencil"
                                    data-bs-toggle = "modal"
                                    data-bs-target = "#fileUploadModal"
                                    ></i>
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-9 col-lg-9 ">
                        <div className="d-flex justify-content-between">
                            <h1>Vikas Pattar</h1>
                            <i className="fa-regular fa-pen-to-square fs-5"
                                data-bs-toggle="modal"
                                data-bs-target="#credModal"
                            ></i>
                        </div>
                        <p className="fs-4 mt-2">Tagline</p>
                        <div className="row">
                            <div className="col-6 ">
                                <i className="fa-solid fa-envelope"></i>
                                <span className="m-2">vpdinni@gmail.com</span>
                            </div>
                            <div className="col-6">
                                <i className="fa-brands fa-github"></i>
                                <span className="m-2">github link</span>
                            </div>
                            <div className="col-6">
                                <i className="fa-brands fa-linkedin"></i>
                                <span className="m-2">linkedin</span>
                            </div>
                            <div className="col-6">
                                <i className="fa-brands fa-youtube"></i>
                                <span className="m-2">Youtube</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About */}

            <div className="my-5 container">
                <div className="d-flex justify-content-between">
                    <h2>About</h2>
                    <i className="fa-regular fa-pen-to-square fs-5"
                        data-bs-toggle="modal"
                        data-bs-target="#aboutModal"></i>
                </div>
                <p className="fs-5">This is about content</p>
            </div>

            {/* Skills  */}

            <div className="container">
                <div className="d-flex justify-content-between">
                    <h2>Skills</h2>
                    <i className="fa-regular fa-pen-to-square fs-5"
                        data-bs-toggle="modal"
                        data-bs-target="#skillsModal"
                        onClick={() => {
                            console.log("icon clicked")
                        }}></i>
                </div>
                <p className="fs-5">all the skills</p>
            </div>


            {/* About Modal */}
            <div
                className="modal fade"
                id="aboutModal"
                tabIndex="-1"
                aria-labelledby="aboutModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content border-0 shadow-lg rounded-4">

                        {/* Header */}
                        <div className="modal-header border-0 pb-0">
                            <h5
                                className="modal-title fw-bold"
                                id="aboutModalLabel"
                                style={{ letterSpacing: "0.5px" }}
                            >
                                Edit About Section
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        {/* Body */}
                        <div className="modal-body">
                            <div className="d-flex justify-content-center align-items-center">
                                <form
                                    action="#"
                                    style={{ maxWidth: "1000px", width: "100%" }}
                                >
                                    <div className="mb-3">
                                        <label
                                            htmlFor="About"
                                            className="form-label fw-semibold fs-5"
                                        >
                                            About
                                        </label>
                                        <textarea
                                            name="About"
                                            id="About"
                                            cols="30"
                                            rows="8"
                                            className="form-control border-secondary"
                                            placeholder="Write about yourself..."
                                            style={{
                                                resize: "none",
                                                borderRadius: "12px",
                                            }}
                                        ></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="btn btn-outline-info btn-lg px-5 rounded-pill mt-3"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Credentials modal */}
            <div
                className="modal fade"
                id="credModal"
                tabIndex="-1"
                aria-labelledby="credModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content border-0 shadow-lg rounded-4">
                        <form action="#" className="p-4 shadow-sm rounded-4" style={{ maxWidth: "1000px", width: "100%" }}>
                            <div className="modal-header border-0 pb-0">
                                <h3 className="text-center mb-4 fw-bold">Personal Information</h3>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>


                            <div className="row g-3">
                                <div className="col-12">
                                    <label className="form-label fw-semibold">Full Name</label>
                                    <input type="text" className="form-control form-control-lg" placeholder="Enter your full name" />
                                </div>

                                <div className="col-12">
                                    <label className="form-label fw-semibold">Tagline</label>
                                    <input type="text" className="form-control form-control-lg" placeholder="e.g. Full Stack Developer" />
                                </div>

                                <div className="col-6">
                                    <label className="form-label fw-semibold">Email</label>
                                    <input type="email" className="form-control form-control-lg" placeholder="you@example.com" />
                                </div>

                                <div className="col-6">
                                    <label className="form-label fw-semibold">GitHub</label>
                                    <input type="text" className="form-control form-control-lg" placeholder="https://github.com/username" />
                                </div>

                                <div className="col-6">
                                    <label className="form-label fw-semibold">LinkedIn</label>
                                    <input type="text" className="form-control form-control-lg" placeholder="https://linkedin.com/in/username" />
                                </div>

                                <div className="col-6">
                                    <label className="form-label fw-semibold">YouTube</label>
                                    <input type="text" className="form-control form-control-lg" placeholder="https://youtube.com/@channel" />
                                </div>

                                <div className="col-6">
                                    <label className="form-label fw-semibold">Twitter</label>
                                    <input type="text" className="form-control form-control-lg" placeholder="https://twitter.com/username" />
                                </div>

                                <div className="col-12 text-center mt-3">
                                    <button type="submit" className="btn btn-outline-info btn-lg px-5 rounded-pill">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* skills modal */}
            <div
                className="modal fade"
                id="skillsModal"
                tabIndex="-1"
                aria-labelledby="skillsModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content border-0 shadow-lg rounded-4">

                        {/* Header */}
                        <div className="modal-header border-0 pb-0">
                            <h5
                                className="modal-title fw-bold"
                                id="skillsModalLabel"
                                style={{ letterSpacing: "0.5px" }}
                            >
                                Edit Skills Section
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        {/* Body */}
                        <div className="modal-body">
                            <div className="d-flex justify-content-center align-items-center">
                                <form
                                    action="#"
                                    style={{ maxWidth: "1000px", width: "100%" }}
                                >
                                    <div className="mb-3">
                                        <label
                                            htmlFor="About"
                                            className="form-label fw-semibold fs-5"
                                        >
                                            Skills
                                        </label>
                                        <textarea
                                            name="About"
                                            id="About"
                                            cols="30"
                                            rows="8"
                                            className="form-control border-secondary"
                                            placeholder="Write about yourself..."
                                            style={{
                                                resize: "none",
                                                borderRadius: "12px",
                                            }}
                                        ></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="btn btn-outline-info btn-lg px-5 rounded-pill mt-3"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* profile picture modal */}
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
        </>
    )
}

export default Profile;