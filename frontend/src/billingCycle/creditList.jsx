import React, { Component } from 'react'
import { Field, arrayInsert } from 'redux-form'
import Grid from '../commons/layout/grid'
import Input from '../commons/form/input'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class CreditList extends Component {

    add(index, item = {}) {
        if (!this.props.readOnly) {
            this.props.arrayInsert('billingCycleForm', 'credits', index, item)
        }
    }

    renderRows() {
        const list = this.props.list || []

        return list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field name={`credits[${index}].name`} component={Input}
                        placeholder={this.props.placeholder} readOnly={this.props.readOnly} />
                </td>
                <td>
                    <Field name={`credits[${index}].value`} component={Input}
                        placeholder={this.props.placeholder} readOnly={this.props.readOnly} />
                </td>
                <td>
                    <button type='button' className='btn btn-success'
                        onClick={() => this.add(index + 1)}>
                        <i className='fa fa-plus'></i>
                    </button>
                    <button type='button' className='btn btn-warning'
                        onClick={() => this.add(index + 1, item)}>
                        <i className='fa fa-clone'></i>
                    </button>
                </td>              
            </tr>
        ))
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Crédito</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th className='table-actions'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert }, dispatch)
export default connect(null, mapDispatchToProps)(CreditList)