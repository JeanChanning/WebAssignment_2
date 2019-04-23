function getParams(key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
};

let id = getParams("id")
let requestURL = 'detail/' + id + '.json';
let request = new XMLHttpRequest();
request.open('GET',requestURL);
request.responseType = 'text';
request.send();

request.onload = function(){
    let responseText = request.response;
    let text = JSON.parse(responseText);

    title.innerText = text.title;

    genres.innerText = text.genres;

    ds = ''
    for(var i of text.directors){
        ds += i.name + ' / '
    }
    directors.innerText = ds.substring(0, ds.length - 3)

    cs = ''
    for(var i of text.casts){
        cs += i.name + ' / ';
    }
    casts.innerText = cs.substring(0, cs.length - 3);

    duration.innerText = text.duration + "分钟";

    summary.innerText = text.summary;

    countries.innerText = text.countries;

    poster.setAttribute("src", text.poster);
    poster.setAttribute("alt", text.title);

    pubdate.innerText = text.pubdate;
}
