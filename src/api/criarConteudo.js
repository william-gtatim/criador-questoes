import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold, } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API;
const MODEL_NAME = "gemini-1.0-pro";

const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
];


export async function sugerirSubtopicos(input) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
        temperature: 0.5,
        topK: 0,
        topP: 1,
        maxOutputTokens: 2048,
    };


    const parts = [
        { text: "input: Platão" },
        { text: "output: [\"Teoria das ideias\", \"Reminiscência\", \"Dualismo mente corpo\", \"Rei filósofo\", \"Alegoria da caverna\"]" },
        { text: "input: Teoria da evolução" },
        { text: "output: [\"Seleção natural\", \"Mutação\", \"Especiação\", \"Fluxo gênico\"]" },
        { text: "input: Latitude e longitude" },
        { text: "output: [\"Definição de Latitude e Longitude\", \"Sistemas de Coordenadas Geográficas\", \"Meridianos e Paralelos\" ]" },
        { text: `input: ${input}` },
        { text: "output: " },
    ];


    const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig,
        safetySettings,
    });
    
    const response = result.response;
    console.log(response.text());
    return response.text();
    
    
}



export async function criarConteudo(generationConfig, parts){
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    

    const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig,
        safetySettings,
    });

    let response = result.response;
    console.log(response.text())
    response = response.text().replaceAll('```', '').replaceAll('json', '');
    if (isValidJSON(response) === false) {
        alert("O modelo retornou um JSON inválido")
        return false;
    }
    response = JSON.parse(response);

    return response;
    

}

function isValidJSON(text) {
    try {
        JSON.parse(text);
        return true;
    } catch (error) {
        return false;
    }
}