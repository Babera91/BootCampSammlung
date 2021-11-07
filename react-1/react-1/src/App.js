import logo from './logo.svg';
import './App.css';
// always with relative path 
import Header from './components/Header'
import About from './components/About'
// import component About and about.css
// h1 => color: lightskyblue
import Services from './components/Services';
// import component Services and services.css
// h1 => color: tomato
import dog from './img/bild-react.jpeg'


const userName = 'Mickey'
let isLogged = true
const styles = {
  color: 'tomato',
  fontSize: '40px'
}
//JS
function App() {
  return (
    //Start JSX
    // it's like HTML but it's JSX
    // class in HTML => className inc JSX
    <div className="App">
      <Services></Services>
      {/* h1 => color: tomato */}
      <Header></Header>
      <About></About>
      {/* h1 => color: lightskyblue */}
      <Services></Services>
      {/* h1 => color: tomato */}
      <h1 >Hello world!</h1>
      <h1>Hello {userName}</h1>
      <h2 style={{ textDecoration: 'underline' }}>some test</h2>
      <h1 >
        the user {userName} is logged
        {
          //js start
          isLogged === true ? ' In' : ' Out'
          //js end
        }
      </h1>
      <img src="https://unsplash.it/200" alt="" />
      {/* img in src folder */}
      <img src={dog} alt="" />
      {/* img in public folder */}
      <img src="/auto.jpeg" alt="" />
    </div>
    //End JSX
  );
}

export default App;





// imr 
// import React from 'react';
// imrc
// import React, { Component } from 'react';
// sfc: stateless functional component
// const App = () => {
//   return (  );
// }

// export default App;

// cc: class Component
// class  extends React.Component {
//   render() { 
//     return <div></div>;
//   }
// }

// export default ;
// ccc: class component with constructor
// class  extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }
//   render() { 
//     return (  );
//   }
// }