var Failed= "Intuder Dedected";

var Name = prompt("enter your first name")

if (Name.length === 6) { // name must be of 6 letter
    var Age= prompt("enter you age")

    if(Age == 23) {  // age must be 23
        var PetName= prompt("enter your pet name")
        if(PetName[PetName.length-1] === "y"){   // pet name should end with y
            alert("welcome comarade"+ Name+ "Your next mission is in israel")
        }
        else{
            alert(Failed)
        }
    }
    else{
        alert(Failed)
    }
}
else{
    alert(Failed)
}