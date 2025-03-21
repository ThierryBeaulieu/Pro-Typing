package main

import (
	"backend/models"
	"io/fs"
	"net/http"
	"net/http/httptest"
	"reflect"
	"strings"
	"testing"
)

type DatabaseStub struct {
}

func (d *DatabaseStub) FetchCertification(ID string, fileSystem fs.FS, path string) (*models.Certification, error) {
	return nil, nil
}

func (d *DatabaseStub) FetchAllCertifications(fileSystem fs.FS, path string) ([]models.Certification, error) {

	certification1 := models.Certification{ID: "d1181969-6ae4-4a2f-9bb7-4e692aa278e7",
		Name:        "Average Typist",
		Description: "This range includes 40-50% of all people. This certification ensures that you are typing as fast as the average person.",
		Range:       "40-55 words per minute",
		ImgID:       "running-man.jpeg"}
	return []models.Certification{certification1}, nil
}

func (d *DatabaseStub) FetchAllCertificationsCompleted(fileSystem fs.FS, path string) []models.CertificationComplete {
	return nil
}

func TestCertificationServer(t *testing.T) {
	t.Run("returns list of available certifications", func(t *testing.T) {
		request, _ := http.NewRequest(http.MethodGet, "/certifications", nil)
		response := httptest.NewRecorder()

		var database DatabaseStub

		server := CertificationServer{&database}
		server.ServeHTTP(response, request)

		got := response.Body.String()

		want := `[{
			"id": "d1181969-6ae4-4a2f-9bb7-4e692aa278e7",
			"name": "Average Typist",
			"description": "This range includes 40-50% of all people. This certification ensures that you are typing as fast as the average person.",
			"range": "40-55 words per minute",
			"imgID": "running-man.jpeg"
		}]`

		got = strings.Join(strings.Fields(got), "")
		want = strings.Join(strings.Fields(want), "")

		if !reflect.DeepEqual(got, want) {
			t.Errorf("got %q, want %q", got, want)
		}
	})

}
