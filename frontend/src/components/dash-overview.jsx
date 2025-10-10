const Overview = () => {
    return (
        <div className="row g-5">
            <div className="col-md-4">
                <div className="card shadow-sm border-0">
                    <div className="card-body">
                        <h5 className="card-title">Projects</h5>
                        <p className="card-text fs-4 fw-bold">8</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card shadow-sm border-0">
                    <div className="card-body">
                        <h5 className="card-title">Blogs</h5>
                        <p className="card-text fs-4 fw-bold">1,245</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card shadow-sm border-0">
                    <div className="card-body">
                        <h5 className="card-title">Messages</h5>
                        <p className="card-text fs-4 fw-bold">12</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Overview;