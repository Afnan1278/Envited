import { Button, Grid, Icon, LinearProgress, Paper } from '@mui/material';
import React,{useState,useEffect} from 'react';
import img from '../assets/images/landing.png'
import img2 from '../assets/images/iconParty.png'
import { useHistory } from 'react-router-dom'





const EventPage:React.FC = (props:any)=>{
    const history = useHistory()  


    useEffect(()=>{
        let mounted  = true
        if (mounted){
                       
        }

        return ()=>{ mounted=false}//cleanup funtion
    },[]);

    

    return (
        <>
        <div className="page-content">
            <Grid  container spacing={3}direction="row-reverse">
                <Grid item xs={12} md={6}>
                    <Grid container textAlign="center" justifyContent="center" alignItems="center">
                        <Grid  item xs={12} >
                        
                        <Paper elevation={1} className="section mt-10 card-event">
                            <h2 style={{ textAlign: 'center', paddingBottom: '10px' }}>
                                Congratulations you event has been scheduled at</h2>
                                <div className='bounce'>
                                <h2 style={{ textAlign: 'center', paddingBottom: '10px' }}>
                                12/02/2022
                                </h2>
                                </div>
                                
                        </Paper>
                        </Grid>
                        
                    </Grid>
                    
                </Grid>
                <Grid item xs={12} md={6}>
                <Grid container textAlign='center' justifyContent="center" alignItems="center">
                    <img src={img} alt="" width={300} />
                    </Grid>
                    <Grid  container textAlign='center' justifyContent="center" alignItems="center">
                        <Button sx={{textTransform: "none"}} variant="contained" onClick={() => history.push('/')}>
                            <Icon>
                                <img src={img2} alt="" />
                            </Icon>
                            {`Go Home`}
                        </Button>
                    </Grid>
                </Grid>

            </Grid>
        </div>
        </>
    )
}


export default EventPage;