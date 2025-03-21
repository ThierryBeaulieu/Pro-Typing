package main

import (
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestCertificationServer(t *testing.T) {
	t.Run("returns list of available certifications", func(t *testing.T) {
		request, _ := http.NewRequest(http.MethodGet, "/certifications", nil)
		response := httptest.NewRecorder()

		CertificationServer(response, request)

		got := response.Body.String()
		want := ""

		if got != want {
			t.Errorf("got %q, want %q", got, want)
		}
	})
}
