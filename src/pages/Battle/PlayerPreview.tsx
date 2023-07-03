import {Children, cloneElement, FC, ReactElement} from "react";
import {memo} from "react";

const PlayerPreview:FC = memo(({avatar, username, children, render}):ReactElement => {
    const defaultAvatar =  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg"
    return (
        <div>
            <div className="column" >
                {/*<img src={avatar} alt="Avatar" className='avatar' />*/}
                <img
                    className='avatar'
                    src={avatar}
//                    srcSet={defaultAvatar}
//                    alt="No user with this name was found"
                    onError={(e:{target:{src:string,className:string,alt:string,parentElement:{innerHTML:string}}})=> {
//                        (e.target.className = '')
//                        (e.target.src = defaultAvatar)
//                        e.target.parentElement.append('No user with this name was found')
                        (e.target.parentElement.innerHTML = '<h2>No user with this name was found</h2>')
                        }
                    }
                />
                <h3>{username}</h3>
            </div>
            {children}
            {/*Children.map(children,child => {
                return cloneElement(child, {children: 'Reset'});// can 'Reset' or something else change
            })  */}
            {/*render*/}
        </div>
    )
})
export default PlayerPreview