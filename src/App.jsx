
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
    const [showLink, setShowLink] = useState(false);
    const [showLink2, setShowLink2] = useState(false);
    const [showLink3, setShowLink3] = useState(false);
    const [showLink4, setShowLink4] = useState(false);
    const [showLink5, setShowLink5] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);


    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: 'smooth'});

        }
    };


    const handleButtonClick = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    const handleLinkButton2 = () => {
        setShowLink2(true);
    }
    const handleLinkClose2 = () => {
        setShowLink2(false);

    }
    const handleLinkButton3 = () => {
        setShowLink3(true);
    }
    const handleLinkClose3 = () => {
        setShowLink3(false);

    }
    const handleLinkButton4 = () => {
        setShowLink4(true);
    }
    const handleLinkClose4 = () => {
        setShowLink4(false);

    }
    const handleLinkButton5 = () => {
        setShowLink5(true);
    }
    const handleLinkClose5 = () => {
        setShowLink5(false);

    }
    const handleLinkButton = () => {
        setShowLink(true);
    }
    const handleLinkClose = () => {
        setShowLink(false);

    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform client-side validations
        if (!name || !email || !message) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        const messageData = {name, email, message};

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
        const observer5 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                console.log(entries)
                if (entry.isIntersecting) {

                    entry.target.classList.add('show5');
                } else {
                    entry.target.classList.remove('show5');
                }
            })
        })
    const hiddenElements = document.querySelectorAll('.tweetly');
    const hiddenElements2 = document.querySelectorAll('.centura');
        const hiddenElements3 = document.querySelectorAll('.coming');
        const hiddenElements4 = document.querySelectorAll('.coming2');
        const hiddenElements5 = document.querySelectorAll('.coming3');
    hiddenElements.forEach((el) => observer.observe(el));
    hiddenElements2.forEach((el) => observer2.observe(el));
        hiddenElements3.forEach((el) => observer3.observe(el));
        hiddenElements4.forEach((el) => observer4.observe(el));
        hiddenElements5.forEach((el) => observer5.observe(el));
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

                {showLink && (
                    <div className="tweetlyDetail">
                        <div className="linkDetail">


                        </div>

                    </div>
                )}
                <div className="tweetly">
                    <div className="wrapper">

                        <div className="projectText">

                            <button className="cardText" onClick={handleLinkButton}>Tweetly</button>
                            <div className="textUnderline"></div>
                        </div>

                    </div>

                    <img className="projectImg" src="./src/assets/Tweetly.png" alt="project website"/>


                </div>

                {showLink2 && (
                    <div className="tweetlyDetail">
                        <div className="linkDetail">


                        </div>

                    </div>
                )}

                <div className="centura mt-12">
                    <div className="wrapper">

                        <div className="projectText">

                            <button className="cardText" onClick={handleLinkButton2}>Hospital Manager</button>
                            <div className="textUnderline"></div>
                        </div>

                    </div>

                    <img className="projectImg" src="./src/assets/Hospital.png" alt="project website"/>


                </div>

                {showLink3 && (
                    <div className="tweetlyDetail">
                        <div className="linkDetail">


                        </div>

                    </div>
                )}
                <div className="coming mt-12">
                    <div className="wrapper">

                        <div className="projectText">

                            <button className="cardText" onClick={handleLinkButton3}>TBD</button>
                            <div className="textUnderline"></div>
                        </div>

                    </div>

                    <img className="projectImg" src="./src/assets/coming.jpg" alt="project website"/>


                </div>

                {showLink4 && (
                    <div className="tweetlyDetail">
                        <div className="linkDetail">


                        </div>

                    </div>
                )}

                <div className="coming2 mt-12">
                    <div className="wrapper">

                        <div className="projectText">

                            <button className="cardText" onClick={handleLinkButton4}>TBD</button>
                            <div className="textUnderline"></div>
                        </div>

                    </div>

                    <img className="projectImg" src="./src/assets/coming.jpg" alt="project website"/>


                </div>


                {showLink5 && (
                    <div className="tweetlyDetail">
                        <div className="linkDetail">
                            <button onClick={handleLinkClose} className="close-button"><MdOutlineClose></MdOutlineClose>
                            </button>

                        </div>

                    </div>
                )}
                <div className="coming3 mt-12">
                    <div className="wrapper">

                        <div className="projectText">

                            <button className="cardText" onClick={handleLinkButton5}>TBD</button>
                            <div className="textUnderline"></div>
                        </div>

                    </div>

                        <img className="projectImg" src="./src/assets/coming.jpg" alt="project website"/>


                    </div>

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
                    <h3 className="inter text-gray-500">· · · · · · · </h3>
                    <p className="const ">{'{'} language : <span>CSS, HTML5, Java, Javascript, Python </span> {'}'} ,
                    </p>
                </div>
                <div className="neon flex hover:bg-gray-400">
                    <p className="num text-gray-100">08</p>
                    <h3 className="inter text-gray-500">· · · · · · · </h3>
                    <p className="const ">{'{'} framework : <span> Bootstrap, Express, Flask, React, SpringBoot, Tailwind, Vite </span> {'}'} ,
                    </p>
                </div>
                <div className="neon flex hover:bg-gray-400">
                    <p className="num text-gray-100">09</p>
                    <h3 className="inter text-gray-500">· · · · · · ·</h3>
                    <p className="const ">{'{'} databases : <span> MongoDB, MySQL </span>{'}'} ,</p>
                </div>
                <div className="neon flex hover:bg-gray-400">
                    <p className="num text-gray-100">10</p>
                    <h3 className="inter text-gray-500">· · · · · · ·</h3>
                    <p className="const ">{'{'} tools : <span> AWS ECS, Github, Intellij IDEA, Node JS, PostmanAPI, Spring Tool Suite, VS Code </span> {'}'}
                    </p>
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
                                        <button type="submit" className="button-89" role="button">Send Message</button>
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
            


.button-89 {
margin-top : 20px;
  --b: 3px;   
  --s: .45em; 
  --color: #373B44;
  
  padding: calc(.5em + var(--s)) calc(.9em + var(--s));
  color: var(--color);
  --_p: var(--s);
  background:
    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
  transition: .3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: .6em;
  font-size: 16px;

  border: 0;

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-89:hover,
.button-89:focus-visible{
  --_p: 0px;
  outline-color: var(--color);
  outline-offset: .05em;
}

.button-89:active {
  background: var(--color);
  color: #fff;
}
                 .tweetlyDetail {
                 position:fixed;
                 top: 0;
            left: 0;
                 width:100%;
                 height : 100%;
                 background-color : black;
                 display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999;
            }
            .linkDetail {
            display:block;
          justify-content:center;
          align-items:center;
          margin-top : 200px;
          margin-left : 600px;
          border-radius:10px;
            height:400px;
            width:700px;
            background-color: #d9d9d9;
            padding: 30px;
            transition: all 0.3s ease-out; 
            align-items: center;
            justify-content: center;
            text-align:center;
            }
            
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
          margin-left : 600px;
          border-radius:10px;
            height:400px;
            width:700px;
            background-color: #d9d9d9;
            padding: 30px;
            transition: all 0.3s ease-out; 
            align-items: center;
            justify-content: center;
            text-align:center;
  
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
