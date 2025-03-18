package models

import (
	"reflect"
	"testing"
)

func FileManagerTest(t *testing.T) {

	t.Run("Fetch all certifications", func(t *testing.T) {

		fileManager := FileManager{}
		var got []Certification = fileManager.FetchAllCertifications()
		var want []Certification = []Certification{}

		if !reflect.DeepEqual(got, want) {
			t.Errorf("got %v want %v", got, want)
		}
	})

	t.Run("Fetch all certifications completed", func(t *testing.T) {

		fileManager := FileManager{}
		var got []CertificationComplete = fileManager.FetchAllCertificationsCompleted()
		var want []CertificationComplete = []CertificationComplete{}

		if !reflect.DeepEqual(got, want) {
			t.Errorf("got %v want %v", got, want)
		}
	})

	t.Run("Fetch a specified certifications", func(t *testing.T) {

		id := ""
		fileManager := FileManager{}
		var got *Certification = fileManager.FetchCertification(id)
		var want *Certification = nil

		if got != want {
			t.Errorf("got %v want %v, given %s", got, want, id)
		}
	})
}
