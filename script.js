/*type="text/javascript">
!function(){"use strict";var sdkBaseUrl="https://cdn.rudderlabs.com/v3";var sdkName="rsa.min.js";var asyncScript=true
;window.rudderAnalyticsBuildType="legacy",window.rudderanalytics=[]
;var e=["setDefaultInstanceKey","load","ready","page","track","identify","alias","group","reset","setAnonymousId","startSession","endSession"]
;for(var t=0;t<e.length;t++){var n=e[t];window.rudderanalytics[n]=function(e){return function(){
window.rudderanalytics.push([e].concat(Array.prototype.slice.call(arguments)))}}(n)}try{
new Function('return import("")'),window.rudderAnalyticsBuildType="modern"}catch(a){}
if(window.rudderAnalyticsMount=function(){
"undefined"==typeof globalThis&&(Object.defineProperty(Object.prototype,"__globalThis_magic__",{get:function get(){
return this},configurable:true}),__globalThis_magic__.globalThis=__globalThis_magic__,
delete Object.prototype.__globalThis_magic__);var e=document.createElement("script")
;e.src="".concat(sdkBaseUrl,"/").concat(window.rudderAnalyticsBuildType,"/").concat(sdkName),e.async=asyncScript,
document.head?document.head.appendChild(e):document.body.appendChild(e)
},"undefined"==typeof Promise||"undefined"==typeof globalThis){var d=document.createElement("script")
;d.src="https://polyfill.io/v3/polyfill.min.js?features=Symbol%2CPromise&callback=rudderAnalyticsMount",
d.async=asyncScript,document.head?document.head.appendChild(d):document.body.appendChild(d)}else{
window.rudderAnalyticsMount()}window.rudderanalytics.load("2Xx5eab4YxSb0TMDi6UDQnrvkGL","https://gainsightxhbpd.dataplane.rudderstack.com",{})}();   */ 


/*(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
  var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
  var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-GAPBOYI51MQU-2");*/


(function(n,t,a,e,co){var i='aptrinsic';n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement('script');r.async=!0,r.src=a+'?a='+e;
    var c=t.getElementsByTagName('script')[0];c.parentNode.insertBefore(r,c)
})(window,document,'https://web-sdk-eu.aptrinsic.com/api/aptrinsic.js','AP-KXTRCUHJDHLL-2');


(function() {
var data = [
    {
      "firstName": "Tia",
      "lastName": "Sylvester",
      "company": "Sylvester Disposal Ltd",
      "email": "Tia.Sylvester@gmail.com",
      "gsid": "1P02E1Z5BZUI43AMMHTZZCIDES7775GKJ001"
    },
    {
      "firstName": "Edward",
      "lastName": "Ratner",
      "company": "Ratner Photography Ltd",
      "email": "Edward.Ratner@gmail.com",
      "gsid": "1P02E1Z5BZUI43AMMHTZZCIDES7775GKJ002"
    },
    {
      "firstName": "Bernard",
      "lastName": "Renley",
      "company": "Renley Services Ltd",
      "email": "Bernard.Renley@gmail.com",
      "gsid": "1P02E1Z5BZUI43AMMHTZZCIDES7775GKJ003"
    },
    {
      "firstName": "Lewis",
      "lastName": "Halsall",
      "company": "Halsall Compressors Ltd",
      "email": "Lewis.Halsall@gmail.com",
      "gsid": "1P02E1Z5BZUI43AMMHTZZCIDES7775GKJ004"
    },
    {
      "firstName": "Geraldine",
      "lastName": "Hobbs",
      "company": "Hobbs Cameras Ltd",
      "email": "Geraldine.Hobbs@gmail.com",
      "gsid": "1P02E1Z5BZUI43AMMHTZZCIDES7775GKJ005"
    },
    {
      "firstName": "Steven",
      "lastName": "Aitken",
      "company": "Phoenix Workshops Ltd",
      "email": "Steven.Aitken@gmail.com",
      "gsid": "1P02E1Z5BZUI43AMMHTZZCIDES7775GKJ006"
    },
    {
      "firstName": "Dawn",
      "lastName": "Dylan",
      "company": "Dylan Transport Ltd",
      "email": "Dawn.Dylan@gmail.com",
      "gsid": "1P02E1Z5BZUI43AMMHTZZCIDES7775GKJ007"
    }
  ]
if (document.cookie.indexOf('apit.uid') == -1){
var random = Math.floor(Math.random() * (50 - 0 + 1) + 0);
var user = data[random];
aptrinsic("identify",
{
"id": user.firstName+"."+user.lastName+"@gmail.com",
"email": user.firstName+"."+user.lastName+"@gmail.com",
"firstName": user.firstName,
"lastName": user.lastName,
"signUpDate": 1522697426479
},
{
"id":user.company,
"name":user.company,
"parentGroupId" : "A2Z",
"sfdcId": "10010010010SFDCAA4"
});
/*alert("Valid User");
form.action = "Landingpage.html";*/
}})()
;

function allowuser(form) {
let a = document.getElementById("user").value;
var b="";
b= a.substr(1,5);
var id = b;
//passing user and account objects:
/*aptrinsic("identify",
   {
       //User Fields
       "id": b, // Required for logged in app users
       "email": a,
       "userrole": "Admin",
   
   },
   {
       //Account Fields
       "id": "Account6 ", //Required
   });*/
   alert("Valid User");
   form.action = "Landingpage.html";
   alert("Logged in user id :"+b);
}
