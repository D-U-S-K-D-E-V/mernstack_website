import { fileUpload } from '../Library/library.file_upload.js';

export function appRouter(db){
    db.use("/file", fileUpload);
}