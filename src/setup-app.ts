import express, { Express } from 'express';
import {testingRouter} from "./testing/routers/testing.router";
import {BLOGS_PATH, TESTING_PATH} from "./core/path";
import {blogsRouter} from "./blogs/router/blogs.router";

export const setupApp = (app: Express) => {
  app.use(express.json()); // middleware для парсинга JSON в теле запроса


  // основной роут
  app.get('/', (req, res) => {
    res.status(200).send('h02');
  });

  app.use(BLOGS_PATH,blogsRouter);
  app.use(TESTING_PATH, testingRouter);

  return app;
};
