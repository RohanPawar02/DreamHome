import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomes, clearHomes } from '../reducks/homes/operations';
import { getHomes } from '../reducks/homes/selectors';
import MainImage from '../components/Common/MainImage';
import { getTags } from '../reducks/tags/selectors';
import { fetchTags } from '../reducks/tags/operations';
import { push } from 'connected-react-router';
import CategoryCard from '../components/Common/CategoryCard';
import Header from '../components/Common/Header';
import { LOGIN_USER_KEY } from '../API';
import { getUser } from '../reducks/users/selectors';
import { useHistory } from 'react-router';

const Home = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const homes = getHomes(selector);
    const key = localStorage.getItem(LOGIN_USER_KEY);
    const history = useHistory();
    useEffect(() => {
        dispatch(clearHomes());
        dispatch(fetchHomes());
    }, []);
    const tags = getTags(selector);
    const clickHome = homeId => {
        dispatch(history.push(`/preview/${homeId}/`));
        // dispatch(push('/preview/' + homeId + '/'));

        // if (key) {
        //     dispatch(push('/preview/' + homeId + '/'));
        // } else {
        //     dispatch(push('/signup'));
        // }
    };

    useEffect(() => {
        dispatch(fetchTags());
    }, []);

    return (
        <>
            <MainImage />
            <section class="option">
                <h4>
                    Whether you're buying, selling or renting, <br />
                    we can help you move forward.
                </h4>
                <ul class="icons">{tags && tags.map(tag => <CategoryCard tag={tag} />)}</ul>
            </section>
            <section class="explore">
                <div>
                    <h4>Explore home on Dream house</h4>
                </div>
                <div class="images">
                    <ul class="column">
                        <ul class="rows">
                            {homes &&
                                homes.map(home => (
                                    <li class="single" key={home.id}>
                                        <img src={'https://res.cloudinary.com/dwzjr9dg5/' + home.main_image} alt="" />
                                        <div class="box-main">
                                            <h1>{home.address}</h1>
                                        </div>
                                        <button id="vh" onClick={() => clickHome(home.id)}>
                                            View homes
                                        </button>
                                    </li>
                                ))}
                        </ul>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Home;
