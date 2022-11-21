import express from 'express';
import parkRouters from './routes/park';

const app = express();

app.use(express.json());

app.use('/park', parkRouters);

app.listen(5001);