const { z } = require("zod")

const urlSchema = z.object({
    url : z.string().url()
})


module.exports = {
    urlSchema
}