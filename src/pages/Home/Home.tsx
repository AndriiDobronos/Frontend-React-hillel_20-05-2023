import {Link} from "react-router-dom";
import {FC,ReactElement} from "react";

const Home:FC = ():ReactElement  => {
    return (
        <div className='home-container' >
            <h1>GitHub Battle: Battle you friends ... and stuff</h1>
            <Link to='battle' className='button'>Battle</Link>
        </div>
    )
}
export default Home;