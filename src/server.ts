import app from './app';
import { Config } from './config';

const startServer = () => {
    try {
        const port = Config.PORT;
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error(error);
    }
};

startServer();
