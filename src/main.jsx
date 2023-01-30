import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterWithCustomHook } from './01-UseState/CounterWithCustomHook'
// import { CounterApp } from './01-UseState/CounterApp'
// import { HookApp } from './HookApp'
// import { ForrmWithCustomHook } from './02-useEffect/ForrmWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layaout'
// import { Memorize } from './06-Memos/Memorize'
// import { MemoHook } from './06-Memos/MemoHook'
// import { CallBackHook } from './06-Memos/CallBackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import './08-useReducer/intro-reducer';
// import { TodoApp } from './08-useReducer/TodoApp';

import { MainApp } from './09-useContext/MainApp';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode>, */}
  </BrowserRouter>
)
