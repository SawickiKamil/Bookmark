import * as React from 'react'
import Navbar from 'components/navbar'
import Modal from 'components/modal'
import Footer from 'components/footer'

export const PageWrapper: React.FC = ({ children }) => {
  return (
    <main>
      <Navbar />
      <Modal />
      {children}
      <Footer />
    </main>
  )
}
