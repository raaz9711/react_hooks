import './App.css';
import ClassMouse from './components/useEffect/ClassBase/ClassMouse';
import HookMouse from './components/useEffect/functionbased/HookMouse';
import MouseContainer from './components/useEffect/functionbased/MouseContainer';
function App() {


  return (
    <div className="App">
      {/* <ClassMouse /> */}
      <MouseContainer />
    </div>
  );
}

export default App;
