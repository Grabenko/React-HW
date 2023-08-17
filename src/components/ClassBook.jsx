import React from 'react';
import s from '../styles/city.module.css'
import Persi from './img/Persi.jpg'
import Persiss from './img/Persiss.jpg'
import Water from './img/water.jpg'

const ClassBook = () => {
    return (
        <div>
            <div>
            <div className={s.fotos}>
            <img src={Persi} alt="" />
            <img src={Persiss} alt="" />
            <img src={Water} alt="" />
            </div>
           </div>
        </div>
    );
}

export default ClassBook;
