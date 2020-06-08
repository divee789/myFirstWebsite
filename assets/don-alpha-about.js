var slideIndex = 1;

        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}    
          if 3(n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
        }


$("#head1").on("mouseover",function(){
  $("#head1").text("Travel made easier")
  $("head1-content").text("Our sole purpose is to make all aspects of travelling a pleasant and enjoyable experience for our clients")
})
$("#head1").on("mouseout",function(){
  $("#head1").text("Connection on a global scale")
  $("head1-content").text("We posesss state of the art facilities and resources to make any distance between two points on the planet Earth surmountable no matter how obscure or far.")
})


$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.menu-toggle').toggleClass('active')
        $('nav').toggleClass('active')
    })
})

var headingChange = {
    currentHeader: 0,
    headings: ['Connection on a global scale', 'Travel made easier'],
    heading: function() {
      document.getElementById('head1').innerHTML = this.headings[this.currentHeader];
      if (this.currentHeader === this.headings.length - 1) {
        this.currentHeader = 0;
      } else {
        this.currentHeader = this.currentHeader + 1;
      }
    } 
  };
  
  setInterval(function(){
    headingChange.heading();
  }, 4000)



$(document).ready(function(){
var texts = [
  {
      word2: 'We posesss state of the art facilities and resources to make any distance between two points on the planet Earth surmountable no matter how obscure or far'
  },
  {
      word2: 'Our sole purpose is to make all aspects of travelling a pleasant and enjoyable experience for our clients'
  }
];


$word2 = $('#head1-content');
var previousWord = 1;

setInterval(function ()
{
  var currentWord
  if(previousWord < texts.length) {
      currentWord = previousWord + 1;
  } else {
      currentWord = 1;
  }

  $word2.fadeOut(500,function () {
      $word2.text(texts[currentWord-1]['word2']).fadeIn(500);
  });
  previousWord = currentWord;
}, 4000);
});

$(document).ready(function(){
var texts = [
    {
        word1:'Dedicated personnel',
        image1: 'assets/images/office.jpg'
    },
    {
        word1: 'Expanding our frontiers',
        image1: 'assets/images/dubai.jpg'
    },
    {
       word1:'Utilising online oppurtunities',
       image1:'assets/images/a-la-mode-office.jpg'
    }
];

$word1 = $('#exp2');
$image1 = $('#exp');
var previousWord = 1;

setInterval(function ()
{
    var currentWord
    if(previousWord < texts.length) {
        currentWord = previousWord + 1;
    } else {
        currentWord = 1;
    }
    $word1.fadeOut(500,function () {
        $word1.text(texts[currentWord-1]['word1']).fadeIn(500);
    });
    $image1.fadeOut(500,function () {
        $image1.attr("src",texts[currentWord-1]['image1']).fadeIn(500);
    });
    previousWord = currentWord;
}, 4000);
});


$(".sub-section4").on("click",".remover",function(){
    $(this).parent().fadeOut(function(event){
        $(this).remove()
       
    })
    event.stopPropagation()
})


$("#comment").on("keypress",function(event){
    if(event.which === 13){
    var com = $(this).val();
     $(this).val("")
    $(".sub-views").append("<div class = views-content><span class = remover><i class='fa fa-trash'></i></span><br>" + com + "</div>")

    }
})

$(".com-btn").on('click',function(){
    $(".edit").slideToggle("slow");
    if($(this).text()=="Write a comment"){
        $(this).text("no,thanks");
    }
    else(
        $(this).text('Write a comment')
    )
})

