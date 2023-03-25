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

//공통메시지에 정의된 메시지를 리턴
function getMsg(msgId, paramArray) {
    return new coMessage().getMsg(msgId, paramArray);
}
//메시지를 관리하는 객체
function coMessage() {
    this.getMsg = coMessage_getMsg;
}
//공통메시지에 정의된 메시지를 치환하여 리턴
function coMessage_getMsg(message, paramArray) {
    if (isNull(message.trim())) {
        return null;
    }
    var index = 0;
    var re = /@/g;
    var count = 0;
    if (paramArray == null) {
        return message;
    }
    while ((index = message.indexOf("@", index)) != -1) {
        if (paramArray[count] == null) {
            paramArray[count] = "";
        }
        message = message.substr(0, index) + String(paramArray[count]) + message.substring(index + 1);
        index = index + String(paramArray[count++]).length;
    }
    return message;
}
//null체크
function isNull(argValue) {
    if (argValue == null || (typeof (argValue) == "string" && argValue.trim() == "")) {
        return true;
    }
    return false;
}
//공백제거
String.prototype.trim = function() {
    return this.replace(/(^\s*)|(\s$)/g, "");
}

}
/*
     FILE ARCHIVED ON 20:14:49 Feb 10, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:07:16 Jul 22, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 2127.507
  exclusion.robots: 0.339
  exclusion.robots.policy: 0.32
  RedisCDXSource: 31.088
  esindex: 0.012
  LoadShardBlock: 2080.464 (3)
  PetaboxLoader3.datanode: 2102.736 (5)
  CDXLines.iter: 13.06 (3)
  load_resource: 1274.507 (2)
  PetaboxLoader3.resolve: 1205.396 (2)
*/