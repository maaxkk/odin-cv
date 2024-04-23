import '../styles/Experience.css'
import {useState} from "react";
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
                                position={company.position}
                                startDate={company.startDate}
                                endDate={company.endDate}
                                location={company.location}
                                description={company.description}
                                show={company.show}
                                handleDelete={() => props.handleDelete(company.id)}
                                handleChange={(e) => props.handleChange(e, company.id)}
                                handleShow={() => props.handleShow(company.id)}
        />
    })

    return (
        <div className={'experience'}>
            <button onClick={handleClick} className={'experience--button'}>Experience
                <div className={'experience--arrow'}><i className={
                    isActive
                        ? 'fa-solid fa-chevron-down chevron active'
                        : 'fa-solid fa-chevron-down chevron'}></i></div>
            </button>
            {isActive && <div className={'experience--section'}>
                {companies}
                <button onClick={handleAddEdu && props.handleCreate} className={'experience--plus-cont'}>
                    <div className={'experience--plus'}><i className="fa-solid fa-plus"></i> Experience</div>
                </button>
            </div>
            }
        </div>
    )
}

export {Experience}