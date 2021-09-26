import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './fonts/MuseoModerno/MuseoModerno-VariableFont_wght.ttf';
import './fonts/Nunito/Nunito-Black.ttf';
import './fonts/Nunito/Nunito-BlackItalic.ttf';
import './fonts/Nunito/Nunito-Bold.ttf';
import './fonts/Nunito/Nunito-BoldItalic.ttf';
import './fonts/Nunito/Nunito-ExtraBold.ttf';
import './fonts/Nunito/Nunito-ExtraBoldItalic.ttf';
import './fonts/Nunito/Nunito-ExtraLight.ttf';
import './fonts/Nunito/Nunito-ExtraLightItalic.ttf';
import './fonts/Nunito/Nunito-Italic.ttf';
import './fonts/Nunito/Nunito-Light.ttf';
import './fonts/Nunito/Nunito-LightItalic.ttf';
import './fonts/Nunito/Nunito-Regular.ttf';
import './fonts/Nunito/Nunito-SemiBold.ttf';
import './fonts/Nunito/Nunito-SemiBoldItalic.ttf';
import './fonts/Pacifico/Pacifico-Regular.ttf';
import './fonts/FugazOne/FugazOne-Regular.ttf';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
