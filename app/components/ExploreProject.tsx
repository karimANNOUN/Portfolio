
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';

export default function ExploreProject({open,setOpen,proj}:any) {


    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height:800,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      const handleClose = () => setOpen(false);

  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" sx={{fontWeight:600}} variant="h4" component="h2">
        About
      </Typography>
    
      <Box sx={{width:'100%',height:'70%',display:'flex',justifyContent:'center',mt:6}} >
        <Box sx={{width:'50%',height:'100%'}} >
        <Box  sx={{width:'80%',bgcolor:'#eeeeee',height:60,mb:2,display:'flex',alignItems:'center'}} >
        <Typography variant="subtitle2" gutterBottom sx={{ml:2}}  > {proj.name} </Typography> 
        </Box>
        <Divider sx={{width:"80%"  , mb:2 }} />
             
        <Typography variant="subtitle2" gutterBottom sx={{mb:2}}  > 
        As a full stack developer ,I bring a unique blend of technical skills and
        creativity to the table with a good experience in programming
        skills,I have a solid understanding of the entire web developpement
        process,from design to deployment.I am able to create visually
        appealing and user-friendly websites and applications,also
        seamlessly integrate and deploy these projects,ensuring they run
smoothly and efficiently.I am a problem solver and always looking
for ways to improve and automate processes with my skills and
experience,I am confident in my ability to deliver effective solutions
and drive positive results for any organization
         </Typography> 
    
         <Divider sx={{width:"80%"  , mb:2 }} />
      
         <Typography sx={{fontWeight:700,mb:2}} variant="h6" gutterBottom   > 
         skills
         </Typography>

         <Typography sx={{}} variant="subtitle2" gutterBottom   > 
          {proj.skills}
         </Typography>

        </Box>
        <Box sx={{width:'50%',height:'100%'}} >
           <img src={proj.image} alt='kimou' style={{width:'80%',height:'100%',marginLeft:3}} />
        </Box>

      </Box>
   
      
    </Box>
  </Modal>
  )
}
