import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link'
import Avatar from '@mui/material/Avatar';



interface socialmedia {
    id:number,
    name:string,
    image:any,
    link:string
}

export default function BoxInfo() {


    const social : socialmedia[]  =[{id:1,name:"LinkedIn",image:LinkedInIcon,link:'https://www.linkedin.com/in/karim-announ-b211691b7/'},
    {id:2,name:"Github",image:GitHubIcon,link:'https://github.com/karimANNOUN'},
    {id:3,name:"Facebook",image:FacebookIcon,link:'https://www.facebook.com/karim.laclasse.75/'},
    {id:4,name:"Instagrame",image:InstagramIcon,link:'https://www.instagram.com/karim_announ/'}]


  return (
   <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'row'}}} >
    <Box sx={{width:{xs:'100%',sm:'40%'},ml:2}} >
   <Typography sx={{my:4}}  variant="h4" gutterBottom >
   Hey there! 👋🏻 <br/>
   I'm Karim Announ.
   </Typography>

   <Typography sx={{fontWeight: 10 ,mb:2}}  variant="body2" gutterBottom >
   karim.announ@g.enp.edu.dz
   </Typography>

   <Typography sx={{fontWeight:800 }}  variant="h6" gutterBottom >
   Full Stack Developer
   </Typography>

   <Box sx={{width:'100%',mb:3}} >
    <Typography sx={{borderLeftColor:'black',borderLeftStyle:'solid',paddingLeft:2,fontWeight:20}} variant="caption" display="block" gutterBottom >
    As a Full stack Developer and Mining Electrotechnical Engineer , I bring a unique blend of technical skills and creativity to the table. With a good experience in mining and advanced programming skills, I have a solid understanding of the entire web development process, from design to deployment.
    </Typography>
   </Box>
   <Box sx={{display:'flex',flexDirection:'column'}} >
   { social.map( (soc:socialmedia )=> <Box key={soc.id} sx={{width:'100%',bgcolor:'#eeeeee',height:50,mb:2,display:'flex',alignItems:'center'}} >
    <IconButton >
    <Link style={{color:'black',textDecorationSkip:'none'}} href={`${soc.link}`}>
     <soc.image  />
     </Link>
     
     </IconButton> 
     <Typography variant="subtitle2" gutterBottom sx={{ml:2}}  > <Link style={{color:'black',textDecoration:'none'}} href={`${soc.link}`}>{soc.name}</Link> </Typography>
   </Box>)}

   </Box>

   </Box>
   <Box sx={{width:{xs:'100%',sm:'60%'},display:'flex',justifyContent:'center',alignItems:'center'}} >
   <Avatar
        alt="heykimou"
        src="/images/photo.png"
        sx={{ width: {xs:200,sm:'80%',md:'60%'}, height: {xs:200,sm:'90%'} }}
      />
   </Box>
   
   </Box>
  )
}
