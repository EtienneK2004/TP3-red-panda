import 'dotenv/config'


export const getConfigNumber = () => {

    let signe = process.env.SIGNED

    if (signe === "false" || signe !== "true")
        signe = false
    else signe = signe === "true";

    return {
        integerSize: Number(process.env.INTEGER_SIZE),
        decimalValue: Number(process.env.DECIMAL_VALUE),
        signed: signe
    };
}

export const getTypeMessage = () => {
    return process.env.MESSAGE
}

export const getTimeOut = () => {
    return Number(process.env.PERIODE_MS) || 5000

}

export const getTopic = () => {
    return process.env.TOPIC || "topic-test"
}

export const getDebug = () => {
    return process.env.DEBUG === "true"
}

export const getLocalBroker = () => {
    return process.env.HOST_IP !== ""
}

export const getNumberOfWords = () => {
    return process.env.NUMBER_OF_WORDS || 3;
}