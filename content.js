(function () {

    "use strict";

    var elements = document.getElementsByTagName('*'),
        BLACKLISTED = [
                        'donald', 
                        'trump',
                        'jtrump',
                        'john', 
                        'drumpf', 
                        'donaldjtrump' 
                      ],
        puppyImgs = [
                        'https://i.imgur.com/fhNroF8.jpg',
                        'https://i.imgur.com/ZGJHIn2.jpg',
                        'https://i.imgur.com/t3vsolX.jpg'
                    ];

   function newSrc () {
        return puppyImgs[randomPick()];
    }

    function randomPick () {
        return Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    }

//Images
    function isBannedImage (element) {
        var searchTerms = new RegExp('(?:)' + BLACKLISTED.join("|") + '(?:)', 'ig'),
            alt = element.getAttribute('alt'),
            src = element.src;

        if (alt && alt.match(searchTerms)) {
            return replaceImage(element);
        }

        if (src.match(searchTerms)) {
            return replaceImage(element);
        }
    }

    function replaceImage (element) {
        var parent = element.parentNode,
            wrapper = document.createElement('div'), 
            newImg = document.createElement('img');
        //create new puppy with new url
        newImg.className = "puppyImg";
        newImg.setAttribute('src', newSrc());
        wrapper.className = "puppyContainer";
        //insert puppy img into DOM
        parent.replaceChild(wrapper, element);
        wrapper.insertBefore(newImg, wrapper.firstChild);
    }

//Text
    function replaceText (node) {
        var text = node.nodeValue,
            newText = text.replace(new RegExp('(?:)'+BLACKLISTED.join("|")+'(?:)', 'ig'), ' puppies ' );
            
        return element.replaceChild(document.createTextNode(newText), node);
    }

    function isBannedText (element) {
        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];
            
            if (node.nodeType === 3) {
                return replaceText(node);
            }
        }
    }

    //find and replace
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        
        element.tagName === 'IMG' ? replaceImage(element) : replaceText(element);
    }
})();
