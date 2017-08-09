var ageEle = document.forms[0].elements['age'],
    relEle = document.forms[0].elements['rel'],
    smokerEle = document.forms[0].elements['smoker'];

//add event listener
ageEle.addEventListener('input', ageChange);
var ageErrorMsg = new errorMessage(ageEle.parentNode);
addCSSToDom();


function ageChange() {
    if (isNaN(ageEle.value)) {
        ageErrorMsg.display('Age field should be numeric')
    } else {
        ageErrorMsg.hide();
        if (ageEle.value !== '') {
            ageEle.value = Math.round(ageEle.value);
        }
    }
}

function errorMessage(parent) {
    this.error = document.createElement('div');
    this.error.className = 'error';
    this.displayed = false;

    this.display = function (html) {
        this.error.innerHTML = html;
        if (!this.displayed) {
            parent.appendChild(this.error);
            this.displayed = true;
        }
    }
    this.hide = function () {
        if (this.displayed) {
            parent.removeChild(this.error);
            this.displayed = false;
        }
    }
}
function displayError(html) {
    error.innerHTML = html
}

function addCSSToDom() {
    var css = '.error {' +
        'padding: 5px;' +
        'color: white;' +
        'background-color: #900;' +
        'border-radius: 0 5px 5px 0;' +
        '-moz-box-sizing: border-box;' +
        'box-sizing: border-box;' +
        'display: inline;'
    '}' +

        '.error.active {' +
        'padding: 0.3em;' +
        '}',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
}
