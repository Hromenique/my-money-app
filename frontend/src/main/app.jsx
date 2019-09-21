import React from 'react'
import Header from '../commons/template/header'
import Sidebar from '../commons/template/sidebar'
import Footer from '../commons/template/footer'
import Messages from '../commons/msg/messages'

export default props => (
    <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className="content-wrapper">
            {props.children}
        </div>
        <Footer />
        <Messages />
    </div>
)