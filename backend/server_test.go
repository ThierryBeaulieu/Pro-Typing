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

var certification1 models.Certification = models.Certification{ID: "d1181969-6ae4-4a2f-9bb7-4e692aa278e7",
	Name:        "Average Typist",
	Description: "This range includes 40-50% of all people. This certification ensures that you are typing as fast as the average person.",
	Range:       "40-55 words per minute",
	ImgID:       "running-man.jpeg"}

var certification2 models.Certification = models.Certification{ID: "11a26b4c-2795-4621-8e65-e16dfa2ff989",
	Name:        "Certified Typist",
	Description: "This range includes 25-30% of people. At this level, you are faster than the majority but not yet at the professional level.",
	Range:       "60-75 words per minute",
	ImgID:       "skate-board.png"}

func (d *DatabaseStub) FetchCertification(ID string, fileSystem fs.FS, path string) (*models.Certification, error) {
	return &certification1, nil
}

func (d *DatabaseStub) FetchAllCertifications(fileSystem fs.FS, path string) ([]models.Certification, error) {

	return []models.Certification{certification1, certification2}, nil
}

func (d *DatabaseStub) FetchAllCertificationsCompleted(fileSystem fs.FS, path string) []models.CertificationComplete {
	return nil
}

func TestCertificationServer(t *testing.T) {
	t.Run("returns list of available certifications", func(t *testing.T) {
		request, _ := http.NewRequest(http.MethodGet, "/certifications", nil)
		response := httptest.NewRecorder()

		var database DatabaseStub

		server := NewCertificationServer(&database)
		server.ServeHTTP(response, request)

		got := response.Body.String()

		want := `[
			{
				"id": "d1181969-6ae4-4a2f-9bb7-4e692aa278e7",
				"name": "Average Typist",
				"description": "This range includes 40-50% of all people. This certification ensures that you are typing as fast as the average person.",
				"range": "40-55 words per minute",
				"imgID": "running-man.jpeg"
			},
			{
				"id": "11a26b4c-2795-4621-8e65-e16dfa2ff989",
				"name": "Certified Typist",
				"description": "This range includes 25-30% of people. At this level, you are faster than the majority but not yet at the professional level.",
				"range": "60-75 words per minute",
				"imgID": "skate-board.png"
			}
		]`

		assertBodyEqual(t, got, want)
	})

	t.Run("returns a specific certifications", func(t *testing.T) {
		request, _ := http.NewRequest(http.MethodGet, "/certification", nil)
		response := httptest.NewRecorder()

		var database DatabaseStub

		server := NewCertificationServer(&database)
		server.ServeHTTP(response, request)

		got := response.Body.String()

		want := `{
			"id": "d1181969-6ae4-4a2f-9bb7-4e692aa278e7",
			"name": "Average Typist",
			"description": "This range includes 40-50% of all people. This certification ensures that you are typing as fast as the average person.",
			"range": "40-55 words per minute",
			"imgID": "running-man.jpeg"
		}`

		assertBodyEqual(t, got, want)
	})

	t.Run("returns 404 on missing certification", func(t *testing.T) {
		request, _ := http.NewRequest(http.MethodGet, "/certification", nil)
		response := httptest.NewRecorder()

		var database DatabaseStub

		server := NewCertificationServer(&database)
		server.ServeHTTP(response, request)

		got := response.Code
		want := http.StatusNotFound

		assertCodeEqual(t, got, want)
	})

}

func assertBodyEqual(t *testing.T, got string, want string) {
	got = strings.Join(strings.Fields(got), "")
	want = strings.Join(strings.Fields(want), "")

	if !reflect.DeepEqual(got, want) {
		t.Errorf("\nGot %q\nWant %q", got, want)
	}
}

func assertCodeEqual(t *testing.T, got int, want int) {
	if got != want {
		t.Errorf("\nGot Return Code %d\nWant Return Code %d", got, want)
	}
}
