import {Children, cloneElement} from "react";
import {memo,FC,ReactElement} from "react";

const PlayerPreview:FC = memo(({avatar, username, children, render}:{string,any,unknown}):ReactElement => {
    return (
        <div>
            <div className="column">
                <img src={avatar} alt="Avatar" className='avatar' />
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