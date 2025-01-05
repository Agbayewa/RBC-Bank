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

function filter(notices)
{
    var indecies =new Array();
    var q =0;
    var i =0;
    for(;i<notices.length;i++)
    {
        if(isRightDate(notices[i].start,notices[i].expiry))
            indecies[q++]=i;
    }
    return indecies;
}

if(numberofnotices >0)
{
    var noticeIndecies =new Array();
    noticeIndecies =filter(notices);
    var html = "";
    
    if(noticeIndecies.length >0)
    {

        if (language)
        {
			html+='<div tabindex="-1" role="region" aria-label="Mise en garde" class="yellowNotice notices signinWarning">';
            html+='<div class="yellowMessage"><i aria-hidden="true" alt="Attention" class="rbc-icon rbc_attention"></i><span class="accessible">Attention </span>Avis de service</div>';
        }
        else
        { 
            html+='<div tabindex="-1" role="region" aria-label="Warning" class="yellowNotice notices signinWarning">';
			html+='<div class="yellowMessage"><i aria-hidden="true" alt="Warning" class="rbc-icon rbc_attention"></i><span class="accessible">Warning </span>Service Notices</div>';            
        }
        html+='<div class="arrowDownYellow"></div>';
        for(i=0;i<noticeIndecies.length;i++)
        {
            notice =notices[noticeIndecies[i]];
     
            if(notice.ispublic)
            {
                if(notice.iskiosk)
                {
                    if(language)
                        html+='<p><a title="'+notice.text+' (Ouvrir une nouvelle fen&ecirc;tre)" href="javascript:kiosk_OpenWinRTB(\''+pubContentURL+notice.url+'\', \'RTB\', 40, 50, kiosk_Type1R)">'+notice.text+'<i aria-hidden="true" class="rbc-icon rbc_new_window"></i><span class="accessible"> (Ouvrir une nouvelle fen&ecirc;tre)</span></a></p>';
                    else
                        html+='<p><a title="'+notice.text+' (Opens new window)" href="javascript:kiosk_OpenWinRTB(\''+pubContentURL+notice.url+'\', \'RTB\', 40, 50, kiosk_Type1R)">'+notice.text+'<i aria-hidden="true" class="rbc-icon rbc_new_window"></i><span class="accessible"> (Opens new window)</span></a></p>';
                }
                else
                    html+='<p><a href="'+pubContentURL+notice.url+'">'+notice.text+'</a></p>';
            }
            else
            {
                if(notice.iskiosk)
                {
                    if(language)
                        html+='<p><a title="'+notice.text+' (Ouvrir une nouvelle fen&ecirc;tre)" href="javascript:kiosk_OpenWinRTB(\''+notice.url+'\', \'RTB\', 40, 50, kiosk_Type1R)">'+notice.text+'<i aria-hidden="true" class="rbc-icon rbc_new_window"></i><span class="accessible"> (Ouvrir une nouvelle fen&ecirc;tre)</span></a></p>';
                    else
                        html+='<p><a title="'+notice.text+' (Opens new window)" href="javascript:kiosk_OpenWinRTB(\''+notice.url+'\', \'RTB\', 40, 50, kiosk_Type1R)">'+notice.text+'<i aria-hidden="true" class="rbc-icon rbc_new_window"></i><span class="accessible"> (Opens new window)</span></a></p>';
                }
                else
                    html+='<p><a href="'+notice.url+'">'+notice.text+'</a></p>';
            }
        }
        html+='</div>';    
    }
	document.getElementById('serviceNotice').innerHTML = html;
}