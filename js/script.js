

const APIKEY = "iuRbLVcACr4hjLjYONnzLd50eLeqNSucVBhxrcfi";



$.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=${APIKEY}`
}).then((data) => {
    const $img = $('<img id="apod">')
    $img.attr("src", data.url)
    $img.attr("alt", data.title)
    $img.appendTo(".image-container")

    $('#title').text(data.title)
    $('#explanation').text(data.explanation)
    $('#copyright').text(data.copyright)
    $('#date').text(data.date)
}
).catch((error) => {
    console.log(error)
})