package models

import (
	"encoding/json"
	"io/fs"
	"testing/fstest"
)

type FileManager struct {
}

func (f FileManager) FetchAllCertifications(fileSystem fstest.MapFS) []Certification {
	data, _ := fs.ReadFile(fileSystem, ".")

	var certifications []Certification
	json.Unmarshal(data, &certifications)

	return certifications
}

func (f FileManager) FetchAllCertificationsCompleted(fileSystem fstest.MapFS) []CertificationComplete {
	return nil
}

func (f FileManager) FetchCertification(ID string) *Certification {
	return nil
}
