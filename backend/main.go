package main

import (
	"backend/models"
	"fmt"
)

func main() {

	var fileManager models.DatabaseManager = models.FileManager{}

	certifications := fileManager.FetchAllCertifications()

	fmt.Println(len(certifications))
	/*
		r := gin.Default()

		routes.CertificationsRoute(r.Group("/certifications"))

		r.Run(":3000")
	*/
}
