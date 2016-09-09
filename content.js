var elements = document.getElementsByTagName('*');

var BLACKLISTED = ['donald', 'trump', 'drumpf', 'donald j. trump', 'donaldjtrump' 'donald john trump', 'racism', 'racist', 'sexist', 'sexism', 'military', 'businessman'];

    var imgs = document.getElementsByTagName('img');
    ///thumbnail imgs;
    var replacementImgs =[
        'https://i.imgur.com/fhNroF8.jpg',
        'https://i.imgur.com/ZGJHIn2.jpg',
        'https://i.imgur.com/t3vsolX.jpg'
        ];

        //Full size imgs
        // 'https://imgur.com/0mOlnU9',
        // 'https://imgur.com/tMwO5Un',
        // 'https://imgur.com/yTxQZ23'

    for(var i = 0; i < imgs.length; i++) {
        if (imgs[i].getAttribute('alt').match(/(?:^|\W)trump(?:$|\W)/gi) !== null || imgs[i].src.match(/(?:|\W)trump(?:|\W)/gi) !== null) {
            
            var parent = imgs[i].parentNode,
                wrapper = document.createElement('div'), 
                newImg = document.createElement('img'),
                newSrc = replacementImgs[Math.floor(Math.random() * (2 - 0 + 1)) + 0];

            newImg.className = "puppyImg";
            newImg.setAttribute('width', 'auto');
            newImg.setAttribute('height', 'auto');
            newImg.setAttribute('src', newSrc);
            newImg.style.backgroundColor="red";

            wrapper.className = "puppyContainer";
            parent.replaceChild(wrapper, imgs[i]);
            wrapper.appendChild(imgs[i]);
            wrapper.insertBefore(newImg, wrapper.firstChild);
        }
    }

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/(?:^|\W)trump(?:$|\W)/gi, ' puppies ' );
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}