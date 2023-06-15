import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(
  <StrictMode>
    <App/>
  </StrictMode>,
  document.getElementById("root")
)

//Strictmode digunakan untuk warning jika ada fitur react yang tidak didukung atau tidak dimaintain lagi