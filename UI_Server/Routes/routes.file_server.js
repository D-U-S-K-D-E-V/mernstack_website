export const getFileRoutes = {
    images: function(fileName){
        return `http://localhost:5000/file/image/${fileName}`
    },
    objects: function(fileName){
        return `http://localhost:5000/file/json/${fileName}`
    }
}

export const postFileRoutes = {
    images: `http://localhost:5000/file/upload/image`,
    objects: `http://localhost:5000/file/upload/json`
}