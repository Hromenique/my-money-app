import BillingCycleSchema from './BillingCycleSchema'
import restful from 'node-restful'

const BillingCycle = restful.model('BillingCycle', BillingCycleSchema)

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })
BillingCycle.route('count', async (req, res, next) => {
    try {
        const value = await BillingCycle.count().exec()
        res.json({ value })
    } catch (error) {
        res.status(500).json({ errors: [error] })
    }
})

export default BillingCycle

