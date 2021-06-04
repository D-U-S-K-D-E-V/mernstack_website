import { runExpress } from './Server/Express/express.setup.js';
import { testMySQL } from './Server/MySQL/mysql.setup.js';

runExpress();
testMySQL();