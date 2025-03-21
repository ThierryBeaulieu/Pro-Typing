package main

import (
	"backend/models"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
)

type CertificationServer struct {
	fileManager models.DatabaseManager
	mux         *http.ServeMux
}

func NewCertificationServer(fileManager models.DatabaseManager) *CertificationServer {
	server := &CertificationServer{
		fileManager: fileManager,
		mux:         http.NewServeMux(),
	}

	server.routes()
	return server
}

func (p *CertificationServer) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	p.mux.ServeHTTP(w, r)
}

func (p *CertificationServer) routes() {
	p.mux.HandleFunc("/", p.handleDefault)
	p.mux.HandleFunc("/certifications", p.handleCertifications)
	p.mux.HandleFunc("/certification", p.handleCertification)
}

func (p *CertificationServer) handleCertifications(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Handle Certifications request")
	certifications, _ := p.fileManager.FetchAllCertifications(os.DirFS("database"), "certifications.json")
	out, _ := json.Marshal(certifications)
	w.Write([]byte(out))
}

func (p *CertificationServer) handleDefault(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Handle Default request")
	w.Write([]byte(""))
}

func (p *CertificationServer) handleCertification(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Handle Certification request")
	certification, _ := p.fileManager.FetchCertification("d1181969-6ae4-4a2f-9bb7-4e692aa278e7", os.DirFS("database"), "certifications.json")
	out, _ := json.Marshal(certification)
	w.Write([]byte(out))
}
