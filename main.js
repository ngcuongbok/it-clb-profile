

const app = document.querySelector('#app');
//ip
async function getCloudflareJSON(){
let data = await fetch('https://1.1.1.1/cdn-cgi/trace').then(res=>res.text())
let arr = data.trim().split('\n').map(e=>e.split('='))
return Object.fromEntries(arr)
}

getCloudflareJSON().then(data => {
  app.innerHTML += `div id="ip">
  <p>ip: <span class="content">${data.ip}</span></p>
  <p>Quốc gia: <span class="content">${data.loc} <img src="https://hatscripts.github.io/circle-flags/flags/${data.loc.toLowerCase()}.svg" width="40" height="40"/></span></p>
  <p>ip: <span class="content"></span></p>
  <p>ip: <span class="content"></span></p>
  </div>`
})
