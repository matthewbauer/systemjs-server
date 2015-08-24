module.exports = function(options) {
  return function(request, response) {
    console.log(request.path)
  }
}
