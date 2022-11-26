import './App.css';
import ClassMouse from './components/useEffect/ClassBase/ClassMouse';
import ComponentC from './components/useEffect/functionbased/ComponentC';
import FetchData from './components/useEffect/functionbased/FetchData';
import HookMouse from './components/useEffect/functionbased/HookMouse';
import MouseContainer from './components/useEffect/functionbased/MouseContainer';
import React from 'react';
import ReduceCounterOne from './components/useReducer/funBased/CounterOne';
import ReduceCounterTwo from './components/useReducer/funBased/CounterTwo';
import ReduceCounterThree from './components/useReducer/funBased/CounterThree';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();


function App() {


  return (
    <div className="App">
      {/* <ClassMouse /> */}
      {/* <MouseContainer /> */}
      <FetchData />
      {/* <UserContext.Provider value={'raj'}>
         <ChannelContext.Provider value={'ccd'}>
        <ComponentC />
         </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <ReduceCounterTwo/> */}
      {/* <ReduceCounterThree /> */}
    </div>
  );
}

export default App;
