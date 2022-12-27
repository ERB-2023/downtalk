import { DataSource } from 'typeorm';
export declare const mysqlProviders: {
    provide: string;
    useFactory: () => Promise<DataSource>;
};
