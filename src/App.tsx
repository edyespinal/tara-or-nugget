import React from 'react'

import { Captcha } from 'pages/Captcha/Captcha'
import { Layout } from 'pages/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Captcha />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
