import React from 'react';
import NavBar from './Components/NavBar/index';
import Content from './Components/Content/index';
import Index from './Components/Index/index';
import {BrowserRouter, Route} from 'react-router-dom';
import About from './Components/IndexAbout/index';

class App extends React.Component {
  render (){
  return (
      <div>
      <BrowserRouter> 
        <NavBar />
          <Route exact path='/' component={Index} />
          <Route path='/about' component={About} />
          <Route path='/content' component={Content} />
      </BrowserRouter>
        
      </div>

 );
  
}
}

export default App;
