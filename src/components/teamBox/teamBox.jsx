import React, { useState } from 'react';
import style from './teamBox.module.css'



const Slider = (props) => {

    const backgroundImage = `url(/images/${props.imagem})`;

    return (
        <div className={style.teamBox}>
            <div className={style.picture} style={{ background: `${backgroundImage} no-repeat center center/cover` }}>
            </div>
            <div className={style.Info}>
                <h1>{props.nome}</h1>
                <b>{props.cargo}</b>
            </div>
        </div>
    );
};

export default Slider;