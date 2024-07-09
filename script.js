var input = 
document.getElementById("fname");
input.addEventListener("keypress", function(event){
  if(event.key === "Enter"){
    event.preventDefault();

    document.getElementById("myBtn").click();
  }
});

var input2 = 
document.getElementById("lname");
input2.addEventListener("keypress", function(event){
  if(event.key === "Enter"){
    event.preventDefault();

    document.getElementById("myBtn").click();
  }
});

var input3 = 
document.getElementById("g.p.a");
input3.addEventListener("keypress", function(event){
  if(event.key === "Enter"){
    event.preventDefault();

    document.getElementById("myBtn").click();
  }
});



var colleges = [
    ["Howard University", "Washington, DC", "east", .35, 3.66, 12000, 0.91, 51450, "https://howard.edu/"],
    ["Hampton University", "Hampton, VA", "east", .80, 3.30, 3135, 0.95, 46048, "https://home.hamptonu.edu/"],
    ["UC Berkeley", "Berkeley, CA", "west", .14, 3.87, 45000, 0.02, 73115, "https://www.berkeley.edu/"],
    ["San Francisco State University", "San Francisco, CA", "west", .93, 3.31, 27000, 0.05, 41005, "https://www.sfsu.edu/index.html"],
    ["Spelman College", "Atlanta, GA", "south", .50, 3.75, 2400, 0.96, 49566, "https://www.spelman.edu/"],
    ["Morehouse College", "Atlanta, GA", "south", .65, 3.48, 2423, 0.95, 50036, "https://morehouse.edu/"],
    ["University of Chicago", "Chicago, IL", "north", .05, 3.95, 18000, 0.05, 86856, "https://www.uchicago.edu/en"],
    ["Ohio University", "Columbia OH", "north", .53, 3.76, 60500, 0.06, 39582, "https://www.ohio.edu/"],
    
    ["Morgan State University", "Baltimore, MD", "east", .87, 3.10, 8500, 0.83, 36206, "https://www.morgan.edu/"],
    ["USC", "Los Angeles, CA", "west", .13, 3.83, 49000, 0.04, 85064, "https://www.usc.edu/"],
    ["Loyola University New Orleans", "New Orleans, LA", "south", .78, 3.48, 45000, 0.17, 64245, "https://www.luc.edu/"],
    ["Wilberforce University", "Wilberforce, OH", "north", .45, 2.82, 650, 0.84, 23450, "https://wilberforce.edu/"],
    ["Georgetown University", "Washington, DC", "east", .12, 3.89, 21000, 0.06, 84696, "https://www.georgetown.edu/"],
    ["Johns Hopkins University", "Baltimore, MD", "east", .08, 3.92, 32000, 0.08, 80800, "https://www.jhu.edu/"],
    ["Bowie State University", "Baltimore, MD", "east", .87, 3.12, 6300, 0.86, 36038, "https://www.bowiestate.edu/"],
    ["Norfolk State University", "Norfolk, VA", "east", .89, 2.90, 5450, 0.84, 37878, "nsu.edu"] 
    ];
      
      function Search(){
        
theDiv = document.getElementById("personal-info");
        if (theDiv.innerHTML != "") {
          theDiv.innerHTML = "";
        }
        fname = document.getElementById("fname");
        lname = document.getElementById("lname");
        p = document.createElement("p"); 
        p.innerText = "College Search";
        p.innerText = p.innerText + " Produced for: " + lname.value + ", " + fname.value;
        p.id="name-print";
        theDiv.appendChild(p);

          
        
        
        var selectedRegion = "";
        var sTable = "";
        var region = "";
        var tempGPA = "";
        var GPA = 0;
        var i = 0;
        var admit = 0;
        var african = 0;
        var size = "";
        var tempSize = 0;
       

        region = fmDashboard.slRegion.value;
        size   = fmDashboard.slSize.value;
        tempGPA= fmDashboard.txGPA.value;
        GPA    = Number(tempGPA);
        for(i = 0; i < colleges.length; i++){
          admit = Number(colleges[i][3]);
          african = Number(colleges[i][6]);
          tempSize = Number(size);
  
        }
        sTable = "<table border='10' class= 'center' style='border: 1px solid black;border-collapse: collapse'>";
        sTable = sTable + "<tr bgcolor='ffcccc'>";
        sTable = sTable + "<th>College</th><th>Location</th><th>Region</th><th>Admission<br>Rate</th><th>GPA</th><th>Student<br>Enrollment</th><th>African-American<br>Population</th><th>Total Cost</th>";
        sTable = sTable + "</tr>";
        for(i = 0; i < colleges.length; i++){
          if(GPA >= colleges[i][4] && region == colleges[i][2] && tempSize >= colleges[i][5]){
          sTable = sTable + "<tr bgcolor='#ffe6e6'>";
          sTable = sTable + "<td>" + '<a class="college_link" href="' + colleges[i][8] + '"> '  + colleges[i][0] + '  </a>' + "</td>";
          sTable = sTable + "<td>" + colleges[i][1] + "</td>";
          sTable = sTable + "<td>" + colleges[i][2] + "</td>";
          sTable = sTable + "<td align = 'center'>" + Math.round(colleges[i][3]*100) + "%" + "</td>";
          sTable = sTable + "<td align = 'center'>" + colleges[i][4] + "</td>";
          sTable = sTable + "<td>" + colleges[i][5] + "</td>";
          sTable = sTable + "<td align = 'center'>" + Math.round(colleges[i][6]*100) + "%" + "</td>";
          sTable = sTable + "<td>" + colleges[i][7] + "</td>";
          sTable = sTable + "</tr>";
        }
          else if(GPA >= colleges[i][4] && region == "all" && tempSize >= colleges[i][5]){
            sTable = sTable + "<tr bgcolor='#ffe6e6'>";
          sTable = sTable + "<td>" + '<a class="college_link" href="' + colleges[i][8] + '"> '  + colleges[i][0] + '  </a>' + "</td>";
          sTable = sTable + "<td>" + colleges[i][1] + "</td>";
          sTable = sTable + "<td>" + colleges[i][2] + "</td>";
          sTable = sTable + "<td align = 'center'>" + Math.round(colleges[i][3]*100) + "%" + "</td>";
          sTable = sTable + "<td align = 'center'>" + colleges[i][4] + "</td>";
          sTable = sTable + "<td>" + colleges[i][5] + "</td>";
          sTable = sTable + "<td align = 'center'>" + Math.round(colleges[i][6]*100) + "%" + "</td>";
          sTable = sTable + "<td>" + colleges[i][7] + "</td>";
          sTable = sTable + "</tr>";
          }
      }   
        sTable = sTable + "</table>";
        document.getElementById("output").innerHTML = sTable;
          window.scrollBy(0, 400);
    }


    function login(){

      var email_phone = "";
      var password = "";

      email_phone = document.getElementById("user").value;
      password = document.getElementById("pass").value;
    fetch('./database.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
    }