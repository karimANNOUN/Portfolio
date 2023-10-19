import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



export default function Experience() {
  return (
    <Box  >
          <Typography sx={{fontWeight:400,ml:2}} variant="h5" gutterBottom>
        Experience
      </Typography>
 <Box sx={{borderLeftColor:'black',borderLeftStyle:'solid',paddingLeft:2 , width:'70%',ml:2 }} >
    <Typography variant="caption" display="block" gutterBottom sx={{fontWeight:600}} >
    Freelance | Full Stack Developer 
    </Typography>
      <Typography sx={{fontWeight:20}} variant="caption" display="block" gutterBottom >
      May 2023 - Present <br/>
      as a web developer i designed web pages to enhance branding and navigation. Managed databases with strong SQL and NoSQL Skills, Created custom websites by harnessing HTML,CSS,React,and
      JavaScript skills with Strong skills in  Git·Bulma·Tailwind CSS·Mui·Reduxjs·react js·Cascading Style Sheets(CSS)·HTML5·Java and Typescript , nextjs.<br/>
      Led the development of a responsive and user-friendly e-commerce website using React, resulting in a 30% increase in online sales.
    </Typography>
    </Box>

    <Box sx={{borderLeftColor:'black',borderLeftStyle:'solid',paddingLeft:2 , width:'70%',ml:2 }} >
    <Typography variant="caption" display="block" gutterBottom sx={{fontWeight:600}} >
    Freelance | Back-end Developer 
    </Typography>
      <Typography sx={{fontWeight:20}} variant="caption" display="block" gutterBottom >
      Juin 2023 - Present <br/>
      Experienced web developer with a strong background in  back-end technologies. Skilled in express js , Postgres , Mysql , prisma , typeORM , Node.js, and more.<br/>
      Developed and maintained client websites, ensuring optimal performance and cross-browser compatibility.<br/>
      Worked closely with clients to gather requirements and provide technical solutions.
    </Typography>
    </Box>

    </Box>
  )
}
