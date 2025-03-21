package models

import (
	"encoding/json"
	"io/fs"
)

type FileManager struct {
}

func (f FileManager) FetchAllCertifications(fileSystem fs.FS, path string) ([]Certification, error) {
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

func (f FileManager) FetchAllCertificationsCompleted(fileSystem fs.FS, path string) []CertificationComplete {
	data, _ := fs.ReadFile(fileSystem, path)

	var certificationsComplete []CertificationComplete
	json.Unmarshal(data, &certificationsComplete)
	return certificationsComplete
}

func (f FileManager) FetchCertification(ID string, fileSystem fs.FS, path string) (*Certification, error) {
	certifications, err := f.FetchAllCertifications(fileSystem, path)

	if err != nil {
		return nil, err
	}

	for _, certification := range certifications {
		if certification.ID == ID {
			return &certification, nil
		}
	}

	return nil, nil
}