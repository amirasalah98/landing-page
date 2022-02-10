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



