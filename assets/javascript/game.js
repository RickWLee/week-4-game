$( document ).ready(function() {

    var players = [
    	{name: 'yoda', hp: 200, attk: 80, cattk:80, img: 'assets/images/1.jpg', mydiv: $("<div>").attr('id', 'yoda')},
    	{name: 'vader', hp: 180, attk: 70, cattk:75, img: 'assets/images/2.jpg', mydiv: $("<div>").attr('id', 'vader')},	
    	{name: 'obi', hp: 140, attk:50, cattk:50, img: 'assets/images/3.jpg', mydiv: $("<div>").attr('id', 'obi')},
    	{name: 'kyloren', hp: 110, attk:30, cattk: 35, img: 'assets/images/4.jpg', mydiv: $("<div>").attr('id', 'kyloren')},
        {name: 'rey', hp: 100, attk:50, cattk:50, img: 'assets/images/5.jpg'},
        {name: 'luke', hp: 160, attk:60, cattk: 45, img: 'assets/images/6.jpg'},
    ];

//show available players to choose from
    for (var i=0; i<players.length; i++) {
        
        var b = $('<button>');
            b.addClass('button-border');
            b.attr('data-fighter',players[i]);
            b.append(players[i].name +"<br><img src='"+players[i].img+"'<br><br>"+players[i].hp);
            $('#showPlayers').append(b);
    };


        var playerChoosen=false;
        var defenderChosen=false;

    //hide all sections so user can only choose from the list of players
        $('#selectedPlayerSection').hide();
        $('#defenderSection').hide();
        $('#showOpponentsSection').hide();
        $('#duelStatusSection').hide();

    //On click, user will choose the players and it will show the selected player and list other players as opponents for attack.

    $('.button-border').on('click', function() {
        if (!playerChoosen){
                console.log(playerChoosen);

                $("#selectedPlayer").append($(this));
                $("#showOpponents").append($("#showPlayers").children());
                $('#showPlayersSection').hide(); //remove the empty div for show all players
                
                playerChoosen=true;
                $('#selectedPlayerSection').show(); //Allow user to see the selected player
                $('#showOpponentsSection').show(); //Allow user to see the avaliable opponents for selection for fight
                

        } else if (!defenderChosen){
                $('#defenderSection').show(); //after user select the opponent, defender section will be display
                $('#duelStatusSection').show(); //Duel status will be display as defender has been selected.

                console.log(playerChoosen);
                console.log(defenderChosen);
                
                $("#selectedOpponent").append($(this)); 
                $("#selectedPlayer: parent").remove("button-border");  

                }  

    });

         


});
