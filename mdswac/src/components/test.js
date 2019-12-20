import React from 'react';
import {Link}from 'react-router-dom';
import './test.css'


function test (){
    return(
    <div className="EnterScreen">
        <div className="EcranAccueil">
            <div>
                <div className = 'homepage'>
                    <div className='EnterTitle'>
                        <p>MDSWAC</p>
                        <p>Convertisseur Markdown - html</p>
                    </div>
                </div>
                <Link to="/Home">
                <button className="EnterButton" type="button" >Accéder à l'éditeur</button>
                </Link>
            </div>
        </div>
    </div>
    )
}
export default test








