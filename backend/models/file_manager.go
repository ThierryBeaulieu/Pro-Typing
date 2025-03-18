package models

type FileManager struct{}

func (f FileManager) FetchAllCertifications() []Certification {
	return nil
}

func (f FileManager) FetchAllCertificationsCompleted() []CertificationComplete {
	return nil
}

func (f FileManager) FetchCertification(ID string) Certification {
	certification := Certification{}
	return certification
}

func (f FileManager) Test() string {
	return "Interface File Manager tested\n"
}
