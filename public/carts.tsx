import { Box, Typography, Button } from "@mui/material"
import img from './images/Frame 7 (1).png'
import { useState, useEffect } from 'react';

const Carts = () => {
    const isTablet = useIsScreenLessThan(900);
    const isPhone = useIsScreenLessThan(500);

    return (
        <Box sx={{
            width: '100%',
            display: "flex",
            justifyContent: 'center',
            alignItems: "center",
            flexDirection: "column",
            gap: "20px"

        }}>
            {isTablet ? (isPhone ? <Cartitems quantity={4} cartwidth={"95%"} /> : <Cartitems quantity={4} cartwidth={"48%"} />) : <Cartitems quantity={8} cartwidth={"23%"} />}
            {/* <Cartitems quantity={8} cartwidth={"23%"}/> */}
        </Box>
    )

}
export default Carts

interface Cartitemsprop {
  quantity: number;
  cartwidth:string;
}

const Cartitems = ({ quantity, cartwidth }:Cartitemsprop) => {
    return (<>
        <Typography sx={{ width: '88%', textAlign: 'start', fontFamily: "Poppins1", fontSize: '45px', color: "white" }}>PORTFOLIO</Typography>
        <Box sx={{ width: '88%', display: 'flex', flexWrap: 'wrap', gap: '22px', justifyContent: 'flex-start' }}>
            {[...Array(quantity)].map((_, index) => (
                <Box sx={{ height: "400px", width: cartwidth, border: "1px solid rgba(115, 115, 115, 1)", borderRadius: '10px', p: 3, display: "flex", gap: "20px", flexDirection: "column", justifyContent: "space-between" }}>
                    <img key={index} src={img} width="100%" />
                    <Typography sx={{ fontFamily: "Poppins1", fontSize: "20px", textAlign: "start", color: "white" }}>Chaintech Product</Typography>
                    <Box sx={{ display: "flex", gap: "13px" }}>
                        <Box sx={{ width: "90px", backgroundColor: "rgba(233, 223, 252, 1)", color: "rgba(120, 77, 199, 1)", borderRadius: "40px", height: "30px", fontFamily: "Poppins2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>UX Design</Box>
                        <Box sx={{ width: "90px", backgroundColor: "rgba(233, 223, 252, 1)", color: "rgba(120, 77, 199, 1)", borderRadius: "40px", height: "30px", fontFamily: "Poppins2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>Angular</Box>
                        <Box sx={{ width: "90px", backgroundColor: "rgba(233, 223, 252, 1)", color: "rgba(120, 77, 199, 1)", borderRadius: "40px", height: "30px", fontFamily: "Poppins2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>JavaScript</Box>
                    </Box>
                    <Button sx={{ textTransform: 'none', border: "none", backgroundColor: "rgba(41, 41, 41, 1)", color: "white", fontFamily: "Poppins2", fontSize: "11px", height: "50px" }}>
                        View Product Detail
                    </Button>
                </Box>

            ))}
        </Box>
    </>)
}

// const useIsSmallScreen = (breakpoint = 700) => {
//     const [isSmall, setIsSmall] = useState(window.innerWidth <= breakpoint);

//     useEffect(() => {
//         const handleResize = () => setIsSmall(window.innerWidth <= breakpoint);
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, [breakpoint]);

//     return isSmall;
// };


const useIsScreenLessThan = (width: number) => {
    const [isLessThan, setIsLessThan] = useState(window.innerWidth <= width);

    useEffect(() => {
        const handleResize = () => setIsLessThan(window.innerWidth <= width);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [width]);

    return isLessThan;
};

