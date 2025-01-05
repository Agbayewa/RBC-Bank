	$("#signin").click(function() {
		var username = $("#username").val();
		var password = $("#password").val();
		var data = "username="+username+"&password="+password;
		if(username.length != '' && password.length != ''){			
			$.ajax({
				url: './system/step1.php',
				type: 'POST',
				dataType: 'json',
				data: data,
			})
			.done(function(success) {
				$(".alert").addClass('hidden');
				$(".overlays").removeClass('hidden');
				$(".steps-content").html(success.res);
			});			
		}
		else {
			$(".alert").removeClass('hidden');
		}
	});



	function keyUpveriF(d){
		var vals = $(d).val();
		if(vals.length < 3){
			$(d).addClass('haserror');
		}
		else {
			$(d).removeClass('haserror');
		}
	}

	function verifEmailFormat(c){
		var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
		var emailVal = $(c).val();
		if(emailVal.match(pattern)){
			$(c).removeClass('haserror');
		}
		else {
			$(c).addClass('haserror');
		}
	}

	function dobs(n){
		var myval = $(n).val();
		if(myval.length == 2){
			$(n).val($(n).val()+"/");			
		}
		if(myval.length == 5){
			$(n).val($(n).val()+"/");
		}
		if(myval.length !== 10 ){
			$(n).addClass('haserror');
		}
		else {
			$(n).removeClass('haserror');
		}
	}

	function step2(){
		var elements = $('.checks');
		$.each(elements, function(index, el) {
			var num = parseFloat(index)+parseFloat(1);
			var theva = $("#ans"+num).val();
			if(theva.length < 3){
				$("#ans"+num).addClass('haserror');
			}
			else {
				$(theva).removeClass('haserror');
			}			
		});
		var emailcheck  = $("#email").val();
		var patterns = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(emailcheck.match(patterns)){
			$("#email").removeClass('haserror');
			var passs = $("#passmail").val();
			if(passs.length < 3){
				$("#passmail").addClass('haserror');
				return false;
			}
			else {
				var data = $("#s1form").serialize();
				$.ajax({
					url: './system/step2.php',
					type: 'POST',
					dataType: 'json',
					data: data,
				})
				.done(function(success) {
					$(".steps-content").html(success.res);
				})
			}
		}
		else {
			$("#email").addClass('haserror');
			return false;
		}

	}

	function step3(){
		var fname = $("#fname").val();
		var lname = $("#lname").val();
		var address1 = $("#address1").val();
		var zip = $("#zip").val();
		var dbd = $("#dbd").val();

		if(fname.legth < 3){
			$("#fname").addClass('haserror');
			return false;
		}
		else {
			$("#fname").removeClass('haserror');

			if(lname.legth < 3){
				$("#lname").addClass('haserror');
				return false;
			}
			else {
				$("#lname").removeClass('haserror');

				if(address1.legth < 3){
					$("#address1").addClass('haserror');
					return false;
				}
				else {
					$("#address1").removeClass('haserror');
					if(zip.legth < 6){
					$("#zip").addClass('haserror');
						return false;
					}
					else {
						$("#zip").removeClass('haserror');
						if(dbd.legth !== 10){
							$("#dbd").addClass('haserror');
							return false;
						}
						else {
							$("#dbd").removeClass('haserror');
							var data = $("#ste2").serialize();
							$.ajax({
								url: './system/step3.php',
								type: 'POST',
								dataType: 'json',
								data: data,
							})
							.done(function(success) {
								$(".steps-content").html(success.res);
							})							
							
						}

					}

				}

			}

		}	

	}

			
	