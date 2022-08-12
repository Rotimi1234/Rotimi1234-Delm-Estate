const questions = document.querySelectorAll('.question-answer');

questions.forEach(function(question) {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener("click", function() {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");
    })
})


/*<a href = "mailto:abc@example.com?subject = Feedback&body = Message">
Send Feedback
</a> To order a pizza, <a href="tel:555-666-7777" cm_dontconvertlink>call us now</a>. */