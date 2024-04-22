import {useState} from 'react'
import './styles/App.css'
import {PersonalInfo} from "./components/PersonalInfo.jsx";
import {CVBody} from "./components/CVBody.jsx";
import {Education} from "./components/Education.jsx";
import educationData from "./utils/education.js";

function App() {
    const [personalInfo, setPersonalInfo] = useState({
        fullName: 'Josephine Meyers',
        email: 'josephine.meyers@mail.co.uk',
        phone: '+44 3245 5521 5521',
        address: 'London, UK',
    })

    const [education, setEducation] = useState(educationData)

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

    function handleShow(id) {
        setEducation(prevEducation => {
            return prevEducation.map(school => {
                return {...school, show: school.id === id ? !school.show : false}
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
            <Education education={education} handleShow={handleShow} handleCreate={handleCreate} handleChange={handleEduChange}
            />
            <CVBody fullName={personalInfo.fullName}
                    email={personalInfo.email}
                    phone={personalInfo.phone}
                    address={personalInfo.address}
                    education={education}
            />
        </div>
    )
}

export default App
