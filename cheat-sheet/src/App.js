import React from 'react'

import {Brand, CTA, Navbar} from './components';
import {Blog, Footer, Header, Note, Possibility} from './containers';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Note/>
      <Possibility/>
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
