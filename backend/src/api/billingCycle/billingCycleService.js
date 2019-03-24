import BillingCycleSchema from './BillingCycleSchema'
import restful from 'node-restful'

const BillingCycle= restful.model('BillingCycle', BillingCycleSchema)

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})

export default BillingCycle

