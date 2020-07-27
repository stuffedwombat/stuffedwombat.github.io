//features
const features = document.querySelectorAll('.feature');

observer = new IntersectionObserver(sections => {
  sections.forEach(section => {
    console.log(section)
    if (section.intersectionRatio > 0.4) {
      section.target.classList.add('show-feature');
    } else {
      section.target.classList.remove('show-feature');
    }
  });
}, { threshold: 0.4 });

features.forEach(feature => observer.observe(feature))

// logo calculate rotation and update css variable
var titleWrap = document.getElementsByClassName('logo');
			document.body.addEventListener('mousemove', cursorPositionHandler);

			function cursorPositionHandler(e) {
				var decimalX = e.clientX / window.innerWidth - 0.5;
				var decimalY = e.clientY / window.innerHeight - 0.5;
				TweenMax.to(titleWrap, 0.5, { rotationY: 20 * decimalX, rotationX: 18 * decimalY, ease: Quad.easeOut, transformPerspective: 700, transformOrigin: "center" });
			}

var titleWrap2 = document.getElementsByClassName('lazy-youtube');
			document.body.addEventListener('mousemove', cursorPositionHandler2);

			function cursorPositionHandler2(e) {
				var decimalX = e.clientX / window.innerWidth - 0.5;
				var decimalY = e.clientY / window.innerHeight - 0.5;
				TweenMax.to(titleWrap2, 0.5, { rotationY: 30 * decimalX, rotationX: 25 * decimalY, ease: Quad.easeOut, transformPerspective: 700, transformOrigin: "center" });
			}

//scroll
function scrollNav() {
  $('ul.nav a').click(function(){
    $(".active").removeClass("active");     
    $(this).addClass("active");
    
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 300);
    return false;
  });
}
scrollNav();