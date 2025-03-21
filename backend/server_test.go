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

		var server CertificationServer
		server.ServeHTTP(response, request)

		got := response.Body.String()

		want := `[{
			"id": "d1181969-6ae4-4a2f-9bb7-4e692aa278e7",
			"name": "Average Typist",
			"description": "This range includes 40-50% of all people. This certification ensures that you are typing as fast as the average person.",
			"range": "40-55 words per minute",
			"img": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
		},
		{
			"id": "11a26b4c-2795-4621-8e65-e16dfa2ff989",
			"name": "Certified Typist",
			"description": "This range includes 25-30% of people. At this level, you are faster than the majority but not yet at the professional level.",
			"range": "60-75 words per minute",
			"img": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
		},
		{
			"id": "7552a1fc-c2eb-4a26-b11b-8565c5cbc583",
			"name": "Proficient Typist",
			"description": "This range includes about 15-20% of people. You are well above average and typing at a proficient speed.",
			"range": "80-85 words per minute",
			"img": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
		}]`

		if !reflect.DeepEqual(got, want) {
			t.Errorf("got %q, want %q", got, want)
		}
	})
}
