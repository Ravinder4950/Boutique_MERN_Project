const mongoose = require('mongoose')
const categorySchema = new mongoose.categorySchema({
    autoId: { type: Number, default: 0 },
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    Image: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now() },
    status: { type: Boolean, default: true }
})
module.exports = mongoose.model('category', categorySchema)