"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailConfig = exports.port = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.port = process.env.port || 3000;
exports.mailConfig = {
    host: process.env.mailHost,
    pass: process.env.mailPass,
    user: process.env.mailUser,
    port: process.env.mailPort
};
