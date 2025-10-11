import { useState } from "react";
import Overview from "../components/dash-overview";
import DashBlogs from "../components/dash-blogs";
import DashProjects from "../components/dash-projects";
import Profile from "../components/profile";

const Dashboard = () => {

    // const overview = <Overview/>
    const profile = <Profile/>
    const blogs = <DashBlogs/>
    const projects = <DashProjects/>
    const messages = <div></div>

    const [title, setTitle] = useState('Welcome Back, Vikas 👋')
    const [component, setComponent] = useState(profile);
    const [theme, setTheme] = useState("light");
    const [isLogin, setisLogin] = useState(false);

    const handleLogout = () => {
        setisLogin(false);
    };
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.body.setAttribute("data-bs-theme", newTheme);
    };

    const clickProjects = () => {
        setTitle('Projects')
        setComponent(projects);
    }

    // const clickOverview = () => {
    //     setTitle('Welcome Back, Vikas 👋')
    //     setComponent(Overview)
    // }

    const clickProfile = ()=>{
        setTitle('Profile')
        setComponent(profile)
    }

    const clickBlogs = () => {
        setTitle('Blogs')
        setComponent(blogs);
    }

    const clickMessages = () => {
        setTitle('Messages')
        setComponent(messages);
    }

    return (
        <>
            <div className="container-fluid " >
                <div className="d-flex h-100">

                    {/* Main Content */}
                    <div className="col-12 p-4 flex-grow-1" style={{ minHeight: '100vh' }}>
                        <h2 className="fw-bold mb-4"><span className="me-3"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            // aria-controls="dashNav"
                            aria-hidden="true"
                            aria-label="Toggle navigation"
                        >☰</span>{title}</h2>
                        <hr />
                        {component}

                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="staticBackdrop"
                // data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    style={{
                        margin: "0", // remove default centering margins
                        height: "100vh", // full height
                        maxWidth: "600px", // width of sidebar
                        minWidth: "300px",
                        position: "fixed",
                        left: "0",
                        top: "0",
                    }}
                >
                    <div className="modal-content h-100 border-0 shadow-lg rounded-0">
                        <h3 className="text-center my-4">Dashboard</h3>
                        <nav className="navbar flex-column">
                            <ul className="navbar-nav align-items-center gap-2">
                                {/* <li className="nav-item" onClick={clickOverview}>
                                    <a href="#overview" className="nav-link  mb-2">
                                        Overview
                                    </a>
                                </li> */}
                                <li className="nav-item" onClick={clickProfile}>
                                    <a href="#overview" className="nav-link  mb-2">
                                        Profile
                                    </a>
                                </li>
                                <li className="nav-item" onClick={clickProjects}>
                                    <a href="#projects" className="nav-link mb-2">
                                        Projects
                                    </a>
                                </li>
                                <li className="nav-item" onClick={clickBlogs}>
                                    <a href="#blogs" className="nav-link mb-2">
                                        Blogs
                                    </a>
                                </li>
                                <li className="nav-item" onClick={clickMessages}>
                                    <a href="#messages" className="nav-link mb-2">
                                        Messages
                                    </a>
                                </li>
                                {/* <li className="nav-item">
                                    <a href="#settings" className="nav-link mb-2">
                                        Settings
                                    </a>
                                </li> */}
                                <li className="nav-item mb-2">
                                    <button
                                        className={`btn btn-sm rounded-pill ${theme === "light" ? "btn-outline-dark" : "btn-outline-light"
                                            }`}
                                        onClick={toggleTheme}
                                    >
                                        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                                    </button>
                                </li>
                                <li className="nav-item ">
                                    <button
                                        className={`btn btn-sm rounded-pill fw-bold px-5 ${theme === "light" ? "btn-outline-danger" : "btn-outline-danger"
                                            }`}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard;