import Theme from "../Theme/Theme.jsx";
import {Outlet} from "react-router-dom";
import Link from "./Link.jsx";

const Navbar = () => {
    const items = [
        {
            title: "Inbox", path: "/",
        },
        {
            title: "Login", path: "/login",
        },
        {
            title: "Signup", path: "/signup",
        },
    ]
    return (
        <div>
            <div className="flex gap-x-8 justify-center p-5 z-[100] sticky top-0 bg-amber-50 dark:bg-gray-800">
                {items.map((item, index) =>
                    <Link
                        path={item.path}
                        title={item.title}
                        key={index}
                    />
                )}
                <Theme/>
            </div>
            <Outlet/>
        </div>
    );
};

export default Navbar;