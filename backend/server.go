package main

import (
	"net/http"
)

func CertificationServer(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("[]"))
}
