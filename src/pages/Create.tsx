import { Button, Grid, Icon, TextField} from '@mui/material';
import React,{useState,useEffect} from 'react';
import cake from '../assets/images/cake.jpeg'
import picker from '../assets/images/picker.jpeg'
import { useHistory } from 'react-router-dom'
const Create = ()=>{
    const history = useHistory() 
    const [date,setDate] = useState('set date')
    const [time,setTime] = useState('set time')
    const [dateTime,setDateTime] = useState('set date time')
    useEffect(()=>{
        let mounted  = true
        if (mounted){
                       
        }

        return ()=>{ mounted=false}//cleanup funtion
    },[]);

    

    return (
        <>
        
            <Grid  container direction="row-reverse">
                <Grid item container  xs ={12}>
                  <img src={cake}/>
                </Grid>
                
                <Grid container justify-content='left' align-items='left' direction="column">
                    <Grid item md={4}>
                   
                    <div className='create-heading'>
                    Birthday Bash 
                    </div>
                    </Grid>
                    <Grid item md={4}>
                    
                      <div className='secondary-text'>
                          Hosted by 
                      
                      </div>
                    </Grid>

                    <Grid item container direction ='row' >
                    
                  
                    
                    <Grid item container direction ="column">
                      <Grid item md={4}>
                      <div className='create-heading'>
                        {date}
                        
                      </div>
                      </Grid>
                      <Grid item md={4}>
                        <div className='secondary-text'>
                          {time}
                        </div>
                      </Grid>
                    </Grid>
                    </Grid>

                  <Grid item  md = {12}>
                    
                    </Grid>  
                </Grid>
               
                <Grid item xs={12} md={6}>
                
                </Grid>
                <Grid  container textAlign='center' justifyContent="center" alignItems="center">
                <Button sx={{textTransform: "none"}} variant="contained" onClick={() => history.push('/event')}>
                            
                            {`Go Next`}
                        </Button>
                        </Grid>
                </Grid> 
        </>
    )
}
export default Create 