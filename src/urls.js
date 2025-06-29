const github = (repo, path, branch = 'master') =>
  `https://raw.githubusercontent.com/traPtitech/${repo}/${branch}/${path}`

export default [
  {
    name: 'traQ v3 API',
    url: github('traQ', 'docs/v3-api.yaml')
  },
  {
    name: 'traQ v2 API',
    url: github('traQ', 'docs/swagger.yaml')
  },
  {
    name: 'booQ',
    url: github('booQ', 'docs/swagger.yml')
  },
  {
    name: 'booQ (v3)',
    url: github('booQ-v3', 'docs/openapi.yml')
  },
  {
    name: 'anke-to (v1)',
    url: github('anke-to', 'docs/swagger/swagger.yaml', 'v1')
  },
  {
    name: 'anke-to (v3)',
    url: github('anke-to', 'docs/swagger/swagger.yaml', 'main')
  },
  {
    name: 'knoQ',
    url: github('knoQ', 'docs/swagger.yaml')
  },
  {
    name: 'Jomon v2 API',
    url: github('Jomon', 'docs/swagger.yaml', 'v2')
  },
  {
    name: 'Jomon v1 API',
    url: github('Jomon', 'docs/swagger.yaml')
  },
  {
    name: 'traPortfolio',
    url: github('traPortfolio', 'docs/swagger/traPortfolio.v1.yaml', 'main')
  },
  {
    name: 'traP Collection v1 API',
    url: github('trap-collection-server', 'docs/openapi/v1.yaml', 'main')
  },
  {
    name: 'traP Collection v2 API',
    url: github('trap-collection-server', 'docs/openapi/v2.yaml', 'main')
  },
  {
    name: 'NeoShowcase',
    url: github('NeoShowcase', 'api/http/swagger.yaml', 'main')
  },
  {
    name: 'Emoine',
    url: github('Emoine', 'docs/openapi.yml')
  },
  {
    name: 'Emoine_R',
    url: github('Emoine_R', 'docs/openapi.yml')
  },
  {
    name: 'rucQ',
    url: github('rucQ', 'openapi.yaml', 'main')
  }
]
