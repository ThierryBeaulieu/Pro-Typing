package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

func CertificationsRoute(r *gin.RouterGroup) {
	r.GET("/", func(c *gin.Context) {
		id := uuid.New()
		c.JSON(http.StatusOK, gin.H{"certifications": id})
	})

	r.POST("/", func(c *gin.Context) {
		c.JSON(http.StatusCreated, gin.H{"message": "Product created"})
	})
}
