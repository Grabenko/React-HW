import React, { Component } from 'react';
import s from '../styles/city.module.css'
import logos from './img/im.jpg'
import logoss from './img/imn.jpg';
import logosss from './img/in.jpg';
import logossss from './img/inn.jpg';

class Class extends Component {
    render() {
        return (
            <div>
                <div className={s.foto}>
                <img src={logos} alt="" />
                <img src={logoss} alt="" />
                <img src={logosss} alt="" />
                <img src={logossss} alt="" />
                </div>
            </div>
        );
    }
}

export default Class;
