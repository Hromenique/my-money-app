import express from 'express'
import auth from './auth'
import BillingCycle from '../api/billingCycle/billingCycleService'
import AuthService from '../api/user/AuthService'

export default server => {
    /*
    * Rotas protegidas por token jwt
    */
    const protectedApi = express.Router()    
    protectedApi.use(auth)
    BillingCycle.register(protectedApi, '/billingCycles')
    server.use('/api', protectedApi)

    /*
    * Rotas públicas
    */
    const openApi = express.Router()    
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
    server.use('/oapi', openApi)
}