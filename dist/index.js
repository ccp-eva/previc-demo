(()=>{"use strict";let e,t=!1,n=!1;document.getElementById("se").value;const d=document.getElementById("button-center-item");document.querySelector(".mdc-text-field__input").addEventListener("keyup",(e=>{e.preventDefault(),document.querySelector(".mdc-text-field-character-counter").innerHTML=`${document.querySelector(".mdc-text-field__input").value.length} / 10`,t=document.querySelector(".mdc-text-field__input").value.length>0,d.disabled=!(t&&n)}),{capture:!1}),document.getElementById("radio-previcversion-adaptive").onclick=()=>{e="a",n=!0,d.disabled=!(t&&n),document.getElementById("se-selection").setAttribute("style","display: block;")},document.getElementById("radio-previcversion-original").onclick=()=>{e="o",n=!0,d.disabled=!(t&&n),document.getElementById("se-selection").setAttribute("style","display: none;")},d.addEventListener("click",(async t=>{t.preventDefault();const n=document.querySelector(".mdc-text-field__input").value,d=parseFloat(document.getElementById("se").value);d<.1||d>.9?document.getElementById("illegal-se").innerHTML="Bitte wählen Sie einen Standardfehler zwischen 0.1 und 0.9.":window.location.href=`./instructionsA.html?ID=${n}&v=${e}&se=${d}`}),{capture:!1})})();
//# sourceMappingURL=index.js.map