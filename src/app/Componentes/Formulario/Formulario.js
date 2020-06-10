import React from 'react'
import {FormControl,Grid,Input,InputLabel,TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

/*
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

export default function Hook() {
  const classes = useStyles();
  return <Button className={classes.root}>Hook</Button>;
}*/


const Formulario = () => {
	
	//const classes = useStyles();

	return(
		<React.Fragment>
		<Grid container direction="row" alignItems="center" justify="center">
		
		
			<FormControl>			
				<InputLabel htmlFor="nombre">Nombre</InputLabel>
				<Input id="nombre" />		
			</FormControl>
			<FormControl>			
				<InputLabel htmlFor="apellido">Apellido</InputLabel>
				<Input id="apellido" />		
			</FormControl>
		
		
		</Grid>
		
		<Grid container item direction="row">	
		
		
			<FormControl pr={0}>			
				<InputLabel htmlFor="email">EMAIL</InputLabel>
				<Input id="email" type="email"/>		
			</FormControl>
			<FormControl>			
				<InputLabel htmlFor="dni">DNI</InputLabel>
				<Input id="dni" />		
			</FormControl>			
		
		
		</Grid>
		
		<Grid container item direction="row">
		
			<TextField label="Fecha Nacimiento" type="date" InputLabelProps={{shrink: true}} />
		
		</Grid>
		
		</React.Fragment>
	)	
	
}

export default Formulario