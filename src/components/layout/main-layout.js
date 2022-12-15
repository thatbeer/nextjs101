import React from 'react'
import { Footer } from '../Footer/footer';
import { HeaderX } from '../Header/header';
const MainLayout = ({children}) => {
  return (
    <>
        <HeaderX/>
            {children}
        <Footer/>
    </>
  )
}

export default MainLayout;