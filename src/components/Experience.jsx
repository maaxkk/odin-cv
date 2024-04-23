import '../styles/Experience.css'
import {useState} from "react";
import ExperienceInput from "./ExperienceInput.jsx";

function Experience(props) {

    const [newExperience, setNewExperinece] = useState(false)

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
            <button onClick={props.handleActive} className={'experience--button'}>Experience
                <div className={'experience--arrow'}><i className={
                    props.isActive === 1
                        ? 'fa-solid fa-chevron-down chevron active'
                        : 'fa-solid fa-chevron-down chevron'}></i></div>
            </button>
            {props.isActive === 1 && <div className={'experience--section'}>
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