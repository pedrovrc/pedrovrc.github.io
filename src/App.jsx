import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import Curriculum from './pages/Curriculum'
import BrowseProjects from './pages/BrowseProjects'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/cv' element={<Curriculum />} />
        <Route path='/projects' element={<BrowseProjects />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Route>
    )
  )

  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  )
}

export default App