package main

import (
	"net/http"
)

func CertificationServer(w http.ResponseWriter, r *http.Request) {

	var certifications string = `"[{
			"id": "d1181969-6ae4-4a2f-9bb7-4e692aa278e7",
			"name": "Average Typist",
			"description": "This range includes 40-50% of all people. This certification ensures that you are typing as fast as the average person.",
			"range": "40-55 words per minute",
			"img": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
		}]"`
	w.Write([]byte(certifications))
}
