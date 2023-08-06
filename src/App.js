import React from 'react'
import { Brand,CTA ,Navbar} from './components';
import {Footer,Blog,Possibility,Features,WhatGPT3,Header} from './containers'
import './app.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />

        </div>
        <div className=''>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />

        </div>
    
      
    </div>
  )
}

export default App;

