(function () {
    'use strict';

    var elements = document.getElementsByTagName('*'),
        BLACKLISTED = [
            'donald', 
            'trump',
            'jtrump',
            'john', 
            'drumpf', 
            'donaldjtrump', 
            ];

    function replaceImage(element) {
        //thumbnail imgs;
        var replacementImgs =[
            'https://i.imgur.com/fhNroF8.jpg',
            'https://i.imgur.com/ZGJHIn2.jpg',
            'https://i.imgur.com/t3vsolX.jpg'
            ];

            if (element.getAttribute('src') === null) {
                console.log(element);
            }
        // try {
        //     if (element.getAttribute('alt').match(/(?:^|\W)trump(?:$|\W)/gi) !== null || element.src.match(/(?:|\W)trump(?:|\W)/gi) !== null){
        //         var parent = element.parentNode,
        //             wrapper = document.createElement('div'), 
        //             newImg = document.createElement('img'),
        //             newSrc = replacementImgs[Math.floor(Math.random() * (2 - 0 + 1)) + 0];

        //         newImg.className = "puppyImg";
        //         newImg.setAttribute('src', newSrc);

        //         wrapper.className = "puppyContainer";
        //         parent.replaceChild(wrapper, element);
        //         wrapper.appendChild(element);
        //         wrapper.insertBefore(newImg, wrapper.firstChild);
        //     }
        // } catch (err) {
        //     console.log(err);
        // }
    }

    function replaceText(element) {
        for (var j = 0; j < element.childNodes.length; j++) {
                var node = element.childNodes[j];
            if (node.nodeType === 3) {
                var text = node.nodeValue,
                    newText = text.replace(new RegExp('(?:)'+(BLACKLISTED).join("|")+'(?:)', 'ig'), ' puppies ' );
                    
                element.replaceChild(document.createTextNode(newText), node);
            }
        }
    }

    //find and replace
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.tagName === 'IMG' ? replaceImage(element) : replaceText(element);
    }
})();
