var _request = require('request')

function getErrorFromBody (body, opts) {
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch (e) {}
  }
  // hide token from logs
	if (opts.json && opts.json.githubToken) {
		opts.json.githubToken = '**********'
	}
  // log the request options to help debugging
  body.request = opts
  return new Error(JSON.stringify(body, null, '  '))
}

module.exports = function request (opts) {
  return new Promise(function (resolve, reject) {
    _request(opts, function (err, response, body) {
      if (err) {
        return reject(err)
      }
      var is2xx = !err && /^2/.test('' + response.statusCode)
      if (!is2xx) {
        return reject(getErrorFromBody(body, opts))
      }
			if (typeof body === 'string') {
				try {
					body = JSON.parse(body)
				} catch (e) {}
			}
			if (!body.success) {
				return reject(getErrorFromBody(body, opts))
			}

      resolve(body)
    })
  })
}
