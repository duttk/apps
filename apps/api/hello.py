import web

urls = (
    '/api/hello', 'hello'
)
app = web.application(urls, globals())
app.__call__ = app.run

class hello:
    def GET(self):
        web.header('Access-Control-Allow-Origin', '*')
        return {
            'data': 'Hello, World!'
        }

# if __name__ == "__main__":
#     app.run()
