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
	// r.Static("/", "./public")

	// http.HandleFunc("/", RootHandler)

	// if err := http.ListenAndServe(":8080", nil); err != nil {
	// 	log.Fatal(err)
	// }

	r.Use(static.Serve("/", static.LocalFile("./public", true)))
	v1 := r.Group("/")
	{
		v1.GET("/users", controllers.GetUsers)
		v1.GET("/user/:id", controllers.GetUserById)
		v1.GET("/auth/get-email/:email", controllers.GetEmail)
		v1.DELETE("/user/:id", controllers.DeleteUserById)
		v1.POST("/auth/register", controllers.Register)
	}

	// r.Use(static.Serve("/", static.LocalFile("./public", true)))
	// r.GET("/users", controllers.GetUsers)
	// r.GET("/user/:id", controllers.GetUserById)
	// r.GET("/auth/get-email/:email", controllers.GetEmail)
	// r.DELETE("/user/:id", controllers.DeleteUserById)
	// r.POST("/auth/register", controllers.Register)

	// http_func.Send()
	// config := cors.DefaultConfig()
	// config.AllowOrigins = []string{"http://google.com"}
	// // config.AllowOrigins == []string{"http://google.com", "http://facebook.com"}

	// router.Use(cors.New(config))

	// r.Run(":443")
	r.Run()
}
