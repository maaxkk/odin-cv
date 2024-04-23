import '../styles/Education.css'
import {useState} from "react";
import EducationInput from "./EducationInput.jsx";

function Education(props) {

    const [isActive, setIsActive] = useState(false)

    const [addEdu, setAddEdu] = useState(false)
    function handleClick() {
        setIsActive(prevActive => !prevActive)
    }

    function handleAddEdu() {
        setAddEdu(prevAddEdu => {
            return !prevAddEdu;
        });
    }

    const schools = props.education.map(school => {
        return <EducationInput key={school.id}
                               school={school.school}
                               degree={school.degree}
                               startDate={school.startDate}
                               endDate={school.endDate}
                               location={school.location}
                               show={school.show}
                               handleDelete={() => props.handleDelete(school.id)}
                               handleChange={(e) => props.handleChange(e, school.id)}
                               handleShow={() => props.handleShow(school.id)}
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
                {schools}
                <button onClick={handleAddEdu && props.handleCreate} className={'education--plus-cont'}>
                    <div className={'education--plus'}><i className="fa-solid fa-plus"></i> Education</div>
                </button>
            </div>
            }
        </div>
    )
}

export {Education}