package main

import (
	"server/controllers"

	"github.com/gin-gonic/gin"
	"github.com/olahol/melody"
)

type GopherInfo struct {
	ID, X, Y, Z string
}

type Test struct {
	message string
	id string
}

func main() {
	router := gin.Default()
	m := melody.New()

	router.GET("/ws", func(ctx *gin.Context) {
		m.HandleRequest(ctx.Writer, ctx.Request)
	})

	API := router.Group("/api")
	API.GET("/hello-world", controllers.HelloWorld)

	router.Run(":3000")
}