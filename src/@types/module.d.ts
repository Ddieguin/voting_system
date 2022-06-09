declare namespace NodeJS {
    export interface ProcessEnv {
        PORT: string;
        JWT_SECRET: string;
        PGHOST: string;
        PGUSER: string;
        PGDATABASE: string;
        PGPASSWORD: string;
        PGPORT: number;
    }
}