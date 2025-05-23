









//Parking 49 Doug Russell
var googleMap = document.querySelector("#buttons");
const parking49 = document.createElement("button");
parking49.innerHTML = "Park 49 Doug Russell".bold();
parking49.style.height = "50px";
parking49.style.width = "150px";
parking49.style.borderRadius = "12px";
parking49.style.position = "absolute";
parking49.style.right = "25%";
parking49.style.top = "70%";

parking49.style.borderColor = "lime";
parking49.style.backgroundImage = "linear-Gradient(white, yellow, white)";
parking49.style.cursor = "pointer";
parking49.style.boxShadow = "1px 10px 25px black";

googleMap.appendChild(parking49);

parking49.addEventListener('mouseover', () => {
    parking49.style.boxShadow = "1px 1px 20px white"; // Change box shadow on hover

});

// Mouseout event to reset shadow and background
parking49.addEventListener('mouseout', () => {
    parking49.style.boxShadow = "1px 10px 25px black"; 
});

///////////////////////////////////////
parking49.addEventListener('click', () => {
    // window.open('https://uta.modii.co/v2/finder');
    // console.log("test49")

    parking49.style.boxShadow = "1px 1px 20px white";
    parking49.style.backgroundImage = "linear-gradient(rgb(199, 237, 248), white, rgb(199, 246, 248), rgb(101, 233, 250))";
    parkingCenter.style.backgroundImage = "linear-gradient(white, yellow, white)";
    parkingNorth.style.backgroundImage = "linear-gradient(white, yellow, white)";
    parkingWest.style.backgroundImage = "linear-gradient(white, yellow, white)";
    parking36.style.backgroundImage = "linear-gradient(white, yellow, white)";

    
    parkingCenter.style.boxShadow = "1px 10px 25px black";
    parkingNorth.style.boxShadow = "1px 10px 25px black";
    parkingWest.style.boxShadow = "1px 10px 25px black";
    /////////////////////
    // Your code here...
    
    
    
    var capacity = 1120;
    var capacityEachFloor = capacity; //Total available slot in each floor
    
    //var unavailable1 = Math.floor(Math.random() * 240);
    var unavailable1 = Math.floor(Math.random() * (capacityEachFloor-(capacityEachFloor - 200))) + (capacityEachFloor - 1000); //Unavailable slot in outdoor parking
    
    //Total unavailable slots in entire of structure
    var unavailable = unavailable1;
    //Total available slots in entire of structure
    var available = capacity - unavailable;
    
    
    
    var available1 = capacityEachFloor - unavailable1; //Available slot in level 1
    
    var buttonBackgroundColor = "linear-Gradient(white, #90EE90, white)";
    
    var parkArea = document.querySelector("#buttons");
    const panel = document.createElement("div");
    panel.style.height = "45%";
    panel.style.width = "23.8%";
    panel.style.border = "2px outset white";
    panel.style.borderRadius = "8px";
    panel.style.backgroundImage = "linear-gradient(white, rgb(235, 235, 238), white)";
    panel.style.backdropFilter = "blur(2px)";
    panel.style.position = "absolute";
    panel.style.right = "53%";
    panel.style.top = "33%";
    panel.style.boxShadow = "1px 1px 50px rgb(5, 53, 227)";
    parkArea.appendChild(panel);
    
    const location = document.createElement("div");
    location.innerHTML = "Park 49 (Doug Russell)".bold();
    location.style.color = "white";
    location.style.height = "3%";
    location.style.width = "23.8%";
    location.style.display = "flex";
    location.style.justifyContent = "center";
    location.style.alignItems = "center";
    location.style.border = "1px outset black";
    location.style.borderTopRightRadius = "8px";
    location.style.borderTopLeftRadius = "8px";
    // location.style.borderRadius = "4px";
    location.style.backgroundColor = "#0066CC";
    location.style.backdropFilter = "blur(2px)";
    location.style.position = "absolute";
    location.style.right = "53.1%";
    location.style.top = "33%";
    parkArea.appendChild(location);
    
    const capacityStatus = document.createElement("div");
    capacityStatus.innerHTML = "Capacity: <span style='font-weight: bold; margin-left: 5px; margin-right: 5px;'>" + capacity + "</span> slots";
    
    var numStatusColor = capacityStatus.querySelector("span");
    numStatusColor.style.color = "black";
    capacityStatus.style.height = "3%";
    capacityStatus.style.width = "23.8%";
    capacityStatus.style.border = "1px solid black";
    // capacityStatus.style.borderRadius = "12px";
    capacityStatus.style.position = "absolute";
    capacityStatus.style.right = "53.1%";
    capacityStatus.style.top = "36.2%";
    
    capacityStatus.style.display = "flex";
    capacityStatus.style.justifyContent = "center";
    capacityStatus.style.alignItems = "center";
    //capacityStatus.style.borderColor = "lime";
    // capacityStatus.style.backgroundImage = "linear-Gradient(white, #EEE8AA, white)";
    
    parkArea.appendChild(capacityStatus);
    
    //Real Time
    var date = new Date();
    var dd = new Date().getDate();
    var mm = new Date().getMonth() + 1;
    var yy = new Date().getFullYear();
    if(mm < 10) {
        mm = "0" + mm.toString();
    }
    var today = mm + "/" + dd + "/" + yy;
    
    //Real time
    let time = date.toLocaleTimeString({"format":"HH:mm"});
    
    const realTime = document.createElement("button");
    realTime.innerHTML = "Date: " + today + " [" + time + "] " ;
    realTime.style.color = "blue";
    
    realTime.style.height = "5%";
    realTime.style.width = "23.9%";
    realTime.style.display = "flex";
    realTime.style.justifyContent = "center";
    realTime.style.alignItems = "center";
    realTime.style.border = "1px solid black";
    // realTime.style.borderRadius = "12px";
    realTime.style.position = "absolute";
    realTime.style.right = "53.1%";
    realTime.style.top = "37%";
    // realTime.style.borderTopRightRadius = "8px";
    // realTime.style.borderTopLeftRadius = "8px";
    
    //realTime.style.borderColor = "lime";
    realTime.style.backgroundImage = "linear-Gradient(white, #E0E0E0, white)";
    
    parkArea.appendChild(realTime);
    
    //available status of parking slots
    const availableStatus = document.createElement("button");
    availableStatus.innerHTML = "Available: <span>" + available + "</span> slots";
    var numStatusColor1 = availableStatus.querySelector("span");
    numStatusColor1.style.color = "blue";
    
    availableStatus.style.height = "7.5%";
    availableStatus.style.width = "7%";
    availableStatus.style.borderRadius = "25%";
    availableStatus.style.position = "absolute";
    availableStatus.style.right = "64%";
    availableStatus.style.top = "43%";
    
    availableStatus.style.borderColor = "lime";
    availableStatus.style.backgroundImage = "linear-Gradient(white, #32CD32, white)";
    
    parkArea.appendChild(availableStatus);
    
    //Unavailable status of parking slots
    const unavailableStatus = document.createElement("button");
    unavailableStatus.innerHTML = "Unavailable: <span>" + unavailable + "</span> slots";
    var numStatusColor2 = unavailableStatus.querySelector("span");
    numStatusColor2.style.color = "red";
    
    unavailableStatus.style.height = "27%";
    unavailableStatus.style.width = "8%";
    unavailableStatus.style.borderRadius = "12px";
    unavailableStatus.style.position = "absolute";
    unavailableStatus.style.right = "54.5%";
    unavailableStatus.style.top = "43%";
    
    unavailableStatus.style.borderColor = "orange";
    unavailableStatus.style.backgroundImage = "linear-Gradient(white, #FF8C00, white)";
    
    parkArea.appendChild(unavailableStatus);
    
    
    //Floor 1 status
    const outdoorPark49 = document.createElement("button");
     parkArea.appendChild(outdoorPark49);
    outdoorPark49.style.display = "none";
    
    // //Floor 1 status
    // const level2 = document.createElement("button");
    //  parkArea.appendChild(level2);
    // level2.style.display = "none";
    
    // //Floor 1 status
    // const level3 = document.createElement("button");
    //  parkArea.appendChild(level3);
    // level3.style.display = "none";
    
    // //Floor 1 status
    // const level4 = document.createElement("button");
    //  parkArea.appendChild(level4);
    // level4.style.display = "none";
    
    
    
    
    //////////////
        //Appearance of available button
        availableStatus.innerHTML = "Available: ".bold() + "<span>" + available + "</span> slots".bold();
        var numStatusColor1 = availableStatus.querySelector("span");
        numStatusColor1.style.color = "blue";
        availableStatus.style.backgroundImage = "linear-Gradient(white, #90EE90, white)";
    
        //Appearance of Unavailable button
        unavailableStatus.innerHTML = "Unavailable: <span>" + unavailable + "</span> slots";
        var numStatusColor2 = unavailableStatus.querySelector("span");
        numStatusColor2.style.color = "red";
        unavailableStatus.style.backgroundImage = "linear-Gradient(white, #FF8C00, white)";
    
        //Level 1 button activated
        outdoorPark49.innerHTML = "Out Door: ".bold() + "<span>" + available1 + "</span> slots";
    var numStatusColor3 = outdoorPark49.querySelector("span");
    numStatusColor3.style.color = "blue";
    
    outdoorPark49.style.height = "19.5%";
    outdoorPark49.style.width = "12.3%";
    outdoorPark49.style.borderRadius = "50%";
    outdoorPark49.style.position = "absolute";
    outdoorPark49.style.right = "63.3%";
    outdoorPark49.style.top = "50.5%";
    
    
    outdoorPark49.style.borderColor = "lime";
    outdoorPark49.style.backgroundImage = buttonBackgroundColor;
     outdoorPark49.style.display = "block";
    
    //     //Level 2 button activated
    //     level2.innerHTML = "Level 2: ".bold() + "<span>" + available2 + "</span> slots";
    // var numStatusColor4 = level2.querySelector("span");
    // numStatusColor4.style.color = "blue";
    
    // level2.style.height = "4.7%";
    // level2.style.width = "12.3%";
    // level2.style.borderRadius = "25%";
    // level2.style.position = "absolute";
    // level2.style.right = "63.3%";
    // level2.style.top = "60.3%";
    
    // level2.style.borderColor = "lime";
    // level2.style.backgroundImage = buttonBackgroundColor;
    //  level2.style.display = "block";
    
    //     //Level 3 button activated
    //     level3.innerHTML = "Level 3: ".bold() + "<span>" + available3 + "</span> slots";
    // var numStatusColor5 = level3.querySelector("span");
    // numStatusColor5.style.color = "blue";
    
    // level3.style.height = "4.7%";
    // level3.style.width = "12.3%";
    // level3.style.borderRadius = "25%";
    // level3.style.position = "absolute";
    // level3.style.right = "63.3%";
    // level3.style.top = "55.6%";
    
    // level3.style.borderColor = "lime";
    // level3.style.backgroundImage = buttonBackgroundColor;
    //  level3.style.display = "block";
    
    //     //Level 4 button activated
    //     level4.innerHTML = "Level 4: ".bold() + "<span>" + available4 + "</span> slots";
    // var numStatusColor6 = level4.querySelector("span");
    // numStatusColor6.style.color = "blue";
    
    // level4.style.height = "4.7%";;
    // level4.style.width = "12.3%";
    // level4.style.borderRadius = "25%";
    // level4.style.position = "absolute";
    // level4.style.right = "63.3%";
    // level4.style.top = "50.8%";
    
    // level4.style.borderColor = "lime";
    // level4.style.backgroundImage = buttonBackgroundColor;
    //  level4.style.display = "block";
    //////////////
    
    
    
    
    //Activate Available button to see how many available parking slot in every floor
    availableStatus.addEventListener('click', () => {
        //Appearance of available button
        availableStatus.innerHTML = "Available: ".bold() + "<span>" + available + "</span> slots".bold();
        var numStatusColor1 = availableStatus.querySelector("span");
        numStatusColor1.style.color = "blue";
        availableStatus.style.backgroundImage = "linear-Gradient(white, #90EE90, white)";
    
        //Appearance of Unavailable button
        unavailableStatus.innerHTML = "Unavailable: <span>" + unavailable + "</span> slots";
        var numStatusColor2 = unavailableStatus.querySelector("span");
        numStatusColor2.style.color = "red";
        unavailableStatus.style.backgroundImage = "linear-Gradient(white, #FF8C00, white)";
    
        //Level 1 button activated
        outdoorPark49.innerHTML = "Out Door: ".bold() + "<span>" + available1 + "</span> slots";
    var numStatusColor3 = outdoorPark49.querySelector("span");
    numStatusColor3.style.color = "blue";
    
    outdoorPark49.style.height = "19.5%";
    outdoorPark49.style.width = "12.3%";
    outdoorPark49.style.borderRadius = "50%";
    outdoorPark49.style.position = "absolute";
    outdoorPark49.style.right = "63.3%";
    outdoorPark49.style.top = "50.5%";
    
    
    outdoorPark49.style.borderColor = "lime";
    outdoorPark49.style.backgroundImage = buttonBackgroundColor;
     outdoorPark49.style.display = "block";
    
    //     //Level 2 button activated
    //     level2.innerHTML = "Level 2: ".bold() + "<span>" + available2 + "</span> slots";
    // var numStatusColor4 = level2.querySelector("span");
    // numStatusColor4.style.color = "blue";
    
    // level2.style.height = "4.7%";
    // level2.style.width = "12.3%";
    // level2.style.borderRadius = "25%";
    // level2.style.position = "absolute";
    // level2.style.right = "63.3%";
    // level2.style.top = "60.3%";
    
    // level2.style.borderColor = "lime";
    // level2.style.backgroundImage = buttonBackgroundColor;
    //  level2.style.display = "block";
    
    //     //Level 3 button activated
    //     level3.innerHTML = "Level 3: ".bold() + "<span>" + available3 + "</span> slots";
    // var numStatusColor5 = level3.querySelector("span");
    // numStatusColor5.style.color = "blue";
    
    // level3.style.height = "4.7%";
    // level3.style.width = "12.3%";
    // level3.style.borderRadius = "25%";
    // level3.style.position = "absolute";
    // level3.style.right = "63.3%";
    // level3.style.top = "55.6%";
    
    // level3.style.borderColor = "lime";
    // level3.style.backgroundImage = buttonBackgroundColor;
    //  level3.style.display = "block";
    
    //     //Level 4 button activated
    //     level4.innerHTML = "Level 4: ".bold() + "<span>" + available4 + "</span> slots";
    // var numStatusColor6 = level4.querySelector("span");
    // numStatusColor6.style.color = "blue";
    
    // level4.style.height = "4.7%";;
    // level4.style.width = "12.3%";
    // level4.style.borderRadius = "25%";
    // level4.style.position = "absolute";
    // level4.style.right = "63.3%";
    // level4.style.top = "50.8%";
    
    // level4.style.borderColor = "lime";
    // level4.style.backgroundImage = buttonBackgroundColor;
    //  level4.style.display = "block";
    });
    
    unavailableStatus.addEventListener('click', () => {
    
        unavailableStatus.innerHTML = "Unavailable: ".bold() + "<span>" + unavailable + "</span> slots".bold();
        var numStatusColor2 = unavailableStatus.querySelector("span");
        numStatusColor2.style.color = "red";
        unavailableStatus.style.backgroundImage = "linear-Gradient(white, orange, white)";
    
        availableStatus.innerHTML = "Available: <span>" + available + "</span> slots";
        var numStatusColor1 = availableStatus.querySelector("span");
        numStatusColor1.style.color = "blue";
        availableStatus.style.backgroundImage = "linear-Gradient(white, #32CD32, white)";
    
        outdoorPark49.style.display = "none";
        level2.style.display = "none";
        level3.style.display = "none";
        level4.style.display = "none";
    });
    
    parkingCenter.addEventListener('click', () => {
        panel.style.boxShadow = "1px 1px 50px white";
    });
    parkingNorth.addEventListener('click', () => {
        panel.style.boxShadow = "1px 1px 50px white";
    });
    parkingWest.addEventListener('click', () => {
        panel.style.boxShadow = "1px 1px 50px white";
    });
    parking36.addEventListener('click', () => {
        panel.style.boxShadow = "1px 1px 50px white";
    });
    

    });
    //////////////////////////////////////




//Parking South
 const parkingCenter = document.createElement("button");
parkingCenter.innerHTML = "Park Center".bold();
parkingCenter.style.height = "40px";
parkingCenter.style.width = "100px";
parkingCenter.style.borderRadius = "12px";
parkingCenter.style.position = "absolute";
parkingCenter.style.right = "10%";
parkingCenter.style.top = "35%";

parkingCenter.style.borderColor = "lime";
parkingCenter.style.backgroundImage = "linear-Gradient(white, yellow, white)";
parkingCenter.style.cursor = "pointer";
parkingCenter.style.boxShadow = "1px 10px 25px black";

googleMap.appendChild(parkingCenter);

// let isClicked = false;
////////// parking south
parkingCenter.addEventListener('mouseover', () => {
    parkingCenter.style.boxShadow = "1px 1px 20px white"; // Change box shadow on hover
    // parkingCenter.style.backgroundImage = "linear-gradient(white, yellow, white)"; // Change background on hover
});

// Mouseout event to reset shadow and background
parkingCenter.addEventListener('mouseout', () => {
    // if (!isClicked) {
    //     parkingCenter.style.boxShadow = "1px 1px 20px white"; // Reset box shadow when mouse leaves
    // }
    parkingCenter.style.boxShadow = "1px 10px 25px black"; // Reset box shadow when mouse leaves
});


///////////////////////////////////////
parkingCenter.addEventListener('click', () => {
    parkingCenter.style.boxShadow = "1px 1px 20px white";
    parkingCenter.style.backgroundImage = "linear-gradient(rgb(199, 237, 248), white, rgb(199, 246, 248), rgb(101, 233, 250))";
    parking49.style.backgroundImage = "linear-gradient(white, yellow, white)";
    parkingNorth.style.backgroundImage = "linear-gradient(white, yellow, white)";
    parkingWest.style.backgroundImage = "linear-gradient(white, yellow, white)";
    parking36.style.backgroundImage = "linear-gradient(white, yellow, white)";


    parking49.style.boxShadow = "1px 10px 25px black";
    parkingNorth.style.boxShadow = "1px 10px 25px black";
    parkingWest.style.boxShadow = "1px 10px 25px black";
    // window.open('https://uta.modii.co/v2/finder');
    /////////////////////
    // Your code here...
    
    
    
    var capacity = 600;
    var capacityEachFloor = capacity/5; //Total available slot in each floor
    
    //var unavailable1 = Math.floor(Math.random() * 240);
    var unavailable1 = Math.floor(Math.random() * (capacityEachFloor-(capacityEachFloor - 10))) + (capacityEachFloor - 10); //Unavailable slot in level 1
    var unavailable2 = Math.floor(Math.random() * (capacityEachFloor-(capacityEachFloor - 20))) + (capacityEachFloor - 20); //Unavailable slot in level 2
    var unavailable3 = Math.floor(Math.random() * (capacityEachFloor-(capacityEachFloor - 140))) + (capacityEachFloor - 140); //Unavailable slot in level 3
    var unavailable4 = Math.floor(Math.random() * (capacityEachFloor-(capacityEachFloor - 190))) + (capacityEachFloor - 190); //Unavailable slot in level 4
    var unavailable5 = Math.floor(Math.random() * (capacityEachFloor-(capacityEachFloor - 190))) + (capacityEachFloor - 190); //Unavailable slot in level 5
    
    //Total unavailable slots in entire of structure
    var unavailable = unavailable1 + unavailable2 + unavailable3 + unavailable4 +unavailable5;
    //Total available slots in entire of structure
    var available = capacity - unavailable;
    
    
    
    var available1 = capacityEachFloor - unavailable1; //Available slot in level 1
    var available2 = capacityEachFloor - unavailable2; //Available slot in level 2
    var available3 = capacityEachFloor - unavailable3; //Available slot in level 3
    var available4 = capacityEachFloor - unavailable4; //Available slot in level 4
    var available5 = capacityEachFloor - unavailable5; //Available slot in level 4
    
    var buttonBackgroundColor = "linear-Gradient(white, #90EE90, white)";
    
    var parkArea = document.querySelector("#buttons");
    const panel = document.createElement("div");
    panel.style.height = "45%";
    panel.style.width = "23.8%";
    panel.style.border = "2px outset white";
    panel.style.borderRadius = "8px";
    panel.style.backgroundImage = "linear-gradient(white, rgb(235, 235, 238), white)";
    panel.style.backdropFilter = "blur(2px)";
    panel.style.position = "absolute";
    panel.style.right = "53%";
    panel.style.top = "33%";
    panel.style.boxShadow = "1px 1px 50px rgb(5, 53, 227)";
    parkArea.appendChild(panel);
    
    const location = document.createElement("div");
    location.innerHTML = "Park Center".bold();
    location.style.color = "white";
    location.style.height = "3%";
    location.style.width = "23.8%";
    location.style.display = "flex";
    location.style.justifyContent = "center";
    location.style.alignItems = "center";
    location.style.border = "1px outset black";
    location.style.borderTopRightRadius = "8px";
    location.style.borderTopLeftRadius = "8px";
    // location.style.borderRadius = "4px";
    location.style.backgroundColor = "#0066CC";
    location.style.backdropFilter = "blur(2px)";
    location.style.position = "absolute";
    location.style.right = "53.1%";
    location.style.top = "33%";
    parkArea.appendChild(location);
    
    const capacityStatus = document.createElement("div");
    capacityStatus.innerHTML = "Capacity: <span style='font-weight: bold; margin-left: 5px; margin-right: 5px;'>" + capacity + "</span> slots";
    
    var numStatusColor = capacityStatus.querySelector("span");
    numStatusColor.style.color = "black";
    capacityStatus.style.height = "3%";
    capacityStatus.style.width = "23.8%";
    capacityStatus.style.border = "1px solid black";
    // capacityStatus.style.borderRadius = "12px";
    capacityStatus.style.position = "absolute";
    capacityStatus.style.right = "53.1%";
    capacityStatus.style.top = "36.2%";
    
    capacityStatus.style.display = "flex";
    capacityStatus.style.justifyContent = "center";
    capacityStatus.style.alignItems = "center";
    //capacityStatus.style.borderColor = "lime";
    // capacityStatus.style.backgroundImage = "linear-Gradient(white, #EEE8AA, white)";
    
    parkArea.appendChild(capacityStatus);
    
    //Real Time
    var date = new Date();
    var dd = new Date().getDate();
    var mm = new Date().getMonth() + 1;
    var yy = new Date().getFullYear();
    if(mm < 10) {
        mm = "0" + mm.toString();
    }
    var today = mm + "/" + dd + "/" + yy;
    
    //Real time
    let time = date.toLocaleTimeString({"format":"HH:mm"});
    
    const realTime = document.createElement("button");
    realTime.innerHTML = "Date: " + today + " [" + time + "] " ;
    realTime.style.color = "blue";
    
    realTime.style.height = "5%";
    realTime.style.width = "23.9%";
    realTime.style.display = "flex";
    realTime.style.justifyContent = "center";
    realTime.style.alignItems = "center";
    realTime.style.border = "1px solid black";
    // realTime.style.borderRadius = "12px";
    realTime.style.position = "absolute";
    realTime.style.right = "53.1%";
    realTime.style.top = "37%";
    // realTime.style.borderTopRightRadius = "8px";
    // realTime.style.borderTopLeftRadius = "8px";
    
    //realTime.style.borderColor = "lime";
    realTime.style.backgroundImage = "linear-Gradient(white, #E0E0E0, white)";
    
    parkArea.appendChild(realTime);
    
    //available status of parking slots
    const availableStatus = document.createElement("button");
    availableStatus.innerHTML = "Available: <span>" + available + "</span> slots";
    var numStatusColor1 = availableStatus.querySelector("span");
    numStatusColor1.style.color = "blue";
    
    availableStatus.style.height = "7.5%";
    availableStatus.style.width = "7%";
    availableStatus.style.borderRadius = "25%";
    availableStatus.style.position = "absolute";
    availableStatus.style.right = "64%";
    availableStatus.style.top = "43%";
    
    availableStatus.style.borderColor = "lime";
    availableStatus.style.backgroundImage = "linear-Gradient(white, #32CD32, white)";
    
    parkArea.appendChild(availableStatus);
    
    //Unavailable status of parking slots
    const unavailableStatus = document.createElement("button");
    unavailableStatus.innerHTML = "Unavailable: <span>" + unavailable + "</span> slots";
    var numStatusColor2 = unavailableStatus.querySelector("span");
    numStatusColor2.style.color = "red";
    
    unavailableStatus.style.height = "31%";
    unavailableStatus.style.width = "8%";
    unavailableStatus.style.borderRadius = "12px";
    unavailableStatus.style.position = "absolute";
    unavailableStatus.style.right = "54.5%";
    unavailableStatus.style.top = "43%";
    
    unavailableStatus.style.borderColor = "orange";
    unavailableStatus.style.backgroundImage = "linear-Gradient(white, #FF8C00, white)";
    
    parkArea.appendChild(unavailableStatus);
    
    
    //Floor 1 status
    const level1 = document.createElement("button");
     parkArea.appendChild(level1);
    level1.style.display = "none";
    
    //Floor 1 status
    const level2 = document.createElement("button");
     parkArea.appendChild(level2);
    level2.style.display = "none";
    
    //Floor 1 status
    const level3 = document.createElement("button");
     parkArea.appendChild(level3);
    level3.style.display = "none";
    
    //Floor 1 status
    const level4 = document.createElement("button");
     parkArea.appendChild(level4);
    level4.style.display = "none";

    //Floor 5 status
    const level5 = document.createElement("button");
    parkArea.appendChild(level5);
    level5.style.display = "none";
    
    
    
    
    //////////////
        //Appearance of available button
        availableStatus.innerHTML = "Available: ".bold() + "<span>" + available + "</span> slots".bold();
        var numStatusColor1 = availableStatus.querySelector("span");
        numStatusColor1.style.color = "blue";
        availableStatus.style.backgroundImage = "linear-Gradient(white, #90EE90, white)";
    
        //Appearance of Unavailable button
        unavailableStatus.innerHTML = "Unavailable: <span>" + unavailable + "</span> slots";
        var numStatusColor2 = unavailableStatus.querySelector("span");
        numStatusColor2.style.color = "red";
        unavailableStatus.style.backgroundImage = "linear-Gradient(white, #FF8C00, white)";
    
        //Level 1 button activated
        level1.innerHTML = "Level 1: ".bold() + "<span>" + available1 + "</span> slots";
    var numStatusColor3 = level1.querySelector("span");
    numStatusColor3.style.color = "blue";
    
    level1.style.height = "4.7%";
    level1.style.width = "12.3%";
    level1.style.borderRadius = "25%";
    level1.style.position = "absolute";
    level1.style.right = "63.3%";
    level1.style.top = "69.7%";
    
    
    level1.style.borderColor = "lime";
    level1.style.backgroundImage = buttonBackgroundColor;
     level1.style.display = "block";
    
        //Level 2 button activated
        level2.innerHTML = "Level 2: ".bold() + "<span>" + available2 + "</span> slots";
    var numStatusColor4 = level2.querySelector("span");
    numStatusColor4.style.color = "blue";
    
    level2.style.height = "4.7%";
    level2.style.width = "12.3%";
    level2.style.borderRadius = "25%";
    level2.style.position = "absolute";
    level2.style.right = "63.3%";
    level2.style.top = "65%";
    
    level2.style.borderColor = "lime";
    level2.style.backgroundImage = buttonBackgroundColor;
     level2.style.display = "block";
    
        //Level 3 button activated
        level3.innerHTML = "Level 3: ".bold() + "<span>" + available3 + "</span> slots";
    var numStatusColor5 = level3.querySelector("span");
    numStatusColor5.style.color = "blue";
    
    level3.style.height = "4.7%";
    level3.style.width = "12.3%";
    level3.style.borderRadius = "25%";
    level3.style.position = "absolute";
    level3.style.right = "63.3%";
    level3.style.top = "60.3%";
    
    level3.style.borderColor = "lime";
    level3.style.backgroundImage = buttonBackgroundColor;
     level3.style.display = "block";
    
        //Level 4 button activated
        level4.innerHTML = "Level 4: ".bold() + "<span>" + available4 + "</span> slots";
    var numStatusColor6 = level4.querySelector("span");
    numStatusColor6.style.color = "blue";
    
    level4.style.height = "4.7%";;
    level4.style.width = "12.3%";
    level4.style.borderRadius = "25%";
    level4.style.position = "absolute";
    level4.style.right = "63.3%";
    level4.style.top = "55.6%";
    
    level4.style.borderColor = "lime";
    level4.style.backgroundImage = buttonBackgroundColor;
     level4.style.display = "block";

    //Level 5 button activated
    level5.innerHTML = "Level 5: ".bold() + "<span>" + available5 + "</span> slots";
     var numStatusColor7 = level5.querySelector("span");
     numStatusColor7.style.color = "blue";
     
     level5.style.height = "4.7%";;
     level5.style.width = "12.3%";
     level5.style.borderRadius = "25%";
     level5.style.position = "absolute";
     level5.style.right = "63.3%";
     level5.style.top = "50.8%";
     
     level5.style.borderColor = "lime";
     level5.style.backgroundImage = buttonBackgroundColor;
      level5.style.display = "block";
    //////////////
    
    
    
    
    //Activate Available button to see how many available parking slot in every floor
    availableStatus.addEventListener('click', () => {
        //Appearance of available button
        availableStatus.innerHTML = "Available: ".bold() + "<span>" + available + "</span> slots".bold();
        var numStatusColor1 = availableStatus.querySelector("span");
        numStatusColor1.style.color = "blue";
        availableStatus.style.backgroundImage = "linear-Gradient(white, #90EE90, white)";
    
        //Appearance of Unavailable button
        unavailableStatus.innerHTML = "Unavailable: <span>" + unavailable + "</span> slots";
        var numStatusColor2 = unavailableStatus.querySelector("span");
        numStatusColor2.style.color = "red";
        unavailableStatus.style.backgroundImage = "linear-Gradient(white, #FF8C00, white)";
    
        //Level 1 button activated
        level1.innerHTML = "Level 1: ".bold() + "<span>" + available1 + "</span> slots";
    var numStatusColor3 = level1.querySelector("span");
    numStatusColor3.style.color = "blue";
    
    level1.style.height = "4.7%";
    level1.style.width = "12.3%";
    level1.style.borderRadius = "25%";
    level1.style.position = "absolute";
    level1.style.right = "63.3%";
    level1.style.top = "69.7%";
    
    
    level1.style.borderColor = "lime";
    level1.style.backgroundImage = buttonBackgroundColor;
     level1.style.display = "block";
    
        //Level 2 button activated
        level2.innerHTML = "Level 2: ".bold() + "<span>" + available2 + "</span> slots";
    var numStatusColor4 = level2.querySelector("span");
    numStatusColor4.style.color = "blue";
    
    level2.style.height = "4.7%";
    level2.style.width = "12.3%";
    level2.style.borderRadius = "25%";
    level2.style.position = "absolute";
    level2.style.right = "63.3%";
    level2.style.top = "65%";
    
    level2.style.borderColor = "lime";
    level2.style.backgroundImage = buttonBackgroundColor;
     level2.style.display = "block";
    
        //Level 3 button activated
        level3.innerHTML = "Level 3: ".bold() + "<span>" + available3 + "</span> slots";
    var numStatusColor5 = level3.querySelector("span");
    numStatusColor5.style.color = "blue";
    
    level3.style.height = "4.7%";
    level3.style.width = "12.3%";
    level3.style.borderRadius = "25%";
    level3.style.position = "absolute";
    level3.style.right = "63.3%";
    level3.style.top = "60.3%";
    
    level3.style.borderColor = "lime";
    level3.style.backgroundImage = buttonBackgroundColor;
     level3.style.display = "block";
    
        //Level 4 button activated
        level4.innerHTML = "Level 4: ".bold() + "<span>" + available4 + "</span> slots";
    var numStatusColor6 = level4.querySelector("span");
    numStatusColor6.style.color = "blue";
    
    level4.style.height = "4.7%";;
    level4.style.width = "12.3%";
    level4.style.borderRadius = "25%";
    level4.style.position = "absolute";
    level4.style.right = "63.3%";
    level4.style.top = "55.6%";
    
    level4.style.borderColor = "lime";
    level4.style.backgroundImage = buttonBackgroundColor;
     level4.style.display = "block";

    //Level 5 button activated
    level5.innerHTML = "Level 5: ".bold() + "<span>" + available5 + "</span> slots";
     var numStatusColor7 = level5.querySelector("span");
     numStatusColor7.style.color = "blue";
     
     level5.style.height = "4.7%";;
     level5.style.width = "12.3%";
     level5.style.borderRadius = "25%";
     level5.style.position = "absolute";
     level5.style.right = "63.3%";
     level5.style.top = "50.8%";
     
     level5.style.borderColor = "lime";
     level5.style.backgroundImage = buttonBackgroundColor;
      level5.style.display = "block";
    });
    
    unavailableStatus.addEventListener('click', () => {
    
        unavailableStatus.innerHTML = "Unavailable: ".bold() + "<span>" + unavailable + "</span> slots".bold();
        var numStatusColor2 = unavailableStatus.querySelector("span");
        numStatusColor2.style.color = "red";
        unavailableStatus.style.backgroundImage = "linear-Gradient(white, orange, white)";
    
        availableStatus.innerHTML = "Available: <span>" + available + "</span> slots";
        var numStatusColor1 = availableStatus.querySelector("span");
        numStatusColor1.style.color = "blue";
        availableStatus.style.backgroundImage = "linear-Gradient(white, #32CD32, white)";
    
        level1.style.display = "none";
        level2.style.display = "none";
        level3.style.display = "none";
        level4.style.display = "none";
        level5.style.display = "none";
    });
    
    parking49.addEventListener('click', () => {
        panel.style.boxShadow = "1px 1px 50px white";
    });
    parkingNorth.addEventListener('click', () => {
        panel.style.boxShadow = "1px 1px 50px white";
    });
    parkingWest.addEventListener('click', () => {
        panel.style.boxShadow = "1px 1px 50px white";
    });
    parking36.addEventListener('click', () => {
        panel.style.boxShadow = "1px 1px 50px white";
    });

    });
    //////////////////////////////////////
//////////



//Parking North
 const parkingNorth = document.createElement("button");
parkingNorth.innerHTML = "Park North".bold();
parkingNorth.style.height = "40px";
parkingNorth.style.width = "100px";
parkingNorth.style.borderRadius = "12px";
parkingNorth.style.position = "absolute";
parkingNorth.style.right = "10%";
parkingNorth.style.top = "25%";

parkingNorth.style.borderColor = "lime";
parkingNorth.style.backgroundImage = "linear-Gradient(white, yellow, white)";
parkingNorth.style.cursor = "pointer";
parkingNorth.style.boxShadow = "1px 10px 25px black";

googleMap.appendChild(parkingNorth);

////////// parking North
parkingNorth.addEventListener('mouseover', () => {
    parkingNorth.style.boxShadow = "1px 1px 20px white"; // Change box shadow on hover
    // parkingNorth.style.backgroundImage = "linear-gradient(white, yellow, white)"; // Change background on hover
});

// Mouseout event to reset shadow and background
parkingNorth.addEventListener('mouseout', () => {

    parkingNorth.style.boxShadow = "1px 10px 25px black"; // Reset box shadow when mouse leaves
    // parkingNorth.style.backgroundImage = "linear-gradient(silver, white, silver)"; // Reset background
});

parkingNorth.addEventListener('click', () => {
    // window.open('https://uta.modii.co/v2/finder');
    parkingNorth.style.boxShadow = "1px 1px 20px white";
    parkingNorth.style.backgroundImage = "linear-gradient(rgb(199, 237, 248), white, rgb(199, 246, 248), rgb(101, 233, 250))";
    parking49.style.backgroundImage = "linear-gradient(white, yellow, white)";
    parkingCenter.style.backgroundImage = "linear-gradient(white, yellow, white)";
    parkingWest.style.backgroundImage = "linear-gradient(white, yellow, white)";

    parking49.style.boxShadow = "1px 1px 20px white";
    parkingCenter.style.boxShadow = "1px 1px 20px white";
    parkingWest.style.boxShadow = "1px 1px 20px white";
    
});

///////////////////////////////////////
parkingNorth.addEventListener('click', () => {
    parkingNorth.style.boxShadow = "1px 1px 20px white";
    parkingNorth.style.backgroundImage = "linear-gradient(rgb(199, 237, 248), white, rgb(199, 246, 248), rgb(101, 233, 250))";
    parking49.style.backgroundImage = "linear-gradient(white, yellow, white)";
    parkingCenter.style.backgroundImage = "linear-gradient(white, yellow, white)";
    parkingWest.style.backgroundImage = "linear-gradient(white, yellow, white)";
    parking36.style.backgroundImage = "linear-gradient(white, yellow, white)";


    parkingCenter.style.boxShadow = "1px 10px 25px black";
    parking49.style.boxShadow = "1px 10px 25px black";
    parkingWest.style.boxShadow = "1px 10px 25px black";
    
    
    
    var capacity = 565;
    var capacityEachFloor = capacity/5; //Total available slot in each floor
    
    //var unavailable1 = Math.floor(Math.random() * 240);
    var unavailable1 = Math.floor(Math.random() * (capacityEachFloor-(capacityEachFloor - 10))) + (capacityEachFloor - 10); //Unavailable slot in level 1
    var unavailable2 = Math.floor(Math.random() * (capacityEachFloor-(capacityEachFloor - 20))) + (capacityEachFloor - 20); //Unavailable slot in level 2
    var unavailable3 = Math.floor(Math.random() * (capacityEachFloor-(capacityEachFloor - 140))) + (capacityEachFloor - 140); //Unavailable slot in level 3
    var unavailable4 = Math.floor(Math.random() * (capacityEachFloor-(capacityEachFloor - 190))) + (capacityEachFloor - 190); //Unavailable slot in level 4
    var unavailable5 = Math.floor(Math.random() * (capacityEachFloor-(capacityEachFloor - 190))) + (capacityEachFloor - 190); //Unavailable slot in level 5
    
    //Total unavailable slots in entire of structure
    var unavailable = unavailable1 + unavailable2 + unavailable3 + unavailable4 +unavailable5;
    //Total available slots in entire of structure
    var available = capacity - unavailable;
    
    
    
    var available1 = capacityEachFloor - unavailable1; //Available slot in level 1
    var available2 = capacityEachFloor - unavailable2; //Available slot in level 2
    var available3 = capacityEachFloor - unavailable3; //Available slot in level 3
    var available4 = capacityEachFloor - unavailable4; //Available slot in level 4
    var available5 = capacityEachFloor - unavailable5; //Available slot in level 4
    
    var buttonBackgroundColor = "linear-Gradient(white, #90EE90, white)";
    
    var parkArea = document.querySelector("#buttons");
    const panel = document.createElement("div");
    panel.style.height = "45%";
    panel.style.width = "23.8%";
    panel.style.border = "2px outset white";
    panel.style.borderRadius = "8px";
    panel.style.backgroundImage = "linear-gradient(white, rgb(235, 235, 238), white)";
    panel.style.backdropFilter = "blur(2px)";
    panel.style.position = "absolute";
    panel.style.right = "53%";
    panel.style.top = "33%";
    panel.style.boxShadow = "1px 1px 50px rgb(5, 53, 227)";
    parkArea.appendChild(panel);
    
    const location = document.createElement("div");
    location.innerHTML = "Park North".bold();
    location.style.color = "white";
    location.style.height = "3%";
    location.style.width = "23.8%";
    location.style.display = "flex";
    location.style.justifyContent = "center";
    location.style.alignItems = "center";
    location.style.border = "1px outset black";
    location.style.borderTopRightRadius = "8px";
    location.style.borderTopLeftRadius = "8px";
    // location.style.borderRadius = "4px";
    location.style.backgroundColor = "#0066CC";
    location.style.backdropFilter = "blur(2px)";
    location.style.position = "absolute";
    location.style.right = "53.1%";
    location.style.top = "33%";
    parkArea.appendChild(location);
    
    const capacityStatus = document.createElement("div");
    capacityStatus.innerHTML = "Capacity: <span style='font-weight: bold; margin-left: 5px; margin-right: 5px;'>" + capacity + "</span> slots";
    
    var numStatusColor = capacityStatus.querySelector("span");
    numStatusColor.style.color = "black";
    capacityStatus.style.height = "3%";
    capacityStatus.style.width = "23.8%";
    capacityStatus.style.border = "1px solid black";
    // capacityStatus.style.borderRadius = "12px";
    capacityStatus.style.position = "absolute";
    capacityStatus.style.right = "53.1%";
    capacityStatus.style.top = "36.2%";
    
    capacityStatus.style.display = "flex";
    capacityStatus.style.justifyContent = "center";
    capacityStatus.style.alignItems = "center";
    //capacityStatus.style.borderColor = "lime";
    // capacityStatus.style.backgroundImage = "linear-Gradient(white, #EEE8AA, white)";
    
    parkArea.appendChild(capacityStatus);
    
    //Real Time
    var date = new Date();
    var dd = new Date().getDate();
    var mm = new Date().getMonth() + 1;
    var yy = new Date().getFullYear();
    if(mm < 10) {
        mm = "0" + mm.toString();
    }
    var today = mm + "/" + dd + "/" + yy;
    
    //Real time
    let time = date.toLocaleTimeString({"format":"HH:mm"});
    
    const realTime = document.createElement("button");
    realTime.innerHTML = "Date: " + today + " [" + time + "] " ;
    realTime.style.color = "blue";
    
    realTime.style.height = "5%";
    realTime.style.width = "23.9%";
    realTime.style.display = "flex";
    realTime.style.justifyContent = "center";
    realTime.style.alignItems = "center";
    realTime.style.border = "1px solid black";
    // realTime.style.borderRadius = "12px";
    realTime.style.position = "absolute";
    realTime.style.right = "53.1%";
    realTime.style.top = "37%";
    // realTime.style.borderTopRightRadius = "8px";
    // realTime.style.borderTopLeftRadius = "8px";
    
    //realTime.style.borderColor = "lime";
    realTime.style.backgroundImage = "linear-Gradient(white, #E0E0E0, white)";
    
    parkArea.appendChild(realTime);
    
    //available status of parking slots
    const availableStatus = document.createElement("button");
    availableStatus.innerHTML = "Available: <span>" + available + "</span> slots";
    var numStatusColor1 = availableStatus.querySelector("span");
    numStatusColor1.style.color = "blue";
    
    availableStatus.style.height = "7.5%";
    availableStatus.style.width = "7%";
    availableStatus.style.borderRadius = "25%";
    availableStatus.style.position = "absolute";
    availableStatus.style.right = "64%";
    availableStatus.style.top = "43%";
    
    availableStatus.style.borderColor = "lime";
    availableStatus.style.backgroundImage = "linear-Gradient(white, #32CD32, white)";
    
    parkArea.appendChild(availableStatus);
    
    //Unavailable status of parking slots
    const unavailableStatus = document.createElement("button");
    unavailableStatus.innerHTML = "Unavailable: <span>" + unavailable + "</span> slots";
    var numStatusColor2 = unavailableStatus.querySelector("span");
    numStatusColor2.style.color = "red";
    
    unavailableStatus.style.height = "31%";
    unavailableStatus.style.width = "8%";
    unavailableStatus.style.borderRadius = "12px";
    unavailableStatus.style.position = "absolute";
    unavailableStatus.style.right = "54.5%";
    unavailableStatus.style.top = "43%";
    
    unavailableStatus.style.borderColor = "orange";
    unavailableStatus.style.backgroundImage = "linear-Gradient(white, #FF8C00, white)";
    
    parkArea.appendChild(unavailableStatus);
    
    
    //Floor 1 status
    const level1 = document.createElement("button");
     parkArea.appendChild(level1);
    level1.style.display = "none";
    
    //Floor 1 status
    const level2 = document.createElement("button");
     parkArea.appendChild(level2);
    level2.style.display = "none";
    
    //Floor 1 status
    const level3 = document.createElement("button");
     parkArea.appendChild(level3);
    level3.style.display = "none";
    
    //Floor 1 status
    const level4 = document.createElement("button");
     parkArea.appendChild(level4);
    level4.style.display = "none";

    //Floor 5 status
    const level5 = document.createElement("button");
    parkArea.appendChild(level5);
    level5.style.display = "none";
    
    
    
    
    //////////////
        //Appearance of available button
        availableStatus.innerHTML = "Available: ".bold() + "<span>" + available + "</span> slots".bold();
        var numStatusColor1 = availableStatus.querySelector("span");
        numStatusColor1.style.color = "blue";
        availableStatus.style.backgroundImage = "linear-Gradient(white, #90EE90, white)";
    
        //Appearance of Unavailable button
        unavailableStatus.innerHTML = "Unavailable: <span>" + unavailable + "</span> slots";
        var numStatusColor2 = unavailableStatus.querySelector("span");
        numStatusColor2.style.color = "red";
        unavailableStatus.style.backgroundImage = "linear-Gradient(white, #FF8C00, white)";
    
        //Level 1 button activated
        level1.innerHTML = "Level 1: ".bold() + "<span>" + available1 + "</span> slots";
    var numStatusColor3 = level1.querySelector("span");
    numStatusColor3.style.color = "blue";
    
    level1.style.height = "4.7%";
    level1.style.width = "12.3%";
    level1.style.borderRadius = "25%";
    level1.style.position = "absolute";
    level1.style.right = "63.3%";
    level1.style.top = "69.7%";
    
    
    level1.style.borderColor = "lime";
    level1.style.backgroundImage = buttonBackgroundColor;
     level1.style.display = "block";
    
        //Level 2 button activated
        level2.innerHTML = "Level 2: ".bold() + "<span>" + available2 + "</span> slots";
    var numStatusColor4 = level2.querySelector("span");
    numStatusColor4.style.color = "blue";
    
    level2.style.height = "4.7%";
    level2.style.width = "12.3%";
    level2.style.borderRadius = "25%";
    level2.style.position = "absolute";
    level2.style.right = "63.3%";
    level2.style.top = "65%";
    
    level2.style.borderColor = "lime";
    level2.style.backgroundImage = buttonBackgroundColor;
     level2.style.display = "block";
    
        //Level 3 button activated
        level3.innerHTML = "Level 3: ".bold() + "<span>" + available3 + "</span> slots";
    var numStatusColor5 = level3.querySelector("span");
    numStatusColor5.style.color = "blue";
    
    level3.style.height = "4.7%";
    level3.style.width = "12.3%";
    level3.style.borderRadius = "25%";
    level3.style.position = "absolute";
    level3.style.right = "63.3%";
    level3.style.top = "60.3%";
    
    level3.style.borderColor = "lime";
    level3.style.backgroundImage = buttonBackgroundColor;
     level3.style.display = "block";
    
        //Level 4 button activated
        level4.innerHTML = "Level 4: ".bold() + "<span>" + available4 + "</span> slots";
    var numStatusColor6 = level4.querySelector("span");
    numStatusColor6.style.color = "blue";
    
    level4.style.height = "4.7%";;
    level4.style.width = "12.3%";
    level4.style.borderRadius = "25%";
    level4.style.position = "absolute";
    level4.style.right = "63.3%";
    level4.style.top = "55.6%";
    
    level4.style.borderColor = "lime";
    level4.style.backgroundImage = buttonBackgroundColor;
     level4.style.display = "block";

    //Level 5 button activated
    level5.innerHTML = "Level 5: ".bold() + "<span>" + available5 + "</span> slots";
     var numStatusColor7 = level5.querySelector("span");
     numStatusColor7.style.color = "blue";
     
     level5.style.height = "4.7%";;
     level5.style.width = "12.3%";
     level5.style.borderRadius = "25%";
     level5.style.position = "absolute";
     level5.style.right = "63.3%";
     level5.style.top = "50.8%";
     
     level5.style.borderColor = "lime";
     level5.style.backgroundImage = buttonBackgroundColor;
      level5.style.display = "block";
    //////////////
    
    
    
    
    //Activate Available button to see how many available parking slot in every floor
    availableStatus.addEventListener('click', () => {
        //Appearance of available button
        availableStatus.innerHTML = "Available: ".bold() + "<span>" + available + "</span> slots".bold();
        var numStatusColor1 = availableStatus.querySelector("span");
        numStatusColor1.style.color = "blue";
        availableStatus.style.backgroundImage = "linear-Gradient(white, #90EE90, white)";
    
        //Appearance of Unavailable button
        unavailableStatus.innerHTML = "Unavailable: <span>" + unavailable + "</span> slots";
        var numStatusColor2 = unavailableStatus.querySelector("span");
        numStatusColor2.style.color = "red";
        unavailableStatus.style.backgroundImage = "linear-Gradient(white, #FF8C00, white)";
    
        //Level 1 button activated
        level1.innerHTML = "Level 1: ".bold() + "<span>" + available1 + "</span> slots";
    var numStatusColor3 = level1.querySelector("span");
    numStatusColor3.style.color = "blue";
    
    level1.style.height = "4.7%";
    level1.style.width = "12.3%";
    level1.style.borderRadius = "25%";
    level1.style.position = "absolute";
    level1.style.right = "63.3%";
    level1.style.top = "69.7%";
    
    
    level1.style.borderColor = "lime";
    level1.style.backgroundImage = buttonBackgroundColor;
     level1.style.display = "block";
    
        //Level 2 button activated
        level2.innerHTML = "Level 2: ".bold() + "<span>" + available2 + "</span> slots";
    var numStatusColor4 = level2.querySelector("span");
    numStatusColor4.style.color = "blue";
    
    level2.style.height = "4.7%";
    level2.style.width = "12.3%";
    level2.style.borderRadius = "25%";
    level2.style.position = "absolute";
    level2.style.right = "63.3%";
    level2.style.top = "65%";
    
    level2.style.borderColor = "lime";
    level2.style.backgroundImage = buttonBackgroundColor;
     level2.style.display = "block";
    
        //Level 3 button activated
        level3.innerHTML = "Level 3: ".bold() + "<span>" + available3 + "</span> slots";
    var numStatusColor5 = level3.querySelector("span");
    numStatusColor5.style.color = "blue";
    
    level3.style.height = "4.7%";
    level3.style.width = "12.3%";
    level3.style.borderRadius = "25%";
    level3.style.position = "absolute";
    level3.style.right = "63.3%";
    level3.style.top = "60.3%";
    
    level3.style.borderColor = "lime";
    level3.style.backgroundImage = buttonBackgroundColor;
     level3.style.display = "block";
    
        //Level 4 button activated
        level4.innerHTML = "Level 4: ".bold() + "<span>" + available4 + "</span> slots";
    var numStatusColor6 = level4.querySelector("span");
    numStatusColor6.style.color = "blue";
    
    level4.style.height = "4.7%";;
    level4.style.width = "12.3%";
    level4.style.borderRadius = "25%";
    level4.style.position = "absolute";
    level4.style.right = "63.3%";
    level4.style.top = "55.6%";
    
    level4.style.borderColor = "lime";
    level4.style.backgroundImage = buttonBackgroundColor;
     level4.style.display = "block";

    //Level 5 button activated
    level5.innerHTML = "Level 5: ".bold() + "<span>" + available5 + "</span> slots";
     var numStatusColor7 = level5.querySelector("span");
     numStatusColor7.style.color = "blue";
     
     level5.style.height = "4.7%";;
     level5.style.width = "12.3%";
     level5.style.borderRadius = "25%";
     level5.style.position = "absolute";
     level5.style.right = "63.3%";
     level5.style.top = "50.8%";
     
     level5.style.borderColor = "lime";
     level5.style.backgroundImage = buttonBackgroundColor;
      level5.style.display = "block";
    });
    
    unavailableStatus.addEventListener('click', () => {
    
        unavailableStatus.innerHTML = "Unavailable: ".bold() + "<span>" + unavailable + "</span> slots".bold();
        var numStatusColor2 = unavailableStatus.querySelector("span");
        numStatusColor2.style.color = "red";
        unavailableStatus.style.backgroundImage = "linear-Gradient(white, orange, white)";
    
        availableStatus.innerHTML = "Available: <span>" + available + "</span> slots";
        var numStatusColor1 = availableStatus.querySelector("span");
        numStatusColor1.style.color = "blue";
        availableStatus.style.backgroundImage = "linear-Gradient(white, #32CD32, white)";
    
        level1.style.display = "none";
        level2.style.display = "none";
        level3.style.display = "none";
        level4.style.display = "none";
        level5.style.display = "none";
    });
    
    parkingCenter.addEventListener('click', () => {
        // Hide the content of the park area
        // parkArea.style.display = "none";
        // panel.style.boxShadow = "1px 1px 10px white";
        panel.style.boxShadow = "1px 1px 50px white";
    });
    parking49.addEventListener('click', () => {
        // Hide the content of the park area
        // parkArea.style.display = "none";
        // panel.style.boxShadow = "1px 1px 10px white";
        panel.style.boxShadow = "1px 1px 50px white";
    });
    parkingWest.addEventListener('click', () => {
        // Hide the content of the park area
        // parkArea.style.display = "none";
        // panel.style.boxShadow = "1px 1px 10px white";
        panel.style.boxShadow = "1px 1px 50px white";
    });
    

    });
    //////////////////////////////////////
//////////

//Parking West
 const parkingWest = document.createElement("button");
parkingWest.innerHTML = "Park West".bold();
parkingWest.style.height = "40px";
parkingWest.style.width = "100px";
parkingWest.style.borderRadius = "12px";
parkingWest.style.position = "absolute";
parkingWest.style.right = "39%";
parkingWest.style.top = "20%";

parkingWest.style.borderColor = "lime";
parkingWest.style.backgroundImage = "linear-Gradient(white, yellow, white)";
parkingWest.style.cursor = "pointer";
parkingWest.style.boxShadow = "1px 10px 25px black";

googleMap.appendChild(parkingWest);

////////// parking West
parkingWest.addEventListener('mouseover', () => {
    parkingWest.style.boxShadow = "1px 1px 20px white"; // Change box shadow on hover
    // parkingWest.style.backgroundImage = "linear-gradient(white, yellow, white)"; // Change background on hover
});

// Mouseout event to reset shadow and background
parkingWest.addEventListener('mouseout', () => {
    parkingWest.style.boxShadow = "1px 10px 25px black"; // Reset box shadow when mouse leaves
    // parkingWest.style.backgroundImage = "linear-gradient(silver, white, silver)"; // Reset background
});

///////////////////////////////////////
parkingWest.addEventListener('click', () => {
    parkingWest.style.boxShadow = "1px 1px 20px white";
    parkingWest.style.backgroundImage = "linear-gradient(rgb(199, 237, 248), white, rgb(199, 246, 248), rgb(101, 233, 250))";
    parking49.style.backgroundImage = "linear-gradient(white, yellow, white)";
    parkingCenter.style.backgroundImage = "linear-gradient(white, yellow, white)";
    parkingNorth.style.backgroundImage = "linear-gradient(white, yellow, white)";
    parking36.style.backgroundImage = "linear-gradient(white, yellow, white)";


    parkingCenter.style.boxShadow = "1px 10px 25px black";
    parkingNorth.style.boxShadow = "1px 10px 25px black";
    parking49.style.boxShadow = "1px 10px 25px black";
    
    
    
    var capacity = 500;
    var capacityEachFloor = capacity/5; //Total available slot in each floor
    
    //var unavailable1 = Math.floor(Math.random() * 240);
    var unavailable1 = Math.floor(Math.random() * (capacityEachFloor-(capacityEachFloor - 10))) + (capacityEachFloor - 10); //Unavailable slot in level 1
    var unavailable2 = Math.floor(Math.random() * (capacityEachFloor-(capacityEachFloor - 20))) + (capacityEachFloor - 20); //Unavailable slot in level 2
    var unavailable3 = Math.floor(Math.random() * (capacityEachFloor-(capacityEachFloor - 140))) + (capacityEachFloor - 140); //Unavailable slot in level 3
    var unavailable4 = Math.floor(Math.random() * (capacityEachFloor-(capacityEachFloor - 190))) + (capacityEachFloor - 190); //Unavailable slot in level 4
    var unavailable5 = Math.floor(Math.random() * (capacityEachFloor-(capacityEachFloor - 190))) + (capacityEachFloor - 190); //Unavailable slot in level 5
    
    //Total unavailable slots in entire of structure
    var unavailable = unavailable1 + unavailable2 + unavailable3 + unavailable4 +unavailable5;
    //Total available slots in entire of structure
    var available = capacity - unavailable;
    
    
    
    var available1 = capacityEachFloor - unavailable1; //Available slot in level 1
    var available2 = capacityEachFloor - unavailable2; //Available slot in level 2
    var available3 = capacityEachFloor - unavailable3; //Available slot in level 3
    var available4 = capacityEachFloor - unavailable4; //Available slot in level 4
    var available5 = capacityEachFloor - unavailable5; //Available slot in level 4
    
    var buttonBackgroundColor = "linear-Gradient(white, #90EE90, white)";
    
    var parkArea = document.querySelector("#buttons");
    const panel = document.createElement("div");
    panel.style.height = "45%";
    panel.style.width = "23.8%";
    panel.style.border = "2px outset white";
    panel.style.borderRadius = "8px";
    panel.style.backgroundImage = "linear-gradient(white, rgb(235, 235, 238), white)";
    panel.style.backdropFilter = "blur(2px)";
    panel.style.position = "absolute";
    panel.style.right = "53%";
    panel.style.top = "33%";
    panel.style.boxShadow = "1px 1px 50px rgb(5, 53, 227)";
    parkArea.appendChild(panel);
    
    const location = document.createElement("div");
    location.innerHTML = "Park West".bold();
    location.style.color = "white";
    location.style.height = "3%";
    location.style.width = "23.8%";
    location.style.display = "flex";
    location.style.justifyContent = "center";
    location.style.alignItems = "center";
    location.style.border = "1px outset black";
    location.style.borderTopRightRadius = "8px";
    location.style.borderTopLeftRadius = "8px";
    // location.style.borderRadius = "4px";
    location.style.backgroundColor = "#0066CC";
    location.style.backdropFilter = "blur(2px)";
    location.style.position = "absolute";
    location.style.right = "53.1%";
    location.style.top = "33%";
    parkArea.appendChild(location);
    
    const capacityStatus = document.createElement("div");
    capacityStatus.innerHTML = "Capacity: <span style='font-weight: bold; margin-left: 5px; margin-right: 5px;'>" + capacity + "</span> slots";
    
    var numStatusColor = capacityStatus.querySelector("span");
    numStatusColor.style.color = "black";
    capacityStatus.style.height = "3%";
    capacityStatus.style.width = "23.8%";
    capacityStatus.style.border = "1px solid black";
    // capacityStatus.style.borderRadius = "12px";
    capacityStatus.style.position = "absolute";
    capacityStatus.style.right = "53.1%";
    capacityStatus.style.top = "36.2%";
    
    capacityStatus.style.display = "flex";
    capacityStatus.style.justifyContent = "center";
    capacityStatus.style.alignItems = "center";
    //capacityStatus.style.borderColor = "lime";
    // capacityStatus.style.backgroundImage = "linear-Gradient(white, #EEE8AA, white)";
    
    parkArea.appendChild(capacityStatus);
    
    //Real Time
    var date = new Date();
    var dd = new Date().getDate();
    var mm = new Date().getMonth() + 1;
    var yy = new Date().getFullYear();
    if(mm < 10) {
        mm = "0" + mm.toString();
    }
    var today = mm + "/" + dd + "/" + yy;
    
    //Real time
    let time = date.toLocaleTimeString({"format":"HH:mm"});
    
    const realTime = document.createElement("button");
    realTime.innerHTML = "Date: " + today + " [" + time + "] " ;
    realTime.style.color = "blue";
    
    realTime.style.height = "5%";
    realTime.style.width = "23.9%";
    realTime.style.display = "flex";
    realTime.style.justifyContent = "center";
    realTime.style.alignItems = "center";
    realTime.style.border = "1px solid black";
    // realTime.style.borderRadius = "12px";
    realTime.style.position = "absolute";
    realTime.style.right = "53.1%";
    realTime.style.top = "37%";
    // realTime.style.borderTopRightRadius = "8px";
    // realTime.style.borderTopLeftRadius = "8px";
    
    //realTime.style.borderColor = "lime";
    realTime.style.backgroundImage = "linear-Gradient(white, #E0E0E0, white)";
    
    parkArea.appendChild(realTime);
    
    //available status of parking slots
    const availableStatus = document.createElement("button");
    availableStatus.innerHTML = "Available: <span>" + available + "</span> slots";
    var numStatusColor1 = availableStatus.querySelector("span");
    numStatusColor1.style.color = "blue";
    
    availableStatus.style.height = "7.5%";
    availableStatus.style.width = "7%";
    availableStatus.style.borderRadius = "25%";
    availableStatus.style.position = "absolute";
    availableStatus.style.right = "64%";
    availableStatus.style.top = "43%";
    
    availableStatus.style.borderColor = "lime";
    availableStatus.style.backgroundImage = "linear-Gradient(white, #32CD32, white)";
    
    parkArea.appendChild(availableStatus);
    
    //Unavailable status of parking slots
    const unavailableStatus = document.createElement("button");
    unavailableStatus.innerHTML = "Unavailable: <span>" + unavailable + "</span> slots";
    var numStatusColor2 = unavailableStatus.querySelector("span");
    numStatusColor2.style.color = "red";
    
    unavailableStatus.style.height = "31%";
    unavailableStatus.style.width = "8%";
    unavailableStatus.style.borderRadius = "12px";
    unavailableStatus.style.position = "absolute";
    unavailableStatus.style.right = "54.5%";
    unavailableStatus.style.top = "43%";
    
    unavailableStatus.style.borderColor = "orange";
    unavailableStatus.style.backgroundImage = "linear-Gradient(white, #FF8C00, white)";
    
    parkArea.appendChild(unavailableStatus);
    
    
    //Floor 1 status
    const level1 = document.createElement("button");
     parkArea.appendChild(level1);
    level1.style.display = "none";
    
    //Floor 1 status
    const level2 = document.createElement("button");
     parkArea.appendChild(level2);
    level2.style.display = "none";
    
    //Floor 1 status
    const level3 = document.createElement("button");
     parkArea.appendChild(level3);
    level3.style.display = "none";
    
    //Floor 1 status
    const level4 = document.createElement("button");
     parkArea.appendChild(level4);
    level4.style.display = "none";

    //Floor 5 status
    const level5 = document.createElement("button");
    parkArea.appendChild(level5);
    level5.style.display = "none";
    
    
    
    
    //////////////
        //Appearance of available button
        availableStatus.innerHTML = "Available: ".bold() + "<span>" + available + "</span> slots".bold();
        var numStatusColor1 = availableStatus.querySelector("span");
        numStatusColor1.style.color = "blue";
        availableStatus.style.backgroundImage = "linear-Gradient(white, #90EE90, white)";
    
        //Appearance of Unavailable button
        unavailableStatus.innerHTML = "Unavailable: <span>" + unavailable + "</span> slots";
        var numStatusColor2 = unavailableStatus.querySelector("span");
        numStatusColor2.style.color = "red";
        unavailableStatus.style.backgroundImage = "linear-Gradient(white, #FF8C00, white)";
    
        //Level 1 button activated
        level1.innerHTML = "Level 1: ".bold() + "<span>" + available1 + "</span> slots";
    var numStatusColor3 = level1.querySelector("span");
    numStatusColor3.style.color = "blue";
    
    level1.style.height = "4.7%";
    level1.style.width = "12.3%";
    level1.style.borderRadius = "25%";
    level1.style.position = "absolute";
    level1.style.right = "63.3%";
    level1.style.top = "69.7%";
    
    
    level1.style.borderColor = "lime";
    level1.style.backgroundImage = buttonBackgroundColor;
     level1.style.display = "block";
    
        //Level 2 button activated
        level2.innerHTML = "Level 2: ".bold() + "<span>" + available2 + "</span> slots";
    var numStatusColor4 = level2.querySelector("span");
    numStatusColor4.style.color = "blue";
    
    level2.style.height = "4.7%";
    level2.style.width = "12.3%";
    level2.style.borderRadius = "25%";
    level2.style.position = "absolute";
    level2.style.right = "63.3%";
    level2.style.top = "65%";
    
    level2.style.borderColor = "lime";
    level2.style.backgroundImage = buttonBackgroundColor;
     level2.style.display = "block";
    
        //Level 3 button activated
        level3.innerHTML = "Level 3: ".bold() + "<span>" + available3 + "</span> slots";
    var numStatusColor5 = level3.querySelector("span");
    numStatusColor5.style.color = "blue";
    
    level3.style.height = "4.7%";
    level3.style.width = "12.3%";
    level3.style.borderRadius = "25%";
    level3.style.position = "absolute";
    level3.style.right = "63.3%";
    level3.style.top = "60.3%";
    
    level3.style.borderColor = "lime";
    level3.style.backgroundImage = buttonBackgroundColor;
     level3.style.display = "block";
    
        //Level 4 button activated
        level4.innerHTML = "Level 4: ".bold() + "<span>" + available4 + "</span> slots";
    var numStatusColor6 = level4.querySelector("span");
    numStatusColor6.style.color = "blue";
    
    level4.style.height = "4.7%";;
    level4.style.width = "12.3%";
    level4.style.borderRadius = "25%";
    level4.style.position = "absolute";
    level4.style.right = "63.3%";
    level4.style.top = "55.6%";
    
    level4.style.borderColor = "lime";
    level4.style.backgroundImage = buttonBackgroundColor;
     level4.style.display = "block";

    //Level 5 button activated
    level5.innerHTML = "Level 5: ".bold() + "<span>" + available5 + "</span> slots";
     var numStatusColor7 = level5.querySelector("span");
     numStatusColor7.style.color = "blue";
     
     level5.style.height = "4.7%";;
     level5.style.width = "12.3%";
     level5.style.borderRadius = "25%";
     level5.style.position = "absolute";
     level5.style.right = "63.3%";
     level5.style.top = "50.8%";
     
     level5.style.borderColor = "lime";
     level5.style.backgroundImage = buttonBackgroundColor;
      level5.style.display = "block";
    //////////////
    
    
    
    
    //Activate Available button to see how many available parking slot in every floor
    availableStatus.addEventListener('click', () => {
        //Appearance of available button
        availableStatus.innerHTML = "Available: ".bold() + "<span>" + available + "</span> slots".bold();
        var numStatusColor1 = availableStatus.querySelector("span");
        numStatusColor1.style.color = "blue";
        availableStatus.style.backgroundImage = "linear-Gradient(white, #90EE90, white)";
    
        //Appearance of Unavailable button
        unavailableStatus.innerHTML = "Unavailable: <span>" + unavailable + "</span> slots";
        var numStatusColor2 = unavailableStatus.querySelector("span");
        numStatusColor2.style.color = "red";
        unavailableStatus.style.backgroundImage = "linear-Gradient(white, #FF8C00, white)";
    
        //Level 1 button activated
        level1.innerHTML = "Level 1: ".bold() + "<span>" + available1 + "</span> slots";
    var numStatusColor3 = level1.querySelector("span");
    numStatusColor3.style.color = "blue";
    
    level1.style.height = "4.7%";
    level1.style.width = "12.3%";
    level1.style.borderRadius = "25%";
    level1.style.position = "absolute";
    level1.style.right = "63.3%";
    level1.style.top = "69.7%";
    
    
    level1.style.borderColor = "lime";
    level1.style.backgroundImage = buttonBackgroundColor;
     level1.style.display = "block";
    
        //Level 2 button activated
        level2.innerHTML = "Level 2: ".bold() + "<span>" + available2 + "</span> slots";
    var numStatusColor4 = level2.querySelector("span");
    numStatusColor4.style.color = "blue";
    
    level2.style.height = "4.7%";
    level2.style.width = "12.3%";
    level2.style.borderRadius = "25%";
    level2.style.position = "absolute";
    level2.style.right = "63.3%";
    level2.style.top = "65%";
    
    level2.style.borderColor = "lime";
    level2.style.backgroundImage = buttonBackgroundColor;
     level2.style.display = "block";
    
        //Level 3 button activated
        level3.innerHTML = "Level 3: ".bold() + "<span>" + available3 + "</span> slots";
    var numStatusColor5 = level3.querySelector("span");
    numStatusColor5.style.color = "blue";
    
    level3.style.height = "4.7%";
    level3.style.width = "12.3%";
    level3.style.borderRadius = "25%";
    level3.style.position = "absolute";
    level3.style.right = "63.3%";
    level3.style.top = "60.3%";
    
    level3.style.borderColor = "lime";
    level3.style.backgroundImage = buttonBackgroundColor;
     level3.style.display = "block";
    
        //Level 4 button activated
        level4.innerHTML = "Level 4: ".bold() + "<span>" + available4 + "</span> slots";
    var numStatusColor6 = level4.querySelector("span");
    numStatusColor6.style.color = "blue";
    
    level4.style.height = "4.7%";;
    level4.style.width = "12.3%";
    level4.style.borderRadius = "25%";
    level4.style.position = "absolute";
    level4.style.right = "63.3%";
    level4.style.top = "55.6%";
    
    level4.style.borderColor = "lime";
    level4.style.backgroundImage = buttonBackgroundColor;
     level4.style.display = "block";

    //Level 5 button activated
    level5.innerHTML = "Level 5: ".bold() + "<span>" + available5 + "</span> slots";
     var numStatusColor7 = level5.querySelector("span");
     numStatusColor7.style.color = "blue";
     
     level5.style.height = "4.7%";;
     level5.style.width = "12.3%";
     level5.style.borderRadius = "25%";
     level5.style.position = "absolute";
     level5.style.right = "63.3%";
     level5.style.top = "50.8%";
     
     level5.style.borderColor = "lime";
     level5.style.backgroundImage = buttonBackgroundColor;
      level5.style.display = "block";
    });
    
    unavailableStatus.addEventListener('click', () => {
    
        unavailableStatus.innerHTML = "Unavailable: ".bold() + "<span>" + unavailable + "</span> slots".bold();
        var numStatusColor2 = unavailableStatus.querySelector("span");
        numStatusColor2.style.color = "red";
        unavailableStatus.style.backgroundImage = "linear-Gradient(white, orange, white)";
    
        availableStatus.innerHTML = "Available: <span>" + available + "</span> slots";
        var numStatusColor1 = availableStatus.querySelector("span");
        numStatusColor1.style.color = "blue";
        availableStatus.style.backgroundImage = "linear-Gradient(white, #32CD32, white)";
    
        level1.style.display = "none";
        level2.style.display = "none";
        level3.style.display = "none";
        level4.style.display = "none";
        level5.style.display = "none";
    });
    
    parkingCenter.addEventListener('click', () => {
        panel.style.boxShadow = "1px 1px 50px white";
    });
    parking49.addEventListener('click', () => {
        panel.style.boxShadow = "1px 1px 50px white";
    });
    parkingNorth.addEventListener('click', () => {
        panel.style.boxShadow = "1px 1px 50px white";
    });
    parking36.addEventListener('click', () => {
        panel.style.boxShadow = "1px 1px 50px white";
    });
    
    

    });
    //////////////////////////////////////
//////////
//////////













const parking36 = document.createElement("button");
parking36.innerHTML = "Park 36".bold();
parking36.style.height = "40px";
parking36.style.width = "100px";
parking36.style.borderRadius = "12px";
parking36.style.position = "absolute";
parking36.style.right = "27%";
parking36.style.top = "17%";

parking36.style.borderColor = "lime";
parking36.style.backgroundImage = "linear-Gradient(white, yellow, white)";
parking36.style.cursor = "pointer";
parking36.style.boxShadow = "1px 10px 25px black";

googleMap.appendChild(parking36);

parking36.addEventListener('mouseover', () => {
    parking36.style.boxShadow = "1px 1px 20px white"; // Change box shadow on hover

});

// Mouseout event to reset shadow and background
parking36.addEventListener('mouseout', () => {
    parking36.style.boxShadow = "1px 10px 25px black"; 
});

///////////////////////////////////////
parking36.addEventListener('click', () => {
    // window.open('https://uta.modii.co/v2/finder');
    // console.log("test49")

    parking36.style.boxShadow = "1px 1px 20px white";
    parking36.style.backgroundImage = "linear-gradient(rgb(199, 237, 248), white, rgb(199, 246, 248), rgb(101, 233, 250))";
    parkingCenter.style.backgroundImage = "linear-gradient(white, yellow, white)";
    parkingNorth.style.backgroundImage = "linear-gradient(white, yellow, white)";
    parkingWest.style.backgroundImage = "linear-gradient(white, yellow, white)";
    parking49.style.backgroundImage = "linear-gradient(white, yellow, white)";
    
    parkingCenter.style.boxShadow = "1px 10px 25px black";
    parkingNorth.style.boxShadow = "1px 10px 25px black";
    parkingWest.style.boxShadow = "1px 10px 25px black";
    /////////////////////
    // Your code here...
    
    
    
    var capacity = 436;
    var capacityEachFloor = capacity; //Total available slot in each floor
    
    //var unavailable1 = Math.floor(Math.random() * 240);
    var unavailable1 = Math.floor(Math.random() * (capacityEachFloor-(capacityEachFloor - 50))) + (capacityEachFloor - 50); //Unavailable slot in outdoor parking
    
    //Total unavailable slots in entire of structure
    var unavailable = unavailable1;
    //Total available slots in entire of structure
    var available = capacity - unavailable;
    
    
    
    var available1 = capacityEachFloor - unavailable1; //Available slot in level 1
    
    var buttonBackgroundColor = "linear-Gradient(white, #90EE90, white)";
    
    var parkArea = document.querySelector("#buttons");
    const panel = document.createElement("div");
    panel.style.height = "45%";
    panel.style.width = "23.8%";
    panel.style.border = "2px outset white";
    panel.style.borderRadius = "8px";
    panel.style.backgroundImage = "linear-gradient(white, rgb(235, 235, 238), white)";
    panel.style.backdropFilter = "blur(2px)";
    panel.style.position = "absolute";
    panel.style.right = "53%";
    panel.style.top = "33%";
    panel.style.boxShadow = "1px 1px 50px rgb(5, 53, 227)";
    parkArea.appendChild(panel);
    
    const location = document.createElement("div");
    location.innerHTML = "Park 36".bold();
    location.style.color = "white";
    location.style.height = "3%";
    location.style.width = "23.8%";
    location.style.display = "flex";
    location.style.justifyContent = "center";
    location.style.alignItems = "center";
    location.style.border = "1px outset black";
    location.style.borderTopRightRadius = "8px";
    location.style.borderTopLeftRadius = "8px";
    // location.style.borderRadius = "4px";
    location.style.backgroundColor = "#0066CC";
    location.style.backdropFilter = "blur(2px)";
    location.style.position = "absolute";
    location.style.right = "53.1%";
    location.style.top = "33%";
    parkArea.appendChild(location);
    
    const capacityStatus = document.createElement("div");
    capacityStatus.innerHTML = "Capacity: <span style='font-weight: bold; margin-left: 5px; margin-right: 5px;'>" + capacity + "</span> slots";
    
    var numStatusColor = capacityStatus.querySelector("span");
    numStatusColor.style.color = "black";
    capacityStatus.style.height = "3%";
    capacityStatus.style.width = "23.8%";
    capacityStatus.style.border = "1px solid black";
    // capacityStatus.style.borderRadius = "12px";
    capacityStatus.style.position = "absolute";
    capacityStatus.style.right = "53.1%";
    capacityStatus.style.top = "36.2%";
    
    capacityStatus.style.display = "flex";
    capacityStatus.style.justifyContent = "center";
    capacityStatus.style.alignItems = "center";
    //capacityStatus.style.borderColor = "lime";
    // capacityStatus.style.backgroundImage = "linear-Gradient(white, #EEE8AA, white)";
    
    parkArea.appendChild(capacityStatus);
    
    //Real Time
    var date = new Date();
    var dd = new Date().getDate();
    var mm = new Date().getMonth() + 1;
    var yy = new Date().getFullYear();
    if(mm < 10) {
        mm = "0" + mm.toString();
    }
    var today = mm + "/" + dd + "/" + yy;
    
    //Real time
    let time = date.toLocaleTimeString({"format":"HH:mm"});
    
    const realTime = document.createElement("button");
    realTime.innerHTML = "Date: " + today + " [" + time + "] " ;
    realTime.style.color = "blue";
    
    realTime.style.height = "5%";
    realTime.style.width = "23.9%";
    realTime.style.display = "flex";
    realTime.style.justifyContent = "center";
    realTime.style.alignItems = "center";
    realTime.style.border = "1px solid black";
    // realTime.style.borderRadius = "12px";
    realTime.style.position = "absolute";
    realTime.style.right = "53.1%";
    realTime.style.top = "37%";
    // realTime.style.borderTopRightRadius = "8px";
    // realTime.style.borderTopLeftRadius = "8px";
    
    //realTime.style.borderColor = "lime";
    realTime.style.backgroundImage = "linear-Gradient(white, #E0E0E0, white)";
    
    parkArea.appendChild(realTime);
    
    //available status of parking slots
    const availableStatus = document.createElement("button");
    availableStatus.innerHTML = "Available: <span>" + available + "</span> slots";
    var numStatusColor1 = availableStatus.querySelector("span");
    numStatusColor1.style.color = "blue";
    
    availableStatus.style.height = "7.5%";
    availableStatus.style.width = "7%";
    availableStatus.style.borderRadius = "25%";
    availableStatus.style.position = "absolute";
    availableStatus.style.right = "64%";
    availableStatus.style.top = "43%";
    
    availableStatus.style.borderColor = "lime";
    availableStatus.style.backgroundImage = "linear-Gradient(white, #32CD32, white)";
    
    parkArea.appendChild(availableStatus);
    
    //Unavailable status of parking slots
    const unavailableStatus = document.createElement("button");
    unavailableStatus.innerHTML = "Unavailable: <span>" + unavailable + "</span> slots";
    var numStatusColor2 = unavailableStatus.querySelector("span");
    numStatusColor2.style.color = "red";
    
    unavailableStatus.style.height = "27%";
    unavailableStatus.style.width = "8%";
    unavailableStatus.style.borderRadius = "12px";
    unavailableStatus.style.position = "absolute";
    unavailableStatus.style.right = "54.5%";
    unavailableStatus.style.top = "43%";
    
    unavailableStatus.style.borderColor = "orange";
    unavailableStatus.style.backgroundImage = "linear-Gradient(white, #FF8C00, white)";
    
    parkArea.appendChild(unavailableStatus);
    
    
    //Floor 1 status
    const outdoorPark36 = document.createElement("button");
     parkArea.appendChild(outdoorPark36);
    outdoorPark36.style.display = "none";
    
    // //Floor 1 status
    // const level2 = document.createElement("button");
    //  parkArea.appendChild(level2);
    // level2.style.display = "none";
    
    // //Floor 1 status
    // const level3 = document.createElement("button");
    //  parkArea.appendChild(level3);
    // level3.style.display = "none";
    
    // //Floor 1 status
    // const level4 = document.createElement("button");
    //  parkArea.appendChild(level4);
    // level4.style.display = "none";
    
    
    
    
    //////////////
        //Appearance of available button
        availableStatus.innerHTML = "Available: ".bold() + "<span>" + available + "</span> slots".bold();
        var numStatusColor1 = availableStatus.querySelector("span");
        numStatusColor1.style.color = "blue";
        availableStatus.style.backgroundImage = "linear-Gradient(white, #90EE90, white)";
    
        //Appearance of Unavailable button
        unavailableStatus.innerHTML = "Unavailable: <span>" + unavailable + "</span> slots";
        var numStatusColor2 = unavailableStatus.querySelector("span");
        numStatusColor2.style.color = "red";
        unavailableStatus.style.backgroundImage = "linear-Gradient(white, #FF8C00, white)";
    
        //Level 1 button activated
        outdoorPark36.innerHTML = "Out Door: ".bold() + "<span>" + available1 + "</span> slots";
    var numStatusColor3 = outdoorPark36.querySelector("span");
    numStatusColor3.style.color = "blue";
    
    outdoorPark36.style.height = "19.5%";
    outdoorPark36.style.width = "12.3%";
    outdoorPark36.style.borderRadius = "50%";
    outdoorPark36.style.position = "absolute";
    outdoorPark36.style.right = "63.3%";
    outdoorPark36.style.top = "50.5%";
    
    
    outdoorPark36.style.borderColor = "lime";
    outdoorPark36.style.backgroundImage = buttonBackgroundColor;
     outdoorPark36.style.display = "block";

    
    
    
    //Activate Available button to see how many available parking slot in every floor
    availableStatus.addEventListener('click', () => {
        //Appearance of available button
        availableStatus.innerHTML = "Available: ".bold() + "<span>" + available + "</span> slots".bold();
        var numStatusColor1 = availableStatus.querySelector("span");
        numStatusColor1.style.color = "blue";
        availableStatus.style.backgroundImage = "linear-Gradient(white, #90EE90, white)";
    
        //Appearance of Unavailable button
        unavailableStatus.innerHTML = "Unavailable: <span>" + unavailable + "</span> slots";
        var numStatusColor2 = unavailableStatus.querySelector("span");
        numStatusColor2.style.color = "red";
        unavailableStatus.style.backgroundImage = "linear-Gradient(white, #FF8C00, white)";
    
        //Level 1 button activated
        outdoorPark36.innerHTML = "Out Door: ".bold() + "<span>" + available1 + "</span> slots";
    var numStatusColor3 = outdoorPark36.querySelector("span");
    numStatusColor3.style.color = "blue";
    
    outdoorPark36.style.height = "19.5%";
    outdoorPark36.style.width = "12.3%";
    outdoorPark36.style.borderRadius = "50%";
    outdoorPark36.style.position = "absolute";
    outdoorPark36.style.right = "63.3%";
    outdoorPark36.style.top = "50.5%";
    
    
    outdoorPark36.style.borderColor = "lime";
    outdoorPark36.style.backgroundImage = buttonBackgroundColor;
     outdoorPark36.style.display = "block";

    });
    
    unavailableStatus.addEventListener('click', () => {
    
        unavailableStatus.innerHTML = "Unavailable: ".bold() + "<span>" + unavailable + "</span> slots".bold();
        var numStatusColor2 = unavailableStatus.querySelector("span");
        numStatusColor2.style.color = "red";
        unavailableStatus.style.backgroundImage = "linear-Gradient(white, orange, white)";
    
        availableStatus.innerHTML = "Available: <span>" + available + "</span> slots";
        var numStatusColor1 = availableStatus.querySelector("span");
        numStatusColor1.style.color = "blue";
        availableStatus.style.backgroundImage = "linear-Gradient(white, #32CD32, white)";
    
        outdoorPark36.style.display = "none";
        level2.style.display = "none";
        level3.style.display = "none";
        level4.style.display = "none";
    });
    
    parkingCenter.addEventListener('click', () => {
        panel.style.boxShadow = "1px 1px 50px white";
    });
    parkingNorth.addEventListener('click', () => {
        panel.style.boxShadow = "1px 1px 50px white";
    });
    parkingWest.addEventListener('click', () => {
        panel.style.boxShadow = "1px 1px 50px white";
    });
    parking49.addEventListener('click', () => {
        panel.style.boxShadow = "1px 1px 50px white";
    });
    

    });
    //////////////////////////////////////





















const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission (page reload)
});

const modal = document.getElementById('noticeModal');

window.addEventListener('DOMContentLoaded', (event) => {
    // event.preventDefault(); // Prevent form submission (page reload)

    // Open the modal when the page is loaded
    // const modal = document.getElementById('noticeModal');
    // modal.showModal();  // This opens the dialog
    // modal.style.display = 'block';

    // Hide parking buttons initially
    parking49.style.display = 'none';
    parkingCenter.style.display = 'none';
    parkingNorth.style.display = 'none';
    parkingWest.style.display = 'none';
    parking36.style.display = 'none';

    // Close the modal when the close button is clicked
    const closeModalButton = document.getElementById('closeModal');
    closeModalButton.addEventListener('click', (e) => {
        // const modal = document.getElementById('noticeModal');
        // modal.close();  // Close the modal
        modal.style.display = 'none';
        
        // Show parking buttons after closing modal
        parking49.style.display = 'block';
        parkingCenter.style.display = 'block';
        parkingNorth.style.display = 'block';
        parkingWest.style.display = 'block';
        parking36.style.display = 'block';
        console.log("closed")
    });
});







    

