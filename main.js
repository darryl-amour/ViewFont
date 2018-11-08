/*
 *
 */
function ViewFont() {}

/*
 *
 */
ViewFont.prototype.findInPage = function findInPage() {

};

/*
 *
*/
ViewFont.prototype.copyToClipBoard = function copyToClipBoard() {

};

/*
 *
 */
ViewFont.prototype.popUpWindow = function popUpWindow() {

};

/*
 *
 */
ViewFont.prototype.identifyElements = function identifyElements() {

};

/*
 *
 */
ViewFont.prototype.displayFont = function displayFont() {

};

/*
 *
 */
ViewFont.prototype.enable = function enable() {

};

/*
 *
 */
ViewFont.prototype.disable = function disable() {

};

// Instantiate ViewFont
const fontViewerEngine = new ViewFont();
/*
 *
 */
document.body.addEventListener('load',function (event) {
  console.log('Document Loaded!');
});

document.body.addEventListener('mouseover', function (event) {
  console.log('Mouseover Triggered!!');
  console.log(event.target);
  console.log(JSON.stringify(event));
});

document.body.addEventListener('mouseup', function (event) {
  
    if(window.getSelection && window.getSelection().toString() !== '') {
        console.log('Select Event Triggered!!');
        console.log(`[${window.getSelection().toString()}]`);
        console.log(event.target);
        console.log(JSON.stringify(event));
    }
});
