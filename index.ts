import { Server } from "./src/app";

(async () => {
    try {
        Server();
    } catch (error) {
        console.error(error);
    }
})();
