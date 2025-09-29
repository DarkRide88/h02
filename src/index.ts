import express from 'express';
import { setupApp } from './setup-app';
import {runDb} from "./blogs/repositories/db";

// создание приложения
const app = express();
setupApp(app);

// порт приложения
const PORT = process.env.PORT || 5001;

// запуск приложения
app.listen(PORT, async () => {
  await runDb()
  console.log(`Example app listening on port ${PORT}`);
});
