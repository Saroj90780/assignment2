import { useState, useEffect } from 'react';
import {Box, Button, Typography} from '@mui/material'
import logo from './images/Logo (4).png'
const navbar = () => {

    const isSmallScreen = useIsSmallScreen();
    return (
        <Box sx={{width:'100%'}}>
            {isSmallScreen ? <SmallView /> : <LargeView />}
        </Box>
    )
}
export default navbar


const SmallView =()=>{
    return(
        <>
        <Box sx={{height:"70px",display:"flex",paddingLeft:"22px",paddingRight:"22px",justifyContent:"space-between",alignItems:"center"}}>
            <Box>
                <img src={logo}/>
            </Box>
            
            <Box>
               saroj 
            </Box>
        </Box>
        </>
    )
}
const LargeView =()=>{
    return(
      <>
      <Box sx={{height:"120px", display:"flex",paddingLeft:"80px",paddingRight:"80px",justifyContent:"space-between",alignItems:"center"}}>
            <Box>
                <img src={logo}/>
            </Box>
            <Box sx={{
                display:"flex",
                gap:"30px"
            }}>
                <Typography sx={{fontFamily:"Poppins2",color:"white"}}>Home</Typography>
                <Typography sx={{fontFamily:"Poppins2",color:"white"}}>Portfolio</Typography>
                <Typography sx={{fontFamily:"Poppins2",color:"white"}}>Skills</Typography>
                <Typography sx={{fontFamily:"Poppins2",color:"white"}}>About Me</Typography>
            </Box>
            <Box>
                <Button sx={{backgroundColor:"rgba(146, 95, 240, 1)",width:"141px",height:"40px",border:"none",color:"white"}}>
                    Contact Me
                </Button>
            </Box>
        </Box>
      </>  
    )
}


const useIsSmallScreen = (breakpoint = 700) => {
    const [isSmall, setIsSmall] = useState(window.innerWidth <= breakpoint);

    useEffect(() => {
        const handleResize = () => setIsSmall(window.innerWidth <= breakpoint);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return isSmall;
};

