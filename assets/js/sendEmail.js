function sendMail(contactForm){
    emailjs.send("gmail", "coronavirusreport", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "question_or_suggestion": contactForm.message.value
    })
    .then (
        function (response){
            //Add message to modal
            response = $(".message-sent-text").text("Thank you for your message, we'll be in touch with you as soon as possible.");
            //Only opens modal on successful response
            $("#messageSent").modal("toggle");
            $("#btn-close-modal").click(function(){
                location.reload();
            });
        },
        function(error){
            alert("failed", error); // To block from loading a new page
        });
    return false;
}