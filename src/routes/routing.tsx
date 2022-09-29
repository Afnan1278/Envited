import {lazy } from 'react';



const HomePage = lazy(()=> import('../pages/index')); 
const CreatePage = lazy(()=> import('../pages/Create')); 
const EventPage = lazy(()=> import('../pages/Event')); 







const routing:any = [
    {path:'/', component:HomePage, exact:true},
    {path:'/create', component:CreatePage, exact:true},
    {path:'/event', component:EventPage, exact:true},




   
]



export default routing;
