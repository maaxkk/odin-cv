import '../styles/CVEducation.css'

function CVEducation(props) {
    return (
        <div className={'edu'}>
            <p className={'edu--start'}>{props.school.startDate}</p>
            <p className={'edu--end'}> – {props.school.endDate}</p>
            <p className={'edu--location'}>{props.school.location}</p>
            <p className={'edu--school'}>{props.school.school}</p>
            <p className={'edu--degree'}>{props.school.degree}</p>
        </div>
    )
}

export default CVEducation