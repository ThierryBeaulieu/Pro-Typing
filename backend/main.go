package main

import (
	"backend/services"
	"fmt"
	"log"
	"net/http"
)

type Task interface {
	DoTask(s string) string
}

type TaskFunction func(s string) string

func (t TaskFunction) DoTask(s string) string {
	return t(s)
}

func DoTask1(s string) string {
	return s + " from task 1"
}

func DoTask2(s string) string {
	return s + " from task 2"
}

func ExecuteTask(t Task) {
	fmt.Println(t.DoTask("Hello"))
}

func main() {

	var task1 Task = TaskFunction(DoTask1)
	var task2 Task = TaskFunction(DoTask2)
	ExecuteTask(task1)
	ExecuteTask(task2)

	handler := http.HandlerFunc(services.CertificationServer)
	log.Fatal(http.ListenAndServe(":5001", handler))
}
