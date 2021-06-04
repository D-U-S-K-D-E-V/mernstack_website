This verison of the application is to address the issue of React deprecating the 'Super' key word, making it difficult to pass props down from class to subclass in Javascript. Thus, we are moving to React Hooks/Functional components. In addition, we are implementing:

a mail server, 
file server, 
new database, 
updated React build with Webpack 5 and babel, 
permissions blocks architecture,
and my new context/statemanegment system.

Servers:

Mail: 
    - Port: 2000
    - Address: F:\Dusk Design And Development\Clients\Encircle\Development\encircle-app\Mail_Server
DB: 
    - Port: 3000
    - Address: F:\Dusk Design And Development\Clients\Encircle\Development\encircle-app\DB_Server

UI: 
    - Port: 4000
    - Address: F:\Dusk Design And Development\Clients\Encircle\Development\encircle-app\UI_Server

File: 
    - Port: 5000
    - Address: F:\Dusk Design And Development\Clients\Encircle\Development\encircle-app\File_Server

Socket: 
    - Port: 6000
    - Address: F:\Dusk Design And Development\Clients\Encircle\Development\encircle-app\Socket_Server

Commands:

    npm start

Usage:

    1. Open Node Command Prompt
    2. Type F: and press "Enter"
    3. Type cd and enter "Dusk Design And Development\Clients\Encircle\Development\encircle-app" then press "Enter"
    4. Type cd and enter your server of choice (Example: cd UI_Server) then press "Enter"
    5. Type NPM start and press "Enter"


Server Notes:

File Server:

    Get:

        To Get Image Files, path is: localhost:5000/file/image/{$filename}.jpg
        Example: http://localhost:5000/file/image/mixingboard.jpg

        To Get JSON Files, path is localhost:5000/file/JSON/{$filename}

    Post:

        