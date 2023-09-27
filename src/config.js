export const PORT = process.env.PORT || 4000;
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://tasks-mongo:IZn2opApYDVxNmIM39Oz4w8YR4n8XvOqoOt2JDWefRKkPkuKkilurIFtc2CFNMnDoY1Ob7PoqfH6ACDbJI6Jeg%3D%3D@tasks-mongo.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@tasks-mongo@r";
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "secret";

export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";