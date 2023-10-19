"use client" ; // This is a client component
import React,{use, useState} from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import { motion } from "framer-motion"
import DescriptionIcon from '@mui/icons-material/Description';
import ModalProject from './ModalProject';
import { useRouter } from 'next/navigation';

export const Headerss = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    const router=useRouter()

  return (
    <Box sx={{height:'30%'}} >
    <Typography   variant="h4" gutterBottom >Portfolio</Typography> 
    <Box sx={{mt:5}} >
    <motion.nav initial={{ opacity:0 ,x:-10 ,y:50}} animate={{ opacity:2 , x:0 , y: 0  }} transition={{delay:0.2 , type:'spring' ,stiffness:400 }} aria-label="main mailbox folders" >
      <List sx={{display:'flex',justifyContent:'space-around'}} >
        <ListItem disablePadding sx={{width:{xs:'20%',sm:'10%'},fontStyle:'italic'}} >
          <ListItemButton onClick={() => router.push('/')} >
            <ListItemIcon>
              <HomeIcon sx={{ fontWeight:900 }} />
            </ListItemIcon>
            <ListItemText  primary="Home" />
          </ListItemButton>
        </ListItem>
      
        <ListItem disablePadding sx={{width:{xs:'20%',sm:'10%'},fontStyle:'italic'}} >
          <ListItemButton onClick={handleOpen} >
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText    primary="About me" />
          </ListItemButton>
        </ListItem>
        </List>
        </motion.nav>
    </Box>
    <ModalProject open={open} setOpen={setOpen} />
   </Box>
  )
}
