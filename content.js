(function () {

    "use strict";

    var elements = document.getElementsByTagName('*'),
        BLACKLISTED = [
                        '  Denial  ', 
                        '  Denial  ',
                      ],
        denialImgs = [
                        'https://usercontent1.hubstatic.com/3539680.jpg',
                    ],
        searchTerms = new RegExp('(?:)' + BLACKLISTED.join("|") + '(?:)', 'ig');

   function newSrc () {
        return denialImgs[randomPick()];
    }

    function randomPick () {
        return Math.floor(Math.random() * denialImgs.length);
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
        newImg.className = "denialImg";
        newImg.setAttribute('src', newSrc());
        wrapper.className = "denialContainer";
        //insert puppy img into DOM
        parent.replaceChild(wrapper, element);
        wrapper.insertBefore(newImg, wrapper.firstChild);
    }

//Text
    function replaceText (node) {
        var text = node.nodeValue,
            newText = text.replace(searchTerms, ' Denial ' );
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
