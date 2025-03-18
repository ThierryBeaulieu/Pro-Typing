package models_test

import (
	"backend/models"
	"testing"
	"testing/fstest"
)

func TestFileManager(t *testing.T) {

	t.Run("Fetch all certifications", func(t *testing.T) {
		fs := fstest.MapFS{
			"database/certifications.json": {Data: []byte("[]")},
		}

		fileManager := models.FileManager{}

		want := 0
		got := len(fileManager.FetchAllCertifications(fs))

		if want != got {
			t.Errorf("got %d posts, wanted %d posts", got, want)
		}

	})

	t.Run("Fetch all certifications completed", func(t *testing.T) {

	})

	t.Run("Fetch a specified certifications", func(t *testing.T) {

	})
}
