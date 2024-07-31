var app = document.getElementById('app');
var apath, aname = 'Hello World', asubtitle = '', adescription = ''; aversion = '1.0.0', atype = 'web', dname = 'shifat100', durl = 'http://shifat100.xtgem.com', aorigin = 'app://ebook-maker.app', pubid = '080b82ab-b33a-4763-a498-50f464567e49', aicon = '', aicon56 = '', aicon112 = '', aicon128 = '';








//get file extension
function fileExtention(filename) {
  var fsplit = filename.split('.');
  var extention = fsplit[fsplit.length - 1];
  return extention;
}

//get base file Name
function baseFileName(filename) {
  var s = filename.split('/');
  var name = s[s.length - 1];
  return name.replace('.txt', '');
}

function validKaiStorage() {
  try {
    navigator.getDeviceStorages('sdcard')[0];
  } catch (e) {
    return false;
  }
  return true;
}

function imageToDataUri(imgdat) {
  var img = document.createElement('img');
  img.src = imgdat;

  img.onload = function () {
    var canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d');
    canvas.width = 56;
    canvas.height = 56;
    ctx.drawImage(img, 5, 5, (56 - 10), (56 - 10));
    aicon56 = canvas.toDataURL();

    var canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d');
    canvas.width = 112;
    canvas.height = 112;
    ctx.drawImage(img, 5, 5, (112 - 10), (112 - 10));
    aicon112 = canvas.toDataURL();

    var canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d');
    canvas.width = 128;
    canvas.height = 128;
    ctx.drawImage(img, 5, 5, (128 - 10), (128 - 10));
    aicon128 = canvas.toDataURL();
  }

}

var filelist = document.getElementById('app');
if (validKaiStorage()) { var sdcards = navigator.getDeviceStorages('sdcard'); }

function main() {
  app.innerHTML = '';
  if (sdcards.length == 2) { externalCard(); } else { internalCard(); }

}


function internalCard() {
  var sd = navigator.getDeviceStorages('sdcard')[0];
  var ti = 0;
  var cursor = sd.enumerate();

  cursor.onsuccess = function () {
    if (this.result.name.lastIndexOf('.txt') === this.result.name.length - 4 || this.result.name.lastIndexOf('.TXT') === this.result.name.length - 4) {
      var file = this.result;
      var filename = file.name;
      var filepath = filename.replace('/sdcard/', '');
      var item = document.createElement('div');
      item.className = 'listview file';
      item.tabIndex = ti;
      ti++;
      item.innerHTML = '<img src = "ext.png" style="width: 20px;vertical-align: middle;margin-right: 5px">'+baseFileName(file.name.substring(file.name.lastIndexOf('/') + 1));
      item.addEventListener('click', function () {
        machine(file);
      });
      if (app.appendChild(item)) {
        app.style.display = 'block';
        document.getElementById('nofilenotice').style.display = 'none';
        app.appendChild(item);
        app.style = 'z-index: 1';
      } else {
        app.style.display = 'none';
        document.getElementById('nofilenotice').style.display = 'block';
        app.style = 'z-index: 0';
      }
    }
    if (!this.done) {
      this.continue();
    }
  }

  cursor.onerror = function () {
    console.warn('No file found: ' + this.error);
    app.innerHTML = 'No file found: ' + this.error;
  }


  document.body.addEventListener('keydown', function (e) {
    if (e.key == 'SoftLeft' || e.key == 'F1') { window.location.href = 'create/index.html'; }
    if (e.key == 'SoftRight' || e.key == 'F2') { if (window.confirm('Are You Sure ?')) { window.close(); } }
  });
}



function externalCard() {
  var sd = navigator.getDeviceStorages('sdcard')[0];
  var ti = 0;
  var cursor = sd.enumerate();

  cursor.onsuccess = function () {
    if (this.result.name.lastIndexOf('.txt') === this.result.name.length - 4 || this.result.name.lastIndexOf('.TXT') === this.result.name.length - 4) {
      var file = this.result;
      var filename = file.name;
      var filepath = filename.replace('/sdcard/', '');
      var item = document.createElement('div');
      item.className = 'listview file';
      item.tabIndex = ti;
      ti++;
      item.innerHTML = '<img src = "ext.png" style="width: 20px;vertical-align: middle;margin-right: 5px">'+baseFileName(file.name.substring(file.name.lastIndexOf('/') + 1));
      item.addEventListener('click', function () {
        machine(file);
      });
      if (app.appendChild(item)) {
        app.style.display = 'block';
        document.getElementById('nofilenotice').style.display = 'none';
        app.appendChild(item);
        app.style = 'z-index: 1';
      } else {
        app.style.display = 'none';
        document.getElementById('nofilenotice').style.display = 'block';
        app.style = 'z-index: 0';
      }
    }
    if (!this.done) {
      this.continue();
    }
  }

  cursor.onerror = function () {
    console.warn('No file found: ' + this.error);
    app.innerHTML = 'No file found: ' + this.error;
  }

  sd = navigator.getDeviceStorages('sdcard')[1];
  var cursor = sd.enumerate();

  cursor.onsuccess = function () {
    if (this.result.name.lastIndexOf('.txt') === this.result.name.length - 4 || this.result.name.lastIndexOf('.TXT') === this.result.name.length - 4) {
      var file = this.result;
      var filename = file.name;
      var filepath = filename.replace('/sdcard/', '');
      var item = document.createElement('div');
      item.className = 'listview file';
      item.tabIndex = ti;
      ti++;
      item.innerHTML = '<img src = "ext.png" style="width: 20px;vertical-align: middle;margin-right: 5px">'+baseFileName(file.name.substring(file.name.lastIndexOf('/') + 1));
      item.addEventListener('click', function () {
        machine(file);
      });
      if (app.appendChild(item)) {
        app.style.display = 'block';
        document.getElementById('nofilenotice').style.display = 'none';
        app.appendChild(item);
        app.style = 'z-index: 1';
      } else {
        app.style.display = 'none';
        document.getElementById('nofilenotice').style.display = 'block';
        app.style = 'z-index: 0';
      }
    }
    if (!this.done) {
      this.continue();
    }
  }

  cursor.onerror = function () {
    console.warn('No file found: ' + this.error);
    app.innerHTML = 'No file found: ' + this.error;
  }




  document.body.addEventListener('keydown', function (e) {
    if (e.key == 'SoftLeft' || e.key == 'F1') { window.location.href = 'create/index.html'; }
    if (e.key == 'SoftRight' || e.key == 'F2') { if (window.confirm('Are You Sure ?')) { window.close(); } }
  });

}



function machine(file) {
  var reader = new FileReader();
  reader.onload = function () {

    var str = this.result;



    var html = `<div class="group"><div class="titlebar">App Details</div><div class="contentbar">
    
    <label for="appname">App Name:</label><input type="text" placeholder="Hello World" id="appname" class="focusable" tabindex="0">
    
    <label for="appversion">App Version:</label><input type="text" placeholder="1.0.0" id="appversion" class="focusable" tabindex="1">
    
    <label for="appsubtitle">App Subtitle:</label><input type="text" placeholder="Created With Ebook Maker 1.0.0" id="appsubtitle" class="focusable" tabindex="2">
      
    <label for="appdescription">App Description:</label><input type="text" placeholder="Best Ebook Maker for Kaios, Easy Access, Full Key Control" id="appdescription" class="focusable" tabindex="3">
    
    <label for="appicon">App icon:</label><input type="file" id="appicon" class="focusable" tabindex="4" accept=".png, .jpg, .gif">
        
    <input type="submit" class="submitbtn" id="submit" class="focusable" tabindex="5" value="Next"></div></div>`;
    app.innerHTML = html;

    var appname = document.getElementById('appname');
    var appversion = document.getElementById('appversion');
    var appsubtitle = document.getElementById('appsubtitle');
    var appdescription = document.getElementById('appdescription');
    var appicon = document.getElementById('appicon');
    var submitbtn = document.getElementsByClassName('submitbtn')[0];

    appname.addEventListener('keyup', function () {
      var patt = /[.,!@#$%^&*():;'"?\/\\=\[\]\+\{\}]/; if (this.value != '' && patt.test(this.value) == false) { this.style = 'background:green;color:white'; aname = this.value; if (appversion.value != '' && appsubtitle.value != '' && appdescription.value != '' && appicon.value != '') { submitbtn.style.display = 'block'; } }
      else { this.style = 'background:red;color: white'; submitbtn.style.display = 'none'; };
    });


    appversion.addEventListener('keyup', function () {
      var patt = /^[0-9]((\.)[0-9]){0,2}$/;
      if (this.value != '' && patt.test(this.value) == true) { this.style = 'background:green;color:white'; aversion = this.value; if (appname.value != '' && appsubtitle.value != '' && appdescription.value != '' && appicon.value != '') { submitbtn.style.display = 'block'; } }
      else { this.style = 'background:red;color: white'; submitbtn.style.display = 'none'; };
    });

    appsubtitle.addEventListener('keyup', function () {
      var patt = /['"\\]/;
      if (this.value != '' && patt.test(this.value) == false) { this.style = 'background:green;color:white'; asubtitle = this.value; if (appname.value != '' && appversion.value != '' && appdescription.value != '' && appicon.value != '') { submitbtn.style.display = 'block'; } }
      else { this.style = 'background:red;color: white'; submitbtn.style.display = 'none'; };
    });

    appdescription.addEventListener('keyup', function () {
      var patt = /['"\\]/;
      if (this.value != '' && patt.test(this.value) == false) { this.style = 'background:green;color:white'; adescription = this.value; if (appname.value != '' && appversion.value != '' && appsubtitle.value != '' && appicon.value != '') { submitbtn.style.display = 'block'; } }
      else { this.style = 'background:red;color: white'; submitbtn.style.display = 'none'; };
    });


    appicon.addEventListener('change', function () {

      if (this.value != '') {
        this.style = 'background:green;color:white';

        var ele = document.querySelector('input[type=file]')['files'][0];
        var reader = new FileReader();
        reader.onload = function () {
          aicon = this.result;
          imageToDataUri(aicon);
        }
        reader.readAsDataURL(ele);

        if (appname.value != '' && appversion.value != '' && appsubtitle.value != '' && appicon.value != '') { submitbtn.style.display = 'block'; }
      }
      else { this.style = 'background:red;color: white'; submitbtn.style.display = 'none'; };
    });


    submitbtn.addEventListener('keyup', function () {

      //developer details 
      html = `<div class="group"><div class="titlebar">Developer Details</div><div class="contentbar">
      <label for="appname">Developer Name:</label><input type="text" placeholder="tt" id="developername">
      
      <label for="developerurl">Developer Url:</label><input type="text" placeholder="http://tt.softertool.xyz" id="developerurl">
      
      <label for="publisherid">Publisher Id:</label><input type="text" placeholder="08***2ab-**3a-47**-a4*8-50f4***67e4*" id="publisherid">

      <label for="apporigin">App Origin: <small style="color: red">(Don't Change If No Idea)</small></label><input type="text" placeholder="app://ebook.maker" value="app://${aname}.ebook-maker.app" id="apporigin">

      <input type="submit" class="submitbtn" id="submit" value="Finish">
      </div></div>`;
      app.innerHTML = html;
      console.log(aicon128);
      var developername = document.getElementById('developername');
      var developerurl = document.getElementById('developerurl');
      var publisherid = document.getElementById('publisherid');
      var apporigin = document.getElementById('apporigin');
      var submitbtn = document.getElementsByClassName('submitbtn')[0];

      developername.addEventListener('keyup', function () {
        var patt = /[.,!@#$%^&*():;'"?\/\\=\[\]\+\{\}]/; if (this.value != '' && patt.test(this.value) == false) { this.style = 'background:green;color:white'; dname = this.value; if (developerurl.value != '' && apporigin.value != '') { submitbtn.style.display = 'block'; } }
        else { this.style = 'background:red;color: white'; submitbtn.style.display = 'none'; };
      });

      developerurl.addEventListener('keyup', function () {
        var patt = /(http(s?):)\/\/.*/; if (this.value != '' && patt.test(this.value) == true) { this.style = 'background:green;color:white'; durl = this.value; if (developername.value != '' && apporigin.value != '') { submitbtn.style.display = 'block'; } }
        else { this.style = 'background:red;color: white'; submitbtn.style.display = 'none'; };
      });

      publisherid.addEventListener('keyup', function () {
        if (this.value != '') { this.style = 'background:green;color:white'; pubid = this.value; if (developername.value != '' && developerurl.value != '' && apporigin.value != '') { submitbtn.style.display = 'block'; } }
        else { this.style = 'background:red;color: white'; submitbtn.style.display = 'none'; };
      });

      apporigin.addEventListener('keyup', function () {
        var patt = /(app(s?):)\/\/.*/; if (this.value != '' && patt.test(this.value) == true) { this.style = 'background:green;color:white'; aorigin = this.value; if (developername.value != '' && developerurl.value != '' && publisherid.value != '') { submitbtn.style.display = 'block'; } }
        else { this.style = 'background:red;color: white'; submitbtn.style.display = 'none'; };
      });


      var sel = document.querySelectorAll('input');
      for (var i = 0; i < sel.length; i++) {
        sel[i].addEventListener('keyup', function (e) {
          //var tb = document.activeElement.tabIndex;
          if (e.key == 'Enter') {
            this.blur();
            //document.getElementsByClassName('focusable')[tb+1].focus(); 
          }
        });
      }



      submitbtn.addEventListener('keyup', function () {
        var zip = new JSZip();
        zip.file('about.html', '<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>About</title><link rel="stylesheet" href="kaios-native-ui.css" /></head><body><div id="app"><div id="header">About</div><div id="content"><p class="list-item__text" style="text-align: center;"><br><u>' + aname + '</u><br><br><br><i>version: ' + aversion + '<br>Developer: ' + dname + '<br></i><br><br><br>&copy; Copyright ' + new Date().getFullYear() + '.</p></div><div class="softkeys"><div class="softkey softkey-left"></div><div class="softkey softkey-center"></div><div class="softkey softkey-right">Back</div></div></div><script>function handleKeydown(e){ switch(e.key){ case \'SoftRight\': history.back(); break; case \'Enter\': window.location.htef=\'help.html\'; break}} document.body.addEventListener(\'keydown\', handleKeydown);</script><script src="https://static.kaiads.com/ads-sdk/ads-sdk.v5.min.js"></script><script src="kaiads.v5.min.js"></script><script>document.addEventListener("DOMContentLoaded", () => { getKaiAd({ publisher: "' + pubid + '", app: "' + aname + '", slot: "' + aname + '", onerror: err => console.error("Custom catch:", err), onready: ad => { ad.call("display"); } }); });</script></body></html>');

        zip.file('help.html', '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Help</title><link rel="stylesheet" href="kaios-native-ui.css" /></head><body> <div id="app"><div id="header">Help</div><div id="content"><br><p class="list-item__text" style="font-size: 16px;padding: 5px;text-transform: capitalize;line-height: 25px;">1) press scroll button for scroll<br>2) exit button to exit<br>3) press 2 To scroll slow<br>4) press 8 to Scroll fast<br>5) press 5 to scroll as default</p></div><div class="softkeys"><div class="softkey softkey-left"></div><div class="softkey softkey-center"></div><div class="softkey softkey-right">Back</div></div></div><script>function handleKeydown(e){ switch(e.key){ case \'SoftRight\': history.back(); break;case \'Enter\': window.location.htef=\'about.html\'; break}} document.body.addEventListener(\'keydown\', handleKeydown);</script><script src="https://static.kaiads.com/ads-sdk/ads-sdk.v5.min.js"></script><script src="kaiads.v5.min.js"></script><script>document.addEventListener("DOMContentLoaded", () => { getKaiAd({ publisher: "' + pubid + '", app: "' + aname + '", slot: "' + aname + '", onerror: err => console.error("Custom catch:", err), onready: ad => { ad.call("display"); } }); });</script></body></html>');

        zip.file('index.html', '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Index</title><link rel="stylesheet" href="kaios-native-ui.css" /></head><body><div id="app"><div id="header">Ebook</div><div id="content"><div class="list-item-indicator focusable" tabindex="0"><p class="list-item-indicator__text">Open</p><span class="list-item-indicator__indicator"></span></div><div class="list-item focusable" tabindex="1"><p class="list-item__text">Help</p></div><div class="list-item focusable" tabindex="2"><p class="list-item__text">About</p></div><div class="list-item focusable" tabindex="3"><p class="list-item__text">Exit</p></div></div><div class="softkeys"><div class="softkey softkey-left">Link</div><div class="softkey softkey-center">Ok</div><div class="softkey softkey-right">Exit</div></div></div><script src="kaios-native-ui.js"></script><script>function handleKeydown(e){ switch (e.key){ case "ArrowUp": nav(-1); break; case "ArrowDown": nav(1); break; case "ArrowRight": nav(1); break; case "ArrowLeft": nav(-1); break; case "Enter": command(); break; case "SoftLeft": opens(); break; case "SoftRight": exit(); break;}} function nav(move){ var currentIndex=document.activeElement.tabIndex; var next=currentIndex + move; if (next >document.querySelectorAll(".focusable").length-1){ next=0;} else if ( next < 0){ next=document.querySelectorAll(".focusable").length-1;} var items=document.querySelectorAll(".focusable"); var targetElement=items[next]; targetElement.focus();} document.querySelectorAll(".focusable")[0].focus(); document.body.addEventListener("keydown", handleKeydown); function exit(){ var text="Are You Sure ?"; if (confirm(text)==true){ window.close();} else{}} function opens(){ var text="Are You Sure To Open Author Website ?"; if (confirm(text)==true){ window.open("' + durl + '", "_blank");} else{}} function command(){ var c=document.activeElement.tabIndex; switch (c){ case 0: window.location.href="read.html"; break; case 1: window.location.href="help.html"; break; case 2: window.location.href="about.html"; break; case 3: exit(); break;}} </script> <script src="https://static.kaiads.com/ads-sdk/ads-sdk.v5.min.js"></script><script src="kaiads.v5.min.js"></script><script>document.addEventListener("DOMContentLoaded", () => { getKaiAd({ publisher: "' + pubid + '", app: "' + aname + '", slot: "' + aname + '", onerror: err => console.error("Custom catch:", err), onready: ad => { ad.call("display"); } }); });</script></body></html>');

        zip.file('read.html', '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Reader</title><link rel="stylesheet" href="kaios-native-ui.css" /></head><body><div id="app"><div id="header">Read</div><div id="content"><p class="list-item__text" style=" font-size: 16px; padding: 5px; line-height: 25px; ">' + nl2br(htmlentityencode(str)) + ' </p></div><div class="softkeys"><div class="softkey softkey-left"></div><div class="softkey softkey-center">Scroll</div><div class="softkey softkey-right">Back</div></div></div><script>time=50; function handleKeydown(e){ switch (e.key){ case "ArrowUp": document.querySelector("#content").scrollBy(0,-20); break; case "ArrowDown": document.querySelector("#content").scrollBy(0,20); break; case "ArrowLeft": document.querySelector("#content").scrollBy(0, (document.querySelector("#content").offsetHeight*-1)-20,{ behavior: "smooth"}); break; case "ArrowRight": document.querySelector("#content").scrollBy(0, (document.querySelector("#content").offsetHeight*1)-20,{ behavior: "smooth"}); console.log(document.querySelector("#content").offsetHeight)-20; break; case "2": time +=10; break; case "8": time -=10; break; case "Enter": pageScroll(); break; case "5": time=100; break; case "SoftRight": history.back(); break;}} function pageScroll(){ document.querySelector("#content").scrollBy(0, 1); scrolldelay=setTimeout(pageScroll, time);} function stopScroll(){ document.querySelector("#content").scrollBy(0, 0); scrolldelay=setTimeout(pageScroll, 0);} document.body.addEventListener("keydown", handleKeydown); </script><script src="https://static.kaiads.com/ads-sdk/ads-sdk.v5.min.js"></script><script src="kaiads.v5.min.js"></script><script>document.body.addEventListener("keyup", () => { getKaiAd({ publisher: "' + pubid + '", app: "' + aname + '", slot: "' + aname + '", onerror: err => console.error("Custom catch:", err), onready: ad => { ad.call("display"); } }); });</script></body></html>');


        zip.file('kaiads.v5.min.js', `var a0_0x97c4=['http://127.0.0.1:8081/sdk/ads/ads-sdk.min.js','appendChild','test','addEventListener','catch','length','onerror','push','navigator','mozApps','type','hostname','forEach','endsWith','load','https://static.kaiads.com/ads-sdk/ads-sdk.v5.min.js','http://127.0.0.1/sdk/ads/ads-sdk.min.js','async','result','script','location','apply','then','.localhost','manifest','head','getKaiAd','web','reject','userAgent','dummy','error','src','getSelf','createElement','split'];(function(_0x1ad48b,_0x97c48f){var _0x12a6ec=function(_0x11c212){while(--_0x11c212){_0x1ad48b['push'](_0x1ad48b['shift']());}};_0x12a6ec(++_0x97c48f);}(a0_0x97c4,0xd4));var a0_0x12a6=function(_0x1ad48b,_0x97c48f){_0x1ad48b=_0x1ad48b-0x0;var _0x12a6ec=a0_0x97c4[_0x1ad48b];return _0x12a6ec;};'use strict';(function(){var _0x457a87=this,_0x5d8736=[],_0x5f3d51=function _0x212ebb(_0x493730){_0x5d8736[a0_0x12a6('0x10')](function(_0xb35be3){_0x493730[a0_0x12a6('0x19')](_0x457a87,_0xb35be3);}),_0x5d8736=[];};window[a0_0x12a6('0x1e')]=function(){_0x5d8736[a0_0x12a6('0xb')](arguments);},window[a0_0x12a6('0x1e')][a0_0x12a6('0x22')]=!![];var _0x12380d=function _0x25eaab(_0x3708a3){if(typeof _0x3708a3[a0_0x12a6('0xa')]==='function'){var _0x164442=0x13;_0x3708a3[a0_0x12a6('0xa')](_0x164442);}},_0xeacc58=function _0x6b8586(_0x23bc2b){return new Promise(function(_0x45ea96,_0x5ec98a){var _0x2c2f55=document[a0_0x12a6('0x2')]('script');_0x2c2f55['addEventListener'](a0_0x12a6('0x12'),function(){_0x45ea96();}),_0x2c2f55[a0_0x12a6('0x7')](a0_0x12a6('0x23'),function(){_0x5ec98a();}),_0x2c2f55[a0_0x12a6('0x0')]=_0x23bc2b,_0x2c2f55[a0_0x12a6('0x15')]=![],document['head'][a0_0x12a6('0x5')](_0x2c2f55);});},_0x28b24c=function _0x399e17(_0x4f2810){return new Promise(function(_0x355c79,_0x185516){var _0x132857=document[a0_0x12a6('0x2')](a0_0x12a6('0x17'));_0x132857['addEventListener']('load',function(){!getKaiAd||getKaiAd[a0_0x12a6('0x22')]?_0x185516():_0x355c79();}),_0x132857[a0_0x12a6('0x7')]('error',function(){_0x185516();}),_0x132857['src']=_0x4f2810,document[a0_0x12a6('0x1d')][a0_0x12a6('0x5')](_0x132857);});},_0x598f82;window[a0_0x12a6('0xc')][a0_0x12a6('0xd')]?window['navigator'][a0_0x12a6('0xd')][a0_0x12a6('0x1')]()['onsuccess']=function(_0x4ff815){var _0x580307=_0x4ff815['target'][a0_0x12a6('0x16')];(!_0x580307||!_0x580307['manifest']||!_0x580307[a0_0x12a6('0x1c')][a0_0x12a6('0xe')]||_0x580307[a0_0x12a6('0x1c')][a0_0x12a6('0xe')]===a0_0x12a6('0x1f'))&&(_0x598f82=_0x28b24c('https://static.kaiads.com/ads-sdk/ads-sdk.v5.min.js'));if(!_0x598f82){var _0x3bf9d4=/ kaios\\/((?:\\d+.)*\\d+)/gi['exec'](window[a0_0x12a6('0xc')][a0_0x12a6('0x21')]);_0x3bf9d4&&_0x432c75(_0x3bf9d4[0x1],'2.5')===0x1&&(_0x598f82=_0x28b24c(a0_0x12a6('0x14'))['catch'](function(){return _0x28b24c(a0_0x12a6('0x4'));}));}!_0x598f82&&(_0x598f82=Promise[a0_0x12a6('0x20')]()),_0x598f82[a0_0x12a6('0x8')](function(){_0x5f3d51(_0x12380d),window[a0_0x12a6('0x1e')]=_0x12380d,getKaiAd=_0x12380d;})[a0_0x12a6('0x1a')](function(){_0x5f3d51(getKaiAd),window[a0_0x12a6('0x1e')]=getKaiAd;});}:(/kaios/gi[a0_0x12a6('0x6')](window[a0_0x12a6('0xc')]['userAgent'])&&window[a0_0x12a6('0x18')][a0_0x12a6('0xf')][a0_0x12a6('0x11')](a0_0x12a6('0x1b'))?_0x598f82=_0x28b24c('http://127.0.0.1/sdk/ads/ads-sdk.min.js'):_0x598f82=_0x28b24c(a0_0x12a6('0x13')),!_0x598f82&&(_0x598f82=Promise[a0_0x12a6('0x20')]()),_0x598f82[a0_0x12a6('0x8')](function(){_0x5f3d51(_0x12380d),window['getKaiAd']=_0x12380d,getKaiAd=_0x12380d;})[a0_0x12a6('0x1a')](function(){_0x5f3d51(getKaiAd),window[a0_0x12a6('0x1e')]=getKaiAd;}));function _0x432c75(_0x20ebef,_0x153396){var _0x1a6c74=_0x20ebef[a0_0x12a6('0x3')]('.'),_0x16fcae=_0x153396[a0_0x12a6('0x3')]('.');while(_0x1a6c74[a0_0x12a6('0x9')]<_0x16fcae[a0_0x12a6('0x9')]){_0x1a6c74[a0_0x12a6('0xb')]('0');}while(_0x16fcae[a0_0x12a6('0x9')]<_0x1a6c74[a0_0x12a6('0x9')]){_0x16fcae[a0_0x12a6('0xb')]('0');}for(var _0x482647=0x0;_0x482647<_0x1a6c74[a0_0x12a6('0x9')];++_0x482647){if(_0x1a6c74[_0x482647]==_0x16fcae[_0x482647])continue;else return _0x1a6c74[_0x482647]>_0x16fcae[_0x482647]?0x1:-0x1;}return 0x0;}}());
//# sourceMappingURL=sdk-loader.js.map');`);

        zip.file('ads.txt', `#Mediafy
mars.media, 107588, DIRECT, 8624339f102fb076
improvedigital.com, 1210, RESELLER
pubmatic.com, 160194, RESELLER, 5d62403b186f2ace
improvedigital.com, 1662, RESELLER
improvedigital.com, 1221, RESELLER
appnexus.com, 13074, RESELLER, f5ab79cb980f11d1
themediagrid.com, PLTXGE, RESELLER, 35d5010d7789b49d
themediagrid.com, YUPM3V, RESELLER, 35d5010d7789b49d
appnexus.com, 12223, RESELLER, f5ab79cb980f11d1
aol.com, 59025, RESELLER, e1a5b5b6e3255540
yahoo.com, 59025, RESELLER, e1a5b5b6e3255540
improvedigital.com, 1341, RESELLER
smartadserver.com, 4039, RESELLER
conversantmedia.com, 100293, RESELLER, 03113cd04947736d
smaato.com, 1100050531, RESELLER, 07bcf65f187117b4
video.unrulymedia.com, 4270213217, RESELLER
rhythmone.com, 4270213217, RESELLER, a670c89d4a324e47
yieldmo.com, 2888605025750164242, RESELLER
sonobi.com, a7c3746d6a, RESELLER, d1a215d9eb5aee9e
castify.ai, 127588, DIRECT
gitberry.com, 64Q, DIRECT
pubmatic.com, 160195, RESELLER, 5d62403b186f2ace
beachfront.com, 805, RESELLER, e2541279e8e2ca4d
conversantmedia.com, 100343, RESELLER, 03113cd04947736d
mars.media, 107588, DIRECT, 8624339f102fb076
beachfront.com, 805, RESELLER, e2541279e8e2ca4d
improvedigital.com, 1210, RESELLER
improvedigital.com, 1221, RESELLER
improvedigital.com, 1341, RESELLER
appnexus.com, 12223, RESELLER, f5ab79cb980f11d1
pubmatic.com, 160195, RESELLER, 5d62403b186f2ace
pubmatic.com, 160194, RESELLER, 5d62403b186f2ace
gitberry.com, 64Q, DIRECT
improvedigital.com, 1662, RESELLER
castify.ai, 127588, DIRECT
smartadserver.com, 4039, RESELLER
sonobi.com, a7c3746d6a, RESELLER, d1a215d9eb5aee9e
conversantmedia.com, 100293, RESELLER, 03113cd04947736d
appnexus.com, 13074, RESELLER, f5ab79cb980f11d1
aol.com, 59025, RESELLER, e1a5b5b6e3255540
yahoo.com, 59025, RESELLER, e1a5b5b6e3255540
indexexchange.com, 195812, RESELLER, 50b1c356f2c5c8fc
yieldmo.com, 2888605025750164242, RESELLER
themediagrid.com, PLTXGE, RESELLER, 35d5010d7789b49d
themediagrid.com, YUPM3V, RESELLER, 35d5010d7789b49d
video.unrulymedia.com, 4270213217, RESELLER
rhythmone.com, 4270213217, RESELLER, a670c89d4a324e47
smaato.com, 1100050531, RESELLER, 07bcf65f187117b4
conversantmedia.com, 100343, RESELLER, 03113cd04947736d
admixer.net, b6d49994-83c5-4ff9-aa8a-c9eb99d1bc8c, RESELLER
contextweb.com, 558827, DIRECT, 89ff185a4c4e857c
contextweb.com, 562067, DIRECT, 89ff185a4c4e857c
appnexus.com, 12061, RESELLER, f5ab79cb980f11d1
freewheel.tv, 1163473, RESELLER
newborntown.com, 108961, DIRECT
fout.jp, 1151, DIRECT
spotxchange.com, 246977, RESELLER, 7842df1d2fe2db34
spotx.tv, 246977, RESELLER, 7842df1d2fe2db34
tappx.com, 22230, RESELLER, 9f375a07da0318ec
adcolony.com, c490f6e7399a25d6, RESELLER, 1ad675c9de6b5176
appnexus.com, 10824, RESELLER, f5ab79cb980f11d1
appnexus.com, 9569, RESELLER, f5ab79cb980f11d1
chartboost.com, 5da62a1035b91e0aff190bf7, RESELLER
groundtruth.com, 107, RESELLER, 81cbf0a75a5e0e9a
inmobi.com, ec6f6ceb8bb1440ba5455644ec96c275, RESELLER, 83e75a7ae333ca9d
pubmatic.com, 156435, RESELLER, 5d62403b186f2ace
pubmatic.com, 158111, RESELLER, 5d62403b186f2ace
pubmatic.com, 158112, RESELLER, 5d62403b186f2ace
pubmatic.com, 92509, RESELLER, 5d62403b186f2ace
rubiconproject.com, 13856, RESELLER, 0bfd66d529a55807
smartadserver.com, 1692, RESELLER
google.com, pub-8207541904035788, DIRECT, f08c47fec0942fa0
openx.com, 540163881, RESELLER, 6a698e2ec38604c6
mobuppsrtb.com, 0fd7e4f42a8b4b4ef33394d35212b13e, DIRECT
loopme.com, 11185, DIRECT, 6c8d5f95897a5a3b
improvedigital.com, 1785, DIRECT
meitu.com, 433, DIRECT
admatic.com.tr, adm-pub-185375301865, DIRECT
airnow.com, 403001, DIRECT
airnow.com, 404001, DIRECT
onetag.com, 5e0db5c3f1904a6, DIRECT
admixer.net, 81aedb7e-ca73-4498-997c-74f3b92481ea, DIRECT
mobirtb.com, 137, DIRECT
ucfunnel.com, pub-627D23D82BA9DE2EFE344BA8B788D683, DIRECT
aralego.com, pub-627D23D82BA9DE2EFE344BA8B788D683, DIRECT
adiiix.com, pub-627D23D82BA9DE2EFE344BA8B788D683, DIRECT
rtb.gamoshi.io, 267-b850, RESELLER
sovrn.com, 299269, DIRECT, fafdf38b16bf6b2b
lijit.com, 299269, DIRECT, fafdf38b16bf6b2b
onetag.com, 59d216e971852f2, RESELLER
appnexus.com, 3153, RESELLER, f5ab79cb980f11d1
meitu.com, 251, RESELLER
pubmatic.com, 157654, RESELLER, 5d62403b186f2ace
adcolony.com, f858ba060bce51ad, RESELLER, 1ad675c9de6b5176
openx.com, 540899687, RESELLER, 6a698e2ec38604c6
rubiconproject.com, 18224, RESELLER, 0bfd66d529a55807
smartadserver.com, 1894, RESELLER
smartadserver.com, 3445, RESELLER
appnexus.com, 10490, RESELLER, f5ab79cb980f11d1
supply.colossusssp.com, 211, DIRECT, 6c5b49d96ec1b458
admixer.net, 81aedb7e-ca73-4498-997c-74f3b92481ea, RESELLER
aralego.com, par-D232D76A227923DA1D28D94AA9699AE8, RESELLER
ucfunnel.com, par-D232D76A227923DA1D28D94AA9699AE8, RESELLER
cmcm.com, 127, RESELLER
rhythmone.com, 3900035207, RESELLER, a670c89d4a324e47
indexexchange.com, 182257, RESELLER, 50b1c356f2c5c8fc
spotxchange.com, 285547, RESELLER, 7842df1d2fe2db34
spotx.tv, 285547, RESELLER, 7842df1d2fe2db34
video.unrulymedia.com, 3900035207, RESELLER
advangelists.com, 1be3bc32e6564055d5ca3e5a354acbef, DIRECT, 60d26397ec060f98
adform.com, 2600, DIRECT
stroeer.com, 14214, DIRECT
contextweb.com, 558750, DIRECT, 89ff185a4c4e857c
mobuppsrtb.com, c74d97b01eae257e44aa9d5bade97baf4471, RESELLER
improvedigital.com, 1785, RESELLER
indexexchange.com, 192104, DIRECT, 50b1c356f2c5c8fc
improvedigital.com, 912, RESELLER
pubmatic.com, 159078, RESELLER, 5d62403b186f2ace
stroeer.com, 17938, DIRECT
improvedigital.com, 1275, RESELLER
pubmatic.com, 159831, DIRECT, 5d62403b186f2ace
pubmatic.com, 159897, RESELLER, 5d62403b186f2ace
appnexus.com, 8217, RESELLER, f5ab79cb980f11d1
openx.com, 540011801, RESELLER, 6a698e2ec38604c6
loopme.com, 11281, RESELLER, 6c8d5f95897a5a3b
meitu.com, 253, DIRECT
smartyads.com, 1406, DIRECT, fd2bde0ff2e62c5d
smartyads.com, 1373, DIRECT, fd2bde0ff2e62c5d
smartyads.com, 1725, DIRECT, fd2bde0ff2e62c5d
improvedigital.com, 1797, RESELLER
sovrn.com, 289960, RESELLER, fafdf38b16bf6b2b
pubmatic.com, 158651, RESELLER, 5d62403b186f2ace
freewheel.tv, 1073329, RESELLER
freewheel.tv, 1073345, RESELLER
onetag.com, 5e3b68a4a263f95, RESELLER
waardex.com, 112907, DIRECT
epom.com, 9640d532-1239-4845-bb8e-0dc447b7b915, RESELLER, a05085f3142a1ca8
tappx.com, 33376, DIRECT, 9f375a07da0318ec
improvedigital.com, 1678, RESELLER
loopme.com, 11272, RESELLER, 6c8d5f95897a5a3b
rubiconproject.com, 20744, RESELLER, 0bfd66d529a55807
openx.com, 540298543, RESELLER, 6a698e2ec38604c6
pubmatic.com, 158154, RESELLER, 5d62403b186f2ace
engagebdr.com, 80, DIRECT
vyadd.com, 12854, RESELLER
improvedigital.com, 1714, RESELLER
web3.us.com, 63207, DIRECT
mgid.com, 505794, DIRECT, d4c29acad76ce94f
admixer.net, 54355ed6-7634-45fe-b731-5e4e5a8515b9, DIRECT
e-planning.net, ec771b05828a67fa, RESELLER, c1ba615865ed87b2
sovrn.com, 268876, RESELLER, fafdf38b16bf6b2b
lijit.com, 268876, RESELLER, fafdf38b16bf6b2b
openx.com, 541031350, RESELLER, 6a698e2ec38604c6
improvedigital.com, 1556, RESELLER
axonix.com, 56222, RESELLER
contextweb.com, 562309, RESELLER, 89ff185a4c4e857c
conversantmedia.com, 100066, RESELLER, 03113cd04947736d
rubiconproject.com, 12186, RESELLER, 0bfd66d529a55807
onetag.com, 59d216e971852f2, DIRECT
betweendigital.com, 43070, DIRECT
rubiconproject.com, 19724, RESELLER, 0bfd66d529a55807
google.com, pub-5289985627731322, RESELLER, f08c47fec0942fa0
meitu.com, 251, DIRECT
cmcm.com, 127, DIRECT
germaniavid.com, d9d4f495e875a2e075a1a4a6e1b9770f6900, RESELLER
improvedigital.com, 1728, RESELLER
admixer.net, c9ed39e8-724d-4012-ae61-38a5ac81bb0e, DIRECT
betweendigital.com, 43070, RESELLER
streamkey.tv, 3070, RESELLER, f5ab793he40f11d1
telaria.com, j5en0-29eta, RESELLER, 1a4e959a1b50034a
meitu.com, 479, RESELLER
sonobi.com, 2b21773f25, DIRECT, d1a215d9eb5aee9e
rhythmone.com, 1059622079, RESELLER, a670c89d4a324e47
contextweb.com, 560606, RESELLER, 89ff185a4c4e857c
rubiconproject.com, 22982, DIRECT, 0bfd66d529a55807
taboola.com, 1304158, DIRECT, c228e6794e811952
spotx.tv, 71451, RESELLER, 7842df1d2fe2db34
quantumdex.io, EXU5919, RESELLER
ssp.e-volution.ai, AJxF6R108a9M6CaTvK, RESELLER
lunamedia.io, 3b57f8b19b67a806513dec9b47557783, RESELLER, 524ecb396915caaf
themediagrid.com, R28I9J, RESELLER, 35d5010d7789b49d
pubmatic.com, 160493, RESELLER, 5d62403b186f2ace
betweendigital.com, 43092, RESELLER
ssp.logan.ai, AJxF6R2a9M6CaTvK, RESELLER
spotxchange.com, 71451, RESELLER, 7842df1d2fe2db34
advertising.com, 8603, RESELLER
pubmatic.com, 156307, RESELLER, 5d62403b186f2ace
appnexus.com, 3364, RESELLER, f5ab79cb980f11d1
indexexchange.com, 183756, RESELLER, 50b1c356f2c5c8fc
contextweb.com, 560382, RESELLER, 89ff185a4c4e857c
openx.com, 539154393, RESELLER, 6a698e2ec38604c6
tremorhub.com, z87wm, RESELLER, 1a4e959a1b50034a
rubiconproject.com, 16698, RESELLER, 0bfd66d529a55807
freewheel.tv, 799921, RESELLER
rhythmone.com, 1166984029, RESELLER, a670c89d4a324e47
smartadserver.com, 3563, RESELLER
beachfront.com, 13749, RESELLER, e2541279e8e2ca4d
advertising.com, 28458, RESELLER
emxdgt.com, 1643, RESELLER, 1e1d41537f7cad7f
improvedigital.com, 1577, RESELLER
video.unrulymedia.com, 1166984029, RESELLER
video.unrulymedia.com, 2252555169, DIRECT
rhythmone.com, 2252555169, DIRECT, a670c89d4a324e47
gamoshi.io, 267-b4657, DIRECT
gamoshi.io, 267-b4657, RESELLER
sonobi.com, 94997de4e6, DIRECT, d1a215d9eb5aee9e
inmobi.com, 30f3571d1dec45cf80d13b74ed1fffb2, RESELLER, 83e75a7ae333ca9d
kaiads.com, 37907027-6df6-40cd-a683-98a5bb5f3da2, DIRECT
conversantmedia.com, 100264, RESELLER, 03113cd04947736d
adform.com, 2795, RESELLER
admixer.co.kr, 1538, RESELLER
ssp.logan.ai, LG4, RESELLER
betweendigital.com, 43837, RESELLER
outbrain.com, 0052a1ede0a266bb35758ae42f0a6f91db, DIRECT
appnexus.com, 7597, RESELLER, f5ab79cb980f11d1
tremorhub.com, q017o-78mlk, RESELLER, 1a4e959a1b50034a
teads.tv, 15429, RESELLER, 15a9c44f6d26cbe1
advertising.com, 26154, RESELLER
spotxchange.com, 225721, RESELLER
freewheel.tv, 741650, RESELLER
rubiconproject.com, 17130, RESELLER, 0bfd66d529a55807
lkqd.net, 450, RESELLER, 59c49fa9598a0117
openx.com, 540393169, RESELLER, 6a698e2ec38604c6
spotx.tv, 238936, RESELLER, 7842df1d2fe2db34
spotxchange.com, 238936, RESELLER, 7842df1d2fe2db34
advertising.com, 28038, RESELLER
rubiconproject.com, 19668, RESELLER, 0bfd66d529a55807
indexexchange.com, 190856, RESELLER, 50b1c356f2c5c8fc
pubmatic.com, 158615, RESELLER, 5d62403b186f2ace
vidazoo.com, 1773068026, RESELLER, b6ada874b4d7d0b2
lkqd.net, 602, RESELLER, 59c49fa9598a0117
beachfront.com, 14027, RESELLER, e2541279e8e2ca4d
smartadserver.com, 3820, RESELLER
rhythmone.com, 367782854, RESELLER, a670c89d4a324e47
video.unrulymedia.com, 367782854, RESELLER
indexexchange.com, 193091, RESELLER, 50b1c356f2c5c8fc
pubmatic.com, 160065, RESELLER, 5d62403b186f2ace
synacor.com, 82423, RESELLER, e108f11b2cdf7d5b
improvedigital.com, 1863, RESELLER
freewheel.tv, 1220655, RESELLER
smaato.com, 1100048704, RESELLER, 07bcf65f187117b4
vidoomy.com, 61107, RESELLER
contextweb.com, 562145, RESELLER, 89ff185a4c4e857c
mobupps.com, c74d97b01eae257e44aa9d5bade97baf4471, DIRECT
catapultx.com, 141027, DIRECT
e-planning.net,90db94ab9bfec725,DIRECT,c1ba615865ed87b2
betweendigital.com, 43807, DIRECT
supply.colossusssp.com, 285, DIRECT, 6c5b49d96ec1b458
appnexus.com,10490,RESELLER, f5ab79cb980f11d1
contextweb.com,562060,DIRECT, 89ff185a4c4e857c
rhythmone.com,2147483647,RESELLER, a670c89d4a324e47
video.unrulymedia.com,2147483647,RESELLER, a670c89d4a324e47
pubmatic.com,160114,RESELLER, 5d62403b186f2ace
tpmn.io, 505, RESELLER
inmobi.com, ab915bcef5b24940bf745f1a8f427bec, RESELLER, 83e75a7ae333ca9d
rubiconproject.com, 11726, RESELLER, 0bfd66d529a55807
tpmn.io, 504, RESELLER
motionspots.com, 117041, DIRECT, f0220652b4aaebdc
yeahmobi.com,5135235,DIRECT
adsgard.net, 902, DIRECT, 36a1c66e1a2f76dd
opera.com,pub5954318212352,DIRECT,55a0c5fd61378de3
appnexus.com,13227,RESELLER
yahoo.com, 59052, RESELLER
risecodes.com,6022acddc8b2f90001767980, RESELLER
yahoo.com, 59040, RESELLER, e1a5b5b6e3255540
emxdgt.com, 2014, RESELLER, 1e1d41537f7cad7f
pubmatic.com, 161463, RESELLER, 5d62403b186f2ace
germaniavid.com, 433197, RESELLER
vidoomy.com, 8219011, DIRECT
appnexus.com, 12475, RESELLER, f5ab79cb980f11d1
yahoo.com, 56860, RESELLER, e1a5b5b6e3255540
germaniavid.com, 433198, RESELLER
pubmatic.com, 156498, RESELLER, 5d62403b186f2ace
adform.com, 2742, RESELLER
opera.com, pub6794514651328, DIRECT, 55a0c5fd61378de3
conversantmedia.com, 100269, RESELLER, 03113cd04947736d
triplelift.com, 10522, RESELLER, 6c33edb13117fd86
yahoo.com, 58935, RESELLER, e1a5b5b6e3255540
lemmatechnologies.com, 188, RESELLER, 7829010c5bebd1fb
appnexus.com, 13227, RESELLER
kaiads.com, 080b82ab-b33a-4763-a498-50f464567e49, DIRECT`);

        zip.file('LICENSE', `
KaiOS SDK Agreement
  March 19, 2019
https://www.kaiostech.com/sdk-agreement/

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1. Scope.

This KaiOS SDK Agreement ("Agreement") apply to all developers wishing to
develop applications for the KaiOS. The Agreement forms a valid contract
between you ("you" or "Licensee"), and KAI OS TECHNOLOGIES (HONG KONG) LIMITED,
a corporation duly organized and existing under the laws of Hong Kong,
having its principle place of business at 12/F, 133 Wai Yip Street, Kwun Tong,
Kowloon, Hong Kong, Hong Kong ("we" or "KAI").

Do note that we may change the Agreement from time to time at our discretion.
Whenever the Agreement is modified, we will ask you to accept the new terms
before downloading the KAI software.

You accept these terms by clicking on the applicable "I accept" button (or similar)
shown to you in connection with these Agreement. If you are accepting this
Agreement on behalf of your employer or another organisation, by clicking on
accept you represent and warrant that you are authorized to accept this
Agreement on behalf of that organisation.

Do note that we may change the Agreement from time to time at our discretion.
Whenever the Agreement is modified, we will ask you to accept the new terms
before downloading the KAI software.

You accept these terms by clicking on the applicable "I accept" button (or similar)
shown to you in connection with these Agreement. If you are accepting this
Agreement on behalf of your employer or another organisation, by clicking on
accept you represent and warrant that you are authorized to accept this
Agreement on behalf of that organisation.

2. Definitions.

In this Agreement:

"Application" means one or more software programs developed by Licensee in
compliance with the Documentation and Developer Requirements, under Licensee’s
own trademark or brand, and for specific use with the KaiOS Devices, including
bug fixes, updates, upgrades, modifications, enhancements, supplements to,
revisions, new releases and new versions of such software programs.

"Documentation" means any technical or other specifications or documentation
that KAI may provide to Licensee for use in connection with SDK.

"Documented API(s)" means the application programming interface(s) documented
by KAI in the Documentation and which are contained in SDK.

"FOSS" means any software that is subject to terms that, as a condition of use,
copying, modification or redistribution, require such software and/or derivative
works thereof to be disclosed or distributed in source code form, to be licensed
for the purpose of making derivative works, or to be redistributed free of charge,
including without limitation software distributed under the GNU General Public
License or GNU Lesser/Library GPL, Mozilla Public License (MPL), or Apache License.

"Developer Requirements" mean the technical, human interface, design,
product category, security, performance, and other criteria and requirements
set forth in Exhibit A.

"KaiOS" means the KaiOS mobile operating system owned by KAI.

"KaiOS Devices" means mobile devices that run KaiOS.

"KaiOS Store" means the service portal application KAI has created which allows
registered end users to download services and applications on KaiOS Devices.

"Security Solution" means the proprietary content protection system of KAI
to be applied to Applications distributed on the KaiOS Store to administer
KAI’s standard usage rules for Applications, as such system and rules may be
modified by KAI from time to time.

"SDK" means the Documentation, software (source code and object code),
applications, sample code, simulator, tools, libraries, APIs, data, files,
and materials provided by KAI for use by Licensee in connection with the
Application development, and includes any Updates that may be provided by
KAI to Licensee pursuant to this Agreement.

"Term" means the period described in Section 10.

"Updates" means bug fixes, updates, upgrades, modifications, enhancements,
supplements, and new releases or versions of the SDK, or to any part of SDK.

3. License and Restrictions.

3.1 Permitted Uses and Restrictions.

Subject to the terms and conditions of this Agreement, KAI hereby grants
Licensee a limited, non-exclusive, personal, revocable, non-sublicensable
and non-transferable license, during the Term, to:

(a) install a reasonable number of copies of the SDK for the sole purpose
of developing or testing Applications;

(b) distribute the SDK solely as integrated part of the Application in
accordance with this Agreement, and

(c) use and copy the Documentation for internal use only and for the sole
purpose of developing or testing Applications.

Licensee will be solely responsible for all costs, expenses, losses and
liabilities incurred, and activities undertaken by Licensee in connection
with the foregoing license.

3.2 Copyright Notices.

Licensee agrees to retain the KAI copyright, disclaimers and other proprietary
notices (as they appear in SDK and related services and Documentation provided)
in all copies of SDK and Documentation.

3.3 Ownership.

KAI retains all rights, title, and interest in and to SDK it may make
available to Licensee under this Agreement.

3.4 No Other Permitted Uses.

Except as otherwise set forth in this Agreement, Licensee shall
not (or enable others):

(a) rent, lease, lend, sell, redistribute, or sublicense SDK,
in whole or in part,

(b) use SDK for any purpose not expressly permitted by this Agreement,

(c) install, use or run the SDK on any non-KaiOS Devices,

(d) copy (except as expressly permitted under this Agreement),
decompile, reverse engineer, disassemble, attempt to derive the
source code of, modify, decrypt, or create derivative works of
SDK or any services provided by SDK, or any part thereof (except
as and only to the extent any foregoing restriction is prohibited
by applicable law),

(e) exploit any services provided hereunder in any unauthorized way
whatsoever, including but not limited to, by trespass or burdening
network capacity.

All licenses not expressly granted in this Agreement are reserved and
no other licenses, immunity or rights, express or implied are granted
by KAI, by implication, estoppel, or otherwise.

This Agreement does not grant Licensee any rights to use any trademarks,
logos or service marks belonging to KAI. If Licensee makes reference to
any KAI’s products or technology, Licensee agrees to comply with the
guidelines furnished by KAI as modified by KAI from time to time.

3.5 Updates.

If Updates are made available by KAI, the terms of this Agreement will
govern such Updates.

4. Licensee Obligations.

4.1 General.

Licensee hereby warrants to KAI that all information provided to KAI by
Licensee will be current, true, accurate and complete.

4.2 Use of SDK.

Licensee agrees that:

(a) It will only use SDK for the purposes and in the manner expressly
permitted by this Agreement and in accordance with all applicable
laws and regulations;

(b) It will not use SDK or any services for any unlawful or illegal activity,
nor to develop any Application which would commit or facilitate the
commission of a crime, or other tortious, unlawful or illegal act;

(c) The Application will be developed in compliance with the Documentation
and the Developer Requirements; and

(d) It will not create any Application that would disable, hack or otherwise
interfere with the Security Solution, or any security, digital signing,
digital rights management, verification or authentication mechanisms
in the SDK or KaiOS.

5. Digital Signing of Applications.

All Applications must be signed with an KAI-issued certificate in order to
be installed on KaiOS Devices in accordance with the process set forth
in Exhibit B.

6. Indemnification.

To the extent permitted by law, Licensee agrees to indemnify, defend and
hold harmless KAI, its directors, officers, employees, independent contractors
and agents (each a “KAI Indemnified Party”) from any and all claims, losses,
liabilities, damages, expenses and costs (including without limitation
attorney’s fees and court costs) (collectively “Losses”) incurred by a KAI
Indemnified Party as a result of any claims that the Applications or the
distribution, use or importation of the Applications or metadata violate
or infringe any third party intellectual property or proprietary rights,
data collection or privacy any claims arising out of KAI’s permitted use,
promotion or distribution of the Application(s), related trademarks and
logos, or images and other materials that Licensee provides to KAI.

7. Term and Termination.

7.1 Term.

This Agreement shall become effective when accepted by Licensee and
shall remain in force unless terminated by either party upon one (1)
month written notice, or as set out below.

7.2 Termination.

This Agreement will terminate, effective immediately upon notice from
the non-breaching party, if the other party:

(a) fails to comply with any term of this Agreement;

(b) commences an action for patent infringement against non-breaching party;

(c) becomes insolvent, fails to pay debts when due, dissolves or ceases
to do business, file for bankruptcy; or

(d) engages, or encourage others to engage, in any fraudulent, improper,
unlawful or dishonest act relating to this Agreement, including,
but not limited to, embezzlement, alteration or falsification of
documents, theft, inappropriate use of computer systems, bribery,
or other misrepresentation of facts.

7.3 Effect of Termination.

Upon the termination of this Agreement for any reason, Licensee shall
immediately cease all use of SDK and services and erase and destroy all
copies of SDK, excluding any archival copies maintained in accordance
with Licensee’s standard business practices required to be maintained
by applicable law, rule or regulation.

The provisions which by their nature are intended to survive termination
or expiration of this Agreement shall survive.

8. No Warranty.

SDK and any services are provided “as is” and “as available”, with all
faults and without warranty of any kind, and KAI hereby disclaims all
warranties and conditions with respect to SDK and services, either express,
implied or statutory, fitness for a particular purpose, and noninfringement
of third party rights.

9. Limitation of Liability.

In no event will KAI be liable for any incidental, special, indirect, consequential
or punitive damages whatsoever, including, without limitation, damages for loss
of profits, loss of data, business interruption or any other commercial damages
or losses, arising out of or related to this agreement, however caused,
whether under a theory of contract, warranty, tort (including negligence),
products liability, or otherwise.

10. General Legal Terms.

10.1 Consent to Collection and Use of Data.

Licensee agrees that KAI may collect and use technical and related
information, including but not limited to information about Applications,
computer, system software, other software and peripherals, that is
gathered periodically to facilitate the provision of software updates
and other services to Licensee (if any) related to SDK, and to verify
compliance with the terms of this Agreement. KAI may use this information,
as long as it is in a form that does not personally identify Licensee,
to improve SDK, KAI products or to provide services or technologies to
Licensee and other customers.

10.2 Assignment.

Licensee may not assign or transfer this Agreement by operation of law,
merger, or any other means without KAI’s express prior written consent.

10.3 Relationship of the Parties.

This Agreement will not be construed as creating any other agency
relationship, or a partnership, joint venture, fiduciary duty, or any
other form of legal association between Licensee and KAI.

10.4 Notices.

Any notices relating to this Agreement shall be in writing. Notices
will be deemed given by when sent to the party’s address provided in
connection with this Agreement (e-mail suffices when sending notices
to Licensee).

10.5 Severability.

If a court of competent jurisdiction finds any clause of this Agreement
to be unenforceable for any reason, that clause of this Agreement
shall be enforced to the maximum extent permissible so as to affect
the intent of the parties, and the remainder of this Agreement shall
continue in full force and effect.

10.6 Waiver and Construction.

Failure by a party to enforce any provision of this Agreement shall
not be deemed a waiver of future enforcement of that or any other
provision. Section headings are for convenience only and are not to
be considered in construing or interpreting this Agreement.

10.7 Export Control.

SDK may not be exported or re-exported (a) into any U.S. embargoed
countries or (b) to anyone on the U.S. Treasury Department’s list of
Specially Designated Nationals or the U.S. Department of Commerce
Denied Person’s List or Entity List. By using SDK, Licensee represents
and warrants that Licensee is not located in any such country or on
any such list. Licensee also agree that Licensee will not use SDK for
any purposes prohibited by United States law, including, without limitation,
the development, design, manufacture or production of nuclear, missiles,
or chemical or biological weapons.

10.8 Dispute Resolution; Governing Law.

This Agreement shall be governed by and construed in accordance with
the laws of Hong Kong. In the event that any dispute, claim or controversy
arises between the parties in connection with or relating to this Agreement,
including any question concerning the existence, validity, breach,
termination or interpretation thereof (collectively, “Dispute”), the
aggrieved party shall give the other party a written notice of Dispute
(“Notice of Dispute”) with a description of the Dispute in reasonable detail.

The parties shall negotiate in good faith and exercise reasonable efforts
to settle any notified Dispute within a period of thirty (30) days
following the delivery of the Notice of Dispute. If the parties fail
to resolve the Dispute within such period, the Dispute shall be finally
settled by arbitration by a single arbitrator in accordance with the
UNCITRAL Arbitration Rules (“Rules”) in force when the notice of
arbitration is submitted in accordance with such Rules, as modified by
the HKIAC Procedures for the Administration of International Arbitration.
The place of arbitration shall be in Hong Kong at the HKIAC. The appointing
authority of the arbitrator shall be the HKIAC. The language of the
arbitral proceedings shall be English. The arbitral award shall be final,
binding on the parties and non-appealable to such extent permissible by law.

10.9 Entire Agreement; Governing Language.

This Agreement constitutes the entire agreement between the parties
with respect to SDK licensed hereunder and supersedes all prior understandings
and agreements regarding its subject matter. This Agreement may be modified
only: (a) by a written amendment signed by both parties, or (b) to the
extent expressly permitted by this Agreement. Any translation of this
Agreement is done for local requirements and in the event of a dispute
between the English and any non-English version, the English version of
this Agreement shall govern.

      Exhibit A
Application Requirements

1. APIs and Functionality.

(a) Applications may only use Documented APIs in the manner prescribed by KAI
and must not use or call any private APIs.

(b) An Application may not itself install or launch other executable code by
any means, including without limitation through the use of a plug-in architecture,
calling other frameworks, other APIs or otherwise. No interpreted code may
be downloaded or used in an Application except for code that is interpreted
and run by KAI’s Documented APIs and built-in interpreter(s).

(c) Without KAI’s prior written approval, an Application may not provide, unlock
or enable additional features or functionality through distribution mechanisms
other than KaiOS Store.

(d) An Application may only read data from or write data to an Application’s
designated container area on the device, except as otherwise specified by KAI.

(e) Required API implementations. All Applications must implement the following
APIs as soon as they are made available to Licensee by KAI and in any
event within three (3) months from the date when KAI has notified the
Licensee by email.

(i)   Payment/Billing API. All payment processing functionalities in the
Application (in-app purchases, subscriptions, purchase of goods/services
and alike) must be implemented solely using the payment API provided
by KAI, and must use KAI’s branding and UI elements as specified in
the applicable Documentation. Use of other payment APIs in the Application
is prohibited.

(ii)  Advertisement API. Advertisement API enables Applications to display
advertisements to the user. Use of other advertisement APIs in the
Application is prohibited.

(iii) Analytics API. Analytics API is used to collect metrics from the
Applications (e.g. which applications have been downloaded, which
applications are used, how often, how long). Use of other analytics
APIs in the Application is prohibited.

(iv)  Kai Account API. Kai Account API is used to identify the user
account. Use of other accounts in the Application is prohibited.

2. User Interfaces and Data.

(a) Applications must comply with the Documentation provided by KAI.

(b) Any form of user or device data collection, or image, picture or voice
capture or recording performed by the Application (collectively “Recordings”),
and any form of user data, content or information processing, maintenance,
uploading, syncing, or transmission performed by the Application
(collectively “Transmissions”) must declare to KAI and comply with all
applicable privacy laws and regulations as well as any requirements from
KAI’s privacy terms related to such aspects, including but not limited to
any notice or consent requirements. In particular, a reasonably conspicuous
audio, visual or other indicator must be displayed to the user as part of
the Application to indicate that a Recording is taking place.

3. Local Laws, User Privacy, Location services, Mapping and Payments.

(a) Applications must comply with all applicable criminal, civil and statutory
laws and regulations, including those in any jurisdictions in which
Applications may be delivered.

In addition, for Applications that use location-based APIs or that collect,
transmit, maintain, process, share, disclose or otherwise use a user’s
personal information or data:

(i)   Applications must comply with all applicable privacy and data
collection laws and regulations with respect to any collection,
transmission, maintenance, processing, use, etc. of the user’s
location data or personal information by the Application.

(ii)  Applications may not be designed or marketed for the purpose of
harassing, abusing, stalking, threatening or otherwise violating
the legal rights (such as the rights of privacy and publicity)
of others.

(iii) Applications may not perform any functions or link to any content
or use any robot, spider, site search or other retrieval application
or device to scrape, retrieve or index services provided by KAI or
its licensors, or to collect, disseminate or use information about
users for any unauthorized purpose.

(b) For Applications that use location-based APIs, such Applications may not
be designed or marketed for automatic or autonomous control of vehicles,
aircraft, or other mechanical devices; dispatch or fleet management; or
emergency or life-saving purposes. In addition, Applications that offer
location-based services or functionality must notify and obtain consent
from an individual before his or her location data is being collected,
transmitted or otherwise used by the Application.

(c) For Applications that use location-based APIs for real-time route guidance
(including, but not limited to, turn-by-turn route guidance and other
routing that is enabled through the use of a sensor), Licensee must place
the following notice (or substantially similar) in the end user license
agreement: LICENSEE USE OF THIS REAL TIME ROUTE GUIDANCE APPLICATION IS
AT LICENSEE SOLE RISK. LOCATION DATA MAY NOT BE ACCURATE.

(d) Applications must not disable, override or otherwise interfere with any
KAI-implemented system alerts, warnings, display panels, consent panels
and the like, including, but not limited to, those that are intended to
notify the user that the user’s location data is being collected, transmitted,
maintained, processed or used, or intended to obtain consent for such use.
If consent is denied or withdrawn, Applications may not collect, transmit,
maintain, process or utilize the user’s location data or perform any other
actions for which the user’s consent has been denied or withdrawn.

(e) If an Application accesses the Google Mobile Maps (GMM) service through
the maps API, use of the GMM Service is subject to Google’s Terms of
Service. If Licensee does not accept such Google Terms of Service, including,
but not limited to all limitations and restrictions therein Licensee may
not use the GMM service in the Application. Licensee acknowledges and
agrees that use of the GMM Service in Applications will constitute the
Licensee’s acceptance ofsuch Terms of Service.

4. Content and Materials.

(a) Any master recordings and musical compositions embodied in Applications
must be wholly-owned by Licensee or licensed to Licensee on a fully paid-up
basis and in a manner that will not require the payment of any fees,
royalties and/or sums by KAI to Licensee or any third party.

(b) If the Application includes or will include any other content, Licensee
must either own all such content or have permission from the content
owner to use it in the Application.

(c) Applications must not contain any obscene, drugs, gambling, violence,
alcohol, pornographic, offensive or defamatory content or materials of
any kind (text, graphics, images, photographs, features, etc.), or other
content or materials that in KAI’s reasonable judgment may be found
objectionable.

(d) Applications must not contain any malware, malicious or harmful code,
program, or other internal component (e.g. computer viruses, trojan horses,
“backdoors”) which could damage, destroy, or adversely affect other software,
firmware, hardware, data, systems, services, or networks.

(e) If the Application includes any FOSS, Licensee agrees to comply with all
applicable FOSS licensing terms. Licensee also agrees not to use any FOSS
or take any action in the development of the Application in such a way
that would cause the non-FOSS portions of SDK to be subject to any FOSS
licensing terms or obligations.

5. Cellular Network.

If an Application requires or will have access to the cellular network, then
additionally such Application:

(a) Must comply with KAI’s best practices and other guidelines on how
Applications should access and use the cellular network;

(b) Must not in KAI’s reasonable judgment excessively use or unduly burden
network capacity or bandwidth;

(c) May not have Voice over Internet Protocol (VoIP) functionality using
the cellular network.

6. Additional Services.

From time to time, KAI may provide access to additional services for Licensee
to use in connection with Applications. Some of these additional services may
be subject to separate terms and conditions in addition to this Agreement.
If Licensee elects to use such services, the usage will also be subject to
those separate terms and conditions.

KAI may change these Developer Requirements at any time. New or modified
Developer Requirements will not retroactively apply to Applications already
in distribution.

In order to continue using SDK or any services, Licensee must accept and
agree to the new Developer Requirements. If Licensee does not agree to new
Developer Requirements, Licensee’s use of SDK and any services can be suspended
or terminated by KAI.

      Exhibit B
Signing of Application

Licensee may obtain one or more production digital certificates from KAI, subject
to a maximum number as reasonably determined by KAI, to be used for the sole
purpose of signing Application(s) prior to submission of the Application to KAI
or limited distribution of Application for use on KaiOS Devices.

In relation to this, Licensee represents and warrants that it:

(a) will not take any action to interfere with the normal operation of any
KAI-issued digital certificates or schematics;

(b) is solely responsible for preventing any unauthorized person from having
access to digital certificates and corresponding private keys given by
KAI and it will use the best efforts to safeguard digital certificates
and corresponding private keys from compromise;

(c) immediately notify KAI in writing if Licensee has any reason to believe
there has been a compromise of any of digital certificates or corresponding
private keys;

(d) will not provide or transfer KAI-issued digital certificates to any third
party, nor use digital certificate to sign a third party’s application; and

(e) will use KAI-issued certificates exclusively for the purpose of signing
Applications for testing, submission to KAI and/or limited distribution
for use on KaiOS Devices as contemplated under this Agreement, and only
in accordance with this Agreement.

Licensee further represents and warrants to KAI that the licensing terms governing
the Application, or governing any third party code or FOSS included in the Application,
will be consistent with and not conflict with the digital signing or content
protection aspects of the Agreement or any of the terms, conditions or requirements
of this Agreement.

In particular, such licensing terms will not purport to require KAI to disclose
or make available any of the keys, authorization codes, methods, procedures,
data or other information related to the Security Solution, digital signing or
digital rights management mechanisms utilized as part of the Agreement.

If Licensee discovers any such inconsistency or conflict, it shall immediately
notify KAI of it and will cooperate with KAI to resolve such matter. KAI may
cease distribution of any affected Applications and refuse to accept any subsequent
Application submissions from Licensee until such matter is resolved to KAI’s
reasonable satisfaction.

END OF TERMS AND CONDITIONS
`);


        zip.file('kaios-native-ui.css', `:root{font-family:"Open Sans",sans-serif;font-size:10px;--capitalization:capitalize;--content-overflow:hidden;--app-background:#ffffff;--toast-background:#323232;--toast-color:#ffffff;--header-background:#320574;--header-color:#ffffff;--softkeys-background:#cccccc;--softkeys-color:#323232;--item-background:#ffffff;--item-text-color:#323232;--item-subtext-color:#6a6a6a;--item-focused-background:#873eff;--item-focused-text-color:#ffffff;--item-focused-subtext-color:#ffffff;--arrow-color:#000000;--button-background:#cccccc;--button-color:#323232;--button-background-focused:#873eff;--button-color-focused:#ffffff;--checkbox-color:#873eff;--checkbox-color-focused:#ffffff;--radio-color:#873eff;--radio-color-focused:#ffffff;--slider-color:#aaaaaa;--slider-color-selected:#873eff;--slider-focused-color:#aaaaaa;--slider-focused-selected:#ffffff;--progress-color:#aaaaaa;--progress-color-selected:#873eff;--progress-focused-color:#aaaaaa;--progress-focused-selected:#ffffff;--separator-background:#e6e6e6;--separator-color:#6a6a6a;--textarea-height:5rem}.focusable:focus{outline:none}.slider-container,.list-item-indicator,.list-item-icon,.list-item,.checkbox-container,.radio-container,.button-container,.input-container,.textarea-container,.progress-container{background:var(--item-background)}.slider-container__text,.list-item-indicator__text,.list-item-icon__text,.list-item__text,.checkbox-container__text,.radio-container__text,.progress-container__label{color:var(--item-text-color)}.slider-container__subtext,.list-item-indicator__subtext,.list-item-icon__subtext,.list-item__subtext,.checkbox-container__subtext,.radio-container__subtext,.input-container__label,.textarea-container__label{color:var(--item-subtext-color)}.selected,.list-item:focus,.list-item-indicator:focus,.list-item-icon:focus,.progress-container:focus{background:var(--item-focused-background)}.progress-container:focus>.progress-container__label,.selected>.slider-container__text,.list-item-indicator:focus>.list-item-indicator__text,.list-item-icon:focus .list-item-icon__text,.list-item:focus>.list-item__text,.selected>.checkbox-container__text,.selected>.radio-container__text{color:var(--item-focused-text-color)}.selected>.slider-container__subtext,.list-item-indicator:focus>.list-item-indicator__subtext,.list-item-icon:focus .list-item-icon__subtext,.list-item:focus>.list-item__subtext,.selected>.checkbox-container__subtext,.selected>.radio-container__subtext,.selected>.input-container__label,.selected>.textarea-container__label{color:var(--item-focused-subtext-color)}.selected>.radio-container__radio{background:var(--radio-color-focused)!important}.selected>.checkbox-container__checkbox{background:var(--checkbox-color-focused)!important}html,body{height:100%;width:100%;padding:0;margin:0}#app{background:var(--app-background);width:100vw;height:100%}#content{overflow:var(--content-overflow);width:100vw;height:calc(100% - 5.8rem)}.toast{height:3.6rem;width:100%;font-size:1.7rem;line-height:3.6rem;background:var(--toast-background);color:var(--toast-color);text-align:center;vertical-align:middle;position:absolute;transform:translateY(-3.6rem);transition:transform 1s ease-in-out;z-index:1;top:0}.toast--on{transform:translateY(0)}#header{text-align:center;vertical-align:middle;line-height:2.8rem;height:2.8rem;padding:0 1rem 0 1rem;background:var(--header-background);color:var(--header-color);font-size:1.7rem;font-weight:400;text-transform:var(--capitalization)}.list-item{position:relative;box-sizing:border-box;padding:1rem;height:6rem;display:flex;flex-direction:column;justify-content:center}.list-item__text{word-wrap:break-word;overflow:hidden;font-size:1.7rem;font-weight:400;margin:0}.list-item__text::first-letter{text-transform:var(--capitalization)}.list-item__subtext{word-wrap:break-word;overflow:hidden;font-size:1.4rem;font-weight:400;margin:0}.list-item__subtext::first-letter{text-transform:var(--capitalization)}.list-item-indicator{position:relative;box-sizing:border-box;padding:1rem 3rem 1rem 1rem;height:6rem;display:flex;flex-direction:column;justify-content:center}.list-item-indicator__text{word-wrap:break-word;overflow:hidden;font-size:1.7rem;font-weight:400;margin:0}.list-item-indicator__text::first-letter{text-transform:var(--capitalization)}.list-item-indicator__subtext{word-wrap:break-word;overflow:hidden;font-size:1.4rem;font-weight:400;margin:0}.list-item-indicator__subtext::first-letter{text-transform:var(--capitalization)}.list-item-indicator__indicator{height:1rem;width:1rem;position:absolute;right:1.5rem;border:solid var(--item-subtext-color);border-width:0 .2rem .2rem 0;display:inline-block;transform:rotate(-45deg) translateY(-50%);top:50%}.list-item-indicator:focus>.list-item-indicator__indicator{border-color:var(--item-focused-subtext-color)}.list-item-icon{position:relative;box-sizing:border-box;padding:1rem;height:6rem;display:flex;align-items:center}.list-item-icon__text-container{margin-left:1rem;position:relative;display:flex;flex-direction:column;justify-content:center}.list-item-icon__text{word-wrap:break-word;overflow:hidden;font-size:1.7rem;font-weight:400;margin:0}.list-item-icon__text::first-letter{text-transform:var(--capitalization)}.list-item-icon__subtext{word-wrap:break-word;overflow:hidden;font-size:1.4rem;font-weight:400;margin:0}.list-item-icon__subtext::first-letter{text-transform:var(--capitalization)}.list-item-icon__icon{height:3.2rem;width:3.2rem}.separator{vertical-align:middle;line-height:2.4rem;height:2.4rem;padding:0 1rem 0 1rem;font-size:1.4rem;font-weight:400;background:var(--separator-background);color:var(--separator-color);text-transform:var(--capitalization)}.radio-container{position:relative;box-sizing:border-box;padding:1rem 3rem 1rem 1rem;height:6rem;display:flex;flex-direction:column;justify-content:center}.radio-container__text{word-wrap:break-word;overflow:hidden;font-size:1.7rem;font-weight:400;margin:0}.radio-container__text::first-letter{text-transform:var(--capitalization)}.radio-container__subtext{word-wrap:break-word;overflow:hidden;font-size:1.4rem;font-weight:400;margin:0}.radio-container__subtext::first-letter{text-transform:var(--capitalization)}.radio-container__radio,.checkbox-container__checkbox{box-sizing:border-box;height:3rem;width:3rem;top:50%;transform:translateY(-50%);position:absolute;right:.5rem;display:inline-block}.radio-container__input,.checkbox-container__input{position:absolute;opacity:0}.radio-container__input + .radio-container__radio{background:var(--radio-color);mask-image:url("checkboxes-radios/radio-off-kaios-2.5.3.svg")}.radio-container__input:checked + .radio-container__radio{mask-image:url("checkboxes-radios/radio-on-kaios-2.5.3.svg")}.checkbox-container{position:relative;box-sizing:border-box;padding:1rem 3rem 1rem 1rem;height:6rem;display:flex;flex-direction:column;justify-content:center}.checkbox-container__text{word-wrap:break-word;overflow:hidden;font-size:1.7rem;font-weight:400;margin:0}.checkbox-container__text::first-letter{text-transform:var(--capitalization)}.checkbox-container__subtext{word-wrap:break-word;overflow:hidden;font-size:1.4rem;font-weight:400;margin:0}.checkbox-container__subtext::first-letter{text-transform:var(--capitalization)}.checkbox-container__input + .checkbox-container__checkbox{background:var(--checkbox-color);mask-image:url("checkboxes-radios/checkbox-off-kaios-2.5.3.svg")}.checkbox-container__input:checked + .checkbox-container__checkbox{mask-image:url("checkboxes-radios/checkbox-on-kaios-2.5.3.svg")}.progress-container{box-sizing:border-box;padding:1rem;height:6rem}.progress-container__label{overflow:hidden;font-size:1.7rem;font-weight:400;margin:0;display:block}.progress-container__label::first-letter{text-transform:var(--capitalization)}.progress-container__progress{-webkit-appearance:none;margin:1rem 0 0 0;height:.5rem;border:none;border-radius:.5rem;width:100%;grid-area:slider;background:var(--progress-color)}.progress-container__progress::-moz-progress-bar{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem;background:var(--progress-color-selected);border-right:.3rem solid var(--item-background);height:.5rem}.progress-container:focus>.progress-container__progress{background:var(--progress-focused-color)}.progress-container:focus>.progress-container__progress::-moz-progress-bar{background:var(--progress-focused-selected);border-right-color:var(--item-focused-background)}.slider-container{box-sizing:border-box;padding:1rem;height:6rem;display:grid;grid-template-areas:"text text subtext" "slider slider slider"}.slider-container__slider{-moz-appearance:none;margin:1rem 0 0 0;height:.5rem;border-radius:.5rem;width:100%;grid-area:slider;background:var(--slider-color)}.slider-container__slider::-moz-focus-outer{border:0}.slider-container__text{overflow:hidden;font-size:1.7rem;font-weight:400;margin:0;display:block;grid-area:text}.slider-container__text::first-letter{text-transform:var(--capitalization)}.slider-container__subtext{overflow:hidden;font-size:1.4rem;font-weight:400;margin:0;display:flex;justify-content:end;align-items:center;grid-area:subtext}.slider-container__slider::-moz-range-thumb{outline:none;width:1.5rem;height:1.5rem;border:.3rem solid var(--item-background);border-radius:50%;background:var(--slider-color-selected)}.slider-container__slider::-moz-range-progress{background:var(--slider-color-selected);height:.5rem;border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.slider-container__slider:focus::-moz-range-thumb{border:.3rem solid var(--item-focused-background);background:var(--slider-focused-selected)}.slider-container__slider:focus::-moz-range-progress{background:var(--slider-focused-selected)}.button-container{padding:0 1rem 1rem 1rem}.button-container__button{display:inline-block;box-sizing:border-box;width:100%;height:3.6rem;margin-top:1rem;border:none;outline:none;font-size:1.7rem;font-weight:400;background:var(--button-background);color:var(--button-color);text-transform:var(--capitalization)}.button-container__button:focus{background:var(--button-background-focused);color:var(--button-color-focused)}.button-container__button::-moz-focus-inner{border:0}.input-container,.textarea-container{padding:1rem}.input-container__input,.textarea-container__textarea{padding:0 .3rem 0 .3rem;margin-top:.5rem;width:100%;font-size:1.7rem;font-weight:400;outline:none;box-sizing:border-box;display:block}.input-container__input{height:3.6rem}.textarea-container__textarea{height:var(--textarea-height)}.input-container__label,.textarea-container__label{font-size:1.4rem;font-weight:400;display:block;text-transform:var(--capitalization)}.softkeys,.softkeys-icon{box-sizing:border-box;padding:.5rem;column-gap:.5rem;grid-gap:.5rem;display:grid;height:3rem;background:var(--softkeys-background);color:var(--softkeys-color)}.softkey{overflow:hidden;vertical-align:middle;height:2rem}.softkey-left{font-size:1.4rem;font-weight:600;text-align:start;text-transform:var(--capitalization)}.softkey-center{font-size:1.7rem;font-weight:700;text-align:center;text-transform:uppercase}.softkey-right{font-size:1.4rem;font-weight:600;text-align:end;text-transform:var(--capitalization)}@media only screen and (orientation:portrait){.softkeys{grid-template-columns:7.2rem 7.6rem 7.2rem}}@media only screen and (orientation:portrait){.softkeys-icon{grid-template-columns:9.8rem 2.4rem 9.8rem}}@media screen and (orientation:landscape){.softkeys{grid-template-columns:9.6rem 10.8rem 9.6rem}}@media screen and (orientation:landscape){.softkeys-icon{grid-template-columns:13.8rem 2.4rem 13.8rem}}`);

        zip.file('kaios-native-ui.js', 'let classesWithColoredParents=/checkbox-container__input|radio-container__input|input-container__input|textarea-container__textarea|slider-container__slider/g;const callFunction=(e,t)=>{let n=t.target;n.className&&n.className.match(classesWithColoredParents)&&e(n.parentElement)},blur=e=>e.classList.remove("selected"),focus=e=>e.classList.add("selected");window.addEventListener("focus",(e=>callFunction(focus,e)),!0),window.addEventListener("blur",(e=>callFunction(blur,e)),!0);');

        zip.file('manifest.webapp', '{"name": "' + aname + '","description": "' + adescription + '","subtitle": "' + asubtitle + '","origin": "' + aorigin + '","type": "web","version": "' + aversion + '","launch_path": "/index.html","fullscreen": true,"developer": {"name": "' + dname + '","url": "' + durl + '"},"default_locale": "en-US","display": "browser","cursor": false,"locales": {"en-US": {"name": "' + aname + '","description": "' + adescription + '","subtitle": "' + asubtitle + '"}},"icons": {"56": "icons/i.png","112": "icons/i.png","128": "icons/i.png"}}');

        var img = zip.folder('icons');
        img.file('icon-56.png', aicon56.split(',')[1], { base64: true });
        img.file('icon-112.png', aicon112.split(',')[1], { base64: true });
        img.file('icon-1128.png', aicon128.split(',')[1], { base64: true });
        zip.generateAsync({ type: 'blob' })
          .then(function (content) {
            saveAs(content, aname + '.zip');
          });
      });

    });



    var sel = document.querySelectorAll('input');
    for (var i = 0; i < sel.length; i++) {
      sel[i].addEventListener('keyup', function (e) {
        //var tb = document.activeElement.tabIndex;
        if (e.key == 'Enter') {
          this.blur();
          //document.getElementsByClassName('focusable')[tb+1].focus(); 
        }
      });
    }

  }
  reader.readAsText(file);


  document.body.addEventListener('keydown', function (e) {
    if (e.key == 'SoftRight' || e.key == 'F2') {
      if (window.confirm('Are You Sure?')) { window.close(); } else {
        main();
        navigator.spatialNavigationEnabled = true;
      }
    }

    if (e.key == 'SoftLeft' || e.key == 'F1') {
      window.location.href = 'create/index.html';
    }
  });
}


function relasenote() {
  if (localStorage.getItem('viewrelesenote') == null) {
    document.body.style = 'background:#fff; padding:10px';
    document.body.innerHTML = '<b><center>- Releses -</center></b><br><font style="font-size: 12px"><b>Version <span id="version">1.0.0</span></b></font><div style="width: 100%;text-align: center; font-weight: bold;background: #dedede; padding:5px 0px; margin-top:10px; position: fixed; left: 0px;bottom: 0px;">Ok</div>';
    document.body.addEventListener('keydown', function (e) {
      if (e.key == 'Enter') {
        localStorage.setItem('viewrelesenote', 'yes');
        if (window.confirm('Restart Required. Want To Continue ?')) { window.close(); }
      }
    });
    navigator.spatialNavigationEnabled = false;
  } else {
    main();
    navigator.spatialNavigationEnabled = true;
  }


}

try {
  if (validKaiStorage() == false) {
    document.getElementById('nofilenotice').style.display = 'none';
    app.innerHTML = '<input type="file" onchange="machine(this.files[0])">';
  } else { relasenote(); }
} catch (e) { alert(e.message); }


document.addEventListener('DOMContentLoaded', () => { getKaiAd({ publisher: '080b82ab-b33a-4763-a498-50f464567e49', app: 'Ebook Creator', slot: 'Ebook Creator', onerror: err => console.error('Custom catch:', err), onready: ad => { ad.call('display'); } }); });
document.body.addEventListener('keyup', () => { getKaiAd({ publisher: '080b82ab-b33a-4763-a498-50f464567e49', app: 'Ebook Creator', slot: 'Ebook Creator', onerror: err => console.error('Custom catch:', err), onready: ad => { ad.call('display'); } }); });



var xhttp = new XMLHttpRequest();
xhttp.onload = function () {
  var json = JSON.parse(this.responseText);
  var v = json.version;
  document.getElementById('version').innerHTML = v;
}
xhttp.open('GET', 'manifest.webapp', true);
xhttp.send();