import {NavLink} from "react-router-dom";
const Link = ({path , title}) => {
    return (
        <div>
            <NavLink
                to={path}
                className={({isActive}) =>
                    isActive ? "border-b-2 pb-1 border-black dark:border-slate-400": ""
                }
            >
                {title}
            </NavLink>
        </div>
    );
};

export default Link;