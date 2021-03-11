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
        this.patientReport = function (doctorId, patientId) {
            var doctorName = "";
            var patientName = "";
            for (var _i = 0, doctorsData_3 = doctorsData_1["default"]; _i < doctorsData_3.length; _i++) {
                var ele = doctorsData_3[_i];
                if (ele.id == doctorId) {
                    doctorName = ele.name;
                    break;
                }
            }
            for (var _a = 0, patientData_3 = patientData_1["default"]; _a < patientData_3.length; _a++) {
                var ele = patientData_3[_a];
                if (ele.id == patientId) {
                    patientName = ele.name;
                    break;
                }
            }
            console.log("");
            console.log("----------------Patient Report-----------");
            console.log("Report Number : 8745387587");
            console.log("Doctor Name : " + doctorName);
            console.log("Patient Name : " + patientName);
            console.log("Date: May 23, 2021");
            console.log("Reviewed by: EMC Manager");
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
var selectedOptionForPatient = 4;
showData.patientReport(selectedOptionForDoctor, selectedOptionForPatient);
