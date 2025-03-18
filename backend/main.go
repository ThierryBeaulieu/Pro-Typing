package main

import (
	"backend/models"
	"fmt"
)

func main() {

	var fileManager models.DatabaseManager = models.FileManager{}

	certifications := fileManager.FetchAllCertifications()
	fmt.Println(len(certifications))

	certificationsCompleted := fileManager.FetchAllCertificationsCompleted()
	fmt.Println(certificationsCompleted)

	certification := fileManager.FetchCertification("d1181969-6ae4-4a2f-9bb7-4e692aa278e7")
	fmt.Println(certification)
	/*
		r := gin.Default()

		routes.CertificationsRoute(r.Group("/certifications"))

		r.Run(":3000")
	*/
}
