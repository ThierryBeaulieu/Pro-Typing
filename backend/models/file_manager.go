package models

import (
	"encoding/json"
	"log"
	"os"
)

type FileManager struct{}

func (f FileManager) FetchAllCertifications() []Certification {
	localDatabasePath := "database/certifications.json"

	data, err := os.ReadFile(localDatabasePath)

	if err != nil {
		log.Printf("Error while reading the file: %v", err)
		return nil
	}

	var certifications []Certification

	err = json.Unmarshal(data, &certifications)
	if err != nil {
		log.Printf("Error unmarshalling JSON: %v", err)
		return nil
	}

	return certifications
}

func (f FileManager) FetchAllCertificationsCompleted() []CertificationComplete {
	certificationsCompletedPath := "database/certifications_completed.json"

	data, err := os.ReadFile(certificationsCompletedPath)

	if err != nil {
		log.Printf("Error while reading the file: %v", err)
		return nil
	}

	var certificationsCompleted []CertificationComplete

	err = json.Unmarshal(data, &certificationsCompleted)
	if err != nil {
		log.Printf("Error unmarshalling JSON: %v", err)
		return nil
	}

	return certificationsCompleted
}

func (f FileManager) FetchCertification(ID string) *Certification {
	certifications := f.FetchAllCertifications()

	for _, certification := range certifications {
		if certification.ID == ID {
			return &certification
		}
	}

	return nil
}

func (f FileManager) Test() string {
	return "Interface File Manager tested\n"
}
