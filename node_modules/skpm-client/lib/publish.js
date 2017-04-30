const request = require('./utils')

const REGISTRY_URL = 'https://0yns6lyw82.execute-api.eu-west-1.amazonaws.com/dev/registry/'

module.exports = function(githubToken, data, options) {
  options = options || {}
  if (!githubToken) {
    return Promise.reject(new Error('Missing github token'))
  }
  if (!data) {
    return Promise.reject(new Error('Missing data'))
  }
  if (!data.name) {
    return Promise.reject(new Error('Missing plugin name'))
  }
  data.githubToken = githubToken
  return request({
    method: 'PUT',
    url: (options.registryURL || REGISTRY_URL) + encodeURIComponent(data.name),
    json: data
  })
}
