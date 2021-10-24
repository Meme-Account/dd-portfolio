from flask import (
    Flask,
    render_template,
    url_for,
    redirect,
    request,
)
from .db import create_post, get_post, get_posts

app = Flask(__name__)
app.secret_key = "secret123123abcdabcd"


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/skills")
def skills():
    return render_template("skills.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")


@app.route("/blog/create", methods=["GET", "POST"])
def blog_create():
    if request.method == "POST":
        real = "abc123123abc"
        entered = request.form.get("entered")
        if entered != real:
            return redirect(url_for("blog"))
        else:
            return render_template("blog_create.html", login="True")

    return render_template("blog_create.html", login="False")


@app.route("/blog/preview", methods=["GET", "POST"])
def blog_preview():
    if request.method == "POST":
        req = request.form
        post_title = req.get("post-title")
        post_banner = req.get("post-banner")
        post_content = req.get("post-content")
        post_tags = req.get("post-tags")

        return render_template(
            "blog_post.html",
            post_title=post_title,
            post_banner=post_banner,
            post_content=post_content,
            post_tags=post_tags,
            post_days="0",
            post_hours="0",
            preview=True,
        )
    return redirect(url_for("blog_create"))


@app.route("/blog/submit", methods=["GET", "POST"])
def blog_submit():
    if request.method == "POST":
        req = request.form
        post_title = req.get("post-title")
        post_banner = req.get("post-banner")
        post_content = req.get("post-content")
        post_tags = req.get("post-tags").strip().split()

        post_id = create_post(post_title, post_banner, post_content, post_tags)

        return redirect(url_for("blog_post", post_id=post_id))

    return redirect(url_for("blog"))


@app.route("/blog/post/<post_id>")
def blog_post(post_id):
    post_title, post_banner, post_content, post_tags, post_time = get_post(post_id)

    return render_template(
        "blog_post.html",
        post_title=post_title,
        post_banner=post_banner,
        post_content=post_content,
        post_tags=post_tags,
        post_days=post_time[0],
        post_hours=post_time[1],
        preview=False,
    )


@app.route("/blog")
def blog():
    posts = get_posts()
    return render_template("blog.html", posts=posts)


@app.errorhandler(404)
def not_found(e):
    return render_template("404.html")
