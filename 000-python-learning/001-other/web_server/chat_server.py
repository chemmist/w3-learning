import socket
import threading
import sys

class Server:
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    connections = []

    def __init__(self):
        self.sock.bind(('0.0.0.0', 10000))
        self.sock.listen(1)

    def handler(self, connection, address):
        while True:
            data = connection.recv(1024)
            
            for c in self.connections:
                c.send(bytes(data))
            
            if not data:
                print (str(address[0]) + ":" + str(address[1]) + " disconnected.")
                connection.close()
                self.connections.remove(connection)
                break

    def run(self):
        while True:
            connection, address = self.sock.accept()
            self.connections.append(connection)
            
            thread = threading.Thread(target = self.handler, args = (connection, address))
            thread.daemon = True
            thread.start()

            print (str(address[0]) + ":" + str(address[1]) + " connected.")


class Client:
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    def __init__(self, address):
        self.sock.connect((address, 10000))

        thread = threading.Thread(target = self.sendMessage)
        thread.daemon = True
        thread.start()

        while True:
            data = self.sock.recv(1024)
            if not data:
                break
            print(str(data, 'utf-8'))

    def sendMessage(self):
        while True:
            self.sock.send(bytes(input(), 'utf-8'))

if len(sys.argv) > 1:
    client = Client(sys.argv[1])
else:
    server = Server()
    server.run()