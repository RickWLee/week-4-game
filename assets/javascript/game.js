

    var players = [
    	{name: 'yoda', hp: 200, attk: 80, cattk:80, img: 'assets/images/1.jpg'},
    	{name: 'vader', hp: 180, attk: 70, cattk:75, img: 'assets/images/2.jpg'},	
    	{name: 'obi', hp: 140, attk:50, cattk:50, img: 'assets/images/3.jpg'},
    	{name: 'kyloren', hp: 110, attk:30, cattk: 35, img: 'assets/images/4.jpg'},
    ];

/*Create Button*/


    for (var i=0; i<players.length; i++) {
        var b = $('<button>');
            b.addClass('button-border');
            b.attr('data-fighter',players[i]);
            b.append(players[i].name +"<br><img src='"+players[i].img+"'<br><br>"+players[i].hp);
            $('#showPlayers').append(b);
        }

    $('.letter-button').on('click', function() {

            var yourPlayer = $('<div class="button-border">').text($(this).data('fighter'));
            $("#selectedPlayer").append(yourPlayer);

        });



