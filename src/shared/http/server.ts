import express from 'express';
import cors from 'cors';
import routes from './routes';

/* Inicializa o express */
const app = express();

/* Não aceita requisição de qualquer endereço */
app.use(cors());

/* Habilita retornos em JSON */
app.use(express.json());

/* Usa as rotas do arquivo de rotas */
app.use(routes);

app.listen(3333, () => {
  console.log('Server started on pot 3333!');
});
