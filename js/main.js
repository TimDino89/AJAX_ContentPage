// AJAX


$(document).ready(function(){

  var $navBtns = $('.btn');
  var $firstPage = $('#firstPage');
  var $secondPage = $('#secondPage');
  var $thirdPage = $('#thirdPage');
  var $content = $('#js-main-content');
  var path = 'data/page1.txt';

  $content.load(path);

  // Event Listener
  $navBtns.on('click', function(){
    
    if ($(this).data('number') == 1) {
      path = 'data/page1.txt';
    } else if ($(this).data('number') == 2) {
      path = 'data/page2.txt';
    } else if ($(this).data('number') == 3) {
      path = 'data/page3.txt';
    }

    $navBtns.removeClass('is-active');
    $(this).addClass('is-active');

    // Calling function sendRequest
    sendRequest(path);
  });

  // Sending Request
  function sendRequest(path){
    $.ajax({
      url: path,
      success: function(data){
          $content.html(data);
        }
      });
    };

});