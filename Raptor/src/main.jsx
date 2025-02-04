import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.jsx"
import { Provider } from 'react-redux'
import PexelsStore from "./Store/PexelsStore.js"
import { AboutPage, ContactPage, Error404Page, Guest_PagePage, HomePage, Sign_inPage, Sign_upPage } from "./Pages/pages.js"
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='guestPage' element={<Guest_PagePage />} />
      <Route path='home' element={<HomePage />} />
      <Route path='about' element={<AboutPage />} />
      <Route path='contact' element={<ContactPage />} />
      <Route path="*" element={<Error404Page />} />
      <Route path='sign_in' element={<Sign_inPage />} />
      <Route path='sign_up' element={<Sign_upPage />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={PexelsStore}>
    <RouterProvider router={router} />
  </Provider>
)

