import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import Data from './data.json'


function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    //节点添加样式
    element.classList.add('hello');

    //添加images节点
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);


    console.log(Data);
    return element;
}

document.body.appendChild(component());