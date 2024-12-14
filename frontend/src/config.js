const USE_LOCALHOST = true; // Toggle this to switch between local and production

export const API_BASE_URL = USE_LOCALHOST 
  ? 'http://localhost:5000'  
  : 'https://swe-363-quiz-master-backend.vercel.app';