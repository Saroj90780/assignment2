import { Box, Typography } from "@mui/material"
import { useState, useEffect } from 'react';
import smallimg1 from './images/Frame 36.png'
import smallimg2 from './images/Frame 35.png'
import smallimg3 from './images/still-life-graphic-design-studio 1.png'
const Footer=()=>{
    const isSmallScreen = useIsSmallScreen();
    return(
        <Box sx={{width:"100%",marginTop:"60px",marginBottom:"60px",height:"500px",display:"flex",justifyContent:'center',alignItems:"center"}}>
            <Box sx={{width:'85%',height:{md:"180px",xs:"110px"},backgroundColor:"rgba(168, 127, 243, 1)",borderRadius:"15px",position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img src={smallimg1} alt="" style={{position:"absolute",bottom:"0px",left:"0px"}} width={isSmallScreen ? "60px":"220px"}/>
                <img src={smallimg2} alt=""  style={{position:"absolute",top:"0px",right:"0px"}} width={isSmallScreen ? "60px":"220px"}/>
                <img src={smallimg3} alt=""  style={{position:"absolute",top:"-160px",left:"60px"}} width={isSmallScreen ? "140px":"220px"}/>
                <Typography sx={{width:{md:"35%",xs:"55%"},fontFamily:"Poppins2",fontSize:{md:"15px",xs:"9px"},color:"white"}}>Thanks for visit my website
If you have any questions you can write me to any of my social networks, I am sure I will answer you.</Typography>
            </Box>
        </Box>
    )
}
export default Footer


const useIsSmallScreen = (breakpoint = 900) => {
    const [isSmall, setIsSmall] = useState(window.innerWidth <= breakpoint);

    useEffect(() => {
        const handleResize = () => setIsSmall(window.innerWidth <= breakpoint);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return isSmall;
};
