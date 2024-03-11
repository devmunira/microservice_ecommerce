import express from 'express';
import {
  globalErrorHandellar,
  middleware,
  notFoundHandellar,
} from './src/middleware';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(middleware);

const PORT = process.env.PORT || 4002;
const SERVICE = process.env.SERVICE_NAME || 'Inventory Service';

// Routes start from here
app.get('/api/health', (_req, res) => {
  return res
    .status(200)
    .json({ status: 200, message: `${SERVICE} health is ok!` });
});

// Global Error handler
app.use([notFoundHandellar, globalErrorHandellar]);

app.listen(PORT, () => {
  console.log(`${SERVICE} is running on ${PORT}`);
});
