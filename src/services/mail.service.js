import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const mailService = async (email, name, message) => {
    const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "jandres.roman.08@gmail.com",
        subject: `Tienes un mensaje de: ${name}`,
        html: `Hola, mi nombre es: <strong>${name}</strong> \n<p>${message}</p>\n<p>${email}</p>`
    })

    return {data, error}
}

export { mailService }