import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { init, create, update, remove } from './billingCycleActions'
import ContentHeader from '../commons/template/contentHeader'
import Content from '../commons/template/content'
import Tabs from '../commons/tab/tabs'
import TabsHeader from '../commons/tab/tabsHeader'
import TabsContent from '../commons/tab/tabsContent'
import TabHeader from '../commons/tab/tabHeader'
import TabContent from '../commons/tab/tabContent'
import List from './billingCycleList'
import Form from './billingCycleForm'

class BillingCycle extends Component {

    componentWillMount() {
        this.props.init()
    }

    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamento' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create} 
                                    submitLabel='Incluir' submitClass='primary'/>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={this.props.update} 
                                    submitLabel='Alterar' submitClass='info'/>
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form onSubmit={this.props.remove} readOnly={true}
                                    submitLabel='Excluir' submitClass='danger'/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ init, create, update, remove }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)