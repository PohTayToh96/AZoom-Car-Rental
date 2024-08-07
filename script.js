var acc = document.getElementsByClassName("accordion");
var a;
var btnContainer = document.getElementById("filterBrand");
var k = [];
if (btnContainer) {
  k = btnContainer.getElementsByClassName("btn")
}

document.addEventListener('DOMContentLoaded', function() {
    
    const reservationForm = document.getElementById('reservation-form');
    const reservationStatus = document.getElementById('reservation-status');
    let reservationCode = false

    if (reservationForm) {
        reservationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            

            const name = document.getElementById('name').value;
            const address = document.getElementById('address').value;
            const passportId = document.getElementById('passport-id').value;
            const email = document.getElementById('email').value;
            const mobile = document.getElementById('mobile').value;
            const startDate = new Date(document.getElementById('start-date').value);
            const duration = document.getElementById('duration').value;
            const creditCard = document.getElementById('credit-card').value;
            console.log(startDate);
            if (!name || !address || !passportId || !email || !mobile || !startDate || !duration  || !creditCard) {
                reservationStatus.textContent = 'Please fill in all fields.';
                return;
            }
            const returnDate = new Date(startDate.getTime() + duration*1000*60*60*24);
            // const year = returnDate.getFullYear();
            // const month = String(returnDate.getMonth()).padStart(2, '0'); // Months are zero-based
            // const day = String(returnDate.getDate()).padStart(2, '0')
            const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
            
            const referenceNumber = 'REF' + Math.floor(Math.random() * 1000000);
            reservationStatus.textContent = `Your reservation is successful! Your reference number is ${referenceNumber}. Please return the car by ${returnDate.toLocaleDateString('en-SG', dateOptions)}
            Click OK to leave the page`;
            
            let userConfirmed = window.confirm(reservationStatus.textContent);
            if (userConfirmed) {
                // click confirm to leave the page
                document.getElementById('back').click();
            } else {
                // Code to execute if the user clicks "Cancel"
                console.log("User clicked Cancel.");
            }
            reservationForm.reset();

        });

    }
});



/*FAQ*/
for (a = 0; a < acc.length; a++) {
    acc[a].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
  
      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

selectFilter("all")
function selectFilter(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

// Show filtered elements
function AddClass(element, name) {
  var i, a1, a2;
  a1 = element.className.split(" ");
  a2 = name.split(" ");
  for (i = 0; i < a2.length; i++) {
    if (a1.indexOf(a2[i]) == -1) {
      element.className += " " + a2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var i, a1, a2;
  a1 = element.className.split(" ");
  a2 = name.split(" ");
  for (i = 0; i < a2.length; i++) {
    while (a1.indexOf(a2[i]) > -1) {
      a1.splice(a1.indexOf(a2[i]), 1);
    }
  }
  element.className = a1.join(" ");
}

for (var i = 0; i < k.length; i++) {
  k[i].addEventListener("click", function() {
    var cur = document.getElementsByClassName("active");
    cur[0].className = cur[0].className.replace(" active", "");
    this.className += " active";
  });
}

