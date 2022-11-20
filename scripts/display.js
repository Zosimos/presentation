function displayCards(){
    let card="";
    //travel the array (need a for loop)
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        //add + after card to add repeated entries instead of removing previous entry and adding a new one
        card+=`
            <petdiv class="pet" id="${pet.id}">
                <table>
                <tr>
                <th>${pet.name}</th>
                </tr>
                <tr>
                <td> Age: ${pet.age}</td>
                </tr>
                <tr>
                <td> Gender: ${pet.gender}</td>
                </tr>
                <tr>
                <td> Breed: ${pet.breed}</td>
                </tr>
                <tr>
                <td> Service: ${pet.service}</td>
                </tr>
                <tr>
                <td> Owner: ${pet.ownerName}</td>
                </tr>
                <tr>
                <td> Phone: ${pet.contactPhone}</td>
                </tr>
                <tr> 
                <td> ID: ${pet.id} </td>
                </tr>
                </table>
                <button class="btn btn-dark" onclick="deletePet(${pet.id});">Delete</button>
            </petdiv>
        `;
        
    }
    console.log(card);
    document.getElementById("pets").innerHTML=card
}
    
    
    //create the HTML template with all the values we want to insert for card
    //append the template on the html
    

    function displayTable(){
        let table="";
        for (let i=0; i <petSalon.pets.length;i++){
            console.log(petSalon.pets[i].name)
            let pet=petSalon.pets[i];
            table+=`
            <tr class="pets" id="${pet.id}">
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td>${pet.ownerName}</td>
                <td>${pet.contactPhone}</td>
                
                <td><button class="btn btn-dark" onclick="deletePet(${pet.id});">Delete</button></td>
                </tr>
            `;
        
    }
    document.getElementById('pet-table').innerHTML=table

}
