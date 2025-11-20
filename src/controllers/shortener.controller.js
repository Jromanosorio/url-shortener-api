import { getLongUrl, shortenerService } from "../services/shortener.service.js"

const saveUrl = async (req, res) => {
    const { link } = req.body

    const { data, shortCode } = await shortenerService(link.trim())

    return res.json({
        data, 
        shortedLink: `${req.protocol}://${req.get('host')}/${shortCode}`
    })
}

const redirectLink = async (req, res) => {
    const { code } = req.params;
    
    try {
        const originalLink = await getLongUrl(code)

        if(!originalLink){
            return res.json({error: 'URL no encontrado'})
        }

        return res.redirect(originalLink)

    } catch (error) {
        return res.json({error: 'Error al redirigir'})
    }
}

export {
    saveUrl,
    redirectLink
}