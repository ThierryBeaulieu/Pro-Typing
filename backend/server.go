package main

import (
	"backend/models"
	"encoding/json"
	"net/http"
)

type CertificationServer struct {
	fileManager models.DatabaseManager
}

func (p *CertificationServer) ServeHTTP(w http.ResponseWriter, r *http.Request) {

	certifications := p.fileManager.FetchAllCertifications()
	out, _ := json.Marshal(certifications)
	w.Write([]byte(out))
}
