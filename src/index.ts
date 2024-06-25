import { config } from 'dotenv';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { env } from 'process';
import cors from 'cors';

import schema from './schema/schema';

config();

const app = express();
const { APP_PORT } = env;
app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    }),
);

app.listen(APP_PORT, () => {
    console.log(`Listening on port: ${APP_PORT}`);
});
