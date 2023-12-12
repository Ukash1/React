import logo from './logo.svg';
import PropsClass from './component/PropClass';
import PropsFunctional from './component/PropsFunctional';
import './App.css';
import State from './component/State';
import StateFunction from './component/StateFunction';
import DynamicRendering from './component/DynamicRendering';
import TwoDynamic from './component/TwoDynaming';
import TwoWay from './component/TwoWay';
import StateClassCom from './component/StateClassCom';
function App() {
  return (
    <div className="App">
      <PropsFunctional name='ukash'/>
      <PropsClass college='skct'/> 
      <State/>
        <StateFunction/>
        <DynamicRendering />
        <TwoDynamic/>
        <TwoWay />
        <StateClassCom />
          </div>
    );
}

export default App;
