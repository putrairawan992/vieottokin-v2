import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import btmBg from '../../assets/image/btmBg.png'

function Bottom() {
    const classes = useStyle()
    return (
        <Box className={classes.root}>
            <Typography className={classes.title}>
                Let’s get you up to speed!
            </Typography>
            <Typography style={{fontSize:'18px',width:'50%',padding:'20px 20px'}}>
                We’re ready to help your company grow. Talk with us and find the best service provider, or if you want to offer your service globally with Ventoorhub.
            </Typography>
            <Box>
                <Button className={classes.button}>Find Service Providers</Button>
                <Button className={classes.button2}>Join Our Network of Partners</Button>
            </Box>
        </Box>
    )
}

export default Bottom

const useStyle=makeStyles((theme)=>({
    root:{
        marginTop:'-1px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundImage:`url(${btmBg})`,
        height:'60vh',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        color:'white',
        textAlign:'center',
        fontFamily:'Avenir'
    },
    title:{
        fontSize:'36px',
        fontWeight:700
    },
    button:{
        width:'313px',
        height:'57px',
        color:'white',
        background:'#F58120',
        margin:'10px 10px',
        fontSize:'16px'
    },
    button2:{
        width:'313px',
        height:'57px',
        color:'#F58120',
        // background:'#F581',
        margin:'10px 10px',
        fontSize:'16px',
        border: '2px solid #F58120'
    }
}))