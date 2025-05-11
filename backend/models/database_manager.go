package models

import "io/fs"

type DatabaseManager interface {
	FetchThumbnail(ID string, fileSystem fs.FS, path string) (*Thumbnail, error)
	FetchCertification(ID string, fileSystem fs.FS, path string) (*Certification, error)
	FetchAllCertifications(fileSystem fs.FS, path string) ([]Certification, error)
	FetchAllCertificationsCompleted(fileSystem fs.FS, path string) []CertificationComplete
}
