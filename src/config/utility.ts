import { config } from '../config/endpoint.config'
const Web3 = require('web3')

const provider = `${config.web3_provider_host}:${config.web3_provider_port}`;
const web3 = new Web3(new Web3.providers.HttpProvider(provider));

export default web3;
