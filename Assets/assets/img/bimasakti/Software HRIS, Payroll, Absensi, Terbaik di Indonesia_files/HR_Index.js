var session_id = "";
$(function () {
    
    SetCaptcha();
    $("#btnSubmitContactUs").click(SubmitContactUs);
    $("#btnReCaptcha").click(SetCaptcha);
    $("#CNAME").change(function () {
        $("#msg_SUCCESS").html("");
    })
});




function SubmitContactUs() {
    $("#btnSubmitContactUs").prop("disabled", true);
    setSpinner("spinerBtn");
    $(".msg_clear").html("");
    var isValid = validation();
    if (isValid != "") {
        //alert(isValid);
        $("#btnSubmitContactUs").prop("disabled", false);
        $("#spinerBtn").hide();
        return false;
    }
    var CSESSION_DATA = $("#CSESSION_DATA").val()
    CSESSION_DATA = CSESSION_DATA.toUpperCase();
    var param = {
        "CNAME": $("#CNAME").val(),
        "CCOMPANY_NAME": $("#CCOMPANY_NAME").val(),
        "CJOB_TITLE": $("#CJOB_TITLE").val(),
        "CEMAIL": $("#CEMAIL").val(),
        "CMOBILE_PHONE": $("#CMOBILE_PHONE").val(),
        "CSOLUTION": $("#CSOLUTION").val(),
        "CTOTAL_EMPLOYEE": $("input[name='CTOTAL_EMPLOYEE']:checked").val(),
        "CINDUSTRY_TYPE": $("input[name='CINDUSTRY_TYPE']:checked").val(),
        "CMESSAGE": $("#CMESSAGE").val(),
        "CSESSION_ID": session_id,
        "CSESSION_DATA": CSESSION_DATA,
    };
    $rweb.callApiWithToken(
          "POST",
          App_path_root + "api/v1/RCDWEB/HRContactUs",
          param,
          function (data, status, xhr) {
              if (data.CCODE == "0000") {
                  $("#CNAME").focus();
                  $("#msg_SUCCESS").html("Success Submit");
                  $("#msg_SUCCESS").css({
                      'color': '#ffffff',
                      'background-color': '#970e8d',
                      'padding': '0px 15px',
                      'border-radius': '5px',
                      'font-size': '50px',
                      'text-align': 'center'
                  });
                  $("#msg_SUCCESS").fadeIn(1000);
                  $("#msg_SUCCESS").show();
                  $(".msg_clear").html("");
                  $("#CNAME").val("");
                  $("#CCOMPANY_NAME").val("");
                  $("#CJOB_TITLE").val("");
                  $("#CEMAIL").val("");
                  $("#CMOBILE_PHONE").val("");
                  $("#CMESSAGE").val("");
                  $("#CSESSION_DATA").val("");
                 
                  setTimeout(function () {
                      $("#msg_SUCCESS").fadeOut();
                  }, 5000);
                  SetCaptcha();
              } else {
                  $("#CSESSION_DATA").focus();
                  $("#msg_CSESSION_DATA").html(data.CMESSAGE);
              }
              $("#btnSubmitContactUs").prop("disabled", false);
              $("#spinerBtn").hide();
          },
          function (errors) {
              console.log(errors);
              $("#CNAME").focus();
              $("#msg_SUCCESS").html("Error");
              $("#msg_SUCCESS").fadeIn(1000);
              setTimeout(function () {
                  $("#msg_SUCCESS").fadeOut();
              }, 5000);
              $("#btnSubmitContactUs").prop("disabled", false);
              $("#spinerBtn").hide();
          }
      );

};


function validation() {
        if ($("#CNAME").val() == "") {
            $("#CNAME").focus();
            $("#msg_CNAME").html("Name is Required");
            return "Name is Required";
        } else if ($("#CCOMPANY_NAME").val() == "") {
            $("#CCOMPANY_NAME").focus();
            $("#msg_CCOMPANY_NAME").html("Company Name is Required");
            return "Company Name ID is Required";
        } else if ($("#CJOB_TITLE").val() == "") {
            $("#CJOB_TITLE").focus();
            $("#msg_CJOB_TITLE").html("Job Title is Required");
            return "Job Title is Required";
        } else if ($("#CEMAIL").val() == "") {
            $("#CEMAIL").focus();
            $("#msg_CEMAIL").html("Email is Required");
            return "Email is Required";
        } else if (!validateEmail($("#CEMAIL").val())) {
            $("#CEMAIL").focus();
            $("#msg_CEMAIL").html("Email not Valid");
            return "Email not Valid";
        } else if ($("#CMOBILE_PHONE").val() == "") {
            $("#CMOBILE_PHONE").focus();
            $("#msg_CMOBILE_PHONE").html("Mobile Phone is Required");
            return "Mobile Phone is Required";
        } else if ($("#CSOLUTION").val() == "") {
            $("#CSOLUTION").focus();
            $("#msg_CSOLUTION").html("Indicate your area of interest is Required");
            return "Indicate your area of interest Required";
        } else if ($("input[name='CTOTAL_EMPLOYEE']:checked").val() == undefined) {
            $("#CMOBILE_PHONE").focus();
            $("#msg_CTOTAL_EMPLOYEE").html("Total Employee is Required");
            return "Total Employee is Required";
        } else if ($("input[name='CINDUSTRY_TYPE']:checked").val() == undefined) {
            $("#CMOBILE_PHONE").focus();
            $("#msg_CINDUSTRY_TYPE").html("Industry is Required");
            return "Industry is Required";
        } else if ($("#CMESSAGE").val() == "") {
            $("#CMESSAGE").focus();
            $("#msg_CMESSAGE").html("Message is Required");
            return "Message is Required";
        } else if ($("#CSESSION_DATA").val() == "") {
            $("#CSESSION_DATA").focus();
            $("#msg_CSESSION_DATA").html("Captcha is Required");
            return "Captcha is Required";
        } else { return ""; }
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}




function SetCaptcha(onComplete) {

    $rweb.callApiWithToken(
          "POST",
          App_path_root + "api/v1/RCDWEB/SetData",
          {},
          function (data, status, xhr) {
              session_id = data.CSESSION_ID;
              $('#imgCaptcha').attr('src', App_path_root + `api/v1/RCDWEB/getcaptcha/` + session_id);
              if (onComplete) {
                  onComplete();
              }
          },
          function (error) {
              console.log(error);
          }
      );

};


function setSpinner(IdHtml) {
    $("#" + IdHtml).css("display", "block");
    $("#" + IdHtml).css("border", "4px solid rgba(0, 0, 0, 0.3)");
    $("#" + IdHtml).css("border-top", "4px solid #3498db");
    $("#" + IdHtml).css("border-radius", "50%");
    $("#" + IdHtml).css("width", "20px");
    $("#" + IdHtml).css("height", "20px");
    $("#" + IdHtml).css("animation", "spin 2s linear infinite");
    $("#" + IdHtml).css("float", "right");
}

