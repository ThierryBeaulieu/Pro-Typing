package models

type DatabaseManager interface {
	FetchCertification(ID string) *Certification
	FetchAllCertifications() []Certification
	FetchAllCertificationsCompleted() []CertificationComplete
}
