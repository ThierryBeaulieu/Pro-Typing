package models

type Certification struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Range       string `json:"range"`
	ImgID       string `json:"imgID"`
}

type CertificationComplete struct {
	ID string `json:"id"`
}
