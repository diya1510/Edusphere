import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
    const slideForward = ()=>{
        if (tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = ()=>{
        if (tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Emily Williams</h3>
                                <span>Edusphere, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusphere was one of the best decisions I've 
                            ever made. The supportive community, state-of-the-art facilities, and 
                            commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusphere, USA</span>
                            </div>
                        </div>
                        <p>Pursuing my degree at Edusphere has been one of the most rewarding decisions 
                            I've ever made. The welcoming community, cutting-edge facilities, and
                             dedication to academic excellence have far surpassed my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Charlotte Evans</h3>
                                <span>Edusphere, USA</span>
                            </div>
                        </div>
                        <p>Enrolling at Edusphere has been a transformative decision. The
                             vibrant community, innovative facilities, and dedication to fostering
                             academic and personal growth have provided me with the perfect environment 
                             to thrive and achieve my full potential.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Peter parker</h3>
                                <span>Edusphere, USA</span>
                            </div>
                        </div>
                        <p>Choosing Edusphere for my degree has been an exceptional decision. The inspiring 
                            community, advanced facilities, and strong emphasis on academic achievement
                             have greatly enhanced my learning experience.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials