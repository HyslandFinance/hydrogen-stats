// TODO: (extremely low priority) serve favicon instead of redirect

exports.handler = async function(event) {
  return {
    statusCode: 301,
    headers: {"Location":"https://hysland.finance/favicon.ico"}
  }
}
