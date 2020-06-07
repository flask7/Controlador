from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/rest/v1/protocols/nlight/settings/features/relayState', methods = ['GET', 'POST'])
def respuesta():
	valor = True
	if request.method == 'POST':
		entrada = request.get_json()
		valor = entrada
		return jsonify(createBacnetObject = valor)
	else:
		return jsonify(createBacnetObject = valor)
		
@app.route('/', methods = ['GET'])
def home():
	return jsonify(respuesta = 'Funciona')

@app.route('/api/rest/v1/protocols/nlight/devices', methods = ['GET'])
def dispositivos():
	json = [{
    	"href": "/api/rest/v1/protocols/nlight/devices/1",
    	"name": "1"
  		},
  		{"href": "/api/rest/v1/protocols/nlight/devices/3",
    	"name": "3"}]
	return jsonify(json)

if __name__ == '__main__':
	app.run(debug = True)
