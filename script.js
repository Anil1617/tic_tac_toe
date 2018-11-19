$(document).ready(function(){

  var move = 1;
  var play = false;
  $("#play1").hide();
	  $("#play2").hide();
	  $("#play3").hide();
  $("#turn1").hide();
	  $("#turn2").hide();
$('#start').click(function(){
	if(play==false&&move==1){
	 window.alert("Lets Start The Game!");
	 $("#turn1").show();
	  $("#turn2").hide();
  play=true;
  $("#b1").hide();
	}
        })
  $("#board tr td").click(function() {
	 
    if ($(this).text()=="" && play) {
      if ((move%2)==1) { 
	  $("#turn2").show();
	  $("#turn1").hide();
	  $(this).css('background-color', 'pink').append("X");;
	  } 
      else { 
	  $("#turn1").show();
	  $("#turn2").hide();
	  $(this).css('background-color', 'aquamarine').append("O"); 
	  }
      move++;  
	if (checkForWinner()=="X" && checkForWinner()!=-1 && checkForWinner()!="") {
      $("#turn1").hide();
	  $("#turn2").hide();
	  $("#play1").show();
	setTimeout(() => alert('Player1 Wins!'), 200); 
	play=false;
	}
        else if(checkForWinner()=="O" && checkForWinner()!=-1 && checkForWinner()!="")
			{ 
		$("#turn1").hide();
	  $("#turn2").hide();
	  $("#play2").show();
		setTimeout(() => alert('Player2 Wins!'), 200); 
		play=false;
		}
	  if(move==10&&checkForWinner()==-1)
	  {
		 setTimeout(() => alert('Its a Draw!'), 200);
		  $("#turn1").hide();
	  $("#turn2").hide();
	  $("#play3").show();
	  }
    }

	 $('#reset').click(function(){
		 $("#turn1").hide();
	  $("#turn2").hide();
	  $("#play1").hide();
	  $("#play2").hide();
	  $("#play3").hide();
	  $("#b1").show();
          var space1 = $("#board tr:nth-child(1) td:nth-child(1)").html('').css('background-color', 'white');
          var space2 = $("#board tr:nth-child(1) td:nth-child(2)").html('').css('background-color', 'white');
          var space3 = $("#board tr:nth-child(1) td:nth-child(3)").html('').css('background-color', 'white');
          var space4 = $("#board tr:nth-child(2) td:nth-child(1)").html('').css('background-color', 'white');
          var space5 = $("#board tr:nth-child(2) td:nth-child(2)").html('').css('background-color', 'white');
          var space6 = $("#board tr:nth-child(2) td:nth-child(3)").html('').css('background-color', 'white');
          var space7 = $("#board tr:nth-child(3) td:nth-child(1)").html('').css('background-color', 'white');
          var space8 = $("#board tr:nth-child(3) td:nth-child(2)").html('').css('background-color', 'white');
          var space9 = $("#board tr:nth-child(3) td:nth-child(3)").html('').css('background-color', 'white');
		  play=false;
		  move=1;
        }) 
	
  });

  function checkForWinner() {
    var space1 = $("#board tr:nth-child(1) td:nth-child(1)").text();
    var space2 = $("#board tr:nth-child(1) td:nth-child(2)").text();
    var space3 = $("#board tr:nth-child(1) td:nth-child(3)").text();
    var space4 = $("#board tr:nth-child(2) td:nth-child(1)").text();
    var space5 = $("#board tr:nth-child(2) td:nth-child(2)").text();
    var space6 = $("#board tr:nth-child(2) td:nth-child(3)").text();
    var space7 = $("#board tr:nth-child(3) td:nth-child(1)").text();
    var space8 = $("#board tr:nth-child(3) td:nth-child(2)").text();
    var space9 = $("#board tr:nth-child(3) td:nth-child(3)").text();
    // check rows
    if ((space1==space2) && (space2==space3) && space3!="") { return space3; }
    if ((space4==space5) && (space5==space6) && space6!="") { return space6; }	
    if ((space7==space8) && (space8==space9) && space9!="") { return space9; }
    // check columns
    if ((space1==space4) && (space4==space7) && space7!="") { return space7; }
    if ((space2==space5) && (space5==space8) && space8!="") { return space8; }
    if ((space3==space6) && (space6==space9) && space9!="") { return space9; }
    // check diagonals
    if ((space1==space5) && (space5==space9) && space9!="") { return space9; }
    if ((space3==space5) && (space5==space7) && space7!="") { return space7; }
    // no winner
    return -1;
  }
  
   $(function() {
    $("#dialog").dialog({
        autoOpen: true,
        maxWidth:500,
        maxHeight: 500,
        width: 500,
        height: 500,
        modal: true,
        buttons: {
            "close": function() {
                $(this).dialog("close");
            }
        },
        close: function() {
        },
		show: {
                effect: "scale",
                duration: 1500
            },
            hide: {
                effect: "scale",
                duration: 1500
            }
    });
   });
	$("#opener").click(function () {
    $("#dialog").dialog("open");
});
  
});