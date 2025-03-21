package main

import (
	"backend/models"
	"log"
	"net/http"
)

func main() {

	fileManager := models.FileManager{}

	server := &CertificationServer{fileManager}
	log.Fatal(http.ListenAndServe(":5001", server))
}
