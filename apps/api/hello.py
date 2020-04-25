import responder

api = responder.API()

@api.route('/api/hello')
async def say_hello(req, resp):
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.text = f'Hello, world!'

if __name__ == '__main__':
    api.run()
