import React from 'react'
import "./faq.css"
import "./main.js"
import img from "./img/faq.svg"
import Navbar from '../../navbar/Navbar'
import Footer from '../Home/Sections/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Faq = () => {
  return (
    <main>
        <Navbar />
        <div className='bontain'>
      <div className="containers">
        <h1 className="title">
            Frequenty Asked Questions
        </h1>
        <main className="accordion">
            <div className="faq-img">
                <img src={img} alt="" className="accordion-img"/>
            </div>
            <div className="content-accordion">
                <div className="question-answer">
                    <div className="question">
                        <h3 className="title-question">
                            Do you do a Front-end developer?
                        </h3>
                        <button className="question-btn">
                            <span className="up-icon">
                            <FontAwesomeIcon icon={faCoffee} />
                            <i className="fas fa-chevron-up"></i>
                            
                            </span>
                            <span className="down-icon">
                                
                            <i className="fas fa-chevron-up"></i>
                             
                                
                            </span>
                        </button>
                    </div>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. 
                            Quisquam assumenda sapiente 
                            mollitia excepturi quos id 
                            magnam obcaecati non est? 
                            Maiores?</p>
                    </div>
                </div>
                <div className="question-answer">
                    <div className="question">
                        <h3 className="title-question">
                            What is the differrence between 
                            Front-end and Back-end?
                        </h3>
                        <button className="question-btn">
                            <span className="up-icon">
                                 
                            <i className="fas fa-chevron-up"></i>
                            </span>
                            <span className="down-icon">
                                 
                            <i className="fas fa-chevron-up"></i>
                            </span>
                        </button>
                    </div>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. 
                            Quisquam assumenda sapiente 
                            mollitia excepturi quos id 
                            magnam obcaecati non est? 
                            Maiores?</p>
                    </div>
                </div>
                <div className="question-answer">
                    <div className="question">
                        <h3 className="title-question">
                            Which is better Front-end or Back-end?
                        </h3>
                        <button className="question-btn">
                            <span className="up-icon">
                                 
                            <i className="fas fa-chevron-up"></i>
                            </span>
                            <span className="down-icon">
                                 
                            <i className="fas fa-chevron-up"></i>
                            </span>
                        </button>
                    </div>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. 
                            Quisquam assumenda sapiente 
                            mollitia excepturi quos id 
                            magnam obcaecati non est? 
                            Maiores?</p>
                    </div>
                </div>
                <div className="question-answer">
                    <div className="question">
                        <h3 className="title-question">
                            What is Front-end?
                        </h3>
                        <button className="question-btn">
                            <span className="up-icon">
                                 
                            <i className="fas fa-chevron-up"></i>
                            </span>
                            <span className="down-icon">
                                 
                            <i className="fas fa-chevron-up"></i>
                            </span>
                        </button>
                    </div>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. 
                            Quisquam assumenda sapiente 
                            mollitia excepturi quos id 
                            magnam obcaecati non est? 
                            Maiores?</p>
                    </div>
                </div>
                <div className="question-answer">
                    <div className="question">
                        <h3 className="title-question">
                            What is Back-end?
                        </h3>
                        <button className="question-btn">
                            <span className="up-icon">
                                 
                            <i className="fas fa-chevron-up"></i>
                            </span>
                            <span className="down-icon">
                                 
                            <i className="fas fa-chevron-up"></i>
                            </span>
                        </button>
                    </div>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. 
                            Quisquam assumenda sapiente 
                            mollitia excepturi quos id 
                            magnam obcaecati non est? 
                            Maiores?</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
    </div>
    <Footer />
    </main>
  )
}

export default Faq
