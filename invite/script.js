// This function is to act as a popup for when the button "click here" is pushed 
// and also to close the invitation when
// // the button RSVP is pushed. 


        (function () {
            function openPopup() {
              var move = document.getElementsByClassName("popup");
              console.log("clicked"); 
            }
          
            document.getElementById("Click").addEventListener("click", openPopup, true);

            function closePopup() {
                var move = document.getElementsByClassName("popup");
                console.log("RSVP Successful");//Displays closed
              }

              document.getElementById("close").addEventListener("click", closePopup, true);
        
        })();

          