import Redis from "ioredis";
import { promisify } from "util";

const redis = new Redis();

const getRedis = (key: string) => {
  const syncRedisGet = promisify(redis.get).bind(redis);
  return syncRedisGet(key);
}

const setRedis = (key: string, value: string) => {
  const syncRedisSet = promisify(redis.set).bind(redis);
  return syncRedisSet(key, value)
}

export { getRedis, setRedis }