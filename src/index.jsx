import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './pages/Home/Home'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Survey from './pages/Survey/Index'
import Header from './components/Header/Index'
import Error from './components/Error/Index'
import Results from './pages/Results/Index'
import Freelances from './pages/Freelances/Index'
import Footer from './components/Footer/Index'
import { SurveyProvider, ThemeProvider } from './utils/context/Index'
import GlobalStyle from './utils/styles/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />

          <Routes>
            <Route exact path="/" element={<App />} />

            <Route path="/freelances" element={<Freelances />} />

            <Route path="/survey/:questionNumber" element={<Survey />} />

            <Route path="/results" element={<Results />} />

            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
