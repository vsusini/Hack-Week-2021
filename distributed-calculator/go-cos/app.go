// ------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// ------------------------------------------------------------

package main

import (
	"encoding/json"
    "log"
	"net/http"
	"fmt"
	"math"
	
	"github.com/gorilla/mux"
)

type Operands struct {
    OperandOne float64 `json:"operandOne,string"`
    OperandTwo float64 `json:"operandTwo,string"`
}

func add(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	var operands Operands
	json.NewDecoder(r.Body).Decode(&operands)
	// fmt.Println(fmt.Sprintf("%s%f", "Sin ", operands.OperandOne))
	fmt.Println(fmt.Sprintf("%s%f", "Cos ", operands.OperandTwo))
	json.NewEncoder(w).Encode(math.Round(math.Cos(operands.OperandTwo)*100)/100)
}
 
func main() {
	router := mux.NewRouter()
	
	router.HandleFunc("/cos", add).Methods("POST", "OPTIONS")
	log.Fatal(http.ListenAndServe(":6003", router))
}