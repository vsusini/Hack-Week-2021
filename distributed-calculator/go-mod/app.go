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
	
	"github.com/gorilla/mux"
)

type Operands struct {
    OperandOne float32 `json:"operandOne,string"`
    OperandTwo float32 `json:"operandTwo,string"`
}

func add(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	var operands Operands
	json.NewDecoder(r.Body).Decode(&operands)
	fmt.Println(fmt.Sprintf("%s%f%s%f", "Modding ", operands.OperandOne, " to ", operands.OperandTwo))
	json.NewEncoder(w).Encode(int(operands.OperandOne) % int(operands.OperandTwo))
}
 
func main() {
	router := mux.NewRouter()
	
	router.HandleFunc("/modular", add).Methods("POST", "OPTIONS")
	log.Fatal(http.ListenAndServe(":6001", router))
}