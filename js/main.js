function swap() {
   if ($(window).width() >= 767) {
    $('.swsmall-bot').remove().insertAfter($('.swsmall-top'));
  } else {
    $('.swsmall-bot').remove().insertBefore($('.swsmall-top'));
  }
}

swap();

$(window).resize(function() {
 swap();
})


function swap1() {
   if ($(window).width() >= 991) {
    $('.swsmall-bot1').remove().insertAfter($('.swsmall-top1'));
  } else {
    $('.swsmall-bot1').remove().insertBefore($('.swsmall-top1'));
  }
}

swap1();

$(window).resize(function() {
 swap1();
})

function swap2() {
   if ($(window).width() >= 767) {
    $('.swsmall-bot2').remove().insertAfter($('.swsmall-top2'));
  } else {
    $('.swsmall-bot2').remove().insertBefore($('.swsmall-top2'));
  }
}

swap2();

$(window).resize(function() {
 swap2();
})

function swap3() {
   if ($(window).width() >= 767) {
    $('.swsmall-bot3').remove().insertAfter($('.swsmall-top3'));
  } else {
    $('.swsmall-bot3').remove().insertBefore($('.swsmall-top3'));
  }
}

swap3();

$(window).resize(function() {
 swap3();
})

function swap4() {
   if ($(window).width() >= 767) {
    $('.swsmall-bot4').remove().insertAfter($('.swsmall-top4'));
  } else {
    $('.swsmall-bot4').remove().insertBefore($('.swsmall-top4'));
  }
}

swap4();

$(window).resize(function() {
 swap4();
})

// Setup form validation on the #register-form element
//Send Quote Form
$("#DemoForm").validate({
    rules: {
      schedule_option: {
        required: true
      },
      fname: {
          required: true
      },
      lname: {
          required: true
      },
   
      email: {
          email: true,
          required: true
      },

      phone: {
        required: true,
          
      },
      
      company:{
          required: true
      }
    },
    highlight: function(element) {
        $(element).closest('.form-control').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-control').removeClass('has-error');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if(element.parent('.form-control').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    },
     submitHandler: function (form) {
    var request;
    // bind to the submit event of our form



    // let's select and cache all the fields
    var $inputs = $(form).find("input, select, button, textarea");
    // serialize the data in the form
    var serializedData = $(form).serialize();

    // let's disable the inputs for the duration of the ajax request
    $inputs.prop("disabled", true);

    // fire off the request to /form.php

    request = $.ajax({
            url: "demo.php",
            type: "post",
            data: serializedData
    });

    // callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR) {
            // log a message to the console
            console.log("Hooray, it worked!");
          // alert("success awesome");
              $(".form-hider").hide();
              $(".thankyou-order").show();


          // $("#loading").show().delay(3000).queue(function(n) {
          //    $(this).hide();$("#thankyou").show(); n();
          //  });

            //$("#q3").hide();
            //$('#add--response').html('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert">×</button><strong>Well done!</strong> You successfully read this important alert message.</div>');
    });

    // callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown) {
            // log the error to the console
            console.error(
                "The following error occured: " + textStatus, errorThrown);
    });

        // callback handler that will be called regardless
        // if the request failed or succeeded
    request.always(function () {
            // reenable the inputs
            $inputs.prop("disabled", false);
    });            

  }
});