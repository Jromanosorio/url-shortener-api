import urlModel from "../models/Url.js"
import { generator } from "../utils/generator.js"

const shortenerService = async(longLink) => {
    const savedLink = await urlModel.findOne({link: longLink})

    if(savedLink) return {data: savedLink, shortCode: savedLink.short}

    let shortCode = generator()
    
    const savedShorten = await urlModel.findOne({shortCode})
    
    while (savedShorten) {
        shortCode = generator()
    }

    const newShortedData = await urlModel.create({short: shortCode, link: longLink})

    return {data: newShortedData, shortCode}
}

export { 
    shortenerService
}