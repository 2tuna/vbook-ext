function execute(url) {
    const idBook = url.match(/\d+(?=\D*$)/).pop();
    const doc = Http.get('https://www.dingdian666.com/xiaoshuo/'+idBook+'/').html();
    var el = doc.select('.border_chapter ul li a')
    const data = [];
    for (var i in el) {
        var e = el[i];
        data.push({
            name: e.text(),
            url: e.attr('href'),
            host: "https://www.dingdian666.com"
        })
    }
    return Response.success(data);
}