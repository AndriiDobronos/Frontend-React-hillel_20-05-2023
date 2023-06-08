const SelectLanguage = (props) =>{
    return (
        <ul className='languages'>
            {props.languages.map((language, index) => (
                <li key={index}
                    style={{color: language === props.selectedLanguage ? '#d0021b' : '#000000'}}
                    onClick={props.handleSelect} >
                    {language}
                </li>
            ))}
        </ul>
    )
}
export default SelectLanguage