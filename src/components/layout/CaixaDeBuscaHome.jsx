import React from 'react'

import './CaixaDeBuscaHome.css'
const CaixaDeBuscaHome = () => {
  return (
    <div id="container-de-busca" className='container-de-navegacao'>
      <img className='icone-de-imagem' src="https://i.pinimg.com/736x/41/38/31/413831c85ed91c12950b01afd0754511.jpg" alt="" />
      <input type="text" placeholder='pesquisar'/>
    </div>
  )
}

export default CaixaDeBuscaHome