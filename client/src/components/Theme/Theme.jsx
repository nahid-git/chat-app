import {useEffect, useState} from "react";
import {ComputerDesktopIcon, MoonIcon, SunIcon} from '@heroicons/react/24/solid'

const Theme = () => {
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "system");

    useEffect(() => {
        switch (theme) {
            case "dark":
                localStorage.setItem('theme', "dark");
                break;
            case "light":
                localStorage.setItem('theme', "light");
                break;
            default:
                localStorage.setItem('theme', "system");
        }
    }, [theme])

    useEffect(() => {
        if (theme === "dark" || (theme === "system" && systemDark.matches)) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme]);

    systemDark.addEventListener("change", e => {
        if (e.matches) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    })
    const handleTheme = () => {
        if (theme === "light") setTheme("dark")
        else if (theme === "dark") setTheme("system")
        else setTheme("light")
    };
    return (
        <div>
            <button onClick={handleTheme}>
                {theme === "light" ? <SunIcon className="h-4 w-4"/> : theme === "dark" ?
                    <MoonIcon className="h-4 w-4"/> : <ComputerDesktopIcon className="h-4 w-4"/>}
            </button>
        </div>
    );
};

export default Theme;