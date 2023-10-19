"use client" ; // This is a client component

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

export default function NotFound() {

    const router = useRouter()

  return (
    <Box sx={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}} >
        <Box sx={{width:"40%",textAlign:'center'}} >
            <Typography variant="h2" gutterBottom >
                Oops ! 
            </Typography>
            <Typography sx={{fontWeight:600}} variant="h6" gutterBottom >
                404 - PAGE NOT FOUND 
            </Typography>
            <Typography sx={{fontWeight:300}} variant="body2" gutterBottom >
               The page you are looking for might has been removed <br/>
               please go back to home page
            </Typography>

            <Button onClick={() => router.push('/')} sx={{mt:2}} variant="contained">Home</Button>

        </Box>
    </Box>
  )
}
