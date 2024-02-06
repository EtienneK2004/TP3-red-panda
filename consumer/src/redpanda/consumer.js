import {Kafka, logLevel} from "kafkajs";
import {getConfigTopic, getLocalBroker} from "../config/config.js";
import { convertTimestamp } from "./utils.js";

const isLocalBroker = getLocalBroker()
const redpanda = new Kafka({
    brokers: [
        isLocalBroker ? `${process.env.HOST_IP}:9092` : 'redpanda-0:9092',
        'localhost:19092'],
});


const consumer = redpanda.consumer({groupId: "redpanda-group"});
const topic = getConfigTopic();

export async function connection() {


    try {
        await consumer.connect();
        await consumer.subscribe({topic: topic});
        
        await consumer.run({
            eachMessage: async ({ message}) => {
                console.log({
                    value: message.value.toString(),
                    date: convertTimestamp(message.timestamp),
                })
            },
        })
    } catch (error) {
        console.error("Error:", error);
    }

}








