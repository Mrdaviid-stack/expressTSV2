export {}
declare global {
    namespace NodeJS {
        interface ProcessENV {
            PORT: number;
            NODE_ENV: 'development' | 'staging' | 'production';
            WHITELIST: string;
            // database config
            DB_CLIENT: string;
            DB_HOST: string;
            DB_PORT: number;
            DB_USER: string;
            DB_PASS: string;
            DB_NAME: string;
        }
    }
}