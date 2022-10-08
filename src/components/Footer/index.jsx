import React from 'react';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import './styles.css';

export default function Footer() {
    return(
        <section>
            <div className="footer">
                <div className="contact">
                    <h1>
                        Lorem ipsum - Lorem ipsum - Lorem ipsum
                    </h1>
                    <div className="phone">
                        <PhoneInTalkIcon/> 
                        <h1>
                             (00) 00000-00000
                        </h1>                           
                    </div>
                 
                </div>

            </div>
        </section>
    )
}