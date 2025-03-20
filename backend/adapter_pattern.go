package main

import "fmt"

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
