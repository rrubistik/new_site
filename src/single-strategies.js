"use strict";[].slice.call(document.querySelectorAll(".single-strategy-section")).forEach((function(){function e(){const e=[].slice.call(document.querySelectorAll(".disqus-container"));for(let n=0,i=e.length;n<i;n++){const i=e[n].getBoundingClientRect(),s=i.top>0&&i.top<=window.innerHeight,o=i.bottom>0&&i.bottom<=window.innerHeight;if(s||o){t(e[n]);break}}}function t(e){const t=e.closest(".single-strategy-section");if(!(t instanceof HTMLElement))return;const n=e.dataset.disqusShortname,i=t.dataset.postUrl,s=t.dataset.postTitle;let o=e.querySelector("#disqus_thread");if(!(o instanceof HTMLElement)){if((o=document.getElementById("disqus_thread"))instanceof HTMLElement){const e=o.closest(".disqus-container");e instanceof HTMLElement&&e.classList.remove("active"),window.DISQUS.reset({reload:!0,config:function(){this.page.identifier=n,this.page.url=i,this.page.identifier=i,this.page.title=s}})}else{(o=document.createElement("div")).setAttribute("id","disqus_thread");const e=document.createElement("script");e.src=`https://${n}.disqus.com/embed.js`,e.setAttribute("data-timestamp",(new Date).toString()),(document.head||document.body).appendChild(e)}e.appendChild(o),e.classList.add("active")}}window.addEventListener("scroll",e,{passive:!0}),e()}));
//# sourceMappingURL=single-strategies.js.map
