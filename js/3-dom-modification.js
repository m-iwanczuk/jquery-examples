$(document).ready(function(){


    let heading = $('.main-header');

    /* Modyfikacja zawartości */

    heading.text('Nowa treść nagłówka'); //zmieni treść nagłówka
    heading.html('Nowa treść nagłówka ze <span>spanem</span>'); //zmieni treść nagłówka ze znacznikami html

    // dygresja - przykład z vanilla-js:
    // document.getElementById('about').innerHTML += 'Nowa zawartość';

    /* append, prepend, before, after */

    heading.append(' <- Wewnątrz na końcu ');
    heading.prepend(' Wewnątrz na początku -> ');
    heading.before('Za znacznikiem');
    heading.after('Przed znacznikiem');


    /* PRzed każcym paragrafem dodaj nagłówek h3 z treswcia 'Naglowek h3' */

    let paragraphs = $('p');
    paragraphs.before('<h3>Nagłówek h3</h3>');

    // alternatywnie:
    //$('p').before('<h3>Nagłówek h3</h3>'); 


    /* Tworzenie elementów */

    let newPar = $('<p>Nowy paragraf</p>');
    heading.after(newPar);


    /* Usuwanie element i ich zawartiści 

    heading.empty();  // zostawia sam znacznik bez treści
    heading.remove();   //usunie razem ze znacznikiem

    */


    /* Modyfikacja wyglądu */

    // heading.css('color', '#f00');
    // heading.css('background-color', '#0f0');

    // alternatywny zapis powyższego:

    heading.css({color:'#fff', backgroundColor: '#0f0'});


    /* Dodawanie klas */

    $('p:nth-of-type(even)').addClass('bg-orange');   //nazwa klasy jako atrybut ! bez "."

});