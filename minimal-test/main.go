package main

import (
	"context"
	"fmt"
)

func main() {
	ctx := context.Background()
	fmt.Printf("Context created: %v\n", ctx)
	fmt.Println("Context import test successful!")
}
