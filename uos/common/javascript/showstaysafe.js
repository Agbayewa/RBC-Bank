function selectRandIndex(highnum)
{
	return Math.floor(Math.random()* highnum);
}

function setupCommenceDate(datestr)
{
	var date =new Date();
	date.setFullYear(datestr.substring(0,4),datestr.substring(4,6)-1,
	datestr.substring(6,8));
	date.setHours(0,0,0);
	return date;
}

function setupExpiryDate(datestr)
{
	var date =new Date();
	date.setFullYear(datestr.substring(0,4),datestr.substring(4,6)-1,
	datestr.substring(6,8));
	date.setHours(23,59,59);
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
if(numberOfStaySafeLinks >0)
{
	var topIndecies =new Array();
	topIndecies =filter(staySafeStart,staySafeExpiry,numberOfStaySafeLinks);
	var html = "";
	if(topIndecies.length >0)
	{
		html+='';
		if(language)
			html+='   <h3>Naviguer en toute sécurité</h3>';
		else
			html+='   <h3>Stay Safe Online</h3>';
		html+='<ul>';
		
		var i=0,k=0;
		for(;i<Math.min(topIndecies.length,5);i++)
		{
			k=topIndecies[i];
			html+='';
			html+='';
			if(staySafeLinkPub[k])
			{
			
				if(staySafeKiosk[k])
				{
					if(language)
						html+='<li><a title="'+staySafeLinkText[k]+' (Ouvrir une nouvelle fen&ecirc;tre)" href="javascript:kiosk_OpenWinRTB(\''+pubContentURL+staySafeLinkURL[k]+'\', \'RTB\', 40, 50, kiosk_Type1R)">'+staySafeLinkText[k]+'<i aria-hidden="true" class="rbc-icon rbc_new_window"></i><span class="accessible"> (Ouvrir une nouvelle fen&ecirc;tre)</span></a></li>';
					else
						html+='<li><a title="'+staySafeLinkText[k]+' (Opens new window)" href="javascript:kiosk_OpenWinRTB(\''+pubContentURL+staySafeLinkURL[k]+'\', \'RTB\', 40, 50, kiosk_Type1R)">'+staySafeLinkText[k]+'<i aria-hidden="true" class="rbc-icon rbc_new_window"></i><span class="accessible"> (Opens new window)</span></a></li>';
				}
				else
					html+='<li><a href="'+pubContentURL+staySafeLinkURL[k]+'">'+staySafeLinkText[k]+'</a></li>';
			}
			else
			{
				if(staySafeKiosk[k])
				{
					if(language)
						html+='<li><a title="'+staySafeLinkText[k]+' (Ouvrir une nouvelle fen&ecirc;tre)" href="javascript:kiosk_OpenWinRTB(\''+staySafeLinkURL[k]+'\', \'RTB\', 40, 50, kiosk_Type1R)">'+staySafeLinkText[k]+'<i aria-hidden="true" class="rbc-icon rbc_new_window"></i><span class="accessible"> (Ouvrir une nouvelle fen&ecirc;tre)</span></a></li>';
					else
						html+='<li><a title="'+staySafeLinkText[k]+' (Opens new window)" href="javascript:kiosk_OpenWinRTB(\''+staySafeLinkURL[k]+'\', \'RTB\', 40, 50, kiosk_Type1R)">'+staySafeLinkText[k]+'<i aria-hidden="true" class="rbc-icon rbc_new_window"></i><span class="accessible"> (Opens new window)</span></a></li>';
				}
				else
					html+='<li><a href="'+staySafeLinkURL[k]+'">'+staySafeLinkText[k]+'</a></li>';
			}
			html+='';
			html+='';
		}
		html+='</ul>';

	}
	document.getElementById('staysafeonline').innerHTML = html;
}