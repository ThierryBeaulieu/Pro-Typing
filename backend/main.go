package main

import (
	"log"
	"net/http"
)

// continue
// https://quii.gitbook.io/learn-go-with-tests/build-an-application/http-server

func main() {
	handler := http.HandlerFunc(CertificationServer)
	log.Fatal(http.ListenAndServe(":5000", handler))
}
