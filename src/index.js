import 'animate.css';
import i18n from 'i18next';
import Cookies from 'js-cookie';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { initReactI18next } from 'react-i18next';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css';
import bnTranslation from './locales/bn.json';
import enTranslation from './locales/en.json';
import reportWebVitals from './reportWebVitals';

const savedLanguage = Cookies.get('language');

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      bn: { translation: bnTranslation },
    },
    lng: 'bn', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false,
    },
  });

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(function (registration) {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(function (error) {
      console.error('Service Worker registration failed:', error);
    });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
