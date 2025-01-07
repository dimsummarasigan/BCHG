function scrollToTargetAdjusted(id) {
    var element = document.getElementById(id);
    var headerOffset = 45;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });

  	setTimeout(function() {
      element.style.border = "3px solid red";
    }, 1500);
  
    enableElem(query('solution-submit'));
    query('solution-thread').reset();
}
