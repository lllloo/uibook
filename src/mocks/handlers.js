import { http, HttpResponse } from 'msw'

export const handlers = [
  // http.get('/pets', petsResolver),
  // http.post('https://api.github.com/repo', repoResolver),
  http.post('/api/login', async ({ request }) => {
    const json = await request.json()
    return HttpResponse.json({
      name: json.account,
      token: 'token'
    })
  })
]
