let tafserAnimation,changeAyaBtn,headerDivs=document.querySelectorAll("header .head"),main=document.querySelector("main"),mainContainer=document.querySelector("main .container"),ayaText=document.querySelector(".aya-text"),ayaName=document.querySelector(".aya-name"),hintAya=document.querySelector(".aya-details i.hint"),makeAudio=document.querySelector(".currentAudio"),playBtn=document.querySelector(".play"),next=document.querySelector(".next"),prev=document.querySelector(".prev"),tafserBtn=document.querySelector(".tafserBtn"),glalText=document.querySelector(".tafser-content .glal-text"),muserText=document.querySelector(".tafser-content .muser-text"),tafserDiv=document.querySelector(".tafser-content"),closeTafser=document.querySelector(".cl-tafser"),glalBtn=document.querySelector(".b-glal"),muyaserBtn=document.querySelector(".b-muser"),allTafserBtn=document.querySelectorAll(".tafser-content .taf-btns p"),changeAudio=document.querySelector(".change-audio .aya-select"),numSelect=document.querySelector(".change-audio .number-select"),generateBtn=document.querySelector(".generate .btn-generate"),generateDiv=document.querySelector(".generate"),clChangeAudio=document.querySelector(".cl-div"),secChangeAudio=document.querySelector(".change-audio"),nextSurah=document.querySelector(".next-surah"),controlBtns=document.querySelector("main .control"),volumeBtn=document.querySelector(".change-volume"),volumeDiv=document.querySelector(".volume"),volumeInput=document.querySelector(".volume form input"),backgroundEffect=document.querySelector(".black-background"),randomBackground=document.querySelector(".background"),allRandom=document.querySelectorAll(".random-img img"),loadingAnimation=document.querySelector(".lds-ring"),ayaDetails=document.querySelector(".aya-details"),hadithBtn=document.querySelector("header .hadith"),hadithSelect=document.querySelectorAll(".hadith .hadith-select p"),hadithDetails=document.querySelector(".hadith-details"),hadithAnimation=document.querySelector(".hadith-back"),mainSelect=document.querySelector(".select-shikh select"),selectOptions=document.querySelectorAll("select option"),settingBtn=document.querySelector(".settingBtn"),settingDiv=document.querySelector(".setting"),changeBackground=document.querySelector(".chn-background"),hidBackgroundButton=document.querySelector(".main-hide .hid-background"),backgroundChanger=document.querySelector(".background-changer"),hidValue=!1,azkarBtn=document.querySelector("header .azkar"),azkarDiv=document.querySelector(".azkar .azkar-content"),morningAzkar=document.querySelector(".azkar .azkar-title .morning"),morningAndEvening=document.querySelector(".morning-evening"),closeAzkar=document.querySelector(".cl-azkar"),morningAz=document.querySelector(".btns .b-morning"),nightAz=document.querySelector(".btns .b-night"),allAz=document.querySelectorAll(".az-btns p"),azkarContent=document.querySelector(".az-content"),nightAzkar=document.querySelector(".night-content"),adaiaQuranBtn=document.querySelector(".adaia-quran"),adaiaDiv=document.querySelector(".adaia"),clAdaia=document.querySelector(".adaia .cl-adia"),adaiaContent=document.querySelector(".adaia-content"),tsabihBtn=document.querySelector(".tsabihTitle"),tsabihDiv=document.querySelector(".tsabih"),clTsabih=document.querySelector(".cl-tsabih"),tsabihContent=document.querySelector(".tsabih-content"),isPlay=!1,mainContent=document.querySelector(".aya-text");function showEffect(){backgroundEffect.classList.add("active")}function removeEffect(){backgroundEffect.classList.remove("active")}let tafserChange=!1;tafserBtn.onclick=function(){tafserDiv.classList.add("active"),showEffect()},closeTafser.onclick=function(){tafserDiv.classList.remove("active"),removeEffect()},hidBackgroundButton.addEventListener("click",(()=>{hidBackgroundButton.classList.contains("active")?(localStorage.getItem("image-index")?getNewImg(localStorage.getItem("image-index")):getNewImg(randomNum),backgroundChanger.classList.remove("hid")):(randomBackground.style.backgroundImage="",backgroundChanger.classList.add("hid")),hidBackgroundButton.classList.toggle("active")})),ayaName.onclick=function(){secChangeAudio.classList.add("active"),hintAya.classList.add("hid"),showEffect()},clChangeAudio.onclick=function(){secChangeAudio.classList.remove("active"),removeEffect()},randomBackground.style.backgroundImage="";let aya,audio,testIndex,getIndx,getAyaIndx,randomNum=0;function checkIcon(){playBtn.className="fa-solid fa-pause play",isPlay=!0}function tooglePlay(){isPlay?(makeAudio.pause(),isPlay=!1,playBtn.className="fa-solid fa-play play"):(makeAudio.play(),isPlay=!0,playBtn.className="fa-solid fa-pause play")}changeBackground.onclick=function(){randomNum++,randomNum<10?(getNewImg(randomNum),localStorage.setItem("image-index",randomNum)):(randomNum=0,localStorage.setItem("image-index",randomNum),getNewImg(randomNum))},headerDivs.forEach((e=>{e.addEventListener("click",(e=>{headerDivs.forEach((e=>e.classList.remove("active"))),e.currentTarget.classList.add("active")}))})),mainContainer.addEventListener("click",(()=>{volumeBtn.classList.remove("active"),hadithBtn.classList.remove("active"),azkarBtn.classList.remove("active")})),backgroundEffect.addEventListener("click",(()=>{secChangeAudio.classList.remove("active"),removeEffect(),tsabihDiv.classList.remove("active"),tafserDiv.classList.remove("active"),adaiaDiv.classList.remove("active"),hadithDetails.classList.remove("active"),settingDiv.classList.remove("active"),morningAndEvening.classList.remove("active")})),document.addEventListener("click",(e=>{"HEADER"==e.target.tagName&&(volumeBtn.classList.remove("active"),hadithBtn.classList.remove("active"),azkarBtn.classList.remove("active"))})),main.addEventListener("keydown",(e=>{"Space"==e.code?tooglePlay():"ArrowLeft"==e.code?prev.click():"ArrowRight"==e.code&&next.click()}));let currentAya,nameOfAya,selectShikName,selectInd,myIndx,saveContent=[];singleSura();let optionsSura,optionsNumber,idNextAya,checkIndex,secIndx,checkTafser,shikhName="alafasy";if(window.localStorage.getItem("quran-sound")){let e=JSON.parse(localStorage.getItem("quran-sound"));shikhName=e.value,selectShikName=e.name,selectOptions.forEach((e=>{e.innerText.trim()==selectShikName&&(e.selected=!0)}))}async function singleSura(){loadingAnimation.classList.add("active"),await fetch("https://api.alquran.cloud/v1/surah").then((e=>e.json())).then((e=>{for(let t in e.data)changeAudio.innerHTML+=`\n          <option id ='${e.data[t].number}'> \n          (${e.data[t].number})</span>${e.data[t].name}\n          </option>\n          \n        `;let t,a,n,i;function c(e){numSelect.innerHTML="";for(let t=1;t<=e;t++)numSelect.innerHTML+=`\n            <option>${t}</option>\n          `;optionsNumber=numSelect.querySelectorAll("option")}optionsSura=changeAudio.querySelectorAll("option"),changeAudio.addEventListener("change",(()=>{t=changeAudio.options[changeAudio.selectedIndex].id,a=e.data[t-1].numberOfAyahs,c(a)}));let o=Math.floor(114*Math.random());function r(){getIndx++,115!=getIndx?(optionsSura[getIndx-1].selected="selected",t=changeAudio.options[changeAudio.selectedIndex].id,a=e.data[t-1].numberOfAyahs,c(a),setTimeout((()=>{generateBtn.click()}),100)):(optionsSura[0].selected="selected",optionsNumber[0].selected="selected",t=changeAudio.options[changeAudio.selectedIndex].id,a=e.data[t-1].numberOfAyahs,c(a),setTimeout((()=>{generateBtn.click()}),100))}async function s(e,t){glalText.innerHTML='\n            <div class="lds-dual-ring"></div>\n            ',muserText.innerHTML='\n            <div class="lds-dual-ring"></div>\n\n  ',await fetch("muyasser.json").then((e=>e.json())).then((a=>{numSelect.value==a.quran.sura[e-1].aya[t].index&&(muserText.innerHTML=`\n              <p>\n                ${a.quran.sura[e-1].aya[t].text}\n                </p>\n           `)})),await fetch("jalalaen.json").then((e=>e.json())).then((a=>{numSelect.value==a.quran.sura[e-1].aya[t].index?glalText.innerHTML=`\n                <p>\n                  ${a.quran.sura[e-1].aya[t].text}\n                  </p>\n          `:a.quran.sura[e-1].aya[t].index=numSelect.value}))}optionsSura.forEach(((n,i)=>{i==o&&(n.selected=!0,t=n.id,a=e.data[t-1].numberOfAyahs,c(a),setTimeout((()=>{generateBtn.click()}),10))})),generateBtn.onclick=async function(){n=changeAudio.options[changeAudio.selectedIndex].id,i=numSelect.value-1,fetch(`https://api.alquran.cloud/v1/surah/${n}/ar.${shikhName}`).then((e=>e.json())).then((e=>{let t;function a(e){makeAudio.src=audio[e],ayaText.innerHTML=`${aya[e]}`,checkIndex=e+1,optionsSura[getIndx-1].selected=!0,optionsNumber.forEach(((t,a)=>{a==e&&(t.selected=!0)}))}function c(t){ayaName.innerHTML=`\n                        <span class="number-aya">(${e.data.numberOfAyahs}/${t})</span>\n                        <span class="name-aya">${e.data.name} </span>\n                        `,currentAya=t}aya=[],audio=[],loadingAnimation.classList.remove("active"),secChangeAudio.classList.remove("active"),removeEffect(),backgroundEffect.classList.remove("active"),controlBtns.classList.add("active"),ayaText.classList.add("active"),ayaDetails.classList.add("flex"),localStorage.getItem("image-index")?getNewImg(localStorage.getItem("image-index")):getNewImg(randomNum),e.data.ayahs.forEach((e=>{aya.push(e.text),audio.push(e.audio)})),t=i,getIndx=+n,myIndx=t,secIndx=+n,numSelect.addEventListener("change",(()=>{i=numSelect.value-1,t=i,checkIndex=i})),tafserDiv.classList.contains("active")&&showEffect(),makeAudio.onplay=function(){checkIcon()},a(t),s(n,t),c(t+1),allTafserBtn.forEach((e=>{e.addEventListener("click",(()=>{allTafserBtn.forEach((e=>e.classList.remove("active"))),"glal"==e.dataset.taf?(muserText.classList.remove("active"),glalText.classList.add("active")):(muserText.classList.add("active"),glalText.classList.remove("active")),e.classList.add("active")}))})),makeAudio.addEventListener("ended",(()=>{t<audio.length-1?(t++,a(t),c(t+1),s(n,t),myIndx=t):optionsNumber[0].selected="selected"})),isPlay=!1,playBtn.onclick=function(){tooglePlay()},next.onclick=function(){t<audio.length-1&&(t++,a(t),c(t+1),s(n,t),myIndx=t)},prev.onclick=function(){0!=t&&(t--,myIndx=t,s(n,t),a(t),c(t+1))}}))},next.addEventListener("click",(()=>{checkIndex==a&&r()})),makeAudio.addEventListener("ended",(()=>{checkIndex==a&&r()})),prev.addEventListener("click",(()=>{1==checkIndex&&(getIndx--,0!=getIndx?(optionsSura[getIndx-1].selected="selected",t=changeAudio.options[changeAudio.selectedIndex].id,a=e.data[t-1].numberOfAyahs,c(a),setTimeout((()=>{optionsNumber[optionsNumber.length-1].selected="selected",generateBtn.click()}),100)):(optionsSura[optionsSura.length-1].selected="selected",t=changeAudio.options[changeAudio.selectedIndex].id,a=e.data[t-1].numberOfAyahs,c(a),setTimeout((()=>{optionsNumber[optionsNumber.length-1].selected="selected",generateBtn.click()}),100)))})),mainSelect.addEventListener("input",(()=>{shikhName=mainSelect.value,selectShikName=mainSelect.options[mainSelect.selectedIndex].text;let e={name:selectShikName,value:shikhName};localStorage.setItem("quran-sound",JSON.stringify(e)),fetch(`https://api.alquran.cloud/v1/surah/${secIndx}/ar.${shikhName}`).then((e=>e.json())).then((e=>{var t,a;aya=[],audio=[],e.data.ayahs.forEach((e=>{aya.push(e.text),audio.push(e.audio)})),t=myIndx+1,ayaName.innerHTML=`\n              <span class="number-aya">(${e.data.numberOfAyahs}/${t})</span>\n              <span class="name-aya">${e.data.name} </span>\n              `,a=myIndx,makeAudio.src=audio[a],ayaText.innerHTML=`${aya[a]}`,isPlay=!0,tooglePlay(),s(secIndx,myIndx)}))}))}))}let volm,hadithArray=[];if(hadithSelect.forEach((e=>{e.addEventListener("click",(e=>{hadithAnimation.classList.add("active"),setTimeout((()=>{hadithBtn.classList.remove("active")}),0);let t=e.currentTarget.getAttribute("data-name");fetch(`https://alquranbd.com/api/hadith/${t}/3`).then((e=>e.json())).then((e=>{hadithDetails.classList.add("active"),hadithAnimation.classList.remove("active"),showEffect(),hadithDetails.scrollTo({top:0}),hadithArray.splice(0,hadithArray.length),e.forEach((e=>{-1==hadithArray.indexOf(e.hadithArabic)&&0!==e.hadithArabic.length&&hadithArray.push(e.hadithArabic)}));let t="";hadithDetails.innerHTML="";let a=hadithArray.length,n=document.createElement("h1"),i=document.createElement("i"),c=document.createElement("div");c.className="hadith-title flex",i.classList.add("fa-xmark","fa-solid"),i.addEventListener("click",(()=>{hadithDetails.classList.remove("active"),removeEffect()})),n.innerHTML=`عدد الاحاديث : ${a}`,c.appendChild(i),c.appendChild(n),hadithDetails.appendChild(c);let o=document.createElement("div");o.className="hadith-container",hadithArray.forEach((e=>{t=document.createElement("p"),t.innerHTML=e,o.appendChild(t)})),hadithDetails.appendChild(o)}))}))})),settingBtn.addEventListener("click",(()=>{settingDiv.classList.toggle("active"),backgroundEffect.classList.toggle("active")})),volumeInput.addEventListener("change",(()=>{volm=volumeInput.value/100,makeAudio.volume=volumeInput.value/100,localStorage.setItem("sound-volume",volm)})),localStorage.getItem("sound-volume")){let e=localStorage.getItem("sound-volume");makeAudio.volume=e,volumeInput.value=100*e}else makeAudio.volume=.5,volumeInput.value=50;morningAzkar.addEventListener("click",(()=>{morningAndEvening.classList.add("active"),showEffect(),setTimeout((()=>{azkarBtn.classList.remove("active")}),0)})),closeAzkar.onclick=function(){morningAndEvening.classList.remove("active"),removeEffect()};let counterMorning,morningDivCounter,allMorningP,counterNight,nightDivCounter,allNightP,counterTsabih,tsabihDivCounter,allTsabihP,clickAz=!0,morningCount=0,nightCount=0;function morningData(){fetch("azkar.json").then((e=>e.json())).then((e=>{e["az-morning"].forEach((e=>{let t=`\n        <div class= "az-main flex">\n              <p class= 'content'>${e.content}</p>\n              <div class="az-counter"><p>${e.count}</p> / <span>${morningCount}</span></div>\n        </div>\n        \n      `;azkarContent.innerHTML+=t,azkarContent.classList.add("active"),counterMorning=azkarContent.querySelectorAll(".az-counter span"),morningDivCounter=azkarContent.querySelectorAll(".az-counter"),allMorningP=azkarContent.querySelectorAll(".az-counter p")})),mGenerateCounter()}))}function mGenerateCounter(){morningDivCounter.forEach(((e,t)=>{e.onclick=function(){let a=Number(allMorningP[t].innerText);counterMorning[t].innerText++,counterMorning[t].innerText>a?counterMorning[t].innerText=a:counterMorning[t].innerText==a&&e.classList.add("active")}}))}function nightData(){fetch("azkar.json").then((e=>e.json())).then((e=>{e["az-night"].forEach((e=>{let t=`\n            <div class= "az-main">\n                  <p class= 'content'>${e.content}</p>\n                  <div class="az-counter"><p>${e.count}</p> / <span>${nightCount}</span></div>\n            </div>\n    `;nightAzkar.innerHTML+=t,counterNight=nightAzkar.querySelectorAll(".az-counter span"),nightDivCounter=nightAzkar.querySelectorAll(".az-counter"),allNightP=nightAzkar.querySelectorAll(".az-counter p")})),nGenerateCounter()}))}function nGenerateCounter(){nightDivCounter.forEach(((e,t)=>{e.onclick=function(){let a=Number(allNightP[t].innerText);counterNight[t].innerText++,counterNight[t].innerText>a?counterNight[t].innerText=a:counterNight[t].innerText==a&&e.classList.add("active")}}))}function adaiaQuran(){fetch("azkar.json").then((e=>e.json())).then((e=>{e["adaia-quran"].forEach((e=>{let t=`\n          <div>\n            <p class="details">${e.content}</p>\n            <p class="a-name">﴿ ${e.reference} ﴾</p>\n          </div>\n        `;adaiaContent.innerHTML+=t}))}))}function getTsabihData(){fetch("azkar.json").then((e=>e.json())).then((e=>{e.tsabih.forEach((e=>{let t=`\n          <div class= "tsabih-main flex">\n                <p class= 'content'>${e.content}</p>\n                <div class="tsabih-counter"><p>${e.count}</p> / <span>${nightCount}</span></div>\n          </div>\n  `;tsabihContent.innerHTML+=t,counterTsabih=tsabihContent.querySelectorAll(".tsabih-counter span"),tsabihDivCounter=tsabihContent.querySelectorAll(".tsabih-counter"),allTsabihP=tsabihContent.querySelectorAll(".tsabih-counter p")})),tsGenerateCounter()}))}function tsGenerateCounter(){tsabihDivCounter.forEach(((e,t)=>{e.onclick=function(){let a=Number(allTsabihP[t].innerText);counterTsabih[t].innerText++,counterTsabih[t].innerText>a?counterTsabih[t].innerText=a:counterTsabih[t].innerText==a&&e.classList.add("active")}}))}async function getNewImg(e){fetch("https://api.unsplash.com/collections/IJE-6ZLo4cI/photos/?client_id=Y6H2yP0Yf0nYYuvZleMSOsEi2NwRHXoSdQzYb8NZbEo").then((e=>e.json())).then((t=>{randomBackground.style.backgroundImage=`url(${t[e].urls.regular})`}))}morningData(),nightData(),allAz.forEach((e=>{e.addEventListener("click",(()=>{allAz.forEach((e=>e.classList.remove("active"))),"morning"==e.dataset.az?(azkarContent.classList.add("active"),nightAzkar.classList.remove("active")):(azkarContent.classList.remove("active"),nightAzkar.classList.add("active")),e.classList.add("active")}))})),adaiaQuranBtn.addEventListener("click",(()=>{adaiaDiv.classList.add("active"),showEffect(),setTimeout((()=>{azkarBtn.classList.remove("active")}),0)})),clAdaia.addEventListener("click",(()=>{adaiaDiv.classList.remove("active"),removeEffect()})),adaiaQuran(),tsabihBtn.addEventListener("click",(()=>{tsabihDiv.classList.add("active"),setTimeout((()=>{azkarBtn.classList.remove("active")}),0),showEffect()})),clTsabih.addEventListener("click",(()=>{tsabihDiv.classList.remove("active"),removeEffect()})),getTsabihData();let message=Swal.mixin({timer:3500,timerProgressBar:!0,showConfirmButton:!1,didClose:()=>{localStorage.setItem("message-closed","true")}});message.fire({title:"تم إضافه التفسير",imageUrl:"imgs/info.png",imageWidth:400,imageHeight:200,imageAlt:"info",allowOutsideClick:!1,allowEscapeKey:!1}),localStorage.getItem("message-closed")&&message.getContainer().remove();