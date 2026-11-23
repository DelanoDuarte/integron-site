// Static server for the built site with host/scheme canonicalization.
// Serves ./dist, and 301-redirects any request on a non-canonical host
// (e.g. integronhub.com, www.*) or plain http to the canonical origin.
// Railway terminates TLS and forwards the original scheme in x-forwarded-proto.
import http from 'node:http'
import handler from 'serve-handler'

const CANONICAL_HOST = 'integronhub.com.br'
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`
const PORT = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  const host = (req.headers.host ?? '').replace(/:\d+$/, '').toLowerCase()
  const proto = (req.headers['x-forwarded-proto'] ?? 'http').split(',')[0].trim()

  if (host && (host !== CANONICAL_HOST || proto !== 'https')) {
    res.writeHead(301, { Location: `${CANONICAL_ORIGIN}${req.url}` })
    res.end()
    return
  }

  return handler(req, res, {
    public: 'dist',
    cleanUrls: true,
    trailingSlash: false,
  })
})

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Serving dist on :${PORT} (canonical ${CANONICAL_ORIGIN})`)
})
