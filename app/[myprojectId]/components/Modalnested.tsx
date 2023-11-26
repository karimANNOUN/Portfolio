'use client'
import { useParams } from 'next/navigation'
import { Container, Typography, Card, CardContent, CardMedia, Grid ,Box } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface project {
  id:number,
  name:string,
  date:string,
  url:string,
  skills:string,
  image:string,
  description:string
}


export default function Modalnested() {
const params :any  =useParams()

const allProject : project[] = [
  {id:1,name:'Instagrame Clone',date:'Augest 2023',url:'https://instaprojectnew.netlify.app',description:'Our web development project, [Instagram Clone], is designed to create a responsive and user-friendly website that [simple instagram service clone ].',skills:'Reactjs | Expressjs | Prisma | Postgres | Mui ' , image:'https://i.pinimg.com/564x/03/65/0b/03650bc016d8e31fba41cf900ae234dc.jpg' },
  {id:2,name:'Market Place',date:'september 2023',url:'https://marketplacekarim.netlify.app',description:'Our web development project, [Market Place], is designed to create a responsive and user-friendly website that [simple market for buy our product ].',skills:'Reactjs | Expressjs | Type ORM | Mysql | Typescript | Mui ',image:'https://i.pinimg.com/564x/19/e5/73/19e573c3739fab2dc5ad647af49614e7.jpg'},
  {id:3,name:'Film Store',date:'Mars 2023',url:'https://my-filmy-ann.netlify.app',description:"Our web development project, [Film Store], is designed to create a responsive and user-friendly website that [To display a list of films i'm using IMDB server  ]",skills:'Reactjs | Tailwind Css ',image:'https://i.pinimg.com/564x/d9/e5/39/d9e5397d7d084c4009889dfcdf0b5758.jpg'},
  {id:4,name:'E-commerce Books',date:'Augest 2023',url:'https://ebooksjs.netlify.app',description:' Our web development project, [E-Commerce Books], is designed to create a responsive and user-friendly website that [To display a list of books for buying  ].',skills:'Reactjs | Tailwind Css | Firebase ',image:'https://i.pinimg.com/564x/14/b6/70/14b670f183eb1a0ea98d5379f36edd86.jpg'},
  {id:5,name:'Create Comments',date:'May 2023',url:'https://write-comment.netlify.app',description:' Our web development project, [Write Comments], is designed to create a responsive and user-friendly website that [to testing firebase and other skills   ].',skills:'Reactjs | Firebase | Tailwind Css ',image:'https://i.pinimg.com/564x/d4/b8/c1/d4b8c16b182723a4c6b83e73e7f80a6b.jpg'},
  {id:6,name:'Chat-App',date:'april 2023',url:'https://chat-engine-app23.netlify.app',description:'Our web development project, [Chat-app], is designed to create a responsive and user-friendly website that [simple website with realtime option  ].',skills:'Reactjs | Tailwind Css | Firebase ',image:'https://i.pinimg.com/736x/1b/4d/90/1b4d905d8344d132e13df9c35b752263.jpg'},
  {id:7,name:'Shopping Card',date:'May 2023',url:'https://shopping-card-redux.netlify.app',description:'Our web development project, [Shopping-Cart], is designed to create a responsive and user-friendly website that [simple website for shopping our product   ].',skills:'Reactjs | Tailwind Css ',image:'https://i.pinimg.com/564x/20/1e/58/201e581998e82c754511c2b1dc09f402.jpg'},
  {id:8,name:'Campground',date:'Mars 2023',url:'https://yelpcamp-dy9a.onrender.com',description:"Our web development project, [Campground], is designed to create a responsive and user-friendly website that [a backend web site i'm using express js  this web site showing other camps places for camping and simplify for user to find her   ]",skills:'HTML | CSS | javascript | Expressjs | Mongoose | MongoDb | Bootstrap ',image:'https://i.pinimg.com/736x/4e/68/e5/4e68e53c17283d060f1a30b2a58ed739.jpg'},
  {id:9,name:'Fitness App',date:'November 2023',url:'https://fitnessapp-theta.vercel.app/',description:"Our web development project, [Fitness App], is designed to create a responsive and user-friendly website that [a backend web site i'm using express js  this web site showing other camps places for camping and simplify for user to find her   ]",skills:'NextJs | Material Ui | Express js ',image:'/images/fitnes.jpg'}
]

const router=useRouter()

const project= allProject[params.myprojectId - 1 ]

//console.log(project)

  return (
    <Box sx={{height:'100vh',display:'flex',alignItems:'center'}} >
    <Container maxWidth="md">
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <CardMedia
            component="img"
            alt="Product Image"
            height="100%"
            image={ !project ? "" : project.image}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardContent>
            <Typography variant="h4" component="div">
              {project.name}
            </Typography>
            <Typography sx={{my:2}} variant="body2" color="textSecondary">
              {project.date}
            </Typography>
            <Typography  variant="h6" color="textPrimary">
              Skills: {project.skills}
            </Typography>
            <Typography sx={{fontWeight:600,my:3}} variant="body2" color="textSecondary">
              Link of project : <Link href={project.url} >{project.url}</Link>
            </Typography>
            <Typography  variant="body2" color="textSecondary">
              <b>Description:</b> {project.description}
            </Typography>

            <Button sx={{mt:2}} onClick={() => router.push('/')} variant="contained" endIcon={<SendIcon />}>
             Go To Home
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  </Container>
  </Box>
  )
}
