import '../styles/CVExperience.css'

function CVExperience(props) {
    return (
        <div className={'edu'}>
            <p className={'edu--start'}>{props.company.startDate}</p>
            <p className={'edu--end'}> – {props.company.endDate}</p>
            <p className={'edu--location'}>{props.company.location}</p>
            <p className={'exp--company'}>{props.company.company}</p>
            <p className={'edu--degree'}>{props.company.position}</p>
            <p className={'edu--degree'}>{props.company.description}</p>

        </div>
    )
}

export default CVExperience