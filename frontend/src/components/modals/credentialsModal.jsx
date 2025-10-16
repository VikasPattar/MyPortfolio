const EditCredentialsModal = () => {
    const handleSubmit =(e)=>{
        e.preventDefault()
        const form = e.target
        let data = new FormData(form)
        let formData = Object.fromEntries(data.entries())
        console.log(formData)
        console.log("submitted")
    }
    
    return(
        <div
                className="modal fade"
                id="credModal"
                tabIndex="-1"
                aria-labelledby="credModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content border-0 shadow-lg rounded-4">
                        <form action="#" onSubmit={handleSubmit} className="p-4 shadow-sm rounded-4" style={{ maxWidth: "1000px", width: "100%" }}>
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
                                    <input type="text" className="form-control form-control-lg" placeholder="Enter your full name" name="name" required/>
                                </div>

                                <div className="col-12">
                                    <label className="form-label fw-semibold">Tagline</label>
                                    <input type="text" className="form-control form-control-lg" placeholder="e.g. Full Stack Developer" name="tagline" required/>
                                </div>

                                <div className="col-6">
                                    <label className="form-label fw-semibold">Email</label>
                                    <input type="email" className="form-control form-control-lg" placeholder="you@example.com" name="email" required />
                                </div>

                                <div className="col-6">
                                    <label className="form-label fw-semibold">GitHub</label>
                                    <input type="text" className="form-control form-control-lg" placeholder="https://github.com/username" name="github" />
                                </div>

                                <div className="col-6">
                                    <label className="form-label fw-semibold">LinkedIn</label>
                                    <input type="text" className="form-control form-control-lg" placeholder="https://linkedin.com/in/username" name="linkedin" />
                                </div>

                                <div className="col-6">
                                    <label className="form-label fw-semibold">YouTube</label>
                                    <input type="text" className="form-control form-control-lg" placeholder="https://youtube.com/@channel" name="youtube" />
                                </div>

                                <div className="col-6">
                                    <label className="form-label fw-semibold">Twitter</label>
                                    <input type="text" className="form-control form-control-lg" placeholder="https://twitter.com/username" name="twitter" />
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
    )
}
export default EditCredentialsModal;