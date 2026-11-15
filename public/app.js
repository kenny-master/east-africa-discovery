const data=[
["Kenya","Nairobi","Savannah wildlife, Swahili coast towns, highland landscapes and Maasai beadwork.","photo-1516026672322-bc52d61a55d5"],
["Tanzania","Dodoma","Serengeti, Kilimanjaro, Zanzibar, taarab music and spice-island heritage.","photo-1516426122078-c23e76319801"],
["Uganda","Kampala","Mountain gorillas, the Nile, Buganda heritage, barkcloth and lively music.","photo-1547471080-7cc2caa01a7e"],
["Rwanda","Kigali","Volcanic scenery, Imigongo art, Intore dance, basketry and coffee culture.","photo-1516026672322-bc52d61a55d5"],
["Burundi","Gitega","Lake Tanganyika, royal drumming, Kirundi storytelling and coffee heritage.","photo-1500530855697-b586d89ba3ee"],
["South Sudan","Juba","White Nile wetlands, oral histories, beadwork and distinct community traditions.","photo-1472396961693-142e6e269027"],
["Somalia","Mogadishu","Indian Ocean maritime heritage, poetry, textiles, architecture and cuisine.","photo-1500375592092-40eb2168fd21"],
["Democratic Republic of the Congo","Kinshasa","Congo Basin rainforest, Congolese rumba, fashion, art and river culture.","photo-1448375240586-882707db888b"]
];
const grid=document.querySelector("#grid"),select=document.querySelector("#country");
data.forEach(([name,capital,desc,img])=>{const card=document.createElement("article");card.className="card";card.innerHTML=`<img src="https://images.unsplash.com/${img}?auto=format&fit=crop&w=800&q=80" alt="${name} landscape"><div><h3>${name}</h3><small>Capital · ${capital}</small><p>${desc}</p><a href="#plan" data-name="${name}">Plan a journey ↗</a></div>`;grid.append(card);const o=document.createElement("option");o.value=name;o.textContent=name;select.append(o)});
grid.addEventListener("click",e=>{const a=e.target.closest("[data-name]");if(a)select.value=a.dataset.name});
document.querySelector("#menu").onclick=()=>document.querySelector("#nav").classList.toggle("open");
document.querySelectorAll("nav a").forEach(a=>a.onclick=()=>document.querySelector("#nav").classList.remove("open"));
document.querySelector("#year").textContent=new Date().getFullYear();
document.querySelector("#form").addEventListener("submit",async e=>{e.preventDefault();const f=e.currentTarget,s=document.querySelector("#status"),d=Object.fromEntries(new FormData(f));d.groupSize=d.groupSize?Number(d.groupSize):null;s.textContent="Sending…";try{const r=await fetch("/api/inquiries",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)}),j=await r.json();if(!r.ok)throw Error(j.error||"Unable to send");s.textContent=j.message;f.reset()}catch(err){s.textContent=err.message}});
