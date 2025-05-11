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

var thumbnail1 models.Thumbnail = models.Thumbnail{
	ID:       "1e0c8f97-9ec2-4353-b8eb-482b2a45c9c5",
	FileName: "running-man.jpeg",
	Base64:   "base64-img",
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

func (d *DatabaseStub) FetchThumbnail(ID string, fileSystem fs.FS, path string) (*models.Thumbnail, error) {
	if ID == "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" {
		return nil, nil
	}
	return &thumbnail1, nil
}

func (d *DatabaseStub) FetchCertification(ID string, fileSystem fs.FS, path string) (*models.Certification, error) {
	if ID == "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" {
		return nil, nil
	}

	return &certification1, nil
}

func (d *DatabaseStub) FetchAllCertifications(fileSystem fs.FS, path string) ([]models.Certification, error) {
	return []models.Certification{certification1, certification2}, nil
}

func (d *DatabaseStub) FetchAllCertificationsCompleted(fileSystem fs.FS, path string) []models.CertificationComplete {
	return nil
}

func TestCertificationServer(t *testing.T) {

	t.Run("returns the version of the server when no url is specified", func(t *testing.T) {
		request, _ := http.NewRequest(http.MethodGet, "/", nil)
		response := httptest.NewRecorder()

		var database DatabaseStub

		server := NewCertificationServer(&database)
		server.ServeHTTP(response, request)

		got := response.Body.String()

		want := `version 1.0.1`

		assertBodyEqual(t, got, want)
	})
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
		request, _ := http.NewRequest(http.MethodGet, "/certification/d1181969-6ae4-4a2f-9bb7-4e692aa278e7", nil)
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

	t.Run("when returning a certification, the content-type should be a json", func(t *testing.T) {
		request, _ := http.NewRequest(http.MethodGet, "/certification/d1181969-6ae4-4a2f-9bb7-4e692aa278e7", nil)
		response := httptest.NewRecorder()

		var database DatabaseStub

		server := NewCertificationServer(&database)
		server.ServeHTTP(response, request)

		got := response.Header().Get("Content-Type")
		want := "application/json"

		assertContentTypeEqual(t, got, want)
	})

	t.Run("when returning all certifications, the content-type should be a json", func(t *testing.T) {
		request, _ := http.NewRequest(http.MethodGet, "/certifications", nil)
		response := httptest.NewRecorder()

		var database DatabaseStub

		server := NewCertificationServer(&database)
		server.ServeHTTP(response, request)

		got := response.Header().Get("Content-Type")
		want := "application/json"

		assertContentTypeEqual(t, got, want)
	})

	t.Run("returns 404 on missing certification", func(t *testing.T) {
		request, _ := http.NewRequest(http.MethodGet, "/certification/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", nil)
		response := httptest.NewRecorder()

		var database DatabaseStub

		server := NewCertificationServer(&database)
		server.ServeHTTP(response, request)

		got := response.Code
		want := http.StatusNotFound

		assertCodeEqual(t, got, want)
	})

	t.Run("should return a thumbnail should be a json", func(t *testing.T) {
		request, _ := http.NewRequest(http.MethodGet, "/asset/1e0c8f97-9ec2-4353-b8eb-482b2a45c9c5", nil)
		response := httptest.NewRecorder()

		var database DatabaseStub

		server := NewCertificationServer(&database)
		server.ServeHTTP(response, request)

		got := response.Header().Get("Content-Type")
		want := "application/json"

		assertContentTypeEqual(t, got, want)
	})

	t.Run("should return a specific thumbnail", func(t *testing.T) {
		request, _ := http.NewRequest(http.MethodGet, "/asset/1e0c8f97-9ec2-4353-b8eb-482b2a45c9c5", nil)
		response := httptest.NewRecorder()

		var database DatabaseStub

		server := NewCertificationServer(&database)
		server.ServeHTTP(response, request)

		got := response.Body.String()

		want := `{
			"id": "1e0c8f97-9ec2-4353-b8eb-482b2a45c9c5",
			"fileName": "running-man.jpeg",
			"base64": "base64-img"
		}`

		assertBodyEqual(t, got, want)
	})

	t.Run("returns 404 on missing thumbnail", func(t *testing.T) {
		request, _ := http.NewRequest(http.MethodGet, "/asset/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", nil)
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

func assertContentTypeEqual(t *testing.T, got string, want string) {
	if got != want {
		t.Errorf("\nGot Return Content-Type %s\nWant Return Content-Type %s", got, want)
	}
}
