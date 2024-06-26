import '../styles/CVBody.css'
import CVEducation from "./CVEducation.jsx";
import CVExperience from "./CVExperience.jsx";

function CVBody(props) {

    const schools = props.education.map(school => {
        return <CVEducation key={school.id} school={school}/>
    })

    const companies = props.experience.map(company => {
        return <CVExperience key={company.id} company={company}/>
    })

    return (
        <div className={'cvbody'}>
            <div className={'cvbody--personal'}>
                <h1>{props.fullName}</h1>
                <div className={'cvbody--contacts'}>
                    <p>{props.email}</p>
                    <p>{props.phone}</p>
                </div>
                <p>{props.address}</p>
            </div>
            <div className={'cvbody--education'}>
                <div className={'cvbody--edu'}>
                    <h2>Education</h2>
                </div>
                {schools}
            </div>
            <div className={'cvbody--experience'}>
                <div className={'cvbody--exp'}>
                    <h2>Experience</h2>
                </div>
                {companies}
            </div>
        </div>
    )
}

export {CVBody}