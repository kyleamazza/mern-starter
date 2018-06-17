import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';

import devBundle from './devBundle';

const app = express();
devBundle.compile(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

app.use('/dist', express.static(path.join(__dirname, '/dist')));

// Used for express-jwt when a token cannot be validated.
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({
            error: `${err.name}: ${err.message}`
        });
    }
});

export default app;
