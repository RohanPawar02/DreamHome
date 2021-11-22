import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import SaleImage from '../components/Common/SaleImage';

function ThankYou() {
    const dispatch = useDispatch();
    return (
        <>
            <section class="sell">
                <SaleImage />
                <article class="thankyou">
                    <h1>Thank you for the Details</h1>
                    <h4>
                        Thank you for your details. We received your request. <br />
                        Our stuff will be contacting with you to tell next steps.
                    </h4>
                    <a href="/">
                        <button>Back to Home</button>
                    </a>
                </article>
            </section>
        </>
    );
}

export default ThankYou;
