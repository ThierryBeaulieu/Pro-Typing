package main

import (
	"backend/models"
	"log"
	"net/http"
)

func main() {
	fileManager := models.FileManager{}
	server := NewCertificationServer(fileManager)
	log.Fatal(http.ListenAndServe(":8080", server))
}
