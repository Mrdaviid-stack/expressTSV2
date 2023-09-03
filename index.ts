import bootstrap from "./src/app";

(async () => {
    try {
        bootstrap();
    } catch (error) {
        console.error(error);
    }
})();
