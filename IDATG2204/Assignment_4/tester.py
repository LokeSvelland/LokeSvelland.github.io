from flask import Flask
from flask_restful import Resource, Api

app = ("heihei")
api = Api(app)

class Test(Resource):

    def get(self):
        return "Hello World!"
    

api.add_resource(Test, '/')

if __name__ == '__main__':
    app.run()

