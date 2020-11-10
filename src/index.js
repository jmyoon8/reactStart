import React from 'react';
import ReactDom from 'react-dom'
//App를 import한다.
import App from'./components/App.js'
//어디에 React를 뿌려줄지 엘리멘트를 지정한다.
const root= document.getElementById('root');


//App과 엘리먼트를 지정한다.
ReactDom.render(<App/>,root);