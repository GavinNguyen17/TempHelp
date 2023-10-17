import os
from flask import Flask, jsonify
from flask_cors import cross_origin,CORS
import logging
app=Flask(__name__,static_folder='.build',static_url_path='/')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
#Sign Up Backend
@app.route('/Sign-Up/<User>/<Pass>')
@cross_origin()
def Hi(User,Pass):
    print(User)
    successM= {"Name": User, "Code": 200}
    return jsonify(successM), 200
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, port=5000)