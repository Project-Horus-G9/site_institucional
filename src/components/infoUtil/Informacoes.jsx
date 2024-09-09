import React, { useState } from 'react';
import style from './infoUtil.module.css'



function Informacoes(props) {
    return (
        <>
            <div className={style.infoBoxStyle}>
                <h3>{props.title}</h3>
                <span>
                    <b>{props.nome}</b>{props.info}
                </span>
                <span>
                    <b>{props.nome1}</b>{props.info1} 
                </span>
                <span>
                    <b>{props.nome2}</b>{props.info2}
                </span>
                <span>
                    <b>{props.nome3}</b>{props.info3}
                </span>
            </div>
        </>
    )
}

export default Informacoes;