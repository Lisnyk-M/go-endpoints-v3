package main

import (
	"go-endpoints-v2/api"
	"go-endpoints-v2/controllers"
	_ "go-endpoints-v2/http_func"
	"go-endpoints-v2/server"

	"io/ioutil"
	_ "log"
	"net/http"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func RootHandler(res http.ResponseWriter, req *http.Request) {
	file, _ := ioutil.ReadFile("public/index.html")
	res.Write(file)
}

func main() {
	api.Db_connection()
	r := gin.Default()
	r.Use(server.CORS())

	r.Use(static.Serve("/", static.LocalFile("./public", true)))
	v1 := r.Group("/")
	{
		v1.GET("/users", controllers.GetUsers)
		v1.GET("/user/:id", controllers.GetUserById)
		v1.GET("/auth/get-email/:email", controllers.GetEmail)
		v1.DELETE("/user/:id", controllers.DeleteUserById)
		v1.POST("/auth/register", controllers.Register)
	}

	r.Run()
}
