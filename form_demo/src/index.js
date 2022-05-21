import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
//import App from './App';
import MyForm from './component/form';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MyForm/>);