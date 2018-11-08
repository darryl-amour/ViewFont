/*
 *
 */
function ViewFont() {
  this.currentEvent;
}

/*
 *
 */
ViewFont.prototype.findInPage = function findInPage() {

};

/*
 *
*/
ViewFont.prototype.copyToClipBoard = function copyToClipBoard() {
  //getElementById -> this.currentEvent.target
  let currentFont = this.currentEvent.target;
  currentFont.select();
  document.execCommand('copy');
};

/*
 *
 */
ViewFont.prototype.popUpWindow = function popUpWindow(event) {
  console.log('Mouseover Triggered!!');
  
  let weight,
      size,
      style;
  // get element's style
  const elementOnMouseOver = document.elementFromPoint(event.clientX, event.clientY);

  // polyfill getComputedStyle
  // borrowed from https://gist.github.com/macbookandrew/f33dbbc0aa582d0515919dc5fb95c00a
  if (typeof getComputedStyle == "undefined") {
    getComputedStyle = function (elem) {
        return elem.currentStyle;
    }
  }

  if(event.target.style) {
    style = elementOnMouseOver.style.fontFamily || getComputedStyle(elementOnMouseOver)['font-family'];
    weight = elementOnMouseOver.style.weight || getComputedStyle(elementOnMouseOver)['fontWeight'];
    size = elementOnMouseOver.style.size || getComputedStyle(elementOnMouseOver)['fontSize'];

    //console.log(`style-weight-size: ${style}-${weight}-${size}`);
  }
};

/*
 *
 */
ViewFont.prototype.identifyElements = function identifyElements() {

};

/*
 *
 */
ViewFont.prototype.displayFont = function displayFont(event) {
  console.log('Select Event Triggered!!');
  console.log(`[${window.getSelection().toString()}]`);
  console.log(event.target);
  console.log(JSON.stringify(event));
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

// Instantiate ViewFont Engine
const fontViewerEngine = new ViewFont();

document.body.addEventListener('mousemove', function (event) {
  // Display font info for text at mouse pointer
  fontViewerEngine.popUpWindow(event);
},true);

document.body.addEventListener('mouseup', function (event) {
    // if text is empty we will ignore as just a mouse click.
    if(window.getSelection && window.getSelection().toString().trim() !== '') {
        fontViewerEngine.displayFont(event);
    }
});

// document.getElementById('copyButton').addEventListener('click', ViewFont.copyToClipBoard)
