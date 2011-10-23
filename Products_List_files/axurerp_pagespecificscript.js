
var PageName = 'Products List';
var PageId = 'c53230f1f2e34bb49dd0ed8c10083587'
var PageUrl = 'Products_List.html'
document.title = 'Products List';
var PageNotes = 
{
"pageName":"Products List",
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

if (true) {

	SetPanelState('u77', 'pd1u77','none','',500,'none','',500);

}

}

var u115 = document.getElementById('u115');

var u128 = document.getElementById('u128');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'center';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u2 = document.getElementById('u2');

var u79 = document.getElementById('u79');

var u4 = document.getElementById('u4');

var u153 = document.getElementById('u153');

var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u140 = document.getElementById('u140');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u212 = document.getElementById('u212');

var u42 = document.getElementById('u42');

var u159 = document.getElementById('u159');

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u101 = document.getElementById('u101');

var u186 = document.getElementById('u186');

var u14 = document.getElementById('u14');

var u48 = document.getElementById('u48');

var u105 = document.getElementById('u105');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'top';
var u138 = document.getElementById('u138');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u20 = document.getElementById('u20');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u152 = document.getElementById('u152');

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{
windowEvent = e;


if (true) {

	self.location.href="Category-Landing-Page.html" + GetQuerystring();

}

}

var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'center';
var u37 = document.getElementById('u37');

var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'center';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'center';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u133 = document.getElementById('u133');

var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u89 = document.getElementById('u89');

var u39 = document.getElementById('u39');

var u47 = document.getElementById('u47');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u184 = document.getElementById('u184');

var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u103 = document.getElementById('u103');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u99 = document.getElementById('u99');

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u16 = document.getElementById('u16');

var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'top';
var u125 = document.getElementById('u125');

var u41 = document.getElementById('u41');

var u172 = document.getElementById('u172');

var u246 = document.getElementById('u246');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u54 = document.getElementById('u54');

var u208 = document.getElementById('u208');

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u176 = document.getElementById('u176');

var u26 = document.getElementById('u26');

var u174 = document.getElementById('u174');

var u216 = document.getElementById('u216');

var u119 = document.getElementById('u119');

var u85 = document.getElementById('u85');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u182 = document.getElementById('u182');

var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'center';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'center';
var u252 = document.getElementById('u252');

var u10 = document.getElementById('u10');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u144 = document.getElementById('u144');

var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'top';
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u95 = document.getElementById('u95');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'center';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u33 = document.getElementById('u33');

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u157 = document.getElementById('u157');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u46 = document.getElementById('u46');

var u126 = document.getElementById('u126');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u214 = document.getElementById('u214');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u43 = document.getElementById('u43');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u240 = document.getElementById('u240');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u150 = document.getElementById('u150');

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u142 = document.getElementById('u142');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u168 = document.getElementById('u168');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u40 = document.getElementById('u40');

var u236 = document.getElementById('u236');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
var u87 = document.getElementById('u87');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'top';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u121 = document.getElementById('u121');

var u250 = document.getElementById('u250');

var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u242 = document.getElementById('u242');

var u155 = document.getElementById('u155');

var u206 = document.getElementById('u206');

var u109 = document.getElementById('u109');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u239 = document.getElementById('u239');

var u97 = document.getElementById('u97');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
var u123 = document.getElementById('u123');

var u170 = document.getElementById('u170');

var u76 = document.getElementById('u76');

var u134 = document.getElementById('u134');

var u81 = document.getElementById('u81');

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'center';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u163 = document.getElementById('u163');

var u91 = document.getElementById('u91');

var u131 = document.getElementById('u131');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u24 = document.getElementById('u24');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u204 = document.getElementById('u204');

var u117 = document.getElementById('u117');

var u210 = document.getElementById('u210');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u113 = document.getElementById('u113');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'center';
var u129 = document.getElementById('u129');

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u58 = document.getElementById('u58');

var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u111 = document.getElementById('u111');

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u0 = document.getElementById('u0');

var u31 = document.getElementById('u31');

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u83 = document.getElementById('u83');

var u178 = document.getElementById('u178');

var u8 = document.getElementById('u8');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u146 = document.getElementById('u146');

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u254 = document.getElementById('u254');

var u148 = document.getElementById('u148');

var u93 = document.getElementById('u93');

var u167 = document.getElementById('u167');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u237 = document.getElementById('u237');

var u12 = document.getElementById('u12');

var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'top';
var u165 = document.getElementById('u165');

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'top';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u59 = document.getElementById('u59');

var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u244 = document.getElementById('u244');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u18 = document.getElementById('u18');

var u248 = document.getElementById('u248');

var u161 = document.getElementById('u161');

var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u45 = document.getElementById('u45');

var u77 = document.getElementById('u77');

var u22 = document.getElementById('u22');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u107 = document.getElementById('u107');

var u35 = document.getElementById('u35');

var u136 = document.getElementById('u136');

var u218 = document.getElementById('u218');

var u180 = document.getElementById('u180');

var u28 = document.getElementById('u28');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
if (window.OnLoad) OnLoad();
