from flask import (
    Flask,
    render_template,
    url_for,
    redirect,
    request,
)

app = Flask(__name__)
app.secret_key = "secret123123abcdabcd"


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/skills")
def skills():
    return render_template("skills.html")


@app.route("/blog")
def blog():
    return render_template("blog.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")


@app.errorhandler(404)
def not_found(e):
    return render_template("404.html")
