$(document).ready(function() {

var players =[
	{name: 'yoda', hp: 200, attk: 80, cattk:80, img: <img src='../images/1.jpg'>},
	{name: 'vader', hp: 180, attk: 70, cattk:75, img: <img src='../images/2.jpg'>},	
	{name: 'obi', hp: 140, attk:50, cattk:50, img:<'img scr=../images/3.jpg'>},
	{name: 'kyloren', hp: 110, attk:30, cattk: 35, <img:'img src=../images/4.jpg'>},

];

/*Create Button*/

for (var i=0; i<player.length; i++) {
    var b=$('<button>');
        b.addClass('button-border');
        b.attr('data-fighter',players[i]);
        b.text('name: '+players[i].name);
        b.appendTo(players[i].img)


        






}





    
}

