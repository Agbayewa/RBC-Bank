function selectRandIndex(highnum)
{
	return Math.floor(Math.random()* highnum);
}

function setupCommenceDate(datestr)
{
	var date =new Date();
	date.setFullYear(datestr.substring(0,4),datestr.substring(4,6)-1,
	datestr.substring(6,8));
	date.setHours(datestr.substring(8,10),datestr.substring(10,12),datestr.substring(12,14));
	//date.setHours(0,0,0);
	return date;
}

function setupExpiryDate(datestr)
{
	var date =new Date();
	date.setFullYear(datestr.substring(0,4),datestr.substring(4,6)-1,
	datestr.substring(6,8));
	date.setHours(datestr.substring(8,10),datestr.substring(10,12),datestr.substring(12,14));
	//date.setHours(23,59,59);
	return date;
}

function isRightDate(start,finish)
{
	var now =new Date();
	var startDt =new Date();
	var finishDt =new Date();
	if(start ==null &&finish !=null)
	{
		finishDt =setupExpiryDate(finish);
		if(finishDt >=now)
			return true;
	}
	else if(start !=null &&finish ==null)
	{
		startDt =setupCommenceDate(start);
		if(startDt <=now)
			return true;
	}
	else if(start ==null &&finish ==null)
	{
			return true;
	}
	else
	{
		startDt =setupCommenceDate(start);
		finishDt =setupExpiryDate(finish);
		if(startDt <=now &&finishDt >=now)
			return true;
	}
	return false;
}

function filter(commence,terminate,items)
{
	var indecies =new Array();
	var q =0;
	var i =0;
	for(;i<items;i++)
	{
		if(isRightDate(commence[i],terminate[i]))
			indecies[q++]=i;
	}
	return indecies;
}
	
var URLOLBpart;
if(language)
URLOLBpart ="/banqueendirect";
else
URLOLBpart ="/onlinebanking";
if(numberOfTopLinks >0)
{
	var topIndecies =new Array();
	topIndecies =filter(topStart,topExpiry,numberOfTopLinks);
	var html = '';
	if(topIndecies.length >0)
	{
		if(language)
			html+='   <h3>En vedette</h3>';
		else
			html+='   <h3>In the Spotlight</h3>';
		html+='<ul>';
		var i=0,k=0;
		for(;i<Math.min(topIndecies.length,5);i++)
		{
			k=topIndecies[i];
			if(topLinkPub[k])
			{
				
				if(topKiosk[k])
				{
					if(language)
						html+='		<li><a title="'+topLinkText[k]+' (Ouvrir une nouvelle fen&ecirc;tre)" href="javascript:kiosk_OpenWinRTB(\''+pubContentURL+topLinkURL[k]+'\', \'RTB\', 40, 50, kiosk_Type1R)">'+topLinkText[k]+'<i aria-hidden="true" class="rbc-icon rbc_new_window"></i><span class="accessible"> (Ouvrir une nouvelle fen&ecirc;tre)</span></a></li>';
					else
						html+='		<li><a title="'+topLinkText[k]+' (Opens new window)" href="javascript:kiosk_OpenWinRTB(\''+pubContentURL+topLinkURL[k]+'\', \'RTB\', 40, 50, kiosk_Type1R)">'+topLinkText[k]+'<i aria-hidden="true" class="rbc-icon rbc_new_window"></i><span class="accessible"> (Opens new window)</span></a></li>';
				}
				else
					html+='		<li><a href="'+pubContentURL+topLinkURL[k]+'">'+topLinkText[k]+'</a></li>';
			}
			else
			{
				if(topKiosk[k])
				{
					if(language)
						html+='		<li><a title="'+topLinkText[k]+' (Ouvrir une nouvelle fen&ecirc;tre)" href="javascript:kiosk_OpenWinRTB(\''+topLinkURL[k]+'\', \'RTB\', 40, 50, kiosk_Type1R)">'+topLinkText[k]+'<i aria-hidden="true" class="rbc-icon rbc_new_window"></i><span class="accessible"> (Ouvrir une nouvelle fen&ecirc;tre)</span></a></li>';
					else
						html+='		<li><a title="'+topLinkText[k]+' (Opens new window)" href="javascript:kiosk_OpenWinRTB(\''+topLinkURL[k]+'\', \'RTB\', 40, 50, kiosk_Type1R)">'+topLinkText[k]+'<i aria-hidden="true" class="rbc-icon rbc_new_window"></i><span class="accessible"> (Opens new window)</span></a></li>';
				}
				else
					html+='		<li><a href="'+topLinkURL[k]+'">'+topLinkText[k]+'</a></li>';
			}
			
		}
        html+='</ul>';
	}
	document.getElementById('spotlight').innerHTML = html;
}