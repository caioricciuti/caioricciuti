// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCxzwPhkrQFcxor9st_VbkB-PlMVhwJtY8",
  authDomain: "caioricciuti-fe632.firebaseapp.com",
  databaseURL: "https://caioricciuti-fe632.firebaseio.com",
  projectId: "caioricciuti-fe632",
  storageBucket: "caioricciuti-fe632.appspot.com",
  messagingSenderId: "1084914315605",
  appId: "1:1084914315605:web:47724bba8102a8d38a7fdc",
  measurementId: "G-8B78DPTXPB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var messagesRef = firebase.database().ref("messages");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  var name = getInputVal("name");
  var company = getInputVal("company");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var message = getInputVal("message");

  saveMessage(name, company, email, phone, message);
  alert("Success! Message sent, thank you!");
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveMessage(name, company, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message,
  });
}

/*!
 * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
      this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate({
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#sideNav",
  });
})(jQuery); // End of use strict