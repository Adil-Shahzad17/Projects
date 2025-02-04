import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.jsx"
import { Provider } from 'react-redux'
import PexelsStore from "./Store/PexelsStore.js"
import { About_page, Contact_page, Error404_page, Guest_Page_Page, Home_Page, Sign_in_page, Sign_up_page } from "./Pages/pages.js"
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='guestPage' element={<Guest_Page_Page />} />
      <Route path='home' element={<Home_Page />} />
      <Route path='about' element={<About_page />} />
      <Route path='contact' element={<Contact_page />} />
      <Route path="*" element={<Error404_page />} />
      <Route path='sign_in' element={<Sign_in_page />} />
      <Route path='sign_up' element={<Sign_up_page />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={PexelsStore}>
    <RouterProvider router={router} />
  </Provider>
)

