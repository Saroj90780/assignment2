import { Box, Typography } from "@mui/material"
import { useState, useEffect } from 'react';
import img from "./images/unsplash_wHJ5L9KGTl4.png"
import Sheild from './images/Shield 1.svg'

const Content = () => {
        const isSmallScreen = useIsSmallScreen();

    return (
        <Box sx={{
            width: '100%',
            height:`${isSmallScreen ? "300px":"600px"}`,
            overflowX: "hidden",
            backgroundImage: `url(${img})` ,
            backgroundSize:"fit",
            backgroundPosition: 'bottom',
            scrollBehavior: "smooth",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            gap:`${isSmallScreen ? "10px":"30px"}`      }}>
                <Typography sx={{fontFamily:"Poppins3",color:"white",fontSize:`${isSmallScreen ? "20px":"35px"}`}}>Kaleb Lechtenberg</Typography>
                <Typography sx={{
                    fontFamily:"Poppins2",color:"white",fontSize:`${isSmallScreen ? "13px":"27px"}`,width:"60%"
                }}>
                    "Working with this freelancer has been great. His attention to detail is unparalleled and finished all work ahead of schedule. Will gladly send more work and I do not hesitate to recommend him to you on your project also."
                </Typography>
                <img src={Sheild } alt="" width={isSmallScreen ? "40px":"80px"} />
        </Box>
    )
}
export default Content


const useIsSmallScreen = (breakpoint = 900) => {
    const [isSmall, setIsSmall] = useState(window.innerWidth <= breakpoint);

    useEffect(() => {
        const handleResize = () => setIsSmall(window.innerWidth <= breakpoint);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return isSmall;
};

