import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import SignUp from '../../containers/SignUp';

export default function CategoryCard({ tag }) {
    const dispatch = useDispatch();
    // const key = localStorage.getItem('LOGIN_USER_KEY');
    const pushTotag = tagId => {
        // if (key) {
        if (tagId == 9) {
            dispatch(push('/sale'));
        } else {
            dispatch(push('/search?tag_id=' + tagId));
        }
        // } else {
        //     dispatch(push('/signup'));
        // }
    };

    return (
        <li class="home" key={tag.id}>
            <img src={tag.image} alt="" />
            <h1>{tag.name}</h1>
            <p>{tag.description}</p>
            <button onClick={() => pushTotag(tag.id)}>Search homes</button>
        </li>
    );
}
