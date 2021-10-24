import pyrebase
import uuid
from datetime import datetime
from bs4 import BeautifulSoup

firebaseConfig = {
    "apiKey": "AIzaSyClq3WEdcovAdNx220_Za8ttyGTCqjCbY0",
    "authDomain": "tarini-portfolio.firebaseapp.com",
    "projectId": "tarini-portfolio",
    "storageBucket": "tarini-portfolio.appspot.com",
    "messagingSenderId": "227252525574",
    "appId": "1:227252525574:web:f638b7a1b5ab3a68c8c187",
    "measurementId": "G-FRKQ7SWVK2",
    "databaseURL": "https://tarini-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/",
}

firebase = pyrebase.initialize_app(firebaseConfig)

db = firebase.database()


def create_post(title, banner, content, tags):
    post_id = uuid.uuid4().hex
    current_time = datetime.now().strftime("%b %d, %Y")
    post_data = {
        "title": title,
        "banner": banner,
        "content": content,
        "time": current_time,
        "tags": tags,
    }

    db.child("posts").child(post_id).set(post_data)

    return post_id


def get_post(post_id):
    post_data = db.child("posts").child(post_id).get().val()
    post_title = post_data["title"]
    post_banner = post_data["banner"]
    post_content = post_data["content"]
    post_time = post_data["time"]
    post_tags = post_data["tags"]

    datetime_obj = datetime.strptime(post_time, "%b %d, %Y")
    time_diff = datetime.now() - datetime_obj

    return [
        post_title,
        post_banner,
        post_content,
        post_tags,
        (time_diff.days, round(time_diff.seconds / 3600)),
    ]


def get_posts():
    posts = []
    post_ids = db.child("posts").get().val()
    for post_id in post_ids:
        post_data = get_post(post_id)
        post_data.append(post_id)

        soup = BeautifulSoup(post_data[2], "html.parser")
        post_paragraphs = soup.find_all("p")
        if post_paragraphs:
            first_paragraph = post_paragraphs[0].text
            if len(first_paragraph) > 450:
                first_paragraph = first_paragraph[:451] + "..."
            post_data[2] = first_paragraph
        else:
            post_data[2] = None

        posts.append(post_data)
    return posts
