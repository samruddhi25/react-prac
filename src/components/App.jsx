import React,{Component} from 'react';
import Greet from './Greet';
import Welcome from './Welcome';
class App extends Component{
  render()
{
  return (
    <div className="App">
 {/* <Greet/> */}
 <Welcome/>
    </div>
  );
  }
}
export default App;
