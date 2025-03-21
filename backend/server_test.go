package main

import (
	"backend/models"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"reflect"
	"testing"
)

func getStubCertification() models.Certification {
	var stubCertification string = `{
		"id": "d1181969-6ae4-4a2f-9bb7-4e692aa278e7",
		"name": "Average Typist",
		"description": "This range includes 40-50% of all people. This certification ensures that you are typing as fast as the average person.",
		"range": "40-55 words per minute",
		"img": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
	  }`

	var certification models.Certification
	json.Unmarshal([]byte(stubCertification), &certification)
	return certification
}

func TestCertificationServer(t *testing.T) {
	t.Run("returns list of available certifications", func(t *testing.T) {
		request, _ := http.NewRequest(http.MethodGet, "/certifications", nil)
		response := httptest.NewRecorder()

		CertificationServer(response, request)

		got := response.Body.String()

		want := "["

		if !reflect.DeepEqual(got, want) {
			t.Errorf("got %q, want %q", got, want)
		}
	})
}
