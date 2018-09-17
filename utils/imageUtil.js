var imageUtil = {
    getFirstImage:function (source) {
        var xmlDoc;
        try{
            //Internet Explorer
            xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async="false";
            xmlDoc.loadXML(text);
        } catch(e) {
            try {
                //Firefox, Mozilla, Opera, etc.
                var parser=new DOMParser();
                xmlDoc=parser.parseFromString(text,"text/xml");
            }
            catch(e) {console.log(e.message)}
        }
        var elements = xmlDoc.getElementsByTagName("img");
        if(elements) {
            var src = elements[0].getAttribute("src");
            return src;
        } else {
            return "/images/default.jpg";
        }
    }
}

module.exports = {
    image:imageUtil
}