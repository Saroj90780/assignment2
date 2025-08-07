import { useState, useEffect } from 'react';
import { Box, Button} from "@mui/material"
import img1 from './images/still-life-graphic-design-studio 1.png'
import img2 from './images/Frame 1.png'
import logo1 from './images/Instagram.svg'
import logo2 from './images/Figma.svg'
import logo3 from './images/LinkedIn.svg'
import logo4 from './images/Twitter.svg'
import logo5 from './images/Telegram.svg'
import logo6 from './images/Medium.svg'
import logo7 from './images/arrow-down.png'
import logo8 from './images/Frame 5.png'


const Toppart = () => {
    const isSmallScreen = useIsSmallScreen();
    return (<>
        {/* <Box sx={{
            width: "100%",
            display: "flex",            
            justifyContent:'center',
            backgroundColor:"red",
            height:"500px",
        }}>
            <Box sx={{ height: "100%",width:'50%',backgroundColor:'blue',top:"0px" }}>
                <Typography sx={{ fontFamily: "Poppins1", fontSize: "140px", color: "white" ,marginTop:"-45px"}}>PRODUCT</Typography>
                <Typography sx={{ fontFamily: "Poppins1", fontSize: "140px", color: "white", marginTop: "-110px" }}>DESIGNER</Typography>
                <Typography sx={{
                    fontFamily: "Poppins1", fontSize: "80px", background: 'linear-gradient(to right,rgba(250, 112, 154, 1), rgba(254, 225, 64, 1))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginTop: "-60px"
                }}>CRISTIAN MUN0Z</Typography>
                <Box>
                    <Box sx={{ display: "flex", gap: "35px", justifyContent: "center" ,marginTop:"10px"}}>
                        <img src={logo1} alt="" />
                        <img src={logo2} alt="" />
                        <img src={logo3} alt="" />
                        <img src={logo4} alt="" />
                        <img src={logo5} alt="" />
                        <img src={logo6} alt="" />
                    </Box>
                    <Button sx={{height:"52px",marginTop:'50px',color:'white',fontFamily:'Poppins2',fontSize:"13px",border:'none',backgroundColor:"rgba(41, 41, 41, 1)",width:"80%"}}>Download Curriculum Vitae <img src={logo7} alt="" /></Button>
                </Box>
            </Box>
            <Box sx={{}}>
            <img src={img1} alt="" width="75%" />
            </Box>
        </Box> */}
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: {
                    xs: "column", // mobile: stack vertically
                    md: "row",    // medium screens and above: side-by-side
                },
                justifyContent: "center",
                alignItems: "center",
                height: { xs: "auto", md: "500px" }, // adapt height
                px: 10, // horizontal padding
                my: 10,
                gap: "10px"// vertical padding
            }}
        >
            {/* LEFT SIDE */}
            <Box
                sx={{
                    width: {
                        xs: "100%",   // full width on small screens   // half width on medium+ screens
                    },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                }}>
                <Box
                    sx={{
                        width: {
                            xs: "100%",
                            md: "90%",
                        },
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <img src={img2} alt="" style={{ width: "100%", maxWidth: "800px" }} />
                </Box>
                {/* LOGOS */}
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        justifyContent: "center",
                        mt: 2,
                    }}
                >
                    <img src={logo1} alt="" width={40} />
                    <img src={logo2} alt="" width={40} />
                    <img src={logo3} alt="" width={40} />
                    <img src={logo4} alt="" width={40} />
                    <img src={logo5} alt="" width={40} />
                    <img src={logo6} alt="" width={40} />
                </Box>

                <Button
                    sx={{
                        mt: 4,
                        color: "white",
                        fontFamily: "Poppins2",
                        fontSize: "13px",
                        backgroundColor: "rgba(41, 41, 41, 1)",
                        width: {md:"80%",xs:"98%"},
                        height: "52px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 1,
                    }}
                >
                    Download Curriculum Vitae
                    <img src={logo7} alt="" width={16} />
                </Button>
            </Box>

            {/* RIGHT SIDE IMAGE */}
            {isSmallScreen ? (<></>): (<Box
                sx={{
                    width: {
                        xs: "100%",
                        md: "50%",
                    },
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <img src={img1} alt="" style={{ width: "100%", maxWidth: "460px" }} />
            </Box>)}
        </Box>
        <Box sx={{
            width: '85%',
            margin:{md:"70px auto",xs:"40px auto"},
            height: {md:'373px',xs:"260px"},
            border: "1px solid rgba(100, 100, 100, 1)",
            borderRadius: "20px",
            backgroundColor: "rgba(11, 11, 11, 1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <img src={logo8} alt="" width="95%" />
        </Box>

    </>)
}
export default Toppart


const useIsSmallScreen = (breakpoint = 900) => {
    const [isSmall, setIsSmall] = useState(window.innerWidth <= breakpoint);

    useEffect(() => {
        const handleResize = () => setIsSmall(window.innerWidth <= breakpoint);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return isSmall;
};