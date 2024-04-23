import {useState} from 'react'
import './styles/App.css'
import {PersonalInfo} from "./components/PersonalInfo.jsx";
import {CVBody} from "./components/CVBody.jsx";
import {Education} from "./components/Education.jsx";
import educationData from "./utils/education.js";
import experienceData from "./utils/experience.js";
import {Experience} from "./components/Experience.jsx";

function App() {
    const [personalInfo, setPersonalInfo] = useState({
        fullName: 'Josephine Meyers',
        email: 'josephine.meyers@mail.co.uk',
        phone: '+44 3245 5521 5521',
        address: 'London, UK',
    })

    const [education, setEducation] = useState(educationData)
    const [experience, setExperience] = useState(experienceData)


    function handleChange(event) {
        const {name, value} = event.target;
        setPersonalInfo(prevPersonInfo => ({
            ...prevPersonInfo,
            [name]: value,
        }))
    }

    function handleEduChange(event, id) {
        const {name, value} = event.target;
        setEducation(prevEducation => {
            const newEducation = [...prevEducation]
            newEducation.map(school => {
                if (school.id === id) school[name] = value
                return school
            })
            return newEducation
        })
    }

    function handleExpChange(event, id) {
        const {name, value} = event.target;
        setExperience(prevExperience => {
            const newExperience = [...prevExperience]
            newExperience.map(company => {
                if (company.id === id) company[name] = value
                return company
            })
            return newExperience
        })
    }

    function handleCreate() {
        setEducation(prevEducation => {
            return [...prevEducation,
                {
                    id: prevEducation.length + 1,
                    school: 'New school',
                    degree: 'null',
                    startDate: 'null',
                    endDate: 'null',
                    location: 'null',
                    show: false,
                }
            ]
        })
    }

    function handleExpCreate() {
        setExperience(prevExperience => {
            return [...prevExperience,
                {
                    id: prevExperience.length + 1,
                    company: 'New company',
                    position: 'Software Engineer',
                    startDate: 'null',
                    endDate: 'null',
                    location: 'New York, USA',
                    description: 'Designed new system...',
                    show: false,
                }
            ]
        })
    }

    function handleDelete(id) {
        setEducation(prevEducation =>
            ([...prevEducation.filter(school => school.id !== id)]))
    }

    function handleExpDelete(id) {
        setExperience(prevExperience =>
            ([...prevExperience.filter(company => company.id !== id)]))
    }

    function handleShow(id) {
        setEducation(prevEducation => {
            return prevEducation.map(school => {
                return {...school, show: school.id === id ? !school.show : false}
            })
        })
    }

    function handleExpShow(id) {
        setExperience(prevExperinece => {
            return prevExperinece.map(company => {
                return {...company, show: company.id === id ? !company.show : false}
            })
        })
    }

    return (
        <div className={'app'}>
            <PersonalInfo fullName={personalInfo.fullName}
                          email={personalInfo.email}
                          phone={personalInfo.phone}
                          address={personalInfo.address}
                          handleChange={handleChange}
            />

            <Education education={education} handleShow={handleShow} handleDelete={handleDelete} handleCreate={handleCreate}
                       handleChange={handleEduChange}
            />

            <Experience experience={experience} handleShow={handleExpShow} handleDelete={handleExpDelete} handleCreate={handleExpCreate}
                        handleChange={handleExpChange} />

            <CVBody fullName={personalInfo.fullName}
                    email={personalInfo.email}
                    phone={personalInfo.phone}
                    address={personalInfo.address}
                    education={education}
                    experience={experience}
            />
        </div>
    )
}

export default App
