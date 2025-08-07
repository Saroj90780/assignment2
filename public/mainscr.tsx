import {Box} from '@mui/material'
import Navbar from './navbar'
import Toppart from './toppart'
import Carts from './carts'
import Skills from './skills'
import Content from './content'
import Footer from './Footer'
import './mainscr.css'

const Mainscreen=()=>{
    return(
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            alignItems:"start",
            width:"100%",
            backgroundColor:"black"
            
        }}>
            <Navbar/>
            <Toppart/>
            <Carts/>
            <Skills/>
            <Content/>
            <Footer/>
        </Box>
    )
}
export default Mainscreen