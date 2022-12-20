import React from 'react';
import Logotype from '../assets/Logotype.svg';

export default function Logo(){
    return(
        <div className="logoHolder">
            <img className="logo" src={Logotype} alt="logo" />
        </div>
    )
}