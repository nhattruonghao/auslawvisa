import Router from './routes/Router';
import './sass/index.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {IntlProvider} from "react-intl";
import translate_vi from './translate/vi.json';
import translate_en from './translate/en.json';
import languageSlice, {selectLanguage,
  changeLanguage
} from '../src/features/language/languageSlice';
import { useSelector } from 'react-redux';
import ScrollToTop from '../src/layouts/ScrollToTop';

function App() {
  

const flattenMessages = ((nestedMessages, prefix = '') => {
  if (nestedMessages === null) {
    return {}
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value       = nestedMessages[key]
    const prefixedKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'string') {
      Object.assign(messages, { [prefixedKey]: value })
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey))
    }

    return messages
  }, {})
})

  const translate = {
    'vi': translate_vi,
    'en': translate_en
  };
  const language = useSelector(selectLanguage);
  return (
    <BrowserRouter>
    <IntlProvider locale={language} messages={flattenMessages(translate[language])}>
      <ScrollToTop />
        <Router/>

    </IntlProvider>
    </BrowserRouter>
  );
}

export default App;
