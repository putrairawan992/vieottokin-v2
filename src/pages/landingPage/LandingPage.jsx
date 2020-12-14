import React from 'react'
import { makeStyles } from '@material-ui/core';
import landing from '../../assets/svg/landing.png'

const useStyle = makeStyles((theme) => ({
	root: {
        overflowX:'none',
        maxWidth:'100%',
    },
    
}));

function LandingPage() {
    const classes = useStyle()
    return (
        <div>
            <section>
                <img src={landing} className={classes.root} alt=""/>
            </section>
        </div>
    )
}

export default LandingPage
