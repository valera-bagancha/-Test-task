import { createBrowserRouter } from 'react-router-dom'

import ROUTES from '../constants/routes'
import MainPage from '../pages/MainPage'

const router = createBrowserRouter([
  {
    path: ROUTES.MAIN,
    element: <MainPage />,
  },
])

export default router;
