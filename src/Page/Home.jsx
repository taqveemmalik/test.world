import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import Header from '../Components/Header';
import orangediamond from "../Images/Bg/diamond.svg";
import yellowsun from "../Images/Bg/sun-yellow.svg";
import humptyasrtronot from "../Images/Posts/Humpty-astronot.png";
import { Link } from 'react-router-dom';
import PostSlider from '../Components/PostSlider';
import { FriendshipMarquee, TextMarquee } from '../Components/Marquee';
import CardSlider from '../Components/CardSlider';
import JoinFriendList from '../Components/JoinFriendList';
import VideoSection from '../Components/VideoSection.tsx';

function Home() {
    const [animatedElements, setAnimatedElements] = useState([]);

    // Function to check if an element is in the viewport
    function isElementInViewport(elem) {
        const scroll = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const elemTop = elem.getBoundingClientRect().top + scroll;

        return elemTop - scroll < windowHeight;
    }

    // Function to add the "anime" class to sections in the viewport
    function animateSections() {
        const elementsToAnimate = document.querySelectorAll('.scroll-anime');
        const elementsInViewport = [];

        elementsToAnimate.forEach((elem) => {
            if (isElementInViewport(elem)) {
                elem.classList.add('anime');
                elementsInViewport.push(elem);
            }
        });

        setAnimatedElements(elementsInViewport);
    }

    useEffect(() => {
        // Initial check on page load
        animateSections();

        // Add scroll event listener
        window.addEventListener('scroll', animateSections);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('scroll', animateSections);
        };
    }, []);

    return (
        <>
            {/* Header Starts Here */}
            <Header />
            {/* Header Ends Here */}

            {/* AI That Section */}
            <Container fluid className='ai-that-section'>
                <Container>
                    <Row>
                        <Col xl="12" lg="12" md="12" sm="12" className='text-center scroll-anime top'>
                            <h2 className='ai-that-title'>AI THAT</h2>
                            <h3 className='ai-that-subtitle'>SPEAKS, SEES, AND CREATES.</h3>
                            <div className='social-icons'>
                                <div className='social-icon discord'>
                                    <i className='fab fa-discord'></i>
                                </div>
                                <div className='social-icon twitter'>
                                    <i className='fab fa-twitter'></i>
                                </div>
                                <div className='social-icon telegram'>
                                    <i className='fab fa-telegram'></i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* Our Creations Section */}
            <Container fluid className='our-creations-section'>
                <Container>
                    <Row>
                        <Col xl="12" lg="12" md="12" sm="12" className='scroll-anime top'>
                            <h4 className='section-title'>Our Creations</h4>
                            <div className='creations-grid'>
                                <div className='creation-item large'>
                                    <img src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1" alt="Humpty Adventure" />
                                </div>
                                <div className='creation-item'>
                                    <img src="https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1" alt="Humpty Character" />
                                </div>
                                <div className='creation-item'>
                                    <img src="https://images.pexels.com/photos/5428829/pexels-photo-5428829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1" alt="Humpty World" />
                                </div>
                                <div className='creation-item'>
                                    <img src="https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1" alt="Humpty Friends" />
                                </div>
                                <div className='creation-item'>
                                    <img src="https://images.pexels.com/photos/5428835/pexels-photo-5428835.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1" alt="Humpty Story" />
                                </div>
                                <div className='creation-item'>
                                    <img src="https://images.pexels.com/photos/4792730/pexels-photo-4792730.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1" alt="Humpty Magic" />
                                </div>
                                <div className='creation-item'>
                                    <img src="https://images.pexels.com/photos/5428834/pexels-photo-5428834.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1" alt="Humpty Universe" />
                                </div>
                                <div className='creation-item'>
                                    <img src="https://images.pexels.com/photos/4792731/pexels-photo-4792731.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1" alt="Humpty Dreams" />
                                </div>
                                <div className='creation-item'>
                                    <img src="https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1" alt="Humpty Joy" />
                                </div>
                                <div className='creation-item'>
                                    <img src="https://images.pexels.com/photos/4792732/pexels-photo-4792732.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1" alt="Humpty Fun" />
                                </div>
                                <div className='creation-item'>
                                    <img src="https://images.pexels.com/photos/5428832/pexels-photo-5428832.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1" alt="Humpty Play" />
                                </div>
                                <div className='creation-item'>
                                    <img src="https://images.pexels.com/photos/4792733/pexels-photo-4792733.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1" alt="Humpty Learn" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* Astronaut Coming Soon Section */}
            <Container fluid className='astronaut-section'>
                <div className='astronaut-content scroll-anime top'>
                    <div className='astronaut-character'>
                        <div className='speech-bubble left'>
                            <span>MY SPACESHIP IS LANDING SOON, AND I CAN'T WAIT TO CRACK OPEN A CHAT WITH YOU!</span>
                        </div>
                        <div className='astronaut-img'>
                            <Image src={humptyasrtronot} alt="Humpty Astronaut" />
                        </div>
                        <div className='speech-bubble right'>
                            <span>Coming in hot from space!</span>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Join The Friendship Marquee */}
            <Container fluid className='friendship-marquee-section'>
                <div className='scroll-anime right'>
                    <FriendshipMarquee />
                </div>
            </Container>

            {/* Join Your Humpty Friends Section */}
            <Container fluid className='join-friends-section'>
                <TextMarquee />
                <Container>
                    <Row>
                        <Col xl="12" lg="12" className='scroll-anime top'>
                            <JoinFriendList />
                        </Col>
                        <Col xl="12" lg="12" md="12" sm="12" className='join-friends-content text-center scroll-anime top'>
                            <h2>Join Your Humpty Friends</h2>
                            <div className='spacer-30' />
                            <h5 className='fw-semibold text-capitalize'>Ready for the egg-straordinary squad?</h5>
                            <div className='spacer-20' />
                            <h3 className='fw-semibold'>Join your Humpty Friends — they're cracking jokes, dropping memes, and about to make your day egg-zactly what it needed!</h3>
                            <div className='spacer-50' />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default Home;