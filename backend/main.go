package main

import (
	"backend/models"
	"encoding/json"
	"fmt"
)

func main() {

	var fileManager models.DatabaseManager = models.FileManager{}

	var certifications []models.Certification = fileManager.FetchAllCertifications()
	fmt.Println(certifications)

	jsonBytes, err := json.Marshal(certifications)

	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	fmt.Println(string(jsonBytes))

	/*
		r := gin.Default()

		routes.CertificationsRoute(r.Group("/certifications"))

		r.Run(":3000")
	*/
}
