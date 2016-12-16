(function () {

    "use strict";

    var elements = document.getElementsByTagName('*'),
        BLACKLISTED = [
                        'aleppo', 
                        'alepo',
                      ],
        puppyImgs = [
                        'https://i.imgur.com/fhNroF8.jpg',
                        'https://i.imgur.com/ZGJHIn2.jpg',
                        'https://i.imgur.com/t3vsolX.jpg'
                    ],
        searchTerms = new RegExp('(?:)' + BLACKLISTED.join("|") + '(?:)', 'ig');

   function newSrc () {
        return puppyImgs[randomPick()];
    }

    function randomPick () {
        return Math.floor(Math.random() * puppyImgs.length);
    }

//Images
    function checkImage (element) {
            var alt = element.getAttribute('alt'),
                src = element.src;

        if (alt && alt.match(searchTerms) || src.match(searchTerms)) {
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
            newText = text.replace(searchTerms, ' puppies ' );
        //FIXME: regex seems to skip first-letter capitalized matches
        return element.replaceChild(document.createTextNode(newText), node);
    }

    function checkText (element) {
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
        
        element.tagName === 'IMG' ? checkImage(element) : checkText(element);
    }
})();
