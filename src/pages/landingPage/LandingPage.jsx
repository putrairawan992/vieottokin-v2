import React from 'react'
import { Box, Button, Grid, IconButton, InputBase, makeStyles, Menu, Paper, Typography } from '@material-ui/core';
import landing from '../../assets/svg/landing.png'
import SearchIcon from '@material-ui/icons/Search';
import { ArrowDropDown } from '@material-ui/icons';
import coin from '../../assets/image/coin.png'
import time from '../../assets/image/time.png'
import cs from '../../assets/image/cs.png'
import pic from '../../assets/image/pic.png'
import deal from '../../assets/image/deal.png'
import payroll from '../../assets/image/payroll.png'
import legal from '../../assets/image/legal.png'
import nominee from '../../assets/image/nominee.png'
import work from '../../assets/image/work.png'
import translate from '../../assets/image/translate.png'
import accounting from '../../assets/image/accounting.png'
import tax from '../../assets/image/tax.png'
import bg from '../../assets/image/bg.png'
import pic1 from '../../assets/image/pic1.png'
import pic2 from '../../assets/image/pic2.png'
import pic3 from '../../assets/image/pic3.png'
import pic4 from '../../assets/image/pic4.png'
import Bottom from '../../components/bottom/Bottom';

function LandingPage() {
    const classes = useStyle()
    return (
        <div>
            <Box className={classes.hero}>
                <Box className={classes.boxPadding}>
                    <Typography className={classes.headingWhite}>
                        We help you find the best service provider
                    </Typography>
                    <Typography className={classes.headingBlue}>
                        with affordable budget in South East Asia
                    </Typography>
                    <Typography className={classes.subHeadWhite}>
                        Viettonkin Consulting is a platform to help you minimize risk by finding you the right solution for your business expansion in SouthEast Asia
                    </Typography>
                    <Box className={classes.boxSearch}>
                        <Button className={classes.buttonLocation}>
                            Location
                            <ArrowDropDown/>
                        </Button>
                        <InputBase
							className={classes.seacrhInput}
							placeholder="What service are you looking for?"
                            />
                        <Button className={classes.buttonInput}>Search</Button>
                    </Box>
                </Box>
                <Grid container className={classes.gridContainer}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={5}>
                            <Grid item>
                                <Paper elevation={3} className={classes.paper}>
                                    <img src={coin} alt="" style={{paddingBottom:'20px'}}/>
                                    <Typography className={classes.paperBlackBold}>
                                        Connect with reliable 
                                    </Typography>
                                    <Typography className={classes.paperBlackBold}>
                                        service providers
                                    </Typography>
                                    <Typography className={classes.paperBlack}>
                                        All of our service provider partners are curated tightly to make sure their reliability to give their best service
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper elevation={3} className={classes.paper}>
                                    <img src={time} alt="" style={{paddingBottom:'20px'}}/>
                                    <Typography className={classes.paperBlackBold}>
                                        Save your 
                                    </Typography>
                                    <Typography className={classes.paperBlackBold}>
                                        precious time
                                    </Typography>
                                    <Typography className={classes.paperBlack}>
                                        We know it’s a long and grueling process for finding the right corporate services. We make it easy and short for you    
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper elevation={3} className={classes.paper}>
                                    <img src={cs} alt="" style={{paddingBottom:'20px'}}/>
                                    <Typography className={classes.paperBlackBold}>
                                    Great customer
                                    </Typography>
                                    <Typography className={classes.paperBlackBold}>
                                        service
                                    </Typography>
                                    <Typography className={classes.paperBlack}>
                                    Our customer service will help you through all the process until your request has been finished
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Box  className={classes.root}>
                    <img src={pic} alt=""/>
                    <Box style={{paddingLeft:'30px'}}>
                        <Typography variant='h4' >
                            Services you can expect inside
                        </Typography>
                        <Typography variant='h4' style={{color:'#F58120'}}>
                            Viettonkin Consulting
                        </Typography>
                        <Typography style={{padding:'10px 0px'}}>
                            Our network of corporate service providers covers everything you need
                        </Typography>
                        <Box style={{paddingTop:'10px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                            <Box style={{display:'flex',flexDirection:'row'}}>
                                <img src={deal} alt="" width='50px' height='50px'/>
                                <Box style={{display:'flex',flexDirection:'column'}}>
                                    <Typography style={{fontWeight:'bold'}}>
                                        Bussiness Incorporation
                                    </Typography>
                                    <Typography className={classes.small}>
                                        Our network of corporate service providers covers everything you need
                                    </Typography>
                                </Box>
                            </Box>
                            <Box style={{display:'flex',flexDirection:'row'}}>
                                <img src={payroll} alt="" width='50px' height='50px'/>
                                <Box style={{display:'flex',flexDirection:'column'}}>
                                    <Typography style={{fontWeight:'bold'}}>
                                        Bussiness Incorporation
                                    </Typography>
                                    <Typography className={classes.small}>
                                        Our network of corporate service providers covers everything you need
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box style={{paddingTop:'10px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                            <Box style={{display:'flex',flexDirection:'row'}}>
                                <img src={legal} alt="" width='50px' height='50px'/>
                                <Box style={{display:'flex',flexDirection:'column'}}>
                                    <Typography style={{fontWeight:'bold'}}>
                                        Bussiness Incorporation
                                    </Typography>
                                    <Typography className={classes.small}>
                                        Our network of corporate service providers covers everything you need
                                    </Typography>
                                </Box>
                            </Box>
                            <Box style={{display:'flex',flexDirection:'row'}}>
                                <img src={nominee} alt="" width='50px' height='50px'/>
                                <Box style={{display:'flex',flexDirection:'column'}}>
                                    <Typography style={{fontWeight:'bold'}}>
                                        Bussiness Incorporation
                                    </Typography>
                                    <Typography className={classes.small}>
                                        Our network of corporate service providers covers everything you need
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box style={{paddingTop:'10px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                            <Box style={{display:'flex',flexDirection:'row'}}>
                                <img src={work} alt="" width='50px' height='50px'/>
                                <Box style={{display:'flex',flexDirection:'column'}}>
                                    <Typography style={{fontWeight:'bold'}}>
                                        Bussiness Incorporation
                                    </Typography>
                                    <Typography className={classes.small}>
                                        Our network of corporate service providers covers everything you need
                                    </Typography>
                                </Box>
                            </Box>
                            <Box style={{display:'flex',flexDirection:'row'}}>
                                <img src={translate} alt="" width='50px' height='50px'/>
                                <Box style={{display:'flex',flexDirection:'column'}}>
                                    <Typography style={{fontWeight:'bold'}}>
                                        Bussiness Incorporation
                                    </Typography>
                                    <Typography className={classes.small}>
                                        Our network of corporate service providers covers everything you need
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box style={{paddingTop:'10px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                            <Box style={{display:'flex',flexDirection:'row'}}>
                                <img src={accounting} alt="" width='50px' height='50px'/>
                                <Box style={{display:'flex',flexDirection:'column'}}>
                                    <Typography style={{fontWeight:'bold'}}>
                                        Bussiness Incorporation
                                    </Typography>
                                    <Typography className={classes.small}>
                                        Our network of corporate service providers covers everything you need
                                    </Typography>
                                </Box>
                            </Box>
                            <Box style={{display:'flex',flexDirection:'row'}}>
                                <img src={tax} alt="" width='50px' height='50px'/>
                                <Box style={{display:'flex',flexDirection:'column'}}>
                                    <Typography style={{fontWeight:'bold'}}>
                                        Bussiness Incorporation
                                    </Typography>
                                    <Typography className={classes.small}>
                                        Our network of corporate service providers covers everything you need
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.bg}>
                <Typography variant='h4'>
                    It’s an entirely easy process with 
                </Typography>
                <Typography variant='h4' style={{color:'#F58120'}}>
                    Viettonkin Consulting
                </Typography>
                <Box style={{display:'flex',flexDirection:'row'}}>
                    <Box>
                        <img src={pic1} alt=""/>
                        <Typography>
                            Select your service provider
                        </Typography>
                    </Box>
                    <Box>
                        <img src={pic2} alt=""/>
                        <Typography>
                            Select your service provider
                        </Typography>
                    </Box>
                    <Box>
                        <img src={pic3} alt=""/>
                        <Typography>
                            Select your service provider
                        </Typography>
                    </Box>
                    <Box>
                        <img src={pic4} alt=""/>
                        <Typography>
                            Select your service provider
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Bottom/>
        </div>
    )
}

export default LandingPage

const useStyle = makeStyles((theme) => ({
    baseColor:{
        color:'#2F2F40'
    },
    small:{
        fontSize:'10px',
        width:'200px'
    },
    bg:{
        backgroundImage:`url(${bg})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        position:'relative',
        height:'100vh',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        fontFamily:'Roboto',
        color:'#FFFFFF'
    },
	root: {
        width:'80%',
        height:'100vh',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        color:'#2F2F40'
    },
    hero :{
        backgroundImage:`url(${landing})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        position:'relative',
        height:'160vh'
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
        maxWidth:'42%',
        paddingTop:'20px'
    },
    boxSearch:{
        display:'flex',
        flexDirection:'row',
        paddingTop:'40px'
    },
    seacrhInput: {
		width: '30%',
		height: '55px',
		backgroundColor: '#FFFFFF',
		padding: '0px 8px',
		color: '#000000',
		alignItems: 'center',
		fontSize: '12px',
		display: 'flex',
	},
	buttonInput: {
		width: '10%',
		height: '55px',
		color: '#FFFFFF',
		fontSize: '12px',
		backgroundColor: '#F58120',
		borderRadius: '3px',
		borderTopLeftRadius:'0px',
		borderBottomLeftRadius:'0px'
    },
    buttonLocation:{
        display:'flex',
        justifyContent:'space-between',
        width: '15%',
		height: '55px',
		fontSize: '12px',
        backgroundColor: '#FFFFFF',
        borderRadius: '3px',
        borderTopRightRadius:'0px',
        borderBottomRightRadius:'0px',
        borderRight:'1px solid grey'
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
    
}));