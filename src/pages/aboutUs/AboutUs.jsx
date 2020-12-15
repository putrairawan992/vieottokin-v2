import { Box, CssBaseline, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import bgAbout from '../../assets/image/bgAbout.png'
import Bottom from '../../components/bottom/Bottom'
import about1 from '../../assets/image/about1.png'
import about2 from '../../assets/image/about2.png'
import about3 from '../../assets/image/about3.png'

function AboutUs() {
    const classes = useStyle()
    return (
        <div>
            <Box className={classes.hero}>
            <Box className={classes.boxPadding}>
                    <Typography className={classes.headingWhite}>
                        We make it simpler for you to find
                    </Typography>
                    <Typography className={classes.headingBlue}>
                        the best B2B service provider globally.
                    </Typography>
                    <Typography className={classes.subHeadWhite}>
                        Ventoorhub is a technology platform providing professional B2B service providers for companies who want to expand their business globally. Ventoorhub is part of Viettonkin Consulting, a foreign direct investment consulting firm based in Hanoi, Vietnam.
                    </Typography> 
                </Box>
            </Box>
            <Box className={classes.root}>
                <Typography variant='h4' style={{paddingBottom:'50px'}}>
                    What <span style={{color:'#F58120'}}>We Believe</span>
                </Typography>
                <Grid container className={classes.gridContainer}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={5}>
                            <Grid item>
                                <Paper elevation={3} className={classes.paper}>
                                    <img src={about1} alt="" height='150' style={{paddingBottom:'20px',marginTop:'-100px'}}/>
                                    <Typography className={classes.paperBlackBold}>
                                        Innovation 
                                    </Typography>
                                    <Typography className={classes.paperBlack}>
                                        We leverage technology to improve how we do things to help your company grow in emerging markets.
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper elevation={3} className={classes.paper}>
                                    <img src={about3} alt="" height='150' style={{paddingBottom:'20px',marginTop:'-100px'}}/>
                                    <Typography className={classes.paperBlackBold}>
                                        Professionalism 
                                    </Typography>
                                    <Typography className={classes.paperBlack}>
                                        We don’t leave you behind. We stay with you for the entire journey to make sure you get the best service you deserve.
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper elevation={3} className={classes.paper}>
                                    <img src={about2} alt="" height='150' style={{paddingBottom:'20px',marginTop:'-80px'}}/>
                                    <Typography className={classes.paperBlackBold}>
                                        Transparency
                                    </Typography>
                                    <Typography className={classes.paperBlack}>
                                        No more vague pricing with vague service. Ventoorhub is designed to give you transparency and an informed decision-making process.
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Bottom/>
        </div>
    )
}

export default AboutUs


const useStyle = makeStyles((theme)=>({
    hero :{
        marginTop:'-1px',
        backgroundImage:`url(${bgAbout})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        position:'relative',
        height:'65vh'
    },
    boxPadding :{
        padding: '15vh 15vh 15vh 20vh'
    },
    headingWhite:{
        color: 'white',
        fontSize:'2.2rem',
        weight: '400'
    },
    headingBlue:{
        color: '#1EB0E0',
        fontSize:'2rem',
        weight: '100'
    },
    subHeadWhite:{
        color:'white',
        maxWidth:'50%',
        paddingTop:'20px'
    },
    root: {
        height:'100vh',
        backgroundColor:'#F4F6F6',
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
        color:'#2F2F40',
        paddingTop:'10vh'
    },
    paper: {
        height: 300,
        width: 300,
        borderRadius:'5px',
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        flexDirection:'column'
    },
    gridContainer :{
        flexGrow:1,
        paddingTop:'10vh'
    },
    paperBlackBold:{
        color:'#2F2F40',
        fontSize:'22px',
        fontWeight:'bold',
        fontFamily:'Roboto',
        textAlign:'center',
    },
    paperBlack:{
        color:'#2F2F40',
        fontSize:'14px',
        fontFamily:'Roboto',
        padding:'10px 20px',
        textAlign:'center'
    },
}))