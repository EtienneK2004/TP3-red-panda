import 'dotenv/config'


export const getConfigTopic = () => {
    return process.env.TOPIC || "mon-super-topic"
}

export const getLocalBroker = () => {
    return process.env.HOST_IP !== ""
}