let headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6")

Array.from(headers).forEach(function(element) {
    element.addEventListener('click', onClick, false)
})

function onClick(element) {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
        return navigator.clipboard.writeText(element.innerHTML);
    return Promise.reject('The Clipboard API is not available.');
};