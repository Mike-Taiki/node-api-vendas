import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm';

/* Inicializa o express */
const app = express();

/* Não aceita requisição de qualquer endereço */
app.use(cors());

/* Habilita retornos em JSON */
app.use(express.json());

/* Usa as rotas do arquivo de rotas */
app.use(routes);

/* Middleware para tratamento de erros */
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log('Server started on pot 3333!');
});
