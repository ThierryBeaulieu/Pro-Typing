package main

import (
	"backend/models"
	"fmt"
	"os"
)

type DatabaseManager interface {
	fetchAllCertifications() []models.Certification
	fetchAllCertificationsCompleted() []models.CertificationComplete
}

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func main() {

	d1 := []byte("hello\ngo\n")
	err := os.WriteFile("/tmp/dat1", d1, 0644)
	check(err)

	f, err := os.Create("/tmp/dat2")
	check(err)
	defer f.Close()

	fmt.Print("hello world\n")

	/*
		r := gin.Default()

		routes.CertificationsRoute(r.Group("/certifications"))

		r.Run(":3000")
	*/
}
