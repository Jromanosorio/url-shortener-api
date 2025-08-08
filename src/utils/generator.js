const customAlphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

const generator = () => {
    let short = ''
    
    for (let i = 0; i < 6; i++){
        short += customAlphabet[Math.floor(Math.random() * customAlphabet.length)]
    }

    return short 
}

export {
    generator
}