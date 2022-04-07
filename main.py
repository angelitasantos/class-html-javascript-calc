from flask import Flask, redirect, render_template

app = Flask(__name__)

@app.errorhandler(404)
def not_found(e):
    return redirect('/')

@app.route('/')
def home():
    return render_template('calcsimples.html')

if __name__ == '__main__':
    app.run(debug = True)