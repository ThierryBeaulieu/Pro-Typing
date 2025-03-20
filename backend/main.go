package main

import (
	"log"
	"net/http"
)

type InMemoryPlayerStore struct{}

func (i *InMemoryPlayerStore) GetPlayerScore(name string) int {
	return 123
}

func main() {

	var task1 Task = TaskFunction(DoTask1)
	var task2 Task = TaskFunction(DoTask2)
	ExecuteTask(task1)
	ExecuteTask(task2)

	var memory InMemoryPlayerStore = InMemoryPlayerStore{}
	server := &PlayerServer{&memory}
	log.Fatal(http.ListenAndServe(":5001", server))
}
