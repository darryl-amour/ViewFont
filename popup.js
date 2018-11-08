let xhttp = new XMLHttpRequest()
  
xhttp.onreadystatechange = fontSelection
xhttp.open('GET', 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyA7Yo_g1VIA1pO-RVyGFflscFgzI78yhD0', true);
xhttp.send();

function fontSelection (){
  if (xhttp.readyState == 4 && xhttp.status == 200){

    var response = JSON.parse(this.responseText);
    let ul = document.createElement('ul');
    ul.setAttribute('id', 'fontList')
    document.body.appendChild(ul);

    response.items.forEach(el => {
      let li = document.createElement('li');
      li.setAttribute('class', 'fontLi')
      // let liText = document.createTextNode(el['family'])
      // li.appendChild(liText);
      document.getElementById('fontList').appendChild(li);

      let regex = el['family'].replace(/\s/g, "+")
      let a = document.createElement('a');
      a.setAttribute('href', 'https://fonts.google.com/specimen/' + regex);
      a.setAttribute('class', 'aTag')
      a.innerHTML = el['family']
      li.appendChild(a);
    })
  }
}


window.addEventListener('click', function (e){
  if (e.target.href !== undefined){
    chrome.tabs.create({url: e.target.href})
  }
})

// function injectTheScript() {
//   chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
//   var activeTab = tabs[0];
//   chrome.tabs.sendMessage(activeTab.id, {file: "contentscript.js"});
//  });
// }

// document.getElementsByClassName('aTag').addEventListener('click', injectTheScript)