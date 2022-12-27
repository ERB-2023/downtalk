"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mysqlProviders = void 0;
const typeorm_1 = require("typeorm");
exports.mysqlProviders = {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
        const dataSource = new typeorm_1.DataSource({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'test',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true,
        });
        return dataSource.initialize();
    },
};
//# sourceMappingURL=mysql.providers.js.map