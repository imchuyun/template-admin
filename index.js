function change_url(url) {
    if (url !== "") {
        document.getElementById("iframe").src = url
        document.frames('iframe').location.reload()
    }
}