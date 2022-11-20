//object literal
let petSalon = {
    //properties
    //name is simple, and only needs one simple property value
    name:"Posh Paws",
    //address is more complex, and so we need to create another object within this object to define the various values for address
    address:{
        street:"University",
        number:"262",
        zip:"22400"
    },
    //pets is a long list of data, and therefore an array is needed.
    pets:[
    //curly brackets below here indicate an anonymous object as giving it a name would be redundant
            
        ]
        
}
let c=0;

//+create the constructor+----------------------------------<---day2
//<------parameters (local vars)----->
function Pet(name, age, gender, breed,service,owner,phone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.ownerName=owner;//*** */
    this.contactPhone=phone;//*** */
    this.id=c++;//increase 1 by 1
}
//create pets----------------
let pet1 = new Pet("scooby", 60, "Male", "Dane", "Grooming", "Shaggy", "555-555-5555");
let pet2 = new Pet("pup", 10, "Male", "Frug", "Groom", "Jim", "555-555-5545");
let pet3 = new Pet("Mr Monk", 12, "Male", "Frug", "Groom", "Canaan", "555-555-5535");

console.log(pet1, pet2, pet3);
//register function---------------
//getting the inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputOwner = document.getElementById("txtOwner");
let inputContact = document.getElementById("txtContact");

//make input on form 'required' using function. Gives red border indicating the field required by using inputName.classList.add("error"). This adds a class to the inputName field, and then we styled this class in CSS sheet.
function isValid(aPet){
    let valid=true;
    //clear the input borders
    inputName.classList.remove("error");
    inputService.classList.remove("error");
    inputOwner.classList.remove("error");
    inputContact.classList.remove("error");
    //check conditions to validate
    if(aPet.name==""){
        valid=false;
        inputName.classList.add("error");
    }
    if(aPet.service==""){
        valid=false;
        inputService.classList.add("error")
    }
    if(aPet.contactPhone==""){
        valid=false;
        inputContact.classList.add("error")
    }
    if(aPet.ownerName==""){
        valid=false;
        inputOwner.classList.add("error")
    }
    return valid;
}


function register(){
    //get the values
    //console.log(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value, inputOwner.value, inputContact.value);
    //create the obj
    let thePet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value, inputOwner.value, inputContact.value);
    //display the obj 
    //console.log(thePet);
    //push the obj, after validating
    if(isValid(thePet)==true){
        petSalon.pets.push(thePet);
    
        //displayCards();
        displayTable();
    //display the petSalon.pets
    console.log(petSalon.pets);
    clearForm();
    }else{
        alert("Please fill the required input")
    }
    
}
//clear text in inputs
function clearForm(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
    inputOwner.value="";
    inputContact.value="";
}

function search(){
console.log("searching...")
    let searchName = document.getElementById('searchBar').value
    for(let i=0; i<petSalon.pets.length; i++){
        let pet = petSalon.pets[i]
        if(searchName.toLowerCase()==pet.name.toLowerCase()){
            console.log("This is the pet!")
            document.getElementById(pet.id).classList.add("selected")
        }else console.log("No pet by that name...")
    }

}

function deletePet(aPetID){

    console.log("Deleting the pet " + aPetID);
    document.getElementById(aPetID).remove(); ///deletes card
    let deleteIndex;
    for(let i=0;i<petSalon.length;i++){
        let pet = petSalon.pets[i];
        if(pet.id==aPetID){
            deleteIndex=i;
        }
    }
    petSalon.pets.splice(deleteIndex,1);
}
// let counter = 0;
//         for (let obj of petSalon.pets) {
//           if (obj.status = 'name') counter++;
//         }
        
//         alert(counter);
//ways of accessing the values in the object. Use period (.) after object name to go down into the property within the object
//console.log(petSalon.address.street);
//accessing a specific name below, by defining the position ([0]) followed by period (.) and then name property. Pay attention to syntax
//console.log(petSalon.pets[0].name);



// function displayNames() {
//     for (let i = 0; i < petSalon.pets.length; i++) {
//         let petNames = petSalon.pets[i].name; // get the name
//         console.log(petNames);
//       }
        
// }
// displayNames();

    //alert to display count of how many pets
    //display the names using a for loop

function init(){
    petSalon.pets.push(pet1, pet2, pet3);
    //displayCards();
    displayTable();
}
window.onload=init; //calls function after browser loads the object. Used for functions that do not require input from user such as onclick, etc.