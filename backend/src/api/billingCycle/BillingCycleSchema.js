import restful from 'node-restful'

const mongoose = restful.mongoose

const CreditSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: true }
})

const DebtSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: true },
    status: {
        type: String, required: false, uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']
    }
})

const BillingCycleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    month: { type: Number, min: 1, max: 12, required: true },
    year: { type: Number, min: 1970, max: 2100, required: true },
    credits: [CreditSchema],
    debts: [DebtSchema]
})

export default BillingCycleSchema
