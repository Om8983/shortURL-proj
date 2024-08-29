const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://omWadhi64:7gFI_%40oM&123@cluster0.pl3kem8.mongodb.net/shortUrl')

const storeSchema = mongoose.Schema({
    shortIdURL : {
        type : String,
        required : true,
        unique : true
    },
    originalURL : {
        type : String,
        required : true
    },
    clicks : [{
        timestamps : Number
    }]
}, {timestamps : true }
)

const urlStore = mongoose.model("urlStore", storeSchema)
module.exports = {
    urlStore
}
