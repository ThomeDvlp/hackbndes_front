import React from "react"

import './styles.css';
import Button from '@mui/material/Button';

export default function Hero() {
   return (
    <section>
       <div className="container">
            <div className="cover">
                <div className="content">
                    <h1>E-leva Credito</h1>
                    <h2>Subtitle Ipsum</h2>
                </div>
            </div>
            <div className="action">
                <div className="description">
                    <h1>
                    Lorem ipsum is placeholder text commonly used in the graphic.
                    </h1>
                </div>
                <div>
                    <Button variant="contained">Cadastre Já</Button>
                </div>                
            </div>
       </div>
    </section>
   )
}