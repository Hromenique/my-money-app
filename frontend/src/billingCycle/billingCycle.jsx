import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectTab } from '../commons/tab/tabActions'
import ContentHeader from '../commons/template/contentHeader'
import Content from '../commons/template/content'
import Tabs from '../commons/tab/tabs'
import TabsHeader from '../commons/tab/tabsHeader'
import TabsContent from '../commons/tab/tabsContent'
import TabHeader from '../commons/tab/tabHeader'
import TabContent from '../commons/tab/tabContent'

class BillingCycle extends Component {

    componentWillMount() {
        this.props.selectTab('tabList')
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
                            <TabContent id='tabList'><h1>Lista</h1></TabContent>
                            <TabContent id='tabCreate'><h1>Incluir</h1></TabContent>
                            <TabContent id='tabUpdate'><h1>Update</h1></TabContent>
                            <TabContent id='tabDelete'><h1>Excluir</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)