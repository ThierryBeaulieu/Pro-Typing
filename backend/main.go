package main

import (
	"backend/services"
	"log"
	"net/http"
)

func main() {

	var task1 Task = TaskFunction(DoTask1)
	var task2 Task = TaskFunction(DoTask2)
	ExecuteTask(task1)
	ExecuteTask(task2)

	server := &services.PlayerServer{}
	log.Fatal(http.ListenAndServe(":5000", server))
}
