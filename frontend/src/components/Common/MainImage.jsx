import React, { useState } from 'react';
import ImageBackgroundMain from '../../assets/img/background-main.png';
import ImgSearchIcon from '../../assets/img/icon-search.svg';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

function MainImage() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState();

    const inputFind = event => {
        setSearch(event.target.value);
    };

    const submitAction = search => {
        dispatch(push('/search/?search=' + search));
    };
    return (
        <>
            <section class="main">
                <img class="background" src={ImageBackgroundMain} alt="" />
                <div class="search">
                    <img id="search-mag" onClick={() => submitAction(search)} src={ImgSearchIcon} alt="" />
                    <input onChange={inputFind} type="text" name="" placeholder="Address, city or state" id="search" />
                </div>
                <article class="text">
                    <h1>
                        Find the perfect home
                    </h1>
                    <h4>
                        We have the most complete source of homes <br />
                        for sale & real estate to help you move
                    </h4>
                </article>
            </section>
        </>
    );
}

export default MainImage;
