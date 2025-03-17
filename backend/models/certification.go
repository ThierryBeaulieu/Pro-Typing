package models

type Certification struct {
	ID          string
	Name        string
	Description string
	Range       string
	Img         string
}

type CertificationComplete struct {
	ID string
}
