import { app } from './app';
import dotenv from 'dotenv';

dotenv.config();

void (async () => {
  try {
    const PORT = process.env.PORT;
    app.listen(PORT, () =>
      console.info(`express server running on http://localhost:${PORT}`),
    );
  } catch (err) {
    process.exit(1);
  }
})();
