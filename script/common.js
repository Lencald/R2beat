var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");


function LoginChk(ctl, msg)
{
	var arrCtl = ctl.split("|");
	var arrMsg = msg.split("|");
	var chk = false;
	
	for (var i = 0; i < arrCtl.length; i++)
	{
		if (document.getElementById(arrCtl[i]).value == "")
		{
			alert(arrMsg[i]);
			document.getElementById(arrCtl[i]).focus();
			chk = false;
			break;
		}
		else 
			chk = true;
	}
	
	return chk;
}

if (document.getElementById){  

     document.write('<style type="text/css">\n')  

     document.write('.submenu{display: none;}\n')  

     document.write('</style>\n')  

 }     

 function SwitchMenu(obj){  

     if(document.getElementById){  

     var el = document.getElementById(obj);  

     var ar = document.getElementById("maindiv").getElementsByTagName("span");   

         if(el.style.display != "block"){  

             for (var i=0; i<ar.length; i++){  

                 if (ar[i].className=="submenu")   

                 ar[i].style.display = "none";  

             }  

             el.style.display = "inline";  

         }else{  

             el.style.display = "none";  

         }  

     }  

 }
 
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
 
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
 
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
 
function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
 
function MM_showHideLayers() { //v9.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3)
  with (document) if (getElementById && ((obj=getElementById(args[i]))!=null)) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}

function fnInputBack(obj){
	obj.style.background = "";
}

function bluring(){
if(event.srcElement.tagName=="A"||event.srcElement.tagName=="IMG") document.body.focus();
}
document.onfocusin=bluring;
//-->


}
/*
     FILE ARCHIVED ON 20:57:24 Feb 10, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:58:55 Jul 22, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 161.756
  exclusion.robots: 0.195
  exclusion.robots.policy: 0.188
  RedisCDXSource: 0.879
  esindex: 0.007
  LoadShardBlock: 146.457 (3)
  PetaboxLoader3.datanode: 185.493 (5)
  CDXLines.iter: 12.313 (3)
  load_resource: 1102.565 (2)
  PetaboxLoader3.resolve: 904.911 (2)
*/