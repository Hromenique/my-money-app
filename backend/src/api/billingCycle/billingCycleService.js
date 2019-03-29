import BillingCycleSchema from './BillingCycleSchema'
import restful from 'node-restful'

const BillingCycle = restful.model('BillingCycle', BillingCycleSchema)

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })
BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count().exec()
        .then(value => res.json({ value }))
        .catch(error => res.status(500).json({ errors: [error] }))
})

export default BillingCycle

