package controllers

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func HelloWorld(ctx *gin.Context) {
	log.Printf("%+v", ctx)
	ctx.String(http.StatusOK, "Hello world! 🙌")
}