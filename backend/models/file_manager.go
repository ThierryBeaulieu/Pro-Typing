package models

import (
	"testing/fstest"
)

type FileManager struct {
}

func (f FileManager) FetchAllCertifications(fileSystem fstest.MapFS) []Certification {
	return nil
}

func (f FileManager) FetchAllCertificationsCompleted(fileSystem fstest.MapFS) []CertificationComplete {
	return nil
}

func (f FileManager) FetchCertification(ID string) *Certification {
	return nil
}
