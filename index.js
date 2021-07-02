import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes/routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/csapi', routes);

app.listen(3001, () => {
    console.log("Running on  Port 3001");
});

