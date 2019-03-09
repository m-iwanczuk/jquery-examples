$(document).ready(function(){

    $('.users-list li').each(function(index, element){
        $(element).css('margin-left', index * 10 + 'px');
    });

    let secondListItem = $('.user-list li').eq(1);  //wyciąga element po indexie jako element jQuery wiec gotowy do użytku.

    console.log(secondListItem);
});