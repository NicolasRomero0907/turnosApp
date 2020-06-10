import React from 'react'
import ReactDOM from 'react-dom'
import App from './Componentes/App'
import { FirebaseAppProvider } from 'reactfire'
import firebaseConfig from '../rutas/credenciales'

ReactDOM.render(<FirebaseAppProvider firebaseConfig={firebaseConfig}>
                    <App />
                </FirebaseAppProvider>, document.getElementById('root'))