$( document ).ready(function() {

    var players = [
    	{name: 'yoda', hp: 200, attk: 80, cattk:80, img: 'assets/images/1.jpg', mydiv: $("<div>").attr('id', 'yoda')},
    	{name: 'vader', hp: 180, attk: 70, cattk:75, img: 'assets/images/2.jpg', mydiv: $("<div>").attr('id', 'vader')},	
    	{name: 'obi', hp: 140, attk:50, cattk:50, img: 'assets/images/3.jpg', mydiv: $("<div>").attr('id', 'obi')},
    	{name: 'kyloren', hp: 110, attk:30, cattk: 35, img: 'assets/images/4.jpg', mydiv: $("<div>").attr('id', 'kyloren')},
  /*      {name: 'rey', hp: 100, attk:50, cattk:50, img: 'assets/images/5.jpg'},
        {name: 'luke', hp: 160, attk:60, cattk: 45, img: 'assets/images/6.jpg'},*/
    ];

// var newDiv = $('<div>').html("Some text");
// var newH1 = $('<h1>').html("hello");

// newDiv.append(newH1);

// <div>
//   Some Text
//   <h1>hello</h1>
// </div>



// $("#container").append(newDiv);



/*Create Button*/

    for (var i=0; i<players.length; i++) {
        
        var b = $('<button>');
            b.addClass('button-border');
            b.attr('data-fighter',players[i]);
            b.append(players[i].name +"<br><img src='"+players[i].img+"'<br><br>"+players[i].hp);
            $('#showPlayers').append(b);
        };
        var playerChoosen=false;
        var defenderChosen=false;
    

     $('.button-border').on('click', function() {
        if (!playerChoosen){

                $("#selectedPlayer").append($(this));
                $("#showOpponents").append($("#showPlayers").children());
               
        playerChoosen=true;

    } else if (!defenderChosen){

                $ ("#selectedOpponent").append($(this)); 
                }   
            });

         
      
  


/*
    $('.button-border').on('click', function() {
        $("#selectedPlayer").append($(this));
        $("#showOpponents").append($('#showPlayers').children());
        });

     $('.buttonOppo').on('click', function() {
        $("#selectedOppo")append($(this));
        });

  $(this).hide();
  
    $('#.button-border').on('click', function() {
        $("#selectedOpponent").append($(this));
        });

*/ 


});
