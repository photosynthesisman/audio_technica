$(document).ready(function(){    
    if($('.best_product').length > 0){
        $('.slide').slick({
            arrows: false,
            infinite: true,
            dots: true
        }); //slick slide    
    
        $('body').scroll(function(){
            var scrollAmt = $('body').scrollTop();        
            if(scrollAmt > 0){               
                $('.gotop').css({display:'block'});
            }else{                
                $('.gotop').css({display:'none'});        
            }                    
        });     
    }//index

    if($('.detail_product').length > 0){
        $('body').scroll(function(){          
            var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();  
            var scrollAmt = $('body').scrollTop();                      
            if(scrollAmt == scrollBottom){               
                $('.gotop').css({display:'block'});
                $('.buyNow').stop().animate({opacity:0},500);    
                $('.buyNow').css({visibility:'hidden'});                            
            }else{                
                $('.gotop').css({display:'none'}); 
                $('.buyNow').stop().animate({opacity:1},500);
                $('.buyNow').css({visibility:'visible'});   
            }     
            
        }); 
        $('.detail_product .detail_color .blue').click(function(){
            $('.detail_product .detail_image').css({backgroundImage:'url(../mobile/images/product8.png)'})
        });
        $('.detail_product .detail_color .black').click(function(){
            $('.detail_product .detail_image').css({backgroundImage:'url(../mobile/images/product1.png)'})
        });
        $('.detail_product .detail_color .white').click(function(){
            $('.detail_product .detail_image').css({backgroundImage:'url(../mobile/images/product10.png)'})
        });

        $('.specifications .flex').click(function(){
            $(this).siblings().find('p').removeClass('active');            
            $(this).find('p').toggleClass('active');            
        });
    }//detail

    if($('.product_main').length > 0){
        $('body').scroll(function(){
            var scrollAmt = $('body').scrollTop();        
            if(scrollAmt > 0){
                $('header').removeClass('black');                        
            }else{
                $('header').addClass('black');               
            }                    
        }); 

        $('body').scroll(function(){
            var scrollAmt = $('body').scrollTop();        
            if(scrollAmt > 0){               
                $('.gotop').css({display:'block'});
            }else{                
                $('.gotop').css({display:'none'});        
            }                    
        });  
        
        $('.view_control .list').click(function(){
            $('.grid > div').addClass('flex');
            $('.grid').css({gap:'20px 7%'});
        })
        $('.view_control .thumbnail').click(function(){
            $('.grid > div').removeClass('flex');
        })

        $('.button_group p').click(function(){
            $(this).siblings().removeClass('is-checked');
            $(this).addClass('is-checked');
            var data = $(this).attr('data-text');                        
            
            $('.grid > div').hide();
            $('.grid > div').each(function(){
                if($(this).hasClass(data) == true){
                    $(this).show();
                }
            }) 
            if($(this).attr('data-text') == 'all'){
                $('.pagination').show();
            }else{
                $('.pagination').hide();
            }
        })   
       
        var items = $('.grid > div');
        var numItems = items.length;
        var perPage = 8;

        items.slice(perPage).hide();
        $()

        $('.pagination').pagination({
            items: numItems,
            itemsOnPage: perPage,
            prevText: "<" + "span class=" + "material-icons-outlined" + ">" + "chevron_left" + "</span>",
            nextText: "<" + "span class=" + "material-icons-outlined" + ">" + "chevron_right" + "</span>",
            onPageClick: function (pageNumber) {
                var showFrom = perPage * (pageNumber - 1);
                var showTo = showFrom + perPage;
                items.hide().slice(showFrom, showTo).show();
            }
        });
           
    } //product

    if($('.cartform').length > 0){
        $( '#check-all' ).click( function(){
            $( '#check-self' ).prop( 'checked', this.checked );
        });

        $('.select_del').click(function(){           
            if($( '#check-self' ).prop( 'checked' ) == true){
                $('.check_self').hide();
                $('.total').text(0)
            }
        });
        $('.check_self .second_floor span').click(function(){
            $('.check_self').hide();
            $('.total').text(0)
        });
        
        var plusBtn = $('#plus'),
        minusBtn = $('#minus'),
        unitPrice = $('.unitprice').attr('data-price'),
        total = $('.total'),
        amount = $('.count');

        plusBtn.click(function(){
            var currentAmount = amount.text();
            currentAmount++;
            amount.text(currentAmount);
            total.text(currentAmount*unitPrice);            
            $('.number').number( true, 0 );
        });

        minusBtn.click(function(){
            var currentAmount = amount.text();
            if(currentAmount > 1){
                amount.text(--currentAmount);        
            }else{
                alert('상품수량은 1개 이하로는 설정할 수 없습니다.');
            }
            total.text(currentAmount*unitPrice);    
        
            $('.number').number( true, 0 );
        });        

        $('.number').number( true, 0 );

        


    } //cart

    $('.header_box .flex .menu').click(function(e){
        e.preventDefault();
        $('.toggle').css({right:0, left:0});
    });
    $('.toggle .close').click(function(e){      
        e.preventDefault();  
        $('.toggle').css({right:'100%', left:'-100%'});
    });
    $('.toggleBox input').click(function(){           
        if($(this).prop( 'checked' ) == true){
           $('.toggle').addClass('active');
        }else{
            $('.toggle').removeClass('active');
        }
    });
    $('.toggle .search').click(function(e){      
        e.preventDefault();  
        $('.toggle input').toggleClass('active');
    }); //toggle

    $('.header_box .flex .search').click(function(e){
        e.preventDefault();
        $('.serch_modal').addClass('show');
    });
    $('.serch_modal .close').click(function(e){      
        e.preventDefault();  
        $('.serch_modal').removeClass('show');
    }); //search

    $('body').scroll(function(){
        var scrollAmt = $('body').scrollTop();        
        if(scrollAmt > 0){
            $('header').addClass('active');                        
        }else{
            $('header').removeClass('active');               
        }                    
    }); //header event

    $('.gotop').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop : 0},800);              
    }); //go top
    $(document).click(function(e) {	      
        if($(e.target).is('.serch_modal') && $('.serch_modal').hasClass('show')==true){
            $('.serch_modal').removeClass('show');            
        }  
    });//except for
 

  
});//common
