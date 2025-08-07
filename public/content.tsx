import { Box, Typography } from "@mui/material"
import img from "./images/unsplash_wHJ5L9KGTl4.png"
import Sheild from './images/Shield 1.svg'

const Content = () => {
    return (
        <Box sx={{
            width: '100%',
            height:"600px",
            overflowX: "hidden",
            backgroundImage: `url(${img})` ,
            backgroundSize:"fit",
            backgroundPosition: 'bottom',
            scrollBehavior: "smooth",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            gap:"30px"        }}>
                <Typography sx={{fontFamily:"Poppins3",color:"white",fontSize:"35px"}}>Kaleb Lechtenberg</Typography>
                <Typography sx={{
                    fontFamily:"Poppins2",color:"white",fontSize:"27px",width:"60%"
                }}>
                    "Working with this freelancer has been great. His attention to detail is unparalleled and finished all work ahead of schedule. Will gladly send more work and I do not hesitate to recommend him to you on your project also."
                </Typography>
                <img src={Sheild } alt="" />
        </Box>
    )
}
export default Content