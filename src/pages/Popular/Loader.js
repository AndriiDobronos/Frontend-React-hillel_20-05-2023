const Loader = () => {
    return (
        <div className="loader">
            {"Loading".split('').map((character,index) =>(
                <span key={index}
                      style={{animationDelay :`${index*0.1}s`}}>{character}</span>
            ))}
        </div>
    )
}
export default Loader