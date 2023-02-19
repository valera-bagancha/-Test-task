import { FC, useEffect } from 'react'

import { setExchangeRatesAsync } from '../../redux/exchangeRates/actions'
import { useAppDispatch } from '../../hooks/useAppDispatch'

import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Header from './components/Header'

const MainPage: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setExchangeRatesAsync())
  }, [])

  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default MainPage
