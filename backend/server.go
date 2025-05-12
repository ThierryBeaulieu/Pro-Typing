package main

import (
	"backend/models"
	"encoding/json"
	"log"
	"net/http"
	"os"
	"strings"
)

type CertificationServer struct {
	fileManager models.DatabaseManager
	mux         *http.ServeMux
}

func enableCors(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:8080")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
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
	p.mux.HandleFunc("/asset/", p.handleAsset)
	p.mux.HandleFunc("/certification/", p.handleCertification)
	p.mux.HandleFunc("/certifications", p.handleCertifications)
}

func (p *CertificationServer) handleDefault(w http.ResponseWriter, r *http.Request) {
	log.Println("Handle Default request")
	w.Write([]byte("version 1.0.2"))
}

func (p *CertificationServer) handleAsset(w http.ResponseWriter, r *http.Request) {
	log.Println("Handle Asset request")

	thumbnailID := strings.TrimPrefix(r.URL.Path, "/asset/")

	thumbnail, err := p.fileManager.FetchThumbnail(thumbnailID, os.DirFS("database"), "thumbnails.json")

	if thumbnail == nil || err != nil {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	enableCors(w)
	w.Header().Set("Content-Type", "application/json")

	out, _ := json.Marshal(thumbnail)
	w.Write([]byte(out))
}

func (p *CertificationServer) handleCertification(w http.ResponseWriter, r *http.Request) {
	log.Println("Handle Certification request")

	certificationID := strings.TrimPrefix(r.URL.Path, "/certification/")

	certification, err := p.fileManager.FetchCertification(certificationID, os.DirFS("database"), "certifications.json")

	if certification == nil || err != nil {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	enableCors(w)
	w.Header().Set("Content-Type", "application/json")

	out, _ := json.Marshal(certification)
	w.Write([]byte(out))
}

func (p *CertificationServer) handleCertifications(w http.ResponseWriter, r *http.Request) {
	log.Println("Handle Certifications request")
	certifications, _ := p.fileManager.FetchAllCertifications(os.DirFS("database"), "certifications.json")
	out, _ := json.Marshal(certifications)

	enableCors(w)
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(out))
}
