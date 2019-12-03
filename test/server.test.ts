import deploy from '../src/server'

describe('GET /hello', () => {
  it('should return 200', async () => {
    const options = {
      url: '/hello',
      method: 'GET',
    }
    const server = await deploy()
    const response = await server.inject(options)

    expect(response.result).toEqual('show me off')
    expect(response.statusCode).toBe(200)
  })
})
