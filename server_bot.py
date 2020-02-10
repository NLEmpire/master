import socketserver
import http.server
import ssl
import json
import requests

def getResponse(user_input):
    return user_input

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def do_post(self):
        post_data=self.rfile.read(int(self.headers['content-Length']))
        json_data=json.loads(post_data)

        chat_id=json_data['message']['from']['id']
        user_input=json_data['message']['text']

        bot_output=getResponse(user_input)

        url="https://api.telegram.org/bot1010062785:AAGk68opyFeyrle6kLX7uMggWW5XTBrbEH0/sendMessage"

        r=requests.post(url=url, params={'chat_id':chat_id,'text':bot_output})
        if r.status_code ==200:
           self.send_response(200)
           self.end_headers()
    pass
    def do_GET(self):
     self.send_response(200)
     self.end_headers()
    pass

server = socketserver.TCPServer(('0.0.0.0',8443),MyHandler)
server.serve_forever()
