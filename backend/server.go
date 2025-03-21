package main

import (
	"backend/models"
	"encoding/json"
	"net/http"
	"os"
)

type CertificationServer struct {
	fileManager models.DatabaseManager
}

func (p *CertificationServer) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	certifications, _ := p.fileManager.FetchAllCertifications(os.DirFS("database"), "certifications.json")
	out, _ := json.Marshal(certifications)
	w.Write([]byte(out))
}
