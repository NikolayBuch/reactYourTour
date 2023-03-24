import React from 'react';
import s from './SocialNet.module.css'
import st from '../Main.module.css'

const SocialNet = () => {
	return (
		<div className={s.social}>
            <div className={s.container}>
                <p className={st.pNormal}>Наши социальные сети</p>
                <div className={s.link}>
                    <ul>
                        <li><img src="./img/svg/inst.svg" alt="instagram"/><a href="instagram" className={st.pNormal}>instagram</a></li>
                        <li><img src="./img/svg/fb.svg" alt="facebook"/><a href="facebook" className={st.pNormal}>facebook</a></li>
                        <li><img src="./img/svg/vk.svg" alt="vkontakte"/><a href="vkontakte" className={st.pNormal}>vkontakte</a></li>
                    </ul>
                </div>
            </div>
			</div>
	);
};

export default SocialNet;