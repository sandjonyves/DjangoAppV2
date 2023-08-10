import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import APropos from './composent/OtherCoponent/APropos';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import BodyOther from './composent/OtherCoponent/BodyOther';
import ChooseSysteme from './composent/Forms/FormsGet/ChooseSysteme';
import AppForm from './composent/Forms/AppForm';
import BodyHelp from './composent/OtherCoponent/BodyHelp';
import Modal from './composent/OtherCoponent/Modal';
import NewForm from './composent/Forms/NewForm';
import ChooseStandardA from './composent/Forms/FormsGet/Primary/SectionAnglophone/ChooseStandartA';
import ChooseStandardF from './composent/Forms/FormsGet/Primary/sectionFrancophone/ChooseStandartF';
import Encardreur from './composent/Forms/formPost/Encardreur';
import DismissableModal from './composent/OtherCoponent/Modal2';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  },
  {
    path: "/bon",
    element: <BodyOther></BodyOther>,
   

  },
  {
    path: "/Form",
    element:<AppForm></AppForm>,

  },

  {
    path: "/he",
    element:<NewForm/>

  },

  {
    path: "/helps",
    element:<Modal/>

  },

  {
    path: "/help",
    element:<BodyHelp/>

  },
  {
    path: "/choose",
    element:<ChooseSysteme/>

  },
  {
    path: "/chooses",
    element:<ChooseStandardA/>

  },
  {
    path: "/chooseF",
    element:<ChooseStandardF/>

  },
  {
    path: "/Encardreur",
    element:<Encardreur/>

  },
  {
    path: "/aPropos",
    element:<APropos/>

  },




  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
