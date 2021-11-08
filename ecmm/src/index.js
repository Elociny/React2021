import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Cabecalho from './components/common/cabecalho/index';
import RodaPe from './components/common/rodaPe/index';
import RodaPe2 from './components/common/rodaPe2/index';

ReactDOM.render(
  <React.StrictMode>
    
  <Cabecalho />
  <RodaPe />
  <RodaPe2 />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
