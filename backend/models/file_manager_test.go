package models_test

import (
	"backend/models"
	"reflect"
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
		}
	]`)
	return data
}

func TestFileManager(t *testing.T) {

	t.Run("Fetch all certifications should return the same number of verifications", func(t *testing.T) {

		path := "database/certifications.json"
		fs := fstest.MapFS{
			path: {Data: []byte(GetStubData())},
		}

		fileManager := models.FileManager{}

		want := 3
		got := len(fileManager.FetchAllCertifications(fs, path))

		if want != got {
			t.Errorf("got %d certification, wanted %d certification", got, want)
		}
	})

	t.Run("Fetch all certifications should contain the same information", func(t *testing.T) {

		path := "database/certifications.json"
		fs := fstest.MapFS{
			path: {Data: []byte(GetStubData())},
		}

		fileManager := models.FileManager{}

		want := models.Certification{
			ID:          "d1181969-6ae4-4a2f-9bb7-4e692aa278e7",
			Name:        "Average Typist",
			Description: "This range includes 40-50% of all people. This certification ensures that you are typing as fast as the average person.",
			Range:       "40-55 words per minute",
			Img:         "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=",
		}

		got := fileManager.FetchAllCertifications(fs, path)[0]

		if !reflect.DeepEqual(want, got) {
			t.Errorf("got %v certification, wanted %v certification", got, want)
		}
	})

	t.Run("Fetch all certifications completed", func(t *testing.T) {

	})

	t.Run("Fetch a specified certifications", func(t *testing.T) {

	})
}
