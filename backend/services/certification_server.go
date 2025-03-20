package services

import (
	"fmt"
	"net/http"
	"strings"
)

func CertificationServer(w http.ResponseWriter, r *http.Request) {
	player := strings.TrimPrefix(r.URL.Path, "/players/")
	fmt.Fprint(w, GetCertificationServer(player))
}

func GetCertificationServer(name string) string {
	if name == "Pepper" {
		return "20"
	}

	if name == "Floyd" {
		return "10"
	}

	return ""
}
