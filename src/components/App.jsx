import React,{Component} from 'react';

import Greet from './Greet';
// import Welcome from './Welcome';
// import Hello from './Hello';
class App extends Component{
  render(){
const App = () => {
  return (
    <div className="App">
     <Greet name="Sam" heroName="superwomen"><p>This is children props</p></Greet>
     <Greet name="Akhil" heroName="batman"><p>This is children props</p></Greet>
     <Greet name="Kuku" heroName="superman"><p>This is children props</p>
    <button>Action</button> 
     </Greet>
   </div>
  );
}
  }
}
export default App;
