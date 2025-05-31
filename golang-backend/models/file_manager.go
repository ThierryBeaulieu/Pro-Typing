package models

import (
	b64 "encoding/base64"
	"encoding/json"
	"io/fs"
	"log"
	"os"
)

type FileManager struct {
}

func (f FileManager) FetchThumbnail(ID string, fileSystem fs.FS, path string) (*Thumbnail, error) {
	data, err := fs.ReadFile(fileSystem, path)

	if err != nil {
		return nil, err
	}

	var thumbnails []Thumbnail
	err = json.Unmarshal(data, &thumbnails)

	if err != nil {
		return nil, err
	}

	for _, thumbnail := range thumbnails {
		if thumbnail.ID == ID {
			assetFileSystem := os.DirFS("assets")
			imgPath := "certifications-thumbnail/" + thumbnail.FileName
			log.Println(imgPath)
			rawImg, err := fs.ReadFile(assetFileSystem, imgPath)

			if rawImg == nil || err != nil {
				return &thumbnail, nil
			}

			thumbnail.Base64 = b64.StdEncoding.EncodeToString([]byte(rawImg))
			return &thumbnail, nil
		}
	}
	return nil, nil

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
