import '../styles/Experience.css'
import {useState} from "react";
import EducationInput from "./EducationInput.jsx";
import ExperienceInput from "./ExperienceInput.jsx";

function Experience(props) {

    const [isActive, setIsActive] = useState(false)

    const [newExperience, setNewExperinece] = useState(false)
    function handleClick() {
        setIsActive(prevActive => !prevActive)
    }

    function handleAddEdu() {
        setNewExperinece(prevExperinece => {
            return !prevExperinece;
        });
    }

    const companies = props.experience.map(company => {
        return <ExperienceInput key={company.id}
                               company={company.company}
                               degree={company.degree}
                               startDate={company.startDate}
                               endDate={company.endDate}
                               location={company.location}
                               show={company.show}
                               // handleDelete={() => props.handleDelete(company.id)}
                               // handleChange={(e) => props.handleChange(e, company.id)}
                               // handleShow={() => props.handleShow(company.id)}
        />
    })

    return (
        <div className={'education'}>
            <button onClick={handleClick} className={'education--button'}>Education
                <div className={'education--arrow'}><i className={
                    isActive
                        ? 'fa-solid fa-chevron-down chevron active'
                        : 'fa-solid fa-chevron-down chevron'}></i></div>
            </button>
            {isActive && <div className={'education--section'}>
                {companies}
                <button onClick={handleAddEdu && props.handleCreate} className={'education--plus-cont'}>
                    <div className={'education--plus'}><i className="fa-solid fa-plus"></i> Education</div>
                </button>
            </div>
            }
        </div>
    )
}

export {Experience}