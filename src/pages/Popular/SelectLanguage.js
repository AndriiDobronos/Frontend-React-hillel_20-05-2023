import {getRepos} from "../../state/popular/popular.thunk";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {createBrowserHistory} from "history";
import {updateLanguage} from "../../state/popular/popular.slice";

const languages = ['All', 'Javascript', 'Ruby','Java', 'CSS', 'Python'];
const history = createBrowserHistory();


const SelectLanguage = () =>{
    const dispatch = useDispatch()
//    const selectedLanguage = useSelector(state => state.popularReducer.selectedLanguage)
    const selectedLanguage = useSelector(state => state.popular.selectedLanguage)
    const repos = useSelector(state => state.popular.repos)

    console.log(selectedLanguage,'selectedLanguage')  //

    useEffect (() => {
        dispatch(getRepos(selectedLanguage));
        history.push(`?query=${selectedLanguage}`)
        console.log(repos,'repos...')        //
    },[selectedLanguage])

    return (
        <ul className='languages'>
            {languages.map((language, index) => (
                <li key={index}
                    style={{color: language === selectedLanguage ? '#d0021b' : '#000000'}}
//                    onClick={() => dispatch(getRepos(language))}
                    onClick={() => dispatch(updateLanguage(language))}
                        >
                    {language}
                </li>
            ))}
        </ul>
    )
}
export default SelectLanguage