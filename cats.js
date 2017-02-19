$(document).ready(function() {
  $('.summon-cats').click(function() {
    $.ajax({
    method: 'GET',
    url: 'http://bitkittens.herokuapp.com/cats.json',
    dataType:'JSON',
  }).done(function (data) {

    for(var i=0; i < data.cats.length; i++) {
      $('.cat-box').append('<img src= "' + data.cats[i].photo + '">');
      // $('src').append('<alt = "Photo of:' + data.cats[i].name + '"' );
    }

    });
  });
});
