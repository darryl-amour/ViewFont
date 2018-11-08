// let xhttp = new XMLHttpRequest()
  
// xhttp.onreadystatechange = fontSelection
// xhttp.open('GET', 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyA7Yo_g1VIA1pO-RVyGFflscFgzI78yhD0', true);
// xhttp.send();

// function fontSelection (){
//   if (xhttp.readyState == 4 && xhttp.status == 200){
//     var response = JSON.parse(this.responseText);
//     for (items in response) {
//       let font = response['items']
//       let fontFamily = font.map(el => {
//         return ([el['family'], el['files']['regular']]);
//       })
//       console.log(fontFamily)
//     }
//     // console.log(this.responseText);
//   }
// }

// document.getElementById('selectFont').addEventListener('click', fontSelection);

// document.addEventListener('DOMContentLoaded', )

// // const popupController = function (){
// //   this.button = document.getElementById('selectFont')
// //   this.addListener();
// // }

// popupController.prototype.addListener = function (){
//   this.button.addEventListener('click', function (){
//     let fonts = document.createElement('div');
//     fonts.setAttribute('class', 'fontList');
    
//     let xhttp = new XMLHttpRequest()
  
//     xhttp.onreadystatechange = fontSelection
//     xhttp.open('GET', 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyA7Yo_g1VIA1pO-RVyGFflscFgzI78yhD0', true);
//     xhttp.send();

//   });
// }

// function fontSelection (){
//   if (xhttp.readyState == 4 && xhttp.status == 200){
//     var response = JSON.parse(this.responseText);
//     for (items in response) {
//       let font = response['items']
//       let fontFamily = font.map(el => {
//         return ([el['family'], el['files']['regular']]);
//       })
//       console.log(fontFamily)
//     }
//     // console.log(this.responseText);
//   }
// }

// document.addEventListener('DOMContentLoaded', function() {
//   window.PC = new popupController();
//   // let xhttp = new XMLHttpRequest()
  
//   // xhttp.onreadystatechange = fontSelection
//   // xhttp.open('GET', 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyA7Yo_g1VIA1pO-RVyGFflscFgzI78yhD0', true);
//   // xhttp.send();

//   // function fontSelection (){
//   //   if (xhttp.readyState == 4 && xhttp.status == 200){
//   //     var response = JSON.parse(this.responseText);
//   //     for (items in response) {
//   //       let font = response['items']
//   //       let fontFamily = font.map(el => {
//   //         return ([el['family'], el['files']['regular']]);
//   //       })
//   //       console.log(fontFamily)
//   //     }
//   //     // console.log(this.responseText);
//   //   }
//   // }
// })

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
    document.getElementById('fontfamily').textContent = request.style;
    document.getElementById('fontsize').textContent = request.size;
    document.getElementById('fontweight').textContent = request.size;
    //console.log(`${JSON.stringify(request)}`);
    //console.log(`${sender}`);
    console.log(`${request.style}`);
    //  if (request.greeting == "hello")
        //sendResponse({farewell: "goodbye"});
});
