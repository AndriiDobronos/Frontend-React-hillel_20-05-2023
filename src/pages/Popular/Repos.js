import {useSelector} from "react-redux";

const Repos = () => {
    const loading = useSelector(state => state.popular.loading)
    const repos = useSelector(state => state.popular.repos)
    const error = useSelector(state => state.popular.error)
    console.log(repos,"repos")
    console.log(loading,"loading")
    if (loading) {
        return <p>Loading ...</p>
    }
    if (error) {
        return <p>{error}</p>
    }

    return (
        <ul className="popular-list">
            {repos.map((repo,index) => {
                return (
                    <li key={repo.id} className='popular-item' >
                        <div className="popular-rank">#{index + 1}</div>
                        <ul className="space-list-items">
                            <li>
                                <img src={repo.owner.avatar_url} alt="Avatar" className="avatar"/>
                            </li>
                            <li>
                                <a href={repo.html_url} target="_blank" rel='noreferrer'>{repo.name}</a>
                            </li>
                            <li>@{repo.owner.login}</li>
                            <li>{repo.stargazers_count} stars</li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}
export default Repos