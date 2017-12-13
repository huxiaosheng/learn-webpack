import _ from 'lodash';
import printMe from './print.js';
import './style.css';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack', '']);

    btn.innerHTML = 'Click me';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;

}

// document.body.appendChild(component());
let element = component();
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Acccepting the updated printMe module!');
        // printMe();
        document.body.removeChild(element);
        element.component();
        document.body.appendChild(element);
    })
}