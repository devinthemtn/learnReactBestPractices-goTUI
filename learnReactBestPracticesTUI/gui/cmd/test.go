package main

import (
	"fmt"
	"log"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/widget"
)

func main() {
	log.Println("Starting simple Fyne test...")

	// Create a simple Fyne application to test basic functionality
	myApp := app.New()
	if myApp == nil {
		log.Fatal("Failed to create Fyne app")
	}
	log.Println("Fyne app created successfully")

	myWindow := myApp.NewWindow("Simple Test")
	if myWindow == nil {
		log.Fatal("Failed to create window")
	}
	log.Println("Window created successfully")

	myWindow.Resize(fyne.NewSize(400, 300))

	// Create simple content
	hello := widget.NewLabel("Hello Fyne!")
	content := container.NewVBox(
		hello,
		widget.NewButton("Hi there", func() {
			fmt.Println("Button clicked!")
		}),
	)

	myWindow.SetContent(content)
	log.Println("Content set successfully")

	log.Println("Showing window...")
	myWindow.ShowAndRun()
}
