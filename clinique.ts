import doctorsData from "./doctorsData";
import patientData from "./patientData";

class ShowData{

    doctorsDetails = () => {
        for (let ele of doctorsData) {
            console.log(`${ele.id})  Dr.${ele.name}  specialized in ${ele.specialization}, available in ${ele.availability}`);
        }
    }

    patientDetails = () => {
        for (let ele of patientData) {
            let count = 1;
            console.log(`${ele.id})  Mr.${ele.name}  ContactInfo:${ele.mobileNumber}`);
            count = count + 1;
        }
    }
}
    

let showData = new ShowData();


console.log("-----------------------------Welcome to the Typescript Clinic's and Research Centre---------------------------");
console.log("");
console.log(`-----------------------------We are specialized in ${doctorsData[0].specialization}---------------------------`);
console.log("");
console.log("We have other specialist as well! Please checkout the List and take an appointment as per the timings!");
console.log("");

showData.doctorsDetails();
console.log("");
console.log("");
console.log("----------------------Patient Data-------------------------");

showData.patientDetails();

console.log("------Please Select an Option, of which doctor you want an appointment-----");

var selectedOptionForDoctor: number = 1; 


