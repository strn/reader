// moment.js
// version : 2.0.0
// author : Tim Wood
// license : MIT
// momentjs.com
(function(t){function n(t,n){return function(e){return u(t.call(this,e),n)}}function e(t){return function(n){return this.lang().ordinal(t.call(this,n))}}function s(){}function r(t){i(this,t)}function a(t){var n=this._data={},e=t.years||t.year||t.y||0,s=t.months||t.month||t.M||0,r=t.weeks||t.week||t.w||0,a=t.days||t.day||t.d||0,i=t.hours||t.hour||t.h||0,u=t.minutes||t.minute||t.m||0,d=t.seconds||t.second||t.s||0,c=t.milliseconds||t.millisecond||t.ms||0;this._milliseconds=c+1e3*d+6e4*u+36e5*i,this._days=a+7*r,this._months=s+12*e,n.milliseconds=c%1e3,d+=o(c/1e3),n.seconds=d%60,u+=o(d/60),n.minutes=u%60,i+=o(u/60),n.hours=i%24,a+=o(i/24),a+=7*r,n.days=a%30,s+=o(a/30),n.months=s%12,e+=o(s/12),n.years=e}function i(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function o(t){return 0>t?Math.ceil(t):Math.floor(t)}function u(t,n){for(var e=t+"";n>e.length;)e="0"+e;return e}function d(t,n,e){var s,r=n._milliseconds,a=n._days,i=n._months;r&&t._d.setTime(+t+r*e),a&&t.date(t.date()+a*e),i&&(s=t.date(),t.date(1).month(t.month()+i*e).date(Math.min(s,t.daysInMonth())))}function c(t){return"[object Array]"===Object.prototype.toString.call(t)}function h(t,n){var e,s=Math.min(t.length,n.length),r=Math.abs(t.length-n.length),a=0;for(e=0;s>e;e++)~~t[e]!==~~n[e]&&a++;return a+r}function f(t,n){return n.abbr=t,x[t]||(x[t]=new s),x[t].set(n),x[t]}function l(t){return t?(!x[t]&&W&&require("./lang/"+t),x[t]):O.fn._lang}function _(t){return t.match(/\[.*\]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function m(t){var n,e,s=t.match(A);for(n=0,e=s.length;e>n;n++)s[n]=rn[s[n]]?rn[s[n]]:_(s[n]);return function(r){var a="";for(n=0;e>n;n++)a+="function"==typeof s[n].call?s[n].call(r,t):s[n];return a}}function y(t,n){function e(n){return t.lang().longDateFormat(n)||n}for(var s=5;s--&&P.test(n);)n=n.replace(P,e);return nn[n]||(nn[n]=m(n)),nn[n](t)}function M(t){switch(t){case"DDDD":return E;case"YYYY":return N;case"YYYYY":return $;case"S":case"SS":case"SSS":case"DDD":return V;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return I;case"X":return R;case"Z":case"ZZ":return X;case"T":return j;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return J;default:return RegExp(t.replace("\\",""))}}function D(t,n,e){var s,r=e._a;switch(t){case"M":case"MM":r[1]=null==n?0:~~n-1;break;case"MMM":case"MMMM":s=l(e._l).monthsParse(n),null!=s?r[1]=s:e._isValid=!1;break;case"D":case"DD":case"DDD":case"DDDD":null!=n&&(r[2]=~~n);break;case"YY":r[0]=~~n+(~~n>68?1900:2e3);break;case"YYYY":case"YYYYY":r[0]=~~n;break;case"a":case"A":e._isPm="pm"===(n+"").toLowerCase();break;case"H":case"HH":case"h":case"hh":r[3]=~~n;break;case"m":case"mm":r[4]=~~n;break;case"s":case"ss":r[5]=~~n;break;case"S":case"SS":case"SSS":r[6]=~~(1e3*("0."+n));break;case"X":e._d=new Date(1e3*parseFloat(n));break;case"Z":case"ZZ":e._useUTC=!0,s=(n+"").match(K),s&&s[1]&&(e._tzh=~~s[1]),s&&s[2]&&(e._tzm=~~s[2]),s&&"+"===s[0]&&(e._tzh=-e._tzh,e._tzm=-e._tzm)}null==n&&(e._isValid=!1)}function Y(t){var n,e,s=[];if(!t._d){for(n=0;7>n;n++)t._a[n]=s[n]=null==t._a[n]?2===n?1:0:t._a[n];s[3]+=t._tzh||0,s[4]+=t._tzm||0,e=new Date(0),t._useUTC?(e.setUTCFullYear(s[0],s[1],s[2]),e.setUTCHours(s[3],s[4],s[5],s[6])):(e.setFullYear(s[0],s[1],s[2]),e.setHours(s[3],s[4],s[5],s[6])),t._d=e}}function p(t){var n,e,s=t._f.match(A),r=t._i;for(t._a=[],n=0;s.length>n;n++)e=(M(s[n]).exec(r)||[])[0],e&&(r=r.slice(r.indexOf(e)+e.length)),rn[s[n]]&&D(s[n],e,t);t._isPm&&12>t._a[3]&&(t._a[3]+=12),t._isPm===!1&&12===t._a[3]&&(t._a[3]=0),Y(t)}function g(t){var n,e,s,a,o,u=99;for(a=t._f.length;a>0;a--){if(n=i({},t),n._f=t._f[a-1],p(n),e=new r(n),e.isValid()){s=e;break}o=h(n._a,e.toArray()),u>o&&(u=o,s=e)}i(t,s)}function w(t){var n,e=t._i;if(q.exec(e)){for(t._f="YYYY-MM-DDT",n=0;4>n;n++)if(G[n][1].exec(e)){t._f+=G[n][0];break}X.exec(e)&&(t._f+=" Z"),p(t)}else t._d=new Date(e)}function T(n){var e=n._i,s=Z.exec(e);e===t?n._d=new Date:s?n._d=new Date(+s[1]):"string"==typeof e?w(n):c(e)?(n._a=e.slice(0),Y(n)):n._d=e instanceof Date?new Date(+e):new Date(e)}function v(t,n,e,s,r){return r.relativeTime(n||1,!!e,t,s)}function k(t,n,e){var s=U(Math.abs(t)/1e3),r=U(s/60),a=U(r/60),i=U(a/24),o=U(i/365),u=45>s&&["s",s]||1===r&&["m"]||45>r&&["mm",r]||1===a&&["h"]||22>a&&["hh",a]||1===i&&["d"]||25>=i&&["dd",i]||45>=i&&["M"]||345>i&&["MM",U(i/30)]||1===o&&["y"]||["yy",o];return u[2]=n,u[3]=t>0,u[4]=e,v.apply({},u)}function S(t,n,e){var s=e-n,r=e-t.day();return r>s&&(r-=7),s-7>r&&(r+=7),Math.ceil(O(t).add("d",r).dayOfYear()/7)}function b(t){var n=t._i,e=t._f;return null===n||""===n?null:("string"==typeof n&&(t._i=n=l().preparse(n)),O.isMoment(n)?(t=i({},n),t._d=new Date(+n._d)):e?c(e)?g(t):p(t):T(t),new r(t))}function F(t,n){O.fn[t]=O.fn[t+"s"]=function(t){var e=this._isUTC?"UTC":"";return null!=t?(this._d["set"+e+n](t),this):this._d["get"+e+n]()}}function L(t){O.duration.fn[t]=function(){return this._data[t]}}function H(t,n){O.duration.fn["as"+t]=function(){return+this/n}}for(var O,z,C="2.0.0",U=Math.round,x={},W="undefined"!=typeof module&&module.exports,Z=/^\/?Date\((\-?\d+)/i,A=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,P=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,J=/\d\d?/,V=/\d{1,3}/,E=/\d{3}/,N=/\d{1,4}/,$=/[+\-]?\d{1,6}/,I=/[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i,X=/Z|[\+\-]\d\d:?\d\d/i,j=/T/i,R=/[\+\-]?\d+(\.\d{1,3})?/,q=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,B="YYYY-MM-DDTHH:mm:ssZ",G=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],K=/([\+\-]|\d\d)/gi,Q="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),tn={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},nn={},en="DDD w W M D d".split(" "),sn="M D H h m s w W".split(" "),rn={M:function(){return this.month()+1},MMM:function(t){return this.lang().monthsShort(this,t)},MMMM:function(t){return this.lang().months(this,t)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(t){return this.lang().weekdaysMin(this,t)},ddd:function(t){return this.lang().weekdaysShort(this,t)},dddd:function(t){return this.lang().weekdays(this,t)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return u(this.year()%100,2)},YYYY:function(){return u(this.year(),4)},YYYYY:function(){return u(this.year(),5)},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return u(~~(this.milliseconds()/10),2)},SSS:function(){return u(this.milliseconds(),3)},Z:function(){var t=-this.zone(),n="+";return 0>t&&(t=-t,n="-"),n+u(~~(t/60),2)+":"+u(~~t%60,2)},ZZ:function(){var t=-this.zone(),n="+";return 0>t&&(t=-t,n="-"),n+u(~~(10*t/6),4)},X:function(){return this.unix()}};en.length;)z=en.pop(),rn[z+"o"]=e(rn[z]);for(;sn.length;)z=sn.pop(),rn[z+z]=n(rn[z],2);for(rn.DDDD=n(rn.DDD,3),s.prototype={set:function(t){var n,e;for(e in t)n=t[e],"function"==typeof n?this[e]=n:this["_"+e]=n},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(t){return this._months[t.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(t){return this._monthsShort[t.month()]},monthsParse:function(t){var n,e,s;for(this._monthsParse||(this._monthsParse=[]),n=0;12>n;n++)if(this._monthsParse[n]||(e=O([2e3,n]),s="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[n]=RegExp(s.replace(".",""),"i")),this._monthsParse[n].test(t))return n},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(t){return this._weekdays[t.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(t){return this._weekdaysShort[t.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(t){return this._weekdaysMin[t.day()]},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(t){var n=this._longDateFormat[t];return!n&&this._longDateFormat[t.toUpperCase()]&&(n=this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t]=n),n},meridiem:function(t,n,e){return t>11?e?"pm":"PM":e?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(t,n){var e=this._calendar[t];return"function"==typeof e?e.apply(n):e},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(t,n,e,s){var r=this._relativeTime[e];return"function"==typeof r?r(t,n,e,s):r.replace(/%d/i,t)},pastFuture:function(t,n){var e=this._relativeTime[t>0?"future":"past"];return"function"==typeof e?e(n):e.replace(/%s/i,n)},ordinal:function(t){return this._ordinal.replace("%d",t)},_ordinal:"%d",preparse:function(t){return t},postformat:function(t){return t},week:function(t){return S(t,this._week.dow,this._week.doy)},_week:{dow:0,doy:6}},O=function(t,n,e){return b({_i:t,_f:n,_l:e,_isUTC:!1})},O.utc=function(t,n,e){return b({_useUTC:!0,_isUTC:!0,_l:e,_i:t,_f:n})},O.unix=function(t){return O(1e3*t)},O.duration=function(t,n){var e,s=O.isDuration(t),r="number"==typeof t,i=s?t._data:r?{}:t;return r&&(n?i[n]=t:i.milliseconds=t),e=new a(i),s&&t.hasOwnProperty("_lang")&&(e._lang=t._lang),e},O.version=C,O.defaultFormat=B,O.lang=function(n,e){return n?(e?f(n,e):x[n]||l(n),O.duration.fn._lang=O.fn._lang=l(n),t):O.fn._lang._abbr},O.langData=function(t){return t&&t._lang&&t._lang._abbr&&(t=t._lang._abbr),l(t)},O.isMoment=function(t){return t instanceof r},O.isDuration=function(t){return t instanceof a},O.fn=r.prototype={clone:function(){return O(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._d},toJSON:function(){return O(this).utc().format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var t=this;return[t.year(),t.month(),t.date(),t.hours(),t.minutes(),t.seconds(),t.milliseconds()]},isValid:function(){return null==this._isValid&&(this._isValid=this._a?!h(this._a,(this._isUTC?O.utc(this._a):O(this._a)).toArray()):!isNaN(this._d.getTime())),!!this._isValid},utc:function(){return this._isUTC=!0,this},local:function(){return this._isUTC=!1,this},format:function(t){var n=y(this,t||O.defaultFormat);return this.lang().postformat(n)},add:function(t,n){var e;return e="string"==typeof t?O.duration(+n,t):O.duration(t,n),d(this,e,1),this},subtract:function(t,n){var e;return e="string"==typeof t?O.duration(+n,t):O.duration(t,n),d(this,e,-1),this},diff:function(t,n,e){var s,r,a=this._isUTC?O(t).utc():O(t).local(),i=6e4*(this.zone()-a.zone());return n&&(n=n.replace(/s$/,"")),"year"===n||"month"===n?(s=432e5*(this.daysInMonth()+a.daysInMonth()),r=12*(this.year()-a.year())+(this.month()-a.month()),r+=(this-O(this).startOf("month")-(a-O(a).startOf("month")))/s,"year"===n&&(r/=12)):(s=this-a-i,r="second"===n?s/1e3:"minute"===n?s/6e4:"hour"===n?s/36e5:"day"===n?s/864e5:"week"===n?s/6048e5:s),e?r:o(r)},from:function(t,n){return O.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!n)},fromNow:function(t){return this.from(O(),t)},calendar:function(){var t=this.diff(O().startOf("day"),"days",!0),n=-6>t?"sameElse":-1>t?"lastWeek":0>t?"lastDay":1>t?"sameDay":2>t?"nextDay":7>t?"nextWeek":"sameElse";return this.format(this.lang().calendar(n,this))},isLeapYear:function(){var t=this.year();return 0===t%4&&0!==t%100||0===t%400},isDST:function(){return this.zone()<O([this.year()]).zone()||this.zone()<O([this.year(),5]).zone()},day:function(t){var n=this._isUTC?this._d.getUTCDay():this._d.getDay();return null==t?n:this.add({d:t-n})},startOf:function(t){switch(t=t.replace(/s$/,"")){case"year":this.month(0);case"month":this.date(1);case"week":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t&&this.day(0),this},endOf:function(t){return this.startOf(t).add(t.replace(/s?$/,"s"),1).subtract("ms",1)},isAfter:function(n,e){return e=e!==t?e:"millisecond",+this.clone().startOf(e)>+O(n).startOf(e)},isBefore:function(n,e){return e=e!==t?e:"millisecond",+this.clone().startOf(e)<+O(n).startOf(e)},isSame:function(n,e){return e=e!==t?e:"millisecond",+this.clone().startOf(e)===+O(n).startOf(e)},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return O.utc([this.year(),this.month()+1,0]).date()},dayOfYear:function(t){var n=U((O(this).startOf("day")-O(this).startOf("year"))/864e5)+1;return null==t?n:this.add("d",t-n)},isoWeek:function(t){var n=S(this,1,4);return null==t?n:this.add("d",7*(t-n))},week:function(t){var n=this.lang().week(this);return null==t?n:this.add("d",7*(t-n))},lang:function(n){return n===t?this._lang:(this._lang=l(n),this)}},z=0;Q.length>z;z++)F(Q[z].toLowerCase().replace(/s$/,""),Q[z]);F("year","FullYear"),O.fn.days=O.fn.day,O.fn.weeks=O.fn.week,O.fn.isoWeeks=O.fn.isoWeek,O.duration.fn=a.prototype={weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+2592e6*this._months},humanize:function(t){var n=+this,e=k(n,!t,this.lang());return t&&(e=this.lang().pastFuture(n,e)),this.lang().postformat(e)},lang:O.fn.lang};for(z in tn)tn.hasOwnProperty(z)&&(H(z,tn[z]),L(z.toLowerCase()));H("Weeks",6048e5),O.lang("en",{ordinal:function(t){var n=t%10,e=1===~~(t%100/10)?"th":1===n?"st":2===n?"nd":3===n?"rd":"th";return t+e}}),W&&(module.exports=O),"undefined"==typeof ender&&(this.moment=O),"function"==typeof define&&define.amd&&define("moment",[],function(){return O})}).call(this);

//moment.js language configuration
//language : french (fr)
//author : John Fischer : https://github.com/jfroffice
(function(){function e(e){e.lang("fr",{months:"janvier_f\u00e9vrier_mars_avril_mai_juin_juillet_ao\u00fbt_septembre_octobre_novembre_d\u00e9cembre".split("_"),monthsShort:"janv._f\u00e9vr._mars_avr._mai_juin_juil._ao\u00fbt_sept._oct._nov._d\u00e9c.".split("_"),weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Aujourd'hui \u00e0] LT",nextDay:"[Demain \u00e0] LT",nextWeek:"dddd [\u00e0] LT",lastDay:"[Hier \u00e0] LT",lastWeek:"dddd [dernier \u00e0] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinal:function(e){return e+(1===e?"er":"\u00e8me")},week:{dow:1,doy:4}})}"function"==typeof define&&define.amd&&define(["moment"],e),"undefined"!=typeof window&&window.moment&&e(window.moment)})();

//moment.js language configuration
//language : chinese
//author : suupic : https://github.com/suupic
(function(){function e(e){e.lang("zh",{months:"\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),weekdaysShort:"\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d".split("_"),weekdaysMin:"\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),longDateFormat:{LT:"Ah\u70b9mm",L:"YYYY\u5e74MMMD\u65e5",LL:"YYYY\u5e74MMMD\u65e5",LLL:"YYYY\u5e74MMMD\u65e5LT",LLLL:"YYYY\u5e74MMMD\u65e5ddddLT",l:"YYYY\u5e74MMMD\u65e5",ll:"YYYY\u5e74MMMD\u65e5",lll:"YYYY\u5e74MMMD\u65e5LT",llll:"YYYY\u5e74MMMD\u65e5ddddLT"},meridiem:function(e,t,n){return e<9?"\u65e9\u4e0a":e<11&&t<30?"\u4e0a\u5348":e<13&&t<30?"\u4e2d\u5348":e<18?"\u4e0b\u5348":"\u665a\u4e0a"},calendar:{sameDay:"[\u4eca\u5929]LT",nextDay:"[\u660e\u5929]LT",nextWeek:"[\u4e0b]ddddLT",lastDay:"[\u6628\u5929]LT",lastWeek:"[\u4e0a]ddddLT",sameElse:"L"},relativeTime:{future:"%s\u5185",past:"%s\u524d",s:"\u51e0\u79d2",m:"1\u5206\u949f",mm:"%d\u5206\u949f",h:"1\u5c0f\u65f6",hh:"%d\u5c0f\u65f6",d:"1\u5929",dd:"%d\u5929",M:"1\u4e2a\u6708",MM:"%d\u4e2a\u6708",y:"1\u5e74",yy:"%d\u5e74"}})}typeof define=="function"&&define.amd&&define(["moment"],e),typeof window!="undefined"&&window.moment&&e(window.moment)})();

//moment.js language configuration
//language : danish (da)
//author : Ulrik Nielsen : https://github.com/mrbase
!function(){function e(e){e.lang("da",{months:"Januar_Februar_Marts_April_Maj_Juni_Juli_August_September_Oktober_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Maj_Jun_Jul_Aug_Sep_Okt_Nov_Dec".split("_"),weekdays:"S\xf8ndag_Mandag_Tirsdag_Onsdag_Torsdag_Fredag_L\xf8rdag".split("_"),weekdaysShort:"S\xf8n_Man_Tir_Ons_Tor_Fre_L\xf8r".split("_"),weekdaysMin:"S\xf8_Ma_Ti_On_To_Fr_L\xf8".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D. MMMM, YYYY LT"},calendar:{sameDay:"[I dag kl.] LT",nextDay:"[I morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[I g\xe5r kl.] LT",lastWeek:"[sidste] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"f\xe5 sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en m\xe5ned",MM:"%d m\xe5neder",y:"et \xe5r",yy:"%d \xe5r"},ordinal:"%d.",week:{dow:1,doy:4}})}"function"==typeof define&&define.amd&&define(["moment"],e),"undefined"!=typeof window&&window.moment&&e(window.moment)}();

//moment.js language configuration
//language : italian (it)
//author : Lorenzo : https://github.com/aliem
//author: Mattia Larentis: https://github.com/nostalgiaz
!function(){function e(e){e.lang("it",{months:"Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settembre_Ottobre_Novembre_Dicembre".split("_"),monthsShort:"Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic".split("_"),weekdays:"Domenica_Luned\xec_Marted\xec_Mercoled\xec_Gioved\xec_Venerd\xec_Sabato".split("_"),weekdaysShort:"Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),weekdaysMin:"D_L_Ma_Me_G_V_S".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:"[lo scorso] dddd [alle] LT",sameElse:"L"},relativeTime:{future:function(e){return(/^[0-9].+$/.test(e)?"tra":"in")+" "+e},past:"%s fa",s:"secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},ordinal:"%d\xba",week:{dow:1,doy:4}})}"function"==typeof define&&define.amd&&define(["moment"],e),"undefined"!=typeof window&&window.moment&&e(window.moment)}();

//moment.js language configuration
//language : japanese (ja)
//author : LI Long : https://github.com/baryon
!function(){function e(e){e.lang("ja",{months:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u65e5\u66dc\u65e5_\u6708\u66dc\u65e5_\u706b\u66dc\u65e5_\u6c34\u66dc\u65e5_\u6728\u66dc\u65e5_\u91d1\u66dc\u65e5_\u571f\u66dc\u65e5".split("_"),weekdaysShort:"\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),weekdaysMin:"\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),longDateFormat:{LT:"Ah\u6642m\u5206",L:"YYYY/MM/DD",LL:"YYYY\u5e74M\u6708D\u65e5",LLL:"YYYY\u5e74M\u6708D\u65e5LT",LLLL:"YYYY\u5e74M\u6708D\u65e5LT dddd"},meridiem:function(e){return 12>e?"\u5348\u524d":"\u5348\u5f8c"},calendar:{sameDay:"[\u4eca\u65e5] LT",nextDay:"[\u660e\u65e5] LT",nextWeek:"[\u6765\u9031]dddd LT",lastDay:"[\u6628\u65e5] LT",lastWeek:"[\u524d\u9031]dddd LT",sameElse:"L"},relativeTime:{future:"%s\u5f8c",past:"%s\u524d",s:"\u6570\u79d2",m:"1\u5206",mm:"%d\u5206",h:"1\u6642\u9593",hh:"%d\u6642\u9593",d:"1\u65e5",dd:"%d\u65e5",M:"1\u30f6\u6708",MM:"%d\u30f6\u6708",y:"1\u5e74",yy:"%d\u5e74"}})}"function"==typeof define&&define.amd&&define(["moment"],e),"undefined"!=typeof window&&window.moment&&e(window.moment)}();

//moment.js language configuration
//language : korean (ko)
//author : Kyungwook, Park : https://github.com/kyungw00k
!function(){function e(e){e.lang("ko",{months:"1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),monthsShort:"1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),weekdays:"\uc77c\uc694\uc77c_\uc6d4\uc694\uc77c_\ud654\uc694\uc77c_\uc218\uc694\uc77c_\ubaa9\uc694\uc77c_\uae08\uc694\uc77c_\ud1a0\uc694\uc77c".split("_"),weekdaysShort:"\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),weekdaysMin:"\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),longDateFormat:{LT:"A h\uc2dc mm\ubd84",L:"YYYY.MM.DD",LL:"YYYY\ub144 MMMM D\uc77c",LLL:"YYYY\ub144 MMMM D\uc77c LT",LLLL:"YYYY\ub144 MMMM D\uc77c dddd LT"},meridiem:function(e){return 12>e?"\uc624\uc804":"\uc624\ud6c4"},calendar:{sameDay:"\uc624\ub298 LT",nextDay:"\ub0b4\uc77c LT",nextWeek:"dddd LT",lastDay:"\uc5b4\uc81c LT",lastWeek:"\uc9c0\ub09c\uc8fc dddd LT",sameElse:"L"},relativeTime:{future:"%s \ud6c4",past:"%s \uc804",s:"\uba87\ucd08",ss:"%d\ucd08",m:"\uc77c\ubd84",mm:"%d\ubd84",h:"\ud55c\uc2dc\uac04",hh:"%d\uc2dc\uac04",d:"\ud558\ub8e8",dd:"%d\uc77c",M:"\ud55c\ub2ec",MM:"%d\ub2ec",y:"\uc77c\ub144",yy:"%d\ub144"},ordinal:"%d\uc77c"})}"function"==typeof define&&define.amd&&define(["moment"],e),"undefined"!=typeof window&&window.moment&&e(window.moment)}();
