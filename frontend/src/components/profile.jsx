import FileUploadModal from "./modals/profileUploadModal";
import EditSkillsModal from "./modals/editSkillsModal";
import EditCredentialsModal from "./modals/credentialsModal";

const Profile = () => {

    const handleAbout = (e)=>{
        e.preventDefault()
        const form = e.target
        const data = new FormData(form)
        let aboutData = Object.fromEntries(data.entries())
        console.log(aboutData)
        console.log("about submitted")
    }

    return (
        <>

            {/* Credentials section */}
            <div className="container">
                <div className="row my-4 ">
                    <div className="col-12 col-md-3 col-lg-3">
                        <div className="d-flex justify-content-center align-items-center">

                            {/* Profiel Pic */}
                            <div className="rounded-circle shadow border position-relative contain"
                                style={{
                                    backgroundImage: 'url(http://localhost:4000/uploads/1760471155214-68913469.jpg)',
                                    backgroundSize: 'cover',
                                    height: '200px', width: '200px'
                                }}> 
                                <span className="position-absolute rounded-circle p-2 border btn btn-outline-info border-info" style={{ bottom: '1%', right: '7%' }}>
                                    <i className="fa-solid fa-pencil"
                                        data-bs-toggle="modal"
                                        data-bs-target="#fileUploadModal"
                                    ></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Personal Information or credentials */}
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
                                    onSubmit={handleAbout}
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
                                                // resize: "none",
                                                borderRadius: "12px",
                                            }}
                                            required
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
            <EditCredentialsModal/>

            {/* skills modal */}
            <EditSkillsModal/>

            {/* profile picture modal */}
            <FileUploadModal />
        </>
    )
}

export default Profile;