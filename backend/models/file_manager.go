package models

import (
	"encoding/json"
	"io/fs"
	"testing/fstest"
)

type FileManager struct {
}

func (f FileManager) FetchAllCertifications(fileSystem fstest.MapFS, path string) ([]Certification, error) {
	data, err := fs.ReadFile(fileSystem, path)

	if err != nil {
		return nil, err
	}

	var certifications []Certification
	err = json.Unmarshal(data, &certifications)

	if err != nil {
		return nil, err
	}

	return certifications, err
}

func (f FileManager) FetchAllCertificationsCompleted(fileSystem fstest.MapFS) []CertificationComplete {
	return nil
}

func (f FileManager) FetchCertification(ID string) *Certification {
	return nil
}
