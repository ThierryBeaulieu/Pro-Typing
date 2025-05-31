package models

type Thumbnail struct {
	ID       string `json:"id"`
	FileName string `json:"fileName"`
	Base64   string `json:"base64"`
}
