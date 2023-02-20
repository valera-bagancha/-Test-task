import { FC, useEffect } from 'react'

import { setExchangeRatesAsync } from '../../redux/exchangeRates/actions'
import { useAppDispatch } from '../../hooks/useAppDispatch'

import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Header from './components/Header'

import { errorMessageSelector, isErrorSelector } from '../../redux/exchangeRates/selectors'
import { useAppSelector } from '../../hooks/useAppSelector'


import './style.scss'

const MainPage: FC = () => {

  const errorMessage = useAppSelector(errorMessageSelector)
  const isError = useAppSelector(isErrorSelector)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setExchangeRatesAsync())
  }, [])

  return (
    <>
      <Header />
      {isError ? (
        <h2 className="error-message">{errorMessage}</h2>
      ) : (
        <MainContent />
      )}
      <Footer />
    </>
  )
}

export default MainPage
