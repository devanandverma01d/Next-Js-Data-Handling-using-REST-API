import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({children,title}) => {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
                  rel="stylesheet" 
                  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" 
                  crossOrigin="anonymous">
            </link>
        </Head>
        <Header />
        {children}
        <Footer />
    </div> 
  )
}

export default Layout