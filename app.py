from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    # print(dir(app))
    print(app.static_folder)
    print(app.template_folder)
    return render_template('index.html')
