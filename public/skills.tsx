import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react';
const Skills = () => {
    const isSmallScreen = useIsSmallScreen();
    return (
        <Box sx={{
            width: '100%',
            display: "flex",
            justifyContent: 'center',
            alignItems: "center",
            marginTop: "70px",
            marginBottom: "70px",
            flexDirection: "column",

        }}>
            <Typography sx={{ width: '87%', textAlign: 'start', fontFamily: "Poppins1", fontSize: '45px', color: "white" }}>SKILLS</Typography>
            <Box sx={{ width: '87%', display: 'flex', flexWrap: 'wrap', gap: '22px', justifyContent: 'flex-start'}}>
                {[...Array(4)].map((_, index) => (
                    <Box key={index} sx={{ height: {md:"270px",xs:"270px"}, width:`${isSmallScreen ? '98%' : '47%'}`, border: "1px solid rgba(115, 115, 115, 1)", borderRadius: '10px', p:{md:2,xs:1} , display: "flex", gap: "10px", justifyContent:"center",alignItems:'center',flexDirection:{md:"row",xs:"column"} }}>
                        {/* <img key={index} src={img} width="100%"/> */}

                        <GradientCircularProgress
                            value={88}
                        />
                        <Box sx={{width:"70%"}}>
                            <Typography sx={{ fontFamily: "Poppins1", fontSize: {md:"30px",xs:"20px"}, textAlign: "start", color: "white" }}>UX Design</Typography>
                            <Typography sx={{ fontFamily: "Poppins2", fontSize: {md:"10px",xs:"9px"}, textAlign: "start", color: "white" }}>UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.</Typography>
                        </Box>
                    </Box>

                ))}
            </Box>
        </Box>
    )
}
export default Skills


const useIsSmallScreen = (breakpoint = 900) => {
    const [isSmall, setIsSmall] = useState(window.innerWidth <= breakpoint);

    useEffect(() => {
        const handleResize = () => setIsSmall(window.innerWidth <= breakpoint);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return isSmall;
};



const GradientCircularProgress = ({ value }: { value: number }) => {

    const isSmallScreen = useIsSmallScreen();
    const h=isSmallScreen ? 130 : 165
    const w=isSmallScreen ? 130 : 165
    const radius = isSmallScreen ? 50 : 80;
    const stroke = isSmallScreen ? 15:25;
    const normalizedRadius = radius - stroke / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset =
        circumference - (value / 100) * circumference;


    return (
        <svg height={h} width={w}>
            <defs>
                <linearGradient id="gradStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(250,112,154,1)" />
                    <stop offset="100%" stopColor="rgba(254,225,64,1)" />
                </linearGradient>
            </defs>

            <circle
                stroke="transparent"
                fill="transparent"
                strokeWidth={stroke}
                r={normalizedRadius}
                cx="50%"
                cy="50%"
            />
            <circle
                stroke="url(#gradStroke)"
                fill="transparent"
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={circumference + " " + circumference}
                strokeDashoffset={strokeDashoffset}
                r={normalizedRadius}
                cx="50%"
                cy="50%"
                transform="rotate(-90 50% 50%)"
            />
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy=".3em"
                fontSize= {isSmallScreen ? '16' : '30'}
                fill="#fff"
                fontFamily='Poppins1'
            >
                {value}%
            </text>
        </svg>
    );
}

// export default GradientCircularProgress


