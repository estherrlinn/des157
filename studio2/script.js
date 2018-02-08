"use strict"
console.log("check");

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  //variables
            var hydroflask = document.getElementById('hydroflask');
            var phone = document.getElementById('phone');
            var wallet = document.getElementById('wallet');

            var close1 = document.getElementsByClassName('close1');
            var close2 = document.getElementsByClassName('close2');
            var close3 = document.getElementsByClassName('close3');

            var hydroflaskText = document.getElementById('hydroflaskText');
            var phoneText = document.getElementById('phoneText');
            var walletText = document.getElementById('walletText');
        })

//click hydroflask image for info
        hydroflask.addEventListener('click', function() {
            hydroflaskText.style.display = "block";
        })

        //click phone image for info
        phone.addEventListener('click', function() {
            phoneText.style.display = "block";
        })

      //click wallet image for info
        wallet.addEventListener('click', function() {
            walletText.style.display = "block";
        })

        //close hydroflask text box
        close1.addEventListener("click", function() {
            hydroflaskText.style.display = "none";
        })

//close phone text box
        close2.addEventListener('click', function() {
            phoneText.style.display = "none";
        })

//close wallet text box
        close3.addEventListener('click', function() {
            walletText.style.display = "none";
        })
