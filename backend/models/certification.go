package models

type Certification struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Range       string `json:"range"`
	ImgSrc      string `json:"imgSrc"`
}

type CertificationComplete struct {
	ID string `json:"id"`
}
