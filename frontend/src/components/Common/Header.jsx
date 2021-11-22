import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ImgUseIcon from '../../assets/img/icon-user.svg';
import ImgLogoIcon from '../../assets/img/icon-logo.svg';
import Find from './Find';
import { push } from 'connected-react-router';
import Option from './option';

console.log('called out of component');

export default function Header() {
    const [pathname, setPathname] = useState(null);
    const dispatch = useDispatch();
    const [showOption, setShowOption] = useState(false);
    const key = localStorage.getItem('LOGIN_USER_KEY');
    const user = JSON.parse(localStorage.getItem('LOGIN_USER_KEY'));
    const [checkUser, setCheckUser] = useState(false);

    console.log('called above useEffect');
    useEffect(() => {
        console.log('called useEffect');
        setPathname(window.location.pathname);
    }, []);

    return (
        <>
            <nav class="header2">
                <img class="logo" src={ImgLogoIcon} onClick={() => dispatch(push('/'))} alt="" />
                <Find />
                <div class="drop-down" onClick={() => setShowOption(true)}>
                    <img src={ImgUseIcon} alt="" />
                    {checkUser && <button>{user.user_name} v</button>}
                </div>
            </nav>
            {showOption && <Option setShowOption={setShowOption} />}
        </>
    );
}
