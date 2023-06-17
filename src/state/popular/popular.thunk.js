import {getReposFailureAction, getReposLoadingAction, getReposSuccessAction, updateLanguage} from "./popular.actions";
import {getReposRequest} from "../../requests.js";


export const getRepos = (selectedLanguage) => (dispatch) => {
    dispatch(updateLanguage(selectedLanguage))
    dispatch(getReposLoadingAction());

    getReposRequest(selectedLanguage)
        .then(data=>dispatch(getReposSuccessAction(data)))
        .catch(error => dispatch(getReposFailureAction(error)))
}