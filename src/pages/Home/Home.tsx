import {Link} from "react-router-dom";
import {FC,ReactElement} from "react";


const Home:FC = ():ReactElement  => {
    return (
        <div className='home-container' >
            <h1>GitHub Battle: Battle you friends ... and stuff</h1>
            <Link to='battle' className='button'>Battle</Link>
            <audio controls={true}  autoPlay={true} muted={false} preload='none' loop={true}>
                <source src="https://soundimage.org/wp-content/uploads/2022/04/High-Seas-Adventures.mp3" />
                <source src ="https://soundimage.org/wp-content/uploads/2017/05/Car-Theft-101.mp3" />
                your browser not supported element <code>audio</code>
            </audio>
            <div className='home-border'>
                <img className='home-picture' src="https://miro.medium.com/v2/0*mrNJa7D1vBAudxwq" alt="Battle"/>

            </div>

            {/*<img src="https://www.codingninjas.com/blog/wp-content/uploads/2019/09/Blog_Post__20_Sep_1200x628-1024x536.png" alt="Battle"/>
            <img src="https://www.masaischool.com/blog/content/images/size/w2000/2022/06/Competitive-Programming.png" alt="Battle"/>*/}
        </div>
    )
}
export default Home;