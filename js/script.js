  // $(document).ready(function(){
    $(".show").click(function(){
        $(this).siblings(".hide").toggle();
    })
$('.bookmark').on('click',function(){
    $('.mybookmark').removeClass("display")
    if($('.mysearch'&&'.myshare').not('.display')){
        $('.mysearch').addClass('display')
        $('.myshare').addClass('display')
    }
})
$('.search').on('click',function(){
    $('.mysearch').removeClass("display")
    if($('.mybookmark'&&'.myshare').not('.display')){
        $('.myshare').addClass('display')
        $('.mybookmark').addClass('display')
    }
})
$('.share').on('click',function(){
    $('.myshare').removeClass("display")
    if($('.mybookmark'&&'.mysearch').not('.display')){
        $('.mysearch').addClass('display')
        $('.mybookmark').addClass('display')
    }
})

$('a').click(function (event) {
    event.preventDefault();
  });


// $('.nav-icon').on('click',function(){
//     console.log('true')
// $('.display-nav').addClass('style-nav')
// $('.nav-icon').hide()
// })

/* Open */
function openNav() {
    console.log(true)
    document.getElementById("myNav").style.display = "block";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.display = "none";
  }
