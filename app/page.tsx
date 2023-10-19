
import { Box } from '@mui/material'
import BoxInfo from './components/BoxInfo';
import Project from './components/Project';
import Experience from './components/Experience';
import  {Headerss}  from './components/Headerss';

export default function Home() {


  return (
    <Box sx={{height:'100vh',mt:3}} >
     <Headerss/>
     <BoxInfo/>
     <Project/>
     <Experience/>
    </Box>
  )
}
