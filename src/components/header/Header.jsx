import React from 'react';
import {
	AppBar,
	makeStyles,
	Tab,
	Tabs,
	IconButton,
	Toolbar,
	Typography,
	Button,
	Dialog,
	DialogTitle,
	DialogContentText,
	DialogContent,
	DialogActions,
	TextField,
	Link,
	InputBase,
	Paper,
	Grid
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../../assets/svg/logo.svg';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyle = makeStyles((theme) => ({
	root: {
		backgroundColor: '#0F4875',
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	},
	logo: {
		paddingTop:'5px',
		paddingLeft:'20px',
		height: '54px'
	},
	seacrhInput: {
		width: '375px',
		height: '39px',
		backgroundColor: '#FFFFFF',
		borderRadius: '3px',
		padding: '0px 8px',
		color: '#000000',
		alignItems: 'center',
		fontSize: '12px',
		display: 'flex',
		borderTopRightRadius:'0px',
		borderBottomRightRadius:'0px'
	},
	buttonInput: {
		width: '93px',
		height: '39px',
		color: '#FFFFFF',
		fontSize: '12px',
		backgroundColor: '#F58120',
		borderRadius: '3px',
		borderTopLeftRadius:'0px',
		borderBottomLeftRadius:'0px'
	}
}));

const Header = () => {
	const classes = useStyle();

	const [ open, setOpen ] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<AppBar position="static" className={classes.root}>
			<Toolbar>
				<Grid container alignItems="center" direction="row" justify="center">
					<Grid item className={classes.root} spacing={1}>
						<img className={classes.logo} src={logo} alt="logo" />
					</Grid>
					<Grid item>
						<InputBase
							className={classes.seacrhInput}
							placeholder="What service are you looking for?"
							startAdornment={<SearchIcon fontSize="small" />}
						/>
					</Grid>
					<Button className={classes.buttonInput}>Search</Button>
					<Grid item sm />
					<Grid item>
						<Button style={{ color: '#FFFFFF', fontSize: '14px' }}>Home</Button>
						<Button style={{ color: '#FFFFFF', fontSize: '14px' }}>Services</Button>
						<Button style={{ color: '#FFFFFF', fontSize: '14px' }}>How it works</Button>
						<Button style={{ color: '#FFFFFF', fontSize: '14px' }}>Help</Button>
						<IconButton onClick={handleClickOpen} style={{ color: '#20BFEF' }}>
							<AccountCircleIcon />
						</IconButton>
						<Button onClick={handleClickOpen} style={{ color: '#20BFEF', fontSize: '14px' }}>
							Login
						</Button>
					</Grid>
				</Grid>
				<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">Welcome!</DialogTitle>
					<DialogContent>
						<DialogContentText>Please sign in by below</DialogContentText>
						<TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth />
						<TextField autoFocus margin="dense" id="name" label="Password" type="password" fullWidth />
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color="primary">
							Login
						</Button>
					</DialogActions>
				</Dialog>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
