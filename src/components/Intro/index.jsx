import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './styles.css';

import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >

  </Box>
);


export default function Intro() {
    return (
        <section>
            <div className="intro">
                <div className="headline">
                    <h1>
                       Recurso financeiro para criar novos negócios ou melhorar sua ideia  
                    </h1>                     
                </div>
      
                <div className="nbrgroups">
          <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Empreendedora iniciante
                    </Typography>
                    <Typography variant="h4" component="div">
                    R$ 1.500
                    </Typography>
                </CardContent>
            </Card>   
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Empreendedora profissional
                    </Typography>
                    <Typography variant="h4" component="div">
                    R$ 5.500
                    </Typography>
                </CardContent>
            </Card>          
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Empreendedora expert
                    </Typography>
                    <Typography variant="h4" component="div">
                    R$ 20.000
                    </Typography>
                </CardContent>
            </Card>
                </div>  
               <div className="headline">
                    <h1>
                        Crédito e capacitação para empreender no mercado de turismo.  
                    </h1>                     
                </div> 

                <div className="cardsconteiner">
                    <div className="cards">
                        <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="../public/images/iniciante.png"
                            alt="mulheres pegando peixes"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Comece a empreender
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Iniciante
                            </Typography>
                            <Typography variant="body1">
                            X % das pessoas que viajam são mulheres. Crie melhores experiências de acordo com sua região.
                            </Typography>
                        </CardContent>
                        </Card>
                    </div>                 
                    <div className="cards">
                        <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="../public/images/profi.png"
                            alt="mulher feliz sorrindo"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Melhore seu negócio
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Profissional
                            </Typography>
                            <Typography variant="body1">
                                Expanda seu negócio e encontre novas formas de ganhar dinheiro 
                            </Typography>
                        </CardContent>
                        </Card>
                    </div>                  
                    <div className="cards">
                        <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="../public/images/climb.png"
                            alt="mulheres chegando ao topo da montonha ao entardecer"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Sonhe alto
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Expert 
                            </Typography>
                            <Typography variant="body1">
                                De mulher para mulher. O mercado do turismo está recheado de oportunidades.
                            </Typography>
                        </CardContent>
                        </Card>
                    </div>                      
                </div>
 
            </div>

        </section>
    )
}