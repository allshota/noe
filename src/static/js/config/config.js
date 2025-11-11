export const CONFIG = {
    API: {
        VERSION: 'v1beta',
        MODEL_NAME: 'models/gemini-live-2.5-flash-preview'
    },
    // Supported models list
    MODELS: [
        { name: 'Gemini 2.5 Flash Preview', value: 'models/gemini-live-2.5-flash-preview' },
        { name: 'Gemini 1.5 Flash Latest', value: 'models/gemini-1.5-flash-latest' },
        { name: 'Gemini 1.5 Pro Latest', value: 'models/gemini-1.5-pro-latest' },
        { name: 'Gemini 2.0 Flash Exp', value: 'models/gemini-2.0-flash-exp' },
        { name: 'Custom Model', value: 'custom' }
    ],
    // You can change the system instruction to your liking
    SYSTEM_INSTRUCTION: {
        TEXT: 'You are my helpful assistant. You can see and hear me, and respond with voice and text. If you are asked about things you do not know, you can use the google search tool to find the answer.',
    },
    // Default audio settings
    AUDIO: {
        SAMPLE_RATE: 16000,
        OUTPUT_SAMPLE_RATE: 24000,      // If you want to have fun, set this to around 14000 (u certainly will)
        BUFFER_SIZE: 2048,
        CHANNELS: 1
    },
    // If you are working in the RoArm branch 
    // ROARM: {
    //     IP_ADDRESS: '192.168.1.4'
    // }
  };
  
  export default CONFIG; 