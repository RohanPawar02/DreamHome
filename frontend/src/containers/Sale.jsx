import { push } from 'connected-react-router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SaleImage from '../components/Common/SaleImage';
import { sellrequest } from '../reducks/request/operations';

function Sale() {
    const dispatch = useDispatch();
    const key = localStorage.getItem('LOGIN_USER_KEY');
    const [address, setAddress] = useState(''),
        [sqft, setSqft] = useState(''),
        [age_building, setAge_building] = useState('');

    const inputAddress = e => {
        setAddress(e.target.value);
    };

    const inputSqft = e => {
        setSqft(e.target.value);
    };

    const inputAge_Building = e => {
        setAge_building(e.target.value);
    };

    const submitButton = e => {
        let params = {
            address: address,
            sqft: sqft,
            age_building: age_building
        };
        dispatch(sellrequest(params));
        e.preventDefault();
        dispatch(push('/ThankYou'));
    };
    return (
        <>
            <section class="sell">
                <SaleImage />
                <article class="text">
                    <h1>Sell your home directly to get counselling.</h1>
                    <p>
                        Getting a competitive cash offer from Dream House is an easy path to sell your home, with more
                        control and less prepwork. You sell your home as-is and get paid with no surprises, while we
                        take care of the rest.
                    </p>
                    <h3>Input your information to get counselling.</h3>
                </article>
                <div class="form">
                    <h2>Address</h2>
                    <input
                        onChange={inputAddress}
                        type="text"
                        name="address"
                        placeholder="Enter your full house address"
                    />
                    <h2>How much Square feet is your building?</h2>
                    <input onChange={inputSqft} type="text" name="sqft" placeholder="Enter the area of house" />
                    <h2>How old is your building?</h2>
                    <input
                        onChange={inputAge_Building}
                        type="number"
                        name="age_building"
                        placeholder="Enter the age of building"
                    />
                    <br />
                    <input onClick={submitButton} type="submit" name="" id="" />
                </div>
            </section>
        </>
    );
}

export default Sale;
