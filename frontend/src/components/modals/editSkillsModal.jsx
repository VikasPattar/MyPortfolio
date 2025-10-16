import { useState } from "react"

const EditSkillsModal = () => {

    let [skills, setSkills] = useState([])
    let [skill, setSkill] = useState('')

    const addSkills = (skill) => {
        setSkills([...skills, skill])
        console.log(skills)
    }

    const onSkillChange = (e) => {
        setSkill(e.target.value)
        console.log(skill)
    }

    return (
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
                                <div className="text-start">
                                    <label
                                        htmlFor="skill"
                                        className="form-label fw-semibold fs-5"
                                    >
                                        Skill
                                    </label>
                                </div>
                                <div className="d-flex flex-row gap-2 p-2">
                                    <div className="m-2 d-flex justify-content-center align-items-center"
                                        style={{ flexGrow: 5 }}
                                    >
                                        <input
                                            name="skill"
                                            className="form-control"
                                            placeholder="write one skill to add..."
                                            onChange={onSkillChange}
                                        ></input>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center"
                                        style={{ flexGrow: 1 }}
                                    >
                                        <button
                                            className="btn btn-outline-info btn-lg px-5 rounded-pill"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                addSkills(skill)
                                            }}
                                        >
                                            Add
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditSkillsModal;