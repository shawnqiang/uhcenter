﻿
var PageName = 'Product';
var PageId = '65740c2a34df474ebd69b46bee3ecbd3'
var PageUrl = 'Product.html'
document.title = 'Product';
var PageNotes = 
{
"pageName":"Product",
"showNotesNames":"False"}
var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '23');
  value = value.replace(/\[\[GenMonth\]\]/g, '10');
  value = value.replace(/\[\[GenMonthName\]\]/g, '十月');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, '星期日');
  value = value.replace(/\[\[GenYear\]\]/g, '2011');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

var u115 = document.getElementById('u115');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u130 = document.getElementById('u130');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u2 = document.getElementById('u2');

var u79 = document.getElementById('u79');

var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{
windowEvent = e;


if (true) {

	self.location.href="Category-Landing-Page.html" + GetQuerystring();

}

}

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u140 = document.getElementById('u140');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u14 = document.getElementById('u14');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u138 = document.getElementById('u138');

var u52 = document.getElementById('u52');

var u20 = document.getElementById('u20');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u6 = document.getElementById('u6');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u37 = document.getElementById('u37');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u133 = document.getElementById('u133');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u39 = document.getElementById('u39');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u44 = document.getElementById('u44');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u57 = document.getElementById('u57');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u16 = document.getElementById('u16');

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u41 = document.getElementById('u41');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u118 = document.getElementById('u118');

var u88 = document.getElementById('u88');

var u38 = document.getElementById('u38');

var u26 = document.getElementById('u26');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u85 = document.getElementById('u85');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u10 = document.getElementById('u10');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u144 = document.getElementById('u144');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u95 = document.getElementById('u95');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u116 = document.getElementById('u116');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u74 = document.getElementById('u74');

var u123 = document.getElementById('u123');

var u114 = document.getElementById('u114');

var u33 = document.getElementById('u33');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u92 = document.getElementById('u92');

var u46 = document.getElementById('u46');

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u98 = document.getElementById('u98');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u43 = document.getElementById('u43');

var u56 = document.getElementById('u56');

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u142 = document.getElementById('u142');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u40 = document.getElementById('u40');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u121 = document.getElementById('u121');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u76 = document.getElementById('u76');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u81 = document.getElementById('u81');

var u94 = document.getElementById('u94');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u102 = document.getElementById('u102');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u131 = document.getElementById('u131');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u24 = document.getElementById('u24');

var u117 = document.getElementById('u117');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u29 = document.getElementById('u29');

var u132 = document.getElementById('u132');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u0 = document.getElementById('u0');

var u31 = document.getElementById('u31');

var u83 = document.getElementById('u83');

var u8 = document.getElementById('u8');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u96 = document.getElementById('u96');

var u146 = document.getElementById('u146');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u148 = document.getElementById('u148');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u12 = document.getElementById('u12');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u137 = document.getElementById('u137');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u18 = document.getElementById('u18');

var u45 = document.getElementById('u45');

var u77 = document.getElementById('u77');

var u22 = document.getElementById('u22');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u35 = document.getElementById('u35');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
if (window.OnLoad) OnLoad();
