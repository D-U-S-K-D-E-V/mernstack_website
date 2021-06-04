# MySQL API Template
This template is meant to be an easy setup development API for an application to execute queries against a MySQL database.

## Technologies

Node.js

Express.js

MySQL

CORS

Body Parser

NodeMon

## Setup
### MySQL
Enter a password, username, database name, and port for your MySQL database into the "mysql.configure.js" file.

### Express Routes
In the "Library" folder, add folder, or file to store queries you'd like to use. In this case, the "Example" folder holds a "query.example.js" file, which stores select, insert, and update statements for fictional tables. These queries will be accessible at the end of the route defined in the query's function. 

An example route looks like this: http://localhost:3000/exampleRoute/selectTest

The beginning of the route is of course the address of the host, "http://localhost:3000". The second part of the route is "/exampleRoute". This part of the route is stored, and utilized, by the "express.route.js" file in the Express folder. In the example "query.example.js" file, the "router.get" function takes the "/selectTest" route as a parameter. This is the last part of the route defined for this query. Once the routes are created, any query you want to execute on your database can be executed.