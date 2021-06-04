import { MailTest } from './express.library.js';

export function appRouter(db){
    db.use("/mail", MailTest)
}