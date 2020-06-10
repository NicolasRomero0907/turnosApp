import React, { useEffect } from 'react'
import Cabecera from './Cabecera/Cabecera'
import {Container,Grid,Box} from '@material-ui/core'
import ListaOpciones from './ListaOpciones/ListaOpciones'
import Formulario from './Formulario/Formulario'
//import { ThemeProvider } from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles'
import { palette, spacing, typography } from '@material-ui/system'
import { sizing } from '@material-ui/system';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	
	root:{
		
	[theme.breakpoints.down('sm')]:{
		
		backgroundColor: "green"
		
	},
	
	[theme.breakpoints.up("md")]:{
		
		background: "blue"
		
	}
		
	}	
	
}))	

const Home = () => {
	
	const clases = useStyles()
	
    return (

		<Box className = {clases.root}>
		
			<Grid container direction="row" height="40%">
				<Cabecera />
			</Grid>
			<Grid container direction="row">
				<Grid container item direction="column" lg={3}><ListaOpciones/></Grid>
				<Grid container item direction="column" lg={9}><Formulario/></Grid>
			</Grid>
		
		</Box>
        
        )

}

export default Home