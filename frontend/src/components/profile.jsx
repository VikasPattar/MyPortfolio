const Profile = () => {
    return (
        <>
            <div className="container">
                <div className="row my-4 ">
                    <div className="col-12 col-md-3 col-lg-3">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="rounded-circle shadow border position-relative" style={{ height: '200px', width: '200px' }}>
                                <span className="position-absolute rounded-circle p-2 border btn btn-outline-info border-info" style={{ bottom: '1%', right: '7%' }}><i class="fa-solid fa-pencil"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-9 col-lg-9 ">
                        <div className="d-flex justify-content-between">
                            <h1>Vikas Pattar</h1>
                            <i class="fa-regular fa-pen-to-square fs-5"></i>
                        </div>
                        <p className="fs-4 mt-2">Tagline</p>
                        <div className="row">
                            <div className="col-6 ">
                                <i class="fa-solid fa-envelope"></i>
                                <span className="m-2">vpdinni@gmail.com</span>
                            </div>
                            <div className="col-6">
                                <i class="fa-brands fa-github"></i>
                                <span className="m-2">github link</span>
                            </div>
                            <div className="col-6">
                                <i class="fa-brands fa-linkedin"></i>
                                <span className="m-2">linkedin</span>
                            </div>
                            <div className="col-6">
                                <i class="fa-brands fa-youtube"></i>
                                <span className="m-2">Youtube</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-5 container">
                <div className="d-flex justify-content-between">
                    <h2>About</h2>
                    <i class="fa-regular fa-pen-to-square fs-5"></i>
                </div>
                <p className="fs-5">This is about content</p>
            </div>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <h2>Skills</h2>
                    <i class="fa-regular fa-pen-to-square fs-5"></i>
                </div>
                <p className="fs-5">all the skills</p>
            </div>
        </>
    )
}

export default Profile;