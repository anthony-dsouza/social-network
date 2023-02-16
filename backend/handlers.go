package backend

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type AuthResponse struct {
	Success bool `json:"success"`
}

type loginPayload struct {
	Email string `json:"email"`
	Pw    string `json:"pw"`
}

type regPayload struct {
	Email  string `json:"email"`
	Pw     string `json:"pw"`
	fname  string `json:"fname"`
	lname  string `json:"lname"`
	dob    string `json:"dob"`
	avatar string `json:"avatar"`
	nname  string `json:"nname"`
	about  string `json:"about"`
}

func Homehandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Home")
}
func Loginhandler(w http.ResponseWriter, r *http.Request) {
	// fmt.Fprintf(w, "login")

	if r.Method == http.MethodPost {
		fmt.Printf("----login-POST-----\n")
		var payload loginPayload

		err := json.NewDecoder(r.Body).Decode(&payload)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Println(payload)

		email := payload.Email
		pw := payload.Pw

		fmt.Printf("Email: %s\n", email)
		fmt.Printf("password: %s\n", pw)

		var Resp AuthResponse
		Resp.Success = true
		if email == "f" {
			Resp.Success = false
		}
		jsonResp, err := json.Marshal(Resp)
		fmt.Println(string(jsonResp))

		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(jsonResp)
	}
}
func Reghandler(w http.ResponseWriter, r *http.Request) {
	// fmt.Fprintf(w, "reg")
	if r.Method == http.MethodPost {
		fmt.Printf("----reg-POST-----\n")
		var payload regPayload

		err := json.NewDecoder(r.Body).Decode(&payload)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Println(payload)

		email := payload.Email
		pw := payload.Pw
		fname := payload.fname

		fmt.Printf("Email: %s\n", email)
		fmt.Printf("password: %s\n", pw)
		fmt.Printf("fname: %s\n", fname)

		var Resp AuthResponse
		Resp.Success = true
		if email == "f" {
			Resp.Success = false
		}
		jsonResp, err := json.Marshal(Resp)
		fmt.Println(string(jsonResp))

		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(jsonResp)
	}
}
func Logouthandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "logout")
}
