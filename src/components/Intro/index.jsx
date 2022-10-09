import NbrCard from '../NbrCard';
import MediaCard from '../MediaCard';
import React from 'react';

import './styles.css';

export default function Intro() {
    return (
        <section>
            <div className="intro">
                <div className="headline">
                    <h1>
                        Lorem ipsum is placeholder text commonly used in the graphic.
                    </h1>                     
                </div>
      
                <div className="nbrgroups">
                    <NbrCard/>
                    <NbrCard/>
                    <NbrCard/>
                </div>    
                <div className="cards">
                    <MediaCard/>
                    <MediaCard/>
                    <MediaCard/>
                </div>    
            </div>

        </section>
    )
}