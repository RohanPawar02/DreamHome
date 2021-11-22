// import Imglike from '../../../assets/img/likebutton.svg';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addFavourite } from '../../../reducks/favourites/operations';
// import { getFavourites } from '../../../reducks/favourites/selectors';
const Card = ({ home }) => {
    const dispatch = useDispatch();
    // const clickFavourite = place => {
    //     dispatch(addFavourite(place));
    // };
    const selector = useSelector(state => state);
    // const favourites = getFavourites(selector);
    // const [showLikeButton, setShowLikeButton] = useState(true);
    // useEffect(() => {
    //     let favoritePlace = favourites.filter(favourite => favourite.id == place.id);
    //     if (favoritePlace.length > 0) {
    //         setShowLikeButton(false);
    //     }
    // }, [favourites]);
    return (
        <li key={home.id} class="box">
            <img src={'https://res.cloudinary.com/dwzjr9dg5/' + home.main_image} alt="" />
            <h3>{home.price}</h3>
            <p>
                {home.layout} 1,800 sqft <br />
                <br />
                {home.state}, {home.address}
            </p>
        </li>
    );
};

export default Card;
