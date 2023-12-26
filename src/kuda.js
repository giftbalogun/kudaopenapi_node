const axios = require("axios");
const { v4: uuidv4 } = require("uuid");

class Kuda {
    constructor() {
        // SET WORKING ENVIRONMENT
        this.env = process.env.ENVIRONMENT_ENV;
        // Kuda API TOKEN FROM DEVELOPER ACCOUNT
        this.apitoken = process.env.KUDA_API_TOKEN;
        // Kuda USER EMAIL FOR DEVELOPER ACCOUNT
        this.email = process.env.KUDA_USER_EMAIL;
        // SET ENVIRONMENT REQUEST ENDPOINT
        this.baseUri =
            this.env === "live"
                ? "https://kuda-openapi.kuda.com/v2.1"
                : "http://kuda-openapi-uat.kudabank.com/v2.1";
    }

    // GET BEARER TOKEN HERE FOR EVERY REQUEST
    async getToken() {
        const url = this.baseUri + "/Account/GetToken";

        try {
            const response = await axios.post(
                url,
                {
                    email: this.email,
                    apikey: this.apitoken,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Cache-Control": "no-cache",
                    },
                }
            );

            // Check the HTTP status code
            const statusCode = response.status;

            if (statusCode >= 200 && statusCode < 300) {
                // Successful response (2xx)
                return response.data;
            } else {
                // Handle other status codes as needed
                return {
                    error: `Unexpected Status Code: ${statusCode}`,
                    message: response.data.message || "Unknown error",
                };
            }
        } catch (error) {
            // Handle other exceptions
            return {
                error: "Exception",
                message: error.message,
            };
        }
    }

    // Kuda PASS BEARER TOKEN TO REQUEST
    async makeRequest(action, payload, requestRef = null) {
        const token = await this.getToken();
        const timestampId = Math.floor(new Date().getTime() / 1000);
        // Format it as a string
        const randomrequestRef = timestampId.toString();
        const response = await axios.post(
            this.baseUri,
            {
                servicetype: action,
                requestref: requestRef || randomrequestRef,
                data: payload,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        );
        const statusCode = response.status;
        if (statusCode >= 200 && statusCode < 300) {
            // Successful response (2xx)
            return response.data;
        } else {
            // Handle other status codes as needed
            return {
                Status: false,
                Message: `Unexpected Status Code: ${statusCode}`,
                Request: "Tying to make request",
            };
        }
    }
}

module.exports = Kuda;
