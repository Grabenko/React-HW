import React from 'react';
import s from '../styles/city.module.css'
import logo from '../components/img/logo.png'
import Book from './Book';
const City = () => {
    return (
        <div className={s.text}>
            <div className={s.display}>
            <h1>My City: Vinnitsa</h1>
            <img src={logo} alt="Logo" />
            </div>
            <p>Ві́нниця — місто в Україні— місто на берегах Південного Бугу, адміністративний центр Вінницької області, Вінницького району, значний історичний осередок східного Поділля, центр Вінницької агломерації.<br /> Вікіпедія <br />
Погода: 24°C, вітер пн.-сх., швидкість вітру: 10 km/h, вологість: 40% weather.com <br />
Населення: 370 834 (2017) Організація Об'єднаних Націй<br />
Площа: 113,2 км²<br />
Мер: Моргунов Сергій Анатолійович</p>
        </div>
    );
}

export default City;
