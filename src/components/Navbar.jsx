import React,{useRef,useState} from "react";
import './nav.css';
import {Link} from "react-router-dom";
import {RxDropdownMenu} from "react-icons/rx"
const Navbar=({handleScrollToSection}) => {
    const [show, setShow] = useState(false);
    const dropMenu = useRef(null)

    const closeOpenMenus = (e) => {
        if (dropMenu.current && show && !dropMenu.current.contains(e.target)) {
            setShow(false)
        }
        setShow(false);
    }

    document.addEventListener('mousedown', closeOpenMenus)


    return (
        <div className="nav flex-wrap">
            <div>
                <h3 className="name font-bold text-xl">Yang Cui</h3>

            </div>
            <div className="group items-center ">
                <button className="cursor mr-12  " onClick={() => handleScrollToSection('section3')}>About = ( ) =></button>

                <button className="cursor mr-12  " onClick={() => handleScrollToSection('section2')}>Projects = ( ) =></button>

                <button className="cursor mr-12  " onClick={() => handleScrollToSection('section4')}>Contact Me = ( ) =></button>


            </div>
            <div className="button mr-10">

                <button
                    onClick={() => setShow(!show)}
                    className="text-white max-w-xs transition duration-300 ease-in-out hover:scale-110 font-medium rounded-lg text-3xl  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"><RxDropdownMenu/> <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg></button>

                <div
                    ref={dropMenu} className={`${show ? ` w-24 opacity-100 visible mt-1 mr-12` : 'top-[110%] invisible opacity-0'} dq absolute rounded border-[.5px] border-light bg-white py-5 shadow-card transition-all`}>
                    <div className="hover:bg-slate-200 border block py-2  text-base font-semibold text-body-color  hover:text-primary">

                        <button className="cursor mr-1 text-xl hover:text-neutral-400" onClick={() => handleClick('section2')}>Projects</button>
                    </div>
                    <div className="hover:bg-slate-200 border block py-2 text-base font-semibold text-body-color  hover:text-primary">

                        <button className="cursor mr-1 text-xl hover:text-neutral-400" onClick={() => handleClick('section3')}>About</button>
                    </div>
                    <div className="hover:bg-slate-200 border block py-2 text-base font-semibold text-body-color  hover:text-primary">

                        <button className="cursor mr-1 text-xl hover:text-neutral-400" onClick={() => handleClick('section4')}>Contact me</button>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default Navbar;