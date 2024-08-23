const Redis = require("ioredis")
// @ts-ignore
const redis = new Redis(process.env.REDIS_URL)

redis.on("connect", () => console.log("redis connected"))
redis.on("error", () => process.exit("Could'nt connect to redis"))

module.exports = redis
