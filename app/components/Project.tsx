"use client" ; // This is a client component
import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ExploreProject from './ExploreProject';
import { useRouter } from 'next/navigation';


interface project {
    id:number,
    name:string,
    date:string,
    url:string,
    skills:string,
    image:string
}




export default function Project() {

    const allProject : project[] = [
        {id:1,name:'Instagrame Clone',date:'Augest 2023',url:'https://instaprojectnew.netlify.app',skills:'Reactjs | Expressjs | Prisma | Postgres | Mui ' , image:'https://i.pinimg.com/564x/03/65/0b/03650bc016d8e31fba41cf900ae234dc.jpg' },
        {id:2,name:'Market Place',date:'september 2023',url:'https://marketplacekarim.netlify.app',skills:'Reactjs | Expressjs | Type ORM | Mysql | Typescript | Mui ',image:'https://i.pinimg.com/564x/19/e5/73/19e573c3739fab2dc5ad647af49614e7.jpg'},
        {id:3,name:'Film Store',date:'Mars 2023',url:'https://my-filmy-ann.netlify.app',skills:'Reactjs | Tailwind Css ',image:'https://i.pinimg.com/564x/d9/e5/39/d9e5397d7d084c4009889dfcdf0b5758.jpg'},
        {id:4,name:'E-commerce Books',date:'Augest 2023',url:'https://ebooksjs.netlify.app',skills:'Reactjs | Tailwind Css | Firebase ',image:'https://i.pinimg.com/564x/14/b6/70/14b670f183eb1a0ea98d5379f36edd86.jpg'},
        {id:5,name:'Create Comments',date:'May 2023',url:'https://write-comment.netlify.app',skills:'Reactjs | Firebase | Tailwind Css ',image:'https://i.pinimg.com/564x/d4/b8/c1/d4b8c16b182723a4c6b83e73e7f80a6b.jpg'},
        {id:6,name:'Chat-App',date:'april 2023',url:'https://chat-engine-app23.netlify.app',skills:'Reactjs | Tailwind Css | Firebase ',image:'https://i.pinimg.com/736x/1b/4d/90/1b4d905d8344d132e13df9c35b752263.jpg'},
        {id:7,name:'Shopping Card',date:'May 2023',url:'https://shopping-card-redux.netlify.app',skills:'Reactjs | Tailwind Css ',image:'https://i.pinimg.com/564x/20/1e/58/201e581998e82c754511c2b1dc09f402.jpg'},
        {id:8,name:'Campground',date:'Mars 2023',url:'https://yelpcamp-dy9a.onrender.com',skills:'HTML | CSS | javascript | Expressjs | Mongoose | MongoDb | Bootstrap ',image:'https://i.pinimg.com/736x/4e/68/e5/4e68e53c17283d060f1a30b2a58ed739.jpg'},
        {id:9,name:'Fitness App',date:'November 2023',url:'https://fitnessapp-theta.vercel.app/',skills:'NextJs | Material Ui | Express js ',image:'/images/fitnes.jpg'}
    ]

    const router = useRouter()

    const [open, setOpen] = useState(false);
  


  return (
    <Box  >
        <Divider sx={{width:"85%" , mx:'auto' , mb:3 }} />
        <Typography variant="h4" gutterBottom sx={{textDecorationLine:'underline',textAlign:'center',mb:3}} > My Project  </Typography>
        <Box sx={{display:'flex',justifyContent:'center' , flexWrap:'wrap'}} >
       {allProject.map( (proj : project ) =>  (<Paper elevation={3} key={proj.id} sx={{width:370 , ml:2 , mb: 2 ,height:390 }} >
          <img onClick={() => router.push(`/${proj.id}`)}  src={proj.image} style={{width:'100%',height:"60%"}}  />
          <Typography variant="h6" gutterBottom sx={{fontWeight:400,mt:1 ,ml:1 }} > {proj.name} </Typography>
          <Typography variant="caption" display="block" gutterBottom sx={{mt:1 ,ml:1 }} > {proj.date} </Typography>
          <Button onClick={() => router.push(`/${proj.id}`)} variant="contained" color='primary' sx={{mt:1,ml:1}} >
        Explore
      </Button>
      <ExploreProject open={open} setOpen={setOpen} proj={proj}  />
        </Paper>
        
        ))}
        </Box>
        <Divider sx={{width:"85%" , mx:'auto' , my:3 }} />
        
    </Box>
  )
}
