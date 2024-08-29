const { Router } = require('express')
const { urlStore } = require("../db")
const { urlSchema } = require("../zod/inputValidation")
const { urlWare, exists } = require("../middleware")
const shortner = require('short-id')

const router = Router();

router.post('/shortUrl', urlWare, async (req, res) => {

    let response = urlSchema.safeParse(req.body)

    if (!response.success) {
        return res.status(403).json({ err: 'Invalid Input' })
    }
    // extracting url 
    let { url } = response.data
    // generating short-url-id
    let shortUrl = shortner.store(url)
    // creating db mongo
    await urlStore.create({
        shortIdURL: shortUrl,
        originalURL: url
    })
    res.status(200).json({ shortUrl })
})


router.get('/:shortID', exists, async (req, res) => {
    let id = req.params.shortID;
    // fetching the og value stored within shortID
    let url = shortner.fetch(id)
    //updating database timestamp clicks
    // Tip :: here you can use try catch cuz this can prolly throw an error if not worked 
    await urlStore.updateOne({ id }, {
        $push: {
            clicks: {
                timestamps: Date.now()
            }
        }
    })
    res.status(200).redirect(url)
})

module.exports = {
    router
}