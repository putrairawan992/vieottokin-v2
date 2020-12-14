import React, { Component } from 'react';
import { ThemeProvider, makeStyles, CssBaseline, Container, Grid } from '@material-ui/core';
import { Card } from './components/card/Card';
import Header from './components/header/Header';
import theme from './utils/theme';
import Footer from './components/footer/Footer';
import LandingPage from './pages/landingPage/LandingPage';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				{/* <Card /> */}
				<LandingPage />
				<Footer />
				<CssBaseline />
			</div>
		);
	}
}

export default App;
