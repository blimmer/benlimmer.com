// This is a bit old-school, but the only javascript interaction on the site
// right now.

if (!window.fetch) {
  var alert = $(".alert-danger");
  alert.text("You're using a very old browser, so this form won't work. Please email me at hello@benlimmer.com.");
  alert.show();
  $("#contact-form").hide();
  return;
}

$("#contact-form").submit(function (e) {
  e.preventDefault();

  $("#contact-error").hide();

  var $form = $(this);

  $form.find('button[type="submit"').prop("disabled", true);

  var name = $form.find("#name-input").val(),
    email = $form.find("#email-input").val(),
    message = $form.find("#message-input").val();

  fetch("https://api.benlimmer.com/contact", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
    }),
  })
    .then(function () {
      $("#contact-success").show();
      $form.find(".form-control").each(function () {
        $(this).prop("disabled", true);
      });
    })
    .catch(function (e) {
      console.error(e);
      var alert = $("#contact-error");
      alert.show();
      $form.find('button[type="submit"').prop("disabled", false);
    });
});
