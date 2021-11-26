import React, { useState, useEffect } from 'react';
import ImgUseIcon from '../../assets/img/icon-user.svg';
import { useDispatch } from 'react-redux';
import { signOut } from '../../reducks/users/operations';
import { push } from 'connected-react-router';

function Option({ setShowOption, tag }) {
    const dispatch = useDispatch();
    const key = localStorage.getItem('HOME_LOGIN_USER_KEY');
    const [checkUser, setCheckUser] = useState(false);
    const user = JSON.parse(localStorage.getItem('HOME_LOGIN_USER_KEY'));

    const signOutButton = () => {
        dispatch(signOut());
        setCheckUser(false);
        dispatch(push('/signin'));
    };

    useEffect(() => {
        if (key != null) {
            setCheckUser(true);
        }
    }, [key]);
    return (
        <>
            <div class="main2" onClick={() => setShowOption(false)}>
                <div class="options">
                    <ul>
                        <li class="first">
                            <img src={ImgUseIcon} alt="" />
                            {checkUser && <p>{user.user_name}</p>}
                        </li>
                        <li onClick={() => dispatch(push('/saved'))} class="first">
                            Favorites
                        </li>
                        <li onClick={() => dispatch(push(`Search?tag_id=` + 3))}>Buy a house</li>
                        <li onClick={() => dispatch(push('/sale'))}>Sell a house </li>
                        <li onClick={() => dispatch(push(`Search?tag_id=` + 1))} class="first">
                            Rent a house
                        </li>
                        <li onClick={signOutButton}>Log Out</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Option;
