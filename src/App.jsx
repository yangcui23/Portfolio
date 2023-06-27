
import './App.css'
import Navbar from "./components/Navbar.jsx";
import {useEffect, useState} from 'react';
import {Routes,Route} from "react-router-dom";
import {BsGithub,BsLinkedin} from 'react-icons/bs';
import {MdOutlineClose, MdOutlineCloseFullscreen} from 'react-icons/md';

import 'bootstrap/dist/css/bootstrap.css';
import Tweetly from "./components/Tweetly.jsx";

function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);


        const handleScrollToSection = (sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                setActiveSection(sectionId);
            }
        };



    const handleButtonClick = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform client-side validations
        if (!name || !email || !message) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        const messageData = { name, email, message };

        try {
            const response = await fetch('http://localhost:3000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(messageData),
            });

            const data = await response.json();
            if (data.success) {
                console.log('Email sent successfully');

                setName('');
                setEmail('');
                setMessage('');
                setErrorMessage('');
                setShowSuccessMessage(true);
                setTimeout(() => {
                    setShowForm(false);
                }, 2000);
            } else {
                console.error('Failed to send email');
            }
        } catch (error) {
            console.error('An error occurred while sending the email:', error);
        }
    };
    useEffect(() => {


    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {

            console.log(entries)
            if (entry.isIntersecting) {

                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        })
    })
        const observer2 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                console.log(entries)
                if (entry.isIntersecting) {

                    entry.target.classList.add('show2');
                } else {
                    entry.target.classList.remove('show2');
                }
            })
        })
        const observer3 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                console.log(entries)
                if (entry.isIntersecting) {

                    entry.target.classList.add('show3');
                } else {
                    entry.target.classList.remove('show3');
                }
            })
        })
        const observer4 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                console.log(entries)
                if (entry.isIntersecting) {

                    entry.target.classList.add('show4');
                } else {
                    entry.target.classList.remove('show4');
                }
            })
        })
    const hiddenElements = document.querySelectorAll('.tweetly');
    const hiddenElements2 = document.querySelectorAll('.centura');
        const hiddenElements3 = document.querySelectorAll('.coming');
        const hiddenElements4 = document.querySelectorAll('.coming2');
    hiddenElements.forEach((el) => observer.observe(el));
    hiddenElements2.forEach((el) => observer2.observe(el));
        hiddenElements3.forEach((el) => observer3.observe(el));
        hiddenElements4.forEach((el) => observer4.observe(el));
    })



    return (
    <div className="full">
        <Routes>
            <Route path={'/project/tweetly'} element={<Tweetly/>}/>

        </Routes>

        <Navbar handleScrollToSection={handleScrollToSection} />
        <div className="timeline">

            <div id="section1" className="img" >
                <div className="logo">
                    <p className="text-neutral-300 text-3xl">const Start = ( ) =>  {'{'} </p>
                </div>
                <div className="logo ">
                     <b >Hi<span > my</span> name<span> is</span> Yang</b>
                </div>
                <div className="logo2">
                    <b>I<span> am</span> a<span> web</span> developer</b>
                </div>
                <div>
                    <img src="./src/assets/profile%20pic.jpeg" className="pfp"/>
                </div>
                <p className="rightClose text-neutral-400 text-3xl">{'}'}</p>

            </div>

            <div id="section2" className="projects">
                <div className="logo">

                    <h3 className="pro text-3xl text-neutral-300">const Projects = ( ) => {'{'}</h3>
                </div>
            <a href="http://www.tweetly.org" >
                <div className="tweetly" >
                    <div className="wrapper">

                        <div className="projectText">

                            <p className="cardText">Tweetly</p>
                            <div className="textUnderline"></div>
                        </div>

                    </div>

                    <img className="projectImg" src="./src/assets/Tweetly.png" alt="project website"/>


                </div>
            </a>
                <a href="http://www.allcentura.com">

                <div className="centura mt-12" >
                    <div className="wrapper">

                        <div className="projectText">

                            <p className="cardText">Hospital Manager</p>
                            <div className="textUnderline"></div>
                        </div>

                    </div>

                    <img className="projectImg" src="./src/assets/Hospital.png" alt="project website"/>


                </div>
                </a>
                <a href="#">

                    <div className="coming mt-12" >
                        <div className="wrapper">

                            <div className="projectText">

                                <p className="cardText">ShopWise</p>
                                <div className="textUnderline"></div>
                            </div>

                        </div>

                        <img className="projectImg" src="./src/assets/coming.jpg" alt="project website"/>


                    </div>
                </a>
                <a href="#">

                    <div className="coming2 mt-12" >
                        <div className="wrapper">

                            <div className="projectText">

                                <p className="cardText">TBD</p>
                                <div className="textUnderline"></div>
                            </div>

                        </div>

                        <img className="projectImg" src="./src/assets/coming.jpg" alt="project website"/>


                    </div>
                </a>
                <p className="rightClose text-neutral-400 text-3xl">{'}'}</p>
            </div>
            <div id="section3" className="about">
                <div className="logo">
                    <h3 className="pro text-3xl text-neutral-300">const About = ( ) => {'{'}</h3>
                </div>
                <div className="neons flex hover:bg-gray-400">
                    <p className="num text-gray-100">01</p>
                    <div className="inside">

                    <h3 className="inter text-gray-500">· ·</h3>
                    <p className="const ">let name = </p>
                    <span >Yang Cui </span>
                    </div>
                </div>
                <div className="neons flex hover:bg-gray-400">
                    <p className="num text-gray-100">02</p>
                    <div className="inside">
                        <h3 className="inter text-gray-500">· ·</h3>
                    <p className="const ">let dateOfBirth =</p>
                        <span >02/03/1998 </span>
                    </div>
                </div>
                <div className="neons flex hover:bg-gray-400">
                    <p className="num text-gray-100">03</p>
                    <div className="inside">
                        <h3 className="inter text-gray-500">· ·</h3>
                    <p className="const ">let email =</p>
                    <span >yangcui283@yahoo.com</span>


                    </div>
                </div>
                <div className="neons flex hover:bg-gray-400">
                    <p className="num text-gray-100">04</p>
                    <h3 className="inter text-gray-500">· ·</h3>
                    <p className="const text-gray-500">/* 这条线只是为了让代码更好看一些 :) */ </p>
                </div>
                <div className="neons flex hover:bg-gray-400">
                    <p className="num text-gray-100">05</p>
                    <h3 className="inter text-gray-500">· ·</h3>
                    <p className="const ">const skills = ( ) => {'{'}  </p>
                </div>
                <div className="neons flex hover:bg-gray-400">
                    <p className="num text-gray-100">06</p>
                    <h3 className="inter text-gray-500">· · · · </h3>
                    <p className="const text-fuchsia-800"> return <b className="text-white" >[</b>  </p>
                </div>
                <div className="neon flex hover:bg-gray-400">
                    <p className="num text-gray-100">07</p>
                    <h3 className="inter text-gray-500">· · · · · · ·  </h3>
                    <p className="const ">{'{'} language : <span >Java , Javascript , Python , HTML5 , CSS </span> {'}'} ,</p>
                </div>
                <div className="neon flex hover:bg-gray-400">
                    <p className="num text-gray-100">08</p>
                    <h3 className="inter text-gray-500">· · · · · · ·  </h3>
                    <p className="const ">{'{'} framework : <span > Vite , React , SpringBoot , Tailwind ,Bootstrap , Flask , Express </span> {'}'} ,</p>
                </div>
                <div className="neon flex hover:bg-gray-400">
                    <p className="num text-gray-100">09</p>
                    <h3 className="inter text-gray-500">· · · · · · ·</h3>
                    <p className="const ">{'{'} databases : <span > MySQL ,MongoDB </span>{'}'} ,</p>
                </div>
                <div className="neon flex hover:bg-gray-400">
                    <p className="num text-gray-100">10</p>
                    <h3 className="inter text-gray-500">· · · · · · ·</h3>
                    <p className="const ">{'{'} tools : <span > AWS ECS , Github , Node JS , VS Code , PostmanAPI , Spring Tool Suite , Intellij IDEA </span> {'}'}</p>
                </div>
                <div className="neons flex hover:bg-gray-400">
                    <p className="num text-gray-100">11</p>
                    <h3 className="inter text-gray-500">· · · · </h3>
                    <p className="const text-white ">]</p>
                </div>
                <div className="neons flex hover:bg-gray-400">
                    <p className="num text-gray-100">12</p>
                    <h3 className="inter text-gray-500">· ·</h3>
                    <p className="const "> {'}'}</p>
                </div>
                <div className="neons flex hover:bg-gray-400">
                    <p className="num text-gray-100">13</p>
                    <h3 className="inter text-gray-500">· ·</h3>
                    <p className="const text-gray-500">/* 这条线只是为了让代码更好看一些 :) */ </p>
                </div>
                <div className="neons flex hover:bg-gray-400">
                    <p className="num text-gray-100">14</p>
                    <h3 className="inter text-gray-500">· ·</h3>
                    <p className="const ">const workExperience = ( ) => {'{'}</p>
                </div>
                <div className="neons flex hover:bg-gray-400">
                    <p className="num text-gray-100">15</p>
                    <h3 className="inter text-gray-500">· · · ·</h3>
                    <p className="const text-fuchsia-800 ">return <b className="text-white">[</b></p>
                </div>
                <div className="neon flex hover:bg-gray-400">
                    <p className="num text-gray-100">16</p>
                    <h3 className="inter text-gray-500">· · · · · ·</h3>
                    <p className="const "> while ( <span > year {'<'} 2023 || year {'>'} 2021</span> ) {'{'} </p>
                </div>
                <div className="neon flex hover:bg-gray-400">
                    <p className="num text-gray-100">17</p>
                    <h3 className="inter text-gray-500">· · · · · · · · </h3>
                    <p className="const "><b className="let"> let position = <span>restaurantOwner</span></b></p>
                </div>
                <div className="neon flex hover:bg-gray-400">
                    <p className="num text-gray-100">18</p>
                    <h3 className="inter text-gray-500">· · · · · · · · · ·</h3>
                    <p className="const "><span>Schedule and direct staff in daily work assignments to maximize productivity.</span> </p>
                </div>
                <div className="neon flex hover:bg-gray-400">
                    <p className="num text-gray-100">19</p>
                    <h3 className="inter text-gray-500">· · · · · · · · · ·</h3>
                    <p className="const "><span>Optimize profits by controlling food, beverage, and labor costs on a daily basis.</span></p>
                </div>
                <div className="neon flex hover:bg-gray-400">
                    <p className="num text-gray-100">20</p>
                    <h3 className="inter text-gray-500">· · · · · · · · · ·</h3>
                    <p className="const "><span>Efficiently resolve problems or concerns to the satisfaction of all involved parties. <b className="flashing-text">|</b></span></p>
                </div>
                <div className="neons flex hover:bg-gray-400">
                    <p className="num text-gray-100">21</p>
                    <h3 className="inter text-gray-500">· · · · · · </h3>
                    <p className="const ">{'}'}</p>
                </div>
                <div className="neons flex hover:bg-gray-400">
                    <p className="num text-gray-100">22</p>
                    <h3 className="inter text-gray-500">· · · ·  </h3>
                    <p className="const text-white">]</p>
                </div>
                <div className="neons flex hover:bg-gray-400">
                    <p className="num text-gray-100">23</p>
                    <h3 className="inter text-gray-500">· ·  </h3>
                    <p className="const "> {'}'}</p>
                </div>

                <p className="rightClose text-neutral-400 text-3xl"> {'}'} </p>
            </div>
            <div id="section4" className="contact">
                <div className="logo">
                    <h3 className="pro text-3xl text-neutral-300">const Contact = ( ) => {'{'}</h3>
                </div>

                <div className="social">
                    <h3 className="find">Find me on :</h3>
                    <div className="link-flex">


                    <div className="links">
                        <BsGithub className="git"></BsGithub>
                        <a href="https://github.com/yangcui23" className="git hover:text-gray-100"> Github </a>

                    </div>
                    < div className="links">
                        <BsLinkedin className="git"></BsLinkedin>
                        <a href="https://www.linkedin.com/in/yang-cui-477127266/" className="git hover:text-gray-100"> LinkedIn </a>

                    </div>
                    </div>
                    <div>
                        <button onClick={handleButtonClick} className="button-85" id="formButton">Keep in touch</button>

                        {showForm && (
                            <div className="form">
                                <div className="modal">
                                    <button onClick={handleCloseForm} className="close-button"><MdOutlineClose></MdOutlineClose></button>
                                    <h3 className="message">Send me a message :</h3>
                                    <form onSubmit={handleSubmit} className="formColor">
                                        <input
                                            className="border-2"
                                            type="text"
                                            placeholder="Your Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <input
                                            className="border-2"
                                            type="email"
                                            placeholder="Your Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <textarea
                                            className="border-2"
                                            placeholder="Your Message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        ></textarea>
                                        {errorMessage && <div className="error">{errorMessage}</div>}
                                        <button type="submit" className="button-56">Send Message</button>
                                        {showSuccessMessage && <p>Email sent successfully!</p>}
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>




                </div>

                <p className="rightClose text-neutral-400 text-3xl mt-28">{'}'}</p>
            <p className="made">Made by Yang. Circa 2023</p>
            </div>


            <div className="dot dot2"></div>
            <div className="dot dot3"></div>
            <div className="dot dot4"></div>
            <div className="dot dot5"></div>

        </div>
        <style>
            {`
            .form {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999;
            
          }
            
          .modal {
          
          display:block;
          justify-content:center;
          align-items:center;
          margin-top : 200px;
          margin-left : 570px;
          border-radius:10px;
            height:400px;
            width:700px;
            background-color: #d9d9d9;
            padding: 20px;
            transition: all 0.3s ease-out; 
  
          }
            
          .close-button {
            position: absolute;
            top: 10px;
            right: 10px;
          }
          }
            @media only screen and (max-width: 550px) {
          .form {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999;
          }

          .modal {
          display:flex;
            height:300px;
            width:300px;
            background-color: #d9d9d9;
            padding: 20px;
          }

          .close-button {
            position: absolute;
            top: 10px;
            right: 10px;
          }
          }
        `}
        </style>

    </div>
  )
}

export default App
