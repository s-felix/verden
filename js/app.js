/* EMAIL FORM HANDLING */

$('form').submit(function(e){
  // do not submit form
  e.preventDefault();
  // save value if the form field is not blank or the default
  if( $('#email').val() !== '' && $('#email').val() !== 'Email' ){
    // store value added to field in a variable
    let val = $('#email').val();
    // add email address to message
    $('.form-confirmation-message span').text(val);
    // show message (initially hidden with "hide" class)
    $('.form-confirmation-message').removeClass('hide');
    // hide input
    $('.form-input').addClass('hide');
  }
})

$('.facts h4').click(function(){
  if( $(this).hasClass('curr') ){
   
    $(this).next().removeClass('more');
    
    $(this).removeClass('curr');
  } else {
    

    $('h4').removeClass('curr');
   
    $(this).addClass('curr');
  
    $('.accordion-content').removeClass('more');

    $(this).next().addClass('more');
  }
})


AOS.init();