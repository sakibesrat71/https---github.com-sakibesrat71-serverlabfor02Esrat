
# Server Programmings labs SWE 4537

A repository for SWE 4537 labs taken by :

Tasnim Ahmed,Lecturer

[Islamic University of Technolgy](https://www.iutoic-dhaka.edu/)




## Installation

Clone the repo.

Make sue you have npm installed. Run the following command on the terminal with in the same directory

```bash
  npm install 
```
This would locate the *package-lock* file and install all the dependencies.

Now run the following command

```bash
  npm start 
```
The server will get fired on port 5001. The project uses nodemon. So after every time you change the code.
It automatically detects the change and restarts the server.
## Lab Descriptions
The descriptions are provided below
### lab 1
- Basic of javascript
- Get system info js in node
### lab 2
 - Getting data from plain json file and posting it to an ejs file

### lab 3
- dynamically get data from ejs file.
- saving it into a json file
- sending those json data to another ejs file all using express

### lab 4
- mongodb get and post functionality
- mongodb update and delete functionality 
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_CONNECTION` : Provide your connection string

`TOKEN` : Provide a secret token for the JWT encryption

