import '../commons/template/dependencies'
import React from 'react'
import Header from '../commons/template/header'
import Sidebar from '../commons/template/sidebar'
import Footer from '../commons/template/footer'
import Routes from './routes'
import Messages from '../commons/msg/messages'

export default props => (
    <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className="content-wrapper">
            <Routes />
        </div>
        <Footer />
        <Messages />
    </div>
)