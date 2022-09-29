import { Button, Grid, Icon, LinearProgress, Paper } from '@mui/material';
import React,{useState,useEffect} from 'react';
import img from '../assets/images/landing.png'
import img2 from '../assets/images/iconParty.png'
import { useHistory } from 'react-router-dom'





const CreatePage:React.FC = ()=>{
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
                        <Grid item xs={12} className='landing-heading'>
                               <div >Imagine if</div> 
                               <div className='heading-part'>Sanpchat</div>
                               <div> had events</div>
                        </Grid>
                        <Grid  item  xs={12}className='sub-heading'>
                            <div>
                            Easily host and share events with your friends
                            </div>
                            <div>
                            across any social media.
                            </div>
                            
                        </Grid>
                    </Grid>
                    
                </Grid>
                <Grid item xs={12} md={6}>
                <Grid container textAlign='center' justifyContent="center" alignItems="center">
                    <img src={img} alt="" width={300} />
                    </Grid>
                    <Grid  container textAlign='center' justifyContent="center" alignItems="center">
                        <Button sx={{textTransform: "none"}} variant="contained" onClick={() => history.push('/event')}>
                            <Icon>
                                <img src={img2} alt="" />
                            </Icon>
                            {`Create my event`}
                        </Button>
                    </Grid>
                </Grid>

            </Grid>
        </div>
        </>
    )
}


export default CreatePage;