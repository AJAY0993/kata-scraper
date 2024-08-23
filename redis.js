const Redis = require("ioredis")
// @ts-ignore
const redis = new Redis(process.env.REDIS_URL)

redis.on("error", () => process.exit(1))

module.exports = redis
