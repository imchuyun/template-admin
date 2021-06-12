function change_url(url) {
    if (url !== "") {
        document.getElementById("myframe").src = url
        document.getElementById('myiframe').location.reload()
    }
}
