package models

import "io/fs"

type DatabaseManager interface {
	FetchCertification(ID string, fileSystem fs.FS, path string) (*Certification, error)
	FetchAllCertifications(fileSystem fs.FS, path string) ([]Certification, error)
	FetchAllCertificationsCompleted(fileSystem fs.FS, path string) []CertificationComplete
}
