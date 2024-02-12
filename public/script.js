
 function goToContactPage(){
    window.location.href="/contact";
    console.log(window.location.href);
 };

 document.addEventListener('DOMContentLoaded', function() {
   // Add 'animate' class to the element after the page loads
   document.querySelector('.homeProfile').classList.add('animate');
});
