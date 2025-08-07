import { Box, Typography } from "@mui/material"
import smallimg1 from './images/Frame 36.png'
import smallimg2 from './images/Frame 35.png'
import smallimg3 from './images/still-life-graphic-design-studio 1.png'
const Footer=()=>{
    return(
        <Box sx={{width:"100%",marginTop:"60px",marginBottom:"60px",height:"500px",display:"flex",justifyContent:'center',alignItems:"center"}}>
            <Box sx={{width:'85%',height:"180px",backgroundColor:"rgba(168, 127, 243, 1)",borderRadius:"15px",position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img src={smallimg1} alt="" style={{position:"absolute",bottom:"0px",left:"0px"}}/>
                <img src={smallimg2} alt=""  style={{position:"absolute",top:"0px",right:"0px"}}/>
                <img src={smallimg3} alt=""  style={{position:"absolute",top:"-170px",left:"80px",width:'250px'}}/>
                <Typography sx={{width:"50%",fontFamily:"Poppins2",fontSize:"15px",color:"white"}}>Thanks for visit my website
If you have any questions you can write me to any of my social networks, I am sure I will answer you.</Typography>
            </Box>
        </Box>
    )
}
export default Footer