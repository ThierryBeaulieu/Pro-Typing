package models_test

import (
	"backend/models"
	"testing"
	"testing/fstest"
)

func GetStubData() []byte {
	data := []byte(`[
		{
			"id": "d1181969-6ae4-4a2f-9bb7-4e692aa278e7",
			"name": "Average Typist",
			"description": "This range includes 40-50% of all people. This certification ensures that you are typing as fast as the average person.",
			"range": "40-55 words per minute",
			"img": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
		}
	]`)
	return data
}

func TestFileManager(t *testing.T) {

	t.Run("Fetch all certifications", func(t *testing.T) {
		fs := fstest.MapFS{
			"database/certifications.json": {Data: []byte(GetStubData())},
		}

		fileManager := models.FileManager{}

		want := 1
		got := len(fileManager.FetchAllCertifications(fs))

		if want != got {
			t.Errorf("got %d certification, wanted %d certification", got, want)
		}

	})

	t.Run("Fetch all certifications completed", func(t *testing.T) {

	})

	t.Run("Fetch a specified certifications", func(t *testing.T) {

	})
}
