package services

import (
	"fmt"
	"net/http"
)

func CertificationServer(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "20")
}
