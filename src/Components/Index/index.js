import React from 'react';
import Header from './../Header/index';
import Partner from './../Partners/index';
import Serves from './../Serves/index';
import About from './../About/index';
import Footer from './../Footer/index';

const Index = () =>{

    return(
      
        <div>
          <Header />
          <Serves />
          <Partner /> 
          <About />
          <Footer />
        </div>
    )
  
}

export default Index;