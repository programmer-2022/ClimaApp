import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './components/header/header'
import Routes from './routes/routes'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);