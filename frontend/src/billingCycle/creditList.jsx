import React, { Component } from 'react'
import { Field } from 'redux-form'
import Grid from '../commons/layout/grid'
import Input from '../commons/form/input'

class CreditList extends Component {

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
                <td></td>
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
                                <th>Ações</th>
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

export default CreditList