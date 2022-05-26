$(document).ready(function(){

    $('#menu').click(function(){  //fungsi untuk id menu ketika diklik
        $(this).toggleClass('fa-times');  //ketika diklik tambahkan class yang bernama fa-times(untuk merubah ikon ke silang)
        $('header').toggleClass('toggle'); //untuk elemen header ketika diklik tambahkan class yang bernama toggle
    });

    $(window).on('scroll load',function(){   //untuk membuat gambar roket bisa diklik
        $('#menu').removeClass('fa-time');   //ketika diklik maka akan langsung ke menuju bagian home
        $('header').removeClass('toggle');   //ketika sudah dibagian home maka gambar roket hilang

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    });

    // smooth scroling  (untuk membuat layar ngescroll ketika tombol navbar ditekan )

    $('a[href*="#"]').click(function(e){

        e.preventDefault();

        $('html,body').animate({

            scrollTop : $($(this).attr('href')).offset().top,


        },
        500,
        'linear'        
        );

    });

});