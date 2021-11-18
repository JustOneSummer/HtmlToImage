const http = require('http')
const nodeHtmlToImage = require('node-html-to-image')
const url = require('url');
const fs = require("fs")

http.createServer(function (request, response) {
    var params = url.parse(request.url, true).query;
    var htmlAddress = params.htmlAddress;
    //加载html内容
    var htmlData = fs.readFileSync(htmlAddress, "utf-8");
    var imageAddress = htmlAddress.substring(0, htmlAddress.lastIndexOf('.html')) + '.png';
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    nodeHtmlToImage({
        output: imageAddress,
        html: htmlData
    })
    response.end(imageAddress);
}).listen(8888);
