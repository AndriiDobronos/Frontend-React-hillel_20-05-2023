import {useEffect, useState} from "react";
import {fetchPopularRepos} from "../../api";
import {useSearchParams} from "react-router-dom";
import {createBrowserHistory} from "history";
import "./popular.stile.scss"
import PopularList from "./PopularList";
import Loader from "./Loader";
import SelectLanguage from "./SelectLanguage";
//import qs from "qs";
//import {encode} from "qs/lib/utils";

const languages = ['All', 'Javascript', 'Ruby','Java', 'CSS', 'Python'];
const history = createBrowserHistory()

const Popular = () => {
    const [selectedLanguage, setSelectLanguage] = useState( (history.location.search.substr(1)).split('=')[1] || "All")
    const [loading, setLoading] = useState(true)
    const [repos, setRepos] = useState([])
    const [error, setError] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams();
//    const [query, setQuery] = useState(searchParams.get("query"));

    useEffect (() => {
        history.push(`?query=${selectedLanguage}`)
        setSearchParams({selectedLanguage});
        setLoading(true)
        fetchPopularRepos(selectedLanguage)
            .then(data => setRepos(data))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    },[selectedLanguage])

    const handleSelect = (event)=>setSelectLanguage(event.currentTarget.innerText)

    return (
        <>
            {loading ? <Loader /> :
            <div className="page">
                <SelectLanguage  languages={languages} handleSelect={handleSelect} selectedLanguage={selectedLanguage} />
                <PopularList repos={repos} />
            </div> }
        </>
    )
}
export default Popular;
