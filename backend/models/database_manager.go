package models

type DatabaseManager interface {
	Test() string
	FetchCertification(ID string) Certification
	FetchAllCertifications() []Certification
	FetchAllCertificationsCompleted() []CertificationComplete
}

type FileManager struct{}

func (f FileManager) FetchAllCertifications() []Certification {

	var certification1 = Certification{
		ID:          "1234",
		Name:        "Certified Typist",
		Range:       "60-75 words per minute",
		Description: "This range includes 25-30% of people. At this level, you are faster than the majority but not yet at the professional level.",
		Img:         "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=",
	}

	var certification2 = Certification{
		ID:          "1234",
		Name:        "Certified Typist",
		Range:       "60-75 words per minute",
		Description: "This range includes 25-30% of people. At this level, you are faster than the majority but not yet at the professional level.",
		Img:         "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=",
	}

	return []Certification{certification1, certification2}
}

func (f FileManager) FetchAllCertificationsCompleted() []CertificationComplete {
	return nil
}

func (f FileManager) Test() string {
	return "Interface File Manager tested\n"
}

func (f FileManager) FetchCertification(ID string) Certification {

	var certification = Certification{
		ID:          "1234",
		Name:        "Certified Typist",
		Range:       "60-75 words per minute",
		Description: "This range includes 25-30% of people. At this level, you are faster than the majority but not yet at the professional level.",
		Img:         "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=",
	}

	return certification
}
