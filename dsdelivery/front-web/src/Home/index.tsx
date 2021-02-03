import React from 'react';
import './styles.css';
import {ReactComponent as MainImage } from './main.svg';
import Footer from '../Footer';

function Home (){
    return(
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className="home-title">
                            Make your order <br/> that we delivery <br/> for you!!!
                        </h1>
                        <h3 className="home-subtitle">
                            Choose your order and in a few minutes <br/>
                            we take to you
                        </h3>
                        <a href="orders" className="home-btn-order">
                            MAKE ORDER
                        </a>
                    </div>
                    <div className="home-image">
                        <MainImage/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
        
    );
}

export default Home;