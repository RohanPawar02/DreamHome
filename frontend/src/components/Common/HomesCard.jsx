import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import ImgFavIcon from '../../assets/img/icon-fav.svg';
import { addSaved } from '../../reducks/saved/operations';
import { getSaved } from '../../reducks/saved/selectors';

function HomesCard({ home }) {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const clickSaved = home => {
        dispatch(addSaved(home));
    };
    const saved = getSaved(selector);
    const clickHome = homeId => {
        dispatch(push('/preview/' + homeId + '/'));
    };
    return (
        <div>
            <li key={home.id} class="box">
                {home && Object.values(saved).filter(savedHomes => home.id == savedHomes.id).length === 0 && (
                    <img
                        class="fav"
                        onClick={() => {
                            clickSaved(home);
                        }}
                        src={ImgFavIcon}
                        alt=""
                    />
                )}
                <img
                    onClick={() => clickHome(home.id)}
                    src={'https://res.cloudinary.com/dwzjr9dg5/' + home.main_image}
                    alt=""
                />

                <h3>{home.price}</h3>
                <p>
                    {home.layout} 1,800 sqft <br />
                    <br />
                    {home.state}, {home.address}
                </p>
            </li>
        </div>
    );
}

export default HomesCard;
