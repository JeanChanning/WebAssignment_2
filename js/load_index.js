function getParams(key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
};

function prevClick(){
    page = parseInt(getParams("page")) - 1
    if(isNaN(page)){
        page = 1;
    }
    if(page < 1){
        page = 1;
    }
    window.location.href="AnotherMovieIndex.html?page=" + page;
}
function nextClick(){
    page = parseInt(getParams("page")) + 1
    if(isNaN(page)){
        page = 2;
    }
    if(page > 10){
        page = 10;
    }
    window.location.href="AnotherMovieIndex.html?page=" + page;
}

let page = getParams("page")
if(page == null || page > 10 || page < 1){
    page = 1;
}
page -= 1;
for(var i = 1; i <= 20; i++){
    id = i + page * 20;
    let requestURL = 'index/' + id + '.json';

    let request = new XMLHttpRequest();
    request.open('GET',requestURL);
    request.responseType = 'text';
    request.send();

    request.onload = function(){
        let responseText = request.response;
        let text = JSON.parse(responseText);

        var link = "MovieDetails.html?id=" + text._id;
        var title = text.title;
        var pubdate = text.pubdate;
        var average = text.rating.average;
        var rating = parseFloat(average) * 6;
        var rating_people = text.rating.rating_people;
        var poster = text.poster;
        var summary = text.summary.substring(0, 128) + '……';
        cs = '';
        for(var i of text.casts){
            cs += i.name + ' / ';
        }
        var casts = cs.substring(0, cs.length - 3);

        var tableObj = document.getElementById("movieTable");
        tableObj.innerHTML +=
            '<td>' +
            '    <div style="font-size: 20px" class="row clearfix">\n' +
            '        <div class="col-md-3 column">\n' +
            '            <img style="width: 210px;height: 308px;" alt="' + title + '" src="' + poster + '" /> \n' +
            '        </div>\n' +
            '        <div class="col-md-9 column">\n' +
            '            <div class="row clearfix">\n' +
            '                <div class="col-md-9 column">\n <a href="' + link + '">' + title + '</a>' +
            '                </div>\n' +
            '                <div class="col-md-3 column">\n' +
            '                    <div id="bg">\n' +
            '                        <div id="over" style="width:' + rating + 'px"></div>\n' +
            '                    </div>' +
            '                    <span style="color: #ac2925">' + average + '</span> (' + rating_people + '人已评价)' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div style="font-size: 16px" class="row clearfix">\n' +
            '                <div class="col-md-9 column">\n' + pubdate +
            '                </div>\n' +
            '            </div>' +
            '            <div class="row clearfix">\n' +

            '            </div>\n' +
            '            <div class="row clearfix">\n' +
            '                <div class="col-md-12 column">\n' + casts +
            '                </div>\n' +
            '            </div>\n' +
            '            <hr />' +
            '            <div class="row clearfix">\n' +
            '                <div class="col-md-12 column">\n' +
            '                    <p>\n' + summary +
            '                    </p>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>' +
            '    <hr class="hr4"/>\n'
        '</td>'
    }
}
