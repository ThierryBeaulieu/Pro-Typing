package models

type DatabaseManager interface {
	Test() string
	FetchCertification(ID string) *Certification
	FetchAllCertifications() []Certification
	FetchAllCertificationsCompleted() []CertificationComplete
}
