import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { FC } from 'react'

import router from './routes/router'
import store from './redux/store'

import './styles/main.scss'

const App: FC = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)

export default App
