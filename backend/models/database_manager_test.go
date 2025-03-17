package models

import (
	"encoding/json"
	"reflect"
	"testing"
)

// Test function
func TestDatabaseManager(t *testing.T) {
	var fileManager DatabaseManager = FileManager{}

	certifications := fileManager.Test()

	jsonBytes, err := json.Marshal(certifications)
	if err != nil {
		t.Fatalf("Failed to marshal JSON: %v", err)
	}

	res := string(jsonBytes)

	expectedJSON, _ := json.Marshal("Interface File Manager tested\n")

	if !reflect.DeepEqual(res, string(expectedJSON)) {
		t.Errorf("fileManager.FetchAllCertifications() = %q, want %q", res, string(expectedJSON))
	}
}
