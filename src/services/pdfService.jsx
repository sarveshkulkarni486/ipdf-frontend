import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const pdfAPI = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type":"application/json",
    }
});

export const generatedPDF = async(pdfData) => {
    const response = await pdfAPI.post("/api/pdf/generate", pdfData, {
        responseType: "blob"
    });
    return response;
}

