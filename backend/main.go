package main

import "github.com/gin-gonic/gin"
import "net/http"

func main() {
	r := gin.Default()

	r.GET("/recipes", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})

    r.Run(":8080") // listen and serve on 0.0.0.0:8080
}
