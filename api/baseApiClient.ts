import axios, { AxiosResponse, AxiosRequestConfig, Method } from 'axios';
import { Logger } from 'log4js';
import log4js from '../core/logger/log4js/log4js';
import { ApiRequestOpts } from './interfaces/ApiRequestOpts';

class BaseApiClient {
    logger: Logger;
    private _headers: any;
    constructor() {
        this.logger = log4js.getLogger(`BackendApiClient`);
        this._headers = {};
    }

    private async _request(options: ApiRequestOpts): Promise<AxiosResponse> {
        const baseURL = `http://localhost:8080/`;
        this.logger.info(`${options.restMethod.padStart(4, ' ')}: ${baseURL}${options.partialURL}`);
        const restMethod: Method = options.restMethod.toLowerCase() as Method;
        this._headers['Authorization'] = 'Bearer d13fe223-f30f-47cf-a57b-036cc89e54b4';
        const config: AxiosRequestConfig = {
            baseURL: baseURL,
            url: options.partialURL,
            method: restMethod,
            headers: this._headers,
            data: options.requestBody,
            timeout: 25000,
        };
        try {
            const axiosResult = await axios(config);
            this.logger.info(`Response status is ${axiosResult.status}`);
            return axiosResult;
        } catch (error) {
            if (error.response) {
                this.logger.info(`Error, ${restMethod}, Message: ${error.response.data.message}`);
                return error.response;
            }
            throw error;
        }
    };

    protected getRequest(partialURL: string): Promise<AxiosResponse> {
        return this._request({ partialURL, requestBody: {}, restMethod: 'GET' });
    }

    protected postRequest(partialURL: string, requestBody: object): Promise<AxiosResponse> {
        return this._request({ partialURL, requestBody, restMethod: 'POST' });
    }

    protected putRequest(partialURL: string, requestBody: object): Promise<AxiosResponse> {
        return this._request({ partialURL, requestBody, restMethod: 'PUT' });
    }

    protected deleteRequest(partialURL: string): Promise<AxiosResponse> {
        return this._request({ partialURL, requestBody: {}, restMethod: 'DELETE' });
    }

    // public set cookies(param: any) {
    //     this.logger.debug(`Set cookies to request.`);
    //     this._cookies += Object.keys(param)
    //         .map((i) => `${i}=${param[i]};`)
    //         .join('');
    // }
}

export default BaseApiClient;
