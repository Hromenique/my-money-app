import express from 'express'
import BillingCycle from '../api/billingCycle/billingCycleService'

export default server => {
    const router = express.Router()    
    server.use('/api', router)    
    BillingCycle.register(router, '/billingCycles')
}