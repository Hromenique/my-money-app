import '../commons/template/dependencies'
import React from 'react'

import Header from '../commons/template/header'
import Sidebar from '../commons/template/sidebar'
import Footer from '../commons/template/footer'

import Routes from './routes'

export default props => (
    <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className="content-wrapper">
            <Routes />
        </div>
        <Footer />
    </div>
)