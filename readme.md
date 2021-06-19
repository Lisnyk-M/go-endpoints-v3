### Working page: https://lisnyk-m-golang.herokuapp.com/   

### Description: 
This project allows to add and delete users. The project is written on a Golang and runs as an HTTP-server on a Heroku with the static page on a React-based. The project uses PostgreSQL database on a remote service https://www.elephantsql.com/      


### How to run:   
1. Git clone or download project from this link: https://github.com/Lisnyk-M/go-endpoints-v2.git     
2. Unpacked to any directory  
3. Go to the go-endpoints-v2-master   
4. To run this project entering: go run main.go   
   (you must have installed Go)    
5. Project will start on a http://localhost:8080/   

### Endpoints:
POST: /auth/register body: {user, email}   
GET /users   
GET /user/:id   
DELETE /user/:id   
