import { PersistGate } from 'redux-persist/integration/react'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { FC } from 'react'

import router from './routes/router'

import './styles/main.scss'
import { persistor, store } from './redux/store'

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  )
}

export default App
