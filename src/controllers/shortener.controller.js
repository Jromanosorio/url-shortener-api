import urlModel from "../models/Url.js"
import { shortenerService } from "../services/shortener.service.js"
import { generator } from "../utils/generator.js"

const saveUrl = async (req, res) => {
    const { link } = req.body

    const { data, shortCode } = await shortenerService(link)

    return res.json({
        data, 
        shortedLink: `${req.protocol}://${req.get('host')}/${shortCode}`
    })
}

export {
    saveUrl
}