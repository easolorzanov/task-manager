export const PORT = process.env.PORT || 4000;
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://tasks-mongooo:RGvtLFdVbYdIaRlEZRfgUeCA6ZedxMQugNyJk8oskrawShfyx2HLxxvNGoZeWTel0RrS29xW9vbFACDbAxZa9g==@tasks-mongooo.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@tasks-mongooo@";
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "secret";

export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";