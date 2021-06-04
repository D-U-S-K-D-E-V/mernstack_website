import React, { useState } from 'react';
import { getFileRoutes } from '../../../../Routes/routes.file_server.js'
import styles from './pages.image_library.view.css';

function ImageLibraryView(props){
    
    const [ searchTerm, setSearchTerm ] = useState("");

    function searchImages(){

        fetch(getFileRoutes.images)

    }

    return(
        <div>

        </div>
    )
}

export default ImageLibraryView;