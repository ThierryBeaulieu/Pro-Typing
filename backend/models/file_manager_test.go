package models_test

import (
	"backend/models"
	"reflect"
	"testing"
	"testing/fstest"
)

func TestFileManager(t *testing.T) {

	getStubJSONCertification := func(t testing.TB) []byte {
		t.Helper()
		data := []byte(`[
			{
				"id": "d1181969-6ae4-4a2f-9bb7-4e692aa278e7",
				"name": "Average Typist",
				"description": "This range includes 40-50% of all people. This certification ensures that you are typing as fast as the average person.",
				"range": "40-55 words per minute",
				"imgSrc": "running-man.jpeg"
			},
			{
				"id": "11a26b4c-2795-4621-8e65-e16dfa2ff989",
				"name": "Certified Typist",
				"description": "This range includes 25-30% of people. At this level, you are faster than the majority but not yet at the professional level.",
				"range": "60-75 words per minute",
				"imgSrc": "skate-board.png"
			},
			{
				"id": "7552a1fc-c2eb-4a26-b11b-8565c5cbc583",
				"name": "Proficient Typist",
				"description": "This range includes about 15-20% of people. You are well above average and typing at a proficient speed.",
				"range": "80-85 words per minute",
				"imgSrc": "cycling-man.jpeg"
			}
		]`)
		return data
	}

	getStubCertification := func(t *testing.T) models.Certification {
		t.Helper()

		return models.Certification{
			ID:          "d1181969-6ae4-4a2f-9bb7-4e692aa278e7",
			Name:        "Average Typist",
			Description: "This range includes 40-50% of all people. This certification ensures that you are typing as fast as the average person.",
			Range:       "40-55 words per minute",
			ImgSrc:      "running-man.jpeg",
		}
	}

	getStubJSONCertificationCompleted := func(t testing.TB) []byte {
		t.Helper()
		data := []byte(`[
			{
				"id": "11a26b4c-2795-4621-8e65-e16dfa2ff989"
			},
			{
				"id": "d1181969-6ae4-4a2f-9bb7-4e692aa278e7"
			}
			]
			`)
		return data
	}

	getStubCertificationCompleted := func(t *testing.T) []models.CertificationComplete {
		t.Helper()

		var certifications []models.CertificationComplete

		certifications = append(certifications, models.CertificationComplete{
			ID: "11a26b4c-2795-4621-8e65-e16dfa2ff989",
		})

		certifications = append(certifications, models.CertificationComplete{
			ID: "d1181969-6ae4-4a2f-9bb7-4e692aa278e7",
		})

		return certifications
	}

	t.Run("Fetch all certifications should return the same number of verifications", func(t *testing.T) {

		path := "database/certifications.json"
		fs := fstest.MapFS{
			path: {Data: []byte(getStubJSONCertification(t))},
		}

		fileManager := models.FileManager{}

		want := 3
		got, _ := fileManager.FetchAllCertifications(fs, path)

		if want != len(got) {
			t.Errorf("got %d certification, wanted %d certification", len(got), want)
		}
	})

	t.Run("Fetch all certifications should contain the same information", func(t *testing.T) {

		path := "database/certifications.json"
		fs := fstest.MapFS{
			path: {Data: []byte(getStubJSONCertification(t))},
		}

		fileManager := models.FileManager{}

		want := getStubCertification(t)

		got, _ := fileManager.FetchAllCertifications(fs, path)

		if !reflect.DeepEqual(want, got[0]) {
			t.Errorf("got %v certification, wanted %v certification", got, want)
		}
	})

	t.Run("Fetch all certification should return an error if the path is not correct", func(t *testing.T) {

		correctPath := "database/certifications.json"
		wrongPath := "database/cert.json"
		fs := fstest.MapFS{
			correctPath: {Data: []byte(getStubJSONCertification(t))},
		}

		fileManager := models.FileManager{}
		got, err := fileManager.FetchAllCertifications(fs, wrongPath)

		if err == nil {
			t.Errorf("got %v certification instead of returning an error", got)
		}
	})

	t.Run("Fetch all certification should return an error if the content of the file is wrong", func(t *testing.T) {

		path := "database/certifications.json"
		fs := fstest.MapFS{
			path: {Data: []byte("[{'bad content'}]")},
		}

		fileManager := models.FileManager{}
		got, err := fileManager.FetchAllCertifications(fs, path)

		if err == nil {
			t.Errorf("got %v certification instead of returning an error", got)
		}
	})

	t.Run("Fetch all certifications completed", func(t *testing.T) {

		path := "database/certifications_completed.json"
		fs := fstest.MapFS{
			path: {Data: []byte(getStubJSONCertificationCompleted(t))},
		}

		want := 2
		fileManager := models.FileManager{}
		got := fileManager.FetchAllCertificationsCompleted(fs, path)

		if want != len(got) {
			t.Errorf("got %d certification completed, wanted %d certification completed", len(got), want)
		}
	})

	t.Run("Fetch All Completed Certification should have the same content IDs", func(t *testing.T) {

		path := "database/certifications_completed.json"
		fs := fstest.MapFS{
			path: {Data: []byte(getStubJSONCertificationCompleted(t))},
		}

		want := getStubCertificationCompleted(t)
		fileManager := models.FileManager{}
		got := fileManager.FetchAllCertificationsCompleted(fs, path)

		if !reflect.DeepEqual(got, want) {
			t.Errorf("got %v certification completed, wanted %v certification completed", got, want)
		}
	})

	t.Run("Fetch a specified certifications should return a properly identified certification", func(t *testing.T) {
		path := "database/certifications.json"
		fs := fstest.MapFS{
			path: {Data: []byte(getStubJSONCertification(t))},
		}

		ID := "d1181969-6ae4-4a2f-9bb7-4e692aa278e7"
		want := getStubCertification(t)
		fileManager := models.FileManager{}
		got, _ := fileManager.FetchCertification(ID, fs, path)

		if !reflect.DeepEqual(*got, want) {
			t.Errorf("got %v certification, wanted %v certification", got, want)
		}
	})

	t.Run("Fetch a specified certifications should return nil if the certification is not present", func(t *testing.T) {
		path := "database/certifications.json"
		fs := fstest.MapFS{
			path: {Data: []byte(getStubJSONCertification(t))},
		}

		ID := "xxx-xxx-xxx"
		fileManager := models.FileManager{}
		got, err := fileManager.FetchCertification(ID, fs, path)

		if got != nil {
			t.Errorf("got %v certification, wanted nil", got)
		}

		if err != nil {
			t.Errorf("got %v Error, wanted nil", err)
		}
	})

	t.Run("Fetch a specified certifications should return an error if an issue is returned", func(t *testing.T) {
		correctPath := "database/certifications.json"
		wrongPath := "database/cert.json"
		fs := fstest.MapFS{
			correctPath: {Data: []byte(getStubJSONCertification(t))},
		}

		ID := "xxx-xxx-xxx"
		fileManager := models.FileManager{}
		got, err := fileManager.FetchCertification(ID, fs, wrongPath)

		if got != nil {
			t.Errorf("got %v certification, wanted nil", got)
		}

		if err == nil {
			t.Errorf("got %v certification instead of returning an error", got)
		}
	})
}
