"use strict";
exports.__esModule = true;
var doctorsData_1 = require("./doctorsData");
var patientData_1 = require("./patientData");
var ShowData = /** @class */ (function () {
    function ShowData() {
        this.doctorsDetails = function () {
            for (var _i = 0, doctorsData_2 = doctorsData_1["default"]; _i < doctorsData_2.length; _i++) {
                var ele = doctorsData_2[_i];
                console.log(ele.id + ")  Dr." + ele.name + "  specialized in " + ele.specialization + ", available in " + ele.availability);
            }
        };
        this.patientDetails = function () {
            for (var _i = 0, patientData_2 = patientData_1["default"]; _i < patientData_2.length; _i++) {
                var ele = patientData_2[_i];
                var count = 1;
                console.log(ele.id + ")  Mr." + ele.name + "  ContactInfo:" + ele.mobileNumber);
                count = count + 1;
            }
        };
    }
    return ShowData;
}());
var showData = new ShowData();
console.log("-----------------------------Welcome to the Typescript Clinic's and Research Centre---------------------------");
console.log("");
console.log("-----------------------------We are specialized in " + doctorsData_1["default"][0].specialization + "---------------------------");
console.log("");
console.log("We have other specialist as well! Please checkout the List and take an appointment as per the timings!");
console.log("");
showData.doctorsDetails();
console.log("");
console.log("");
console.log("----------------------Patient Data-------------------------");
showData.patientDetails();
console.log("------Please Select an Option, of which doctor you want an appointment-----");
var selectedOptionForDoctor = 1;
