import React from 'react';

function StepsHeader(){
    return(
        <header className="orders-steps-container">
            <div className="orders-steps-content">
                <h1 className="steps-title">
                    Follow the <br /> steps
                </h1>

                <ul className="steps-items">
                    <li>
                        <span className="steps-number">1</span>
                        Select the products and location.
                    </li>
                    <li>
                        <span className="steps-number">2</span>
                        Click in <strong>"Send Order"</strong>.
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default StepsHeader;