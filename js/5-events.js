$(document).ready(function(){
    let heading = $('.main-header');

    heading.click(function(){ //obiekt -> metoda -> funkcja zwrotna
        heading.css('background-color', 'red');  //  $(this).css('background-color', 'red');
    });

    heading.click(function(){ 
        $(this).css('color', 'yellow');
    });

    $('p').on({
        click: function(){
            $(this).css('background-color', 'red');
        },
        mouseover: function(){
            $(this).css('color', 'yellow');
        }
    });


/* Napisz skrypt który przechwyci klikniecie w button z klasa .add-user-button i doda do listy z klasa .user-list kolejny elemeny li z trescia 'User X' - gdzie X jest kolejnym numerem uzytkownika */

    let addUserButton = $('.add-user-button');
    let usersList = $('.users-list');
    
    addUserButton.click(function(){
        let usersItemsCount = $('.users-list li').length;

        usersList.append('<li>user-' + (usersItemsCount +1) + '</li>');

    });

          
    $('.remove-user-button').click(function(){
            $('.users-list li:last').remove();

    });

});