import doctorsData from "./doctorsData";
import patientData from "./patientData";


console.log("-----------------------------Welcome to the Typescript Clinic's and Research Centre---------------------------");
console.log("");
console.log(`-----------------------------We are specialized in ${doctorsData[0].specialization}---------------------------`);
console.log("");
console.log("We have other specialist as well! Please checkout the List and take an appointment as per the timings!");
console.log("");
console.log('S.No.----"Doctors Name"----------------------"Specialization"-------------"Availability"');
console.log("");
console.log(`1.--------${doctorsData[0].name}-------------------------  ${doctorsData[0].specialization}--------------------${doctorsData[0].availability}`);
console.log(`2.--------${doctorsData[1].name}-------------------------  ${doctorsData[1].specialization}---------------------${doctorsData[1].availability}`);
console.log(`3.--------${doctorsData[2].name}-------------------------${doctorsData[2].specialization}-----------------${doctorsData[2].availability}`);
console.log(`4.--------${doctorsData[3].name}-------------------${doctorsData[3].specialization}------------${doctorsData[3].availability}`);
console.log(`5.--------${doctorsData[4].name}--------------------------- ${doctorsData[4].specialization}-------------------${doctorsData[4].availability}`);
console.log("");
console.log("------Please Select an Option, of which doctor you want an appointment");


