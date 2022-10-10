import React from "react"

import './styles.css';
import Button from '@mui/material/Button';

export default function Hero() {
   return (
    <section>
       <div className="container">
            <div className="cover">
                <div className="logo">
                    <img src="../assets/logovector.svg" alt="" />
                    <div className="content">
                        <h1>Maria</h1>
                        <h2>Empreendedora Lençóis Maranhenses</h2>
                     </div>
                </div>

            </div>
            <div className="action">
                <div className="description">
                    <h1>
                    ✈️ <br/> Impulsionamos mulheres de todos os perfis a melhorar a experiência feminina do turismo no Brasil
                    </h1>
                </div>
                <div>
                    <Button 
                    color="secondary" 
                    variant="contained"
                    onClick={() => {
    location.href = "https://www.figma.com/proto/2hJkcag1XTfANS1oLRvJje/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=718%3A3070&scaling=min-zoom&page-id=641%3A2701&starting-point-node-id=641%3A2708";
  }}>Quero ser impulsionada</Button>
                </div>                
            </div>
            <div className="bndes">
                <h2>
                    Em parceria com 
                </h2>
                <img src="../assets/bndes.svg" alt="logo BNDES" />
            </div>
       </div>
    </section>
   )
}