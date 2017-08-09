var form = document.forms[0],
    ageEle = form.elements['age'],
    relEle = form.elements['rel'],
    smokerEle = form.elements['smoker'],
    errorMsgMap = {
        age: new errorMessage(ageEle.parentNode),
        rel: new errorMessage(relEle.parentNode)
    },
    household = {};

//add event listener
addEvent(ageEle, 'input', numericCheck);
addEvent(relEle, 'change', emptyCheck);
addEvent(form, 'add', test);
addEvent(form, 'submit', test);

function addEvent(element, evnt, funct) {
    if (element.attachEvent)
        return element.attachEvent('on' + evnt, funct);
    else
        return element.addEventListener(evnt, funct, false);
}


function test() {
    if (e.preventDefault) e.preventDefault();
    console.log('test');
    return false;
}

function submit() {
    console.log('test');
}

addCSSToDom();
// requiredCheck(relEle);

function numericCheck() {
    if (isNaN(this.value)) {
        errorMsgMap[this.name].display('This field should be numeric');
    } else {
        errorMsgMap[this.name].hide();
        if (this.value !== '') {
            this.value = Math.round(ageEle.value);
        }
    }
}

function emptyCheck() {
    if (this.value && this.value.length > 0) {
        errorMsgMap[this.name].hide();
    }
}

function requiredCheck(ele) {
    if (ele.value && ele.value.length > 0) {
        errorMsgMap[ele.name].hide();
        return true;
    }
    errorMsgMap[ele.name].display('This field is required');
    return false;
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
