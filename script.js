function getUrl(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()

    return request.responseText
}

function main() {
    data = getUrl("https://api.chess.com/pub/player/ravimughal/stats")
    estatistic = JSON.parse(data)
    best_rating = estatistic.chess_rapid.best.rating
    last = estatistic.chess_rapid.last.rating


    return [best_rating, last]
}

var [best_rating, last] = main()

var c_best = document.querySelector(".chess_best")
// c_best.innerHTML = "My best score in chess.com is " + best_rating + "."

var textnode = document.createTextNode("My best score in chess.com is " + best_rating + ". ")
c_best.appendChild(textnode)
textnode = document.createTextNode("Actually my score is " + last + ". ")
c_best.appendChild(textnode)