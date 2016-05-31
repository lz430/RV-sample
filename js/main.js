// Declare our vars 
var addClass = $('.addCC');
var emptyClass = $('.empty-cc');
var active = $('.active-cc');

function addCC(){
  $(addClass).slideDown();
  $(active).removeClass('active-cc');
}
function submitCC(){
    // On the submit function
    var fields = $( "form" ).serializeArray(); //grab the data and serialize it
    $(active).removeClass('active-cc'); //Remove the active class from the element

    // Appending form data to the placeholder CC
    $('.empty-cc > .sprite-cc').addClass(fields[0].value.toLowerCase());
    $('.empty-cc .starred');
    $('.empty-cc .last4').append(fields[1].value);
    $('.empty-cc .valid-dates span').append(fields[2].value);

    $(emptyClass).addClass('active-cc').removeClass('empty-cc');
    $(addClass).slideUp();
}

function resetForm(){
  $('.addCC form').each(function(){
    $('input').val("");
    $('select').prop('selectedIndex',0);
  });
}

$(window).load(function(){
  $('.add-cc').on('click', function(){
    addCC();
  });
  $('.btn-reset').on('click', function(){
    resetForm();
  });
   $('.btn-submit').click(function(){
    submitCC();
  });

}) ;
