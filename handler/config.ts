import dotenv from "dotenv"
dotenv.config()

export const port: number | string = process.env.port || 3000