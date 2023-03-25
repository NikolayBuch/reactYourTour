import React from 'react';
import s from './NavBar.module.css';
import st from '../../../styles/App.css'
import cx from 'classnames'


const NavBar = () => {
	return (
		<div>
			<nav className={s.navbar}>
            <div className={s.container}>
                <a href="#top"><img src="./img/png/logo.png"alt="YourTour"/></a>
                <div className={cx(s.menu, st.pNormal )}>
                    <ul className={s.menu__container}>
                        <li><a href="#tours">Туры</a></li>
                        <li><a href="#create_a_tour">Создать тур</a></li>
                        <li><a href="#reviews">Отзывы</a></li>
                        <li><a href="#story">Истории</a></li>
                    </ul>
                    <a href="tel:+79999999999" className={s.tel}>+7 999 999 99 99</a>
                </div>

            </div>
        </nav>
		</div>
	);
};

export default NavBar;