import React from 'react';
import {
	Grid,
	Typography,
	makeStyles,
	IconButton,
	Button,
	Badge,
	BottomNavigation,
	BottomNavigationAction
} from '@material-ui/core';
import logo from '../../assets/svg/logo.svg';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyle = makeStyles({
	root: {
		width: '100%'
	},
	footerRoot: {
		flexGrow: 1,
		width: '100%',
		// position: '',
		bottom: '0',
		left: '0'
	},
	footerTop: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '87px',
		backgroundColor: '#042C4B'
	},
	badgeIcon: {
		color: '#ffffff'
	},
	footerBootom: {
		float: 'right',
		fontSize: '12px',
		height: '42px',
		color: '#ffffff',
		backgroundColor: '#062945'
	}
});

const Footer = () => {
	const classes = useStyle();
	const [ value, setValue ] = React.useState(0);

	return (
		<div className={classes.footerRoot}>
			<Grid container item alignItems="center" direction="row" justify="center" className={classes.footerTop}>
				<Grid item xs={2}>
					<img className={classes.logo} src={logo} alt="logo" />
				</Grid>
				<Grid item xs={8}>
					{/* <BottomNavigation
						value={value}
						onChange={(event, newValue) => {
							setValue(newValue);
						}}
						showLabels
						className={classes.root}
					>
						<BottomNavigationAction label="Terms of Use" />
						<BottomNavigationAction label="Privacy Policy" />
						<BottomNavigationAction label="Contact" />
						<BottomNavigationAction label="Service Standard (ISO)" />
						<BottomNavigationAction label="Partnership" />
						<BottomNavigationAction label="Partner Dashboard" />
					</BottomNavigation> */}
					<Button style={{ color: '#FFFFFF', fontSize: '11px' }}>Terms of Use</Button>
					<Button style={{ color: '#FFFFFF', fontSize: '11px' }}>Privacy Policy</Button>
					<Button style={{ color: '#FFFFFF', fontSize: '11px' }}>Contact</Button>
					<Button style={{ color: '#FFFFFF', fontSize: '11px' }}>Service Standard (ISO)</Button>
					<Button style={{ color: '#FFFFFF', fontSize: '11px' }}>Partnership</Button>
					<Button style={{ color: '#FFFFFF', fontSize: '11px' }}>Partner Dashboard</Button>
				</Grid>
				<Grid xs={1}>
					<IconButton>
						<Badge className={classes.badgeIcon}>
							<FacebookIcon />
						</Badge>
					</IconButton>
					<IconButton>
						<Badge className={classes.badgeIcon}>
							<LinkedInIcon />
						</Badge>
					</IconButton>
				</Grid>
			</Grid>

			<Grid container item alignItems="center" direction="row" justify="center" className={classes.footerBootom}>
				<Typography variant="title">©2020 - Viettonkin JSC</Typography>
			</Grid>
		</div>
	);
};

export default Footer;
