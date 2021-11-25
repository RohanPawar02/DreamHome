import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSaved } from '../reducks/saved/selectors';
import { deleteSaved } from '../reducks/saved/operations';
import { fetchFromLocalStorage } from '../reducks/saved/operations';
import ImgFavIcon from '../assets/img/icon-fav.svg';

import Header from '../components/Common/Header';

const Saved = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const saved = getSaved(selector);
    console.log(saved);
    useEffect(() => {
        dispatch(fetchFromLocalStorage());
    }, []);
    return (
        <div>
            {console.log(saved)}
            <section class="buy">
                <div class="head">
                    <h4>Favorites</h4>
                    <ul class="images">
                        {saved &&
                            saved.map(save => (
                                <li class="box">
                                    <img
                                        class="fav"
                                        onClick={() => {
                                            dispatch(deleteSaved(save.id));
                                        }}
                                        src={ImgFavIcon}
                                        alt=""
                                    />
                                    <img src={'https://res.cloudinary.com/dwzjr9dg5/' + save.main_image} alt="" />
                                    <h3>{save.price}</h3>
                                    <p>
                                        {save.layout} 1,800 sqft <br />
                                        <br />
                                        {save.state}, {save.address}
                                    </p>
                                </li>
                            ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Saved;
