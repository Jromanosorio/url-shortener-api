import { mailService } from "../services/mail.service.js"

const sendEmail = async (req, res) => {
    const { email, name, message } = req.body

    const { data, error } = await mailService(email, name, message)

    if(error) return res.status(400).json(error)

    return res.status(200).json(data)
}

export { sendEmail }