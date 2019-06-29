import BillingCycleSchema from './BillingCycleSchema'
import restful from 'node-restful'
import errorHandler from '../commons/errorHandler'

const BillingCycle = restful.model('BillingCycle', BillingCycleSchema)

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })
BillingCycle.after('post', errorHandler).after('put', errorHandler)

BillingCycle.route('count', async (req, res, next) => {
    try {
        const value = await BillingCycle.count().exec()
        res.json({ value })
    } catch (error) {
        res.status(500).json({ errors: [error] })
    }
})

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate({
        $project: { credit: { $sum: "$credits.value" }, debt: { $sum: "$debts.value" } }
    }, {
            $group: { _id: null, credit: { $sum: "$credit" }, debt: { $sum: "$debt" } }
        }, {
            $project: { _id: 0, credit: 1, debt: 1 }
        }, (error, result) => {
            if (error) {
                res.status(500).json({ errors: [error] })
            } else {
                res.json(result[0] || { credit: 0, debt: 0 })
            }
        })
})

export default BillingCycle

