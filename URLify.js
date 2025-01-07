function urlify(text) {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function(url) {
    return '<a target="_blank" href="https://battlecatshacksgiveaways.blogspot.com/p/bchg-terminal.html#' + btoa(url) + '">' + url.substring(0, 40) + '...</a>';
  })
  // or alternatively
  // return text.replace(urlRegex, '<a href="$1">$1</a>')
}
