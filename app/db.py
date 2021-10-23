import pyrebase
import uuid

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


def create_post(title, banner, content):
    post_id = uuid.uuid4().hex
    post_data = {
        "title": title,
        "banner": banner,
        "content": content,
    }

    db.child("posts").child(post_id).set(post_data)


def get_post(post_id):
    post_data = db.child("posts").child(post_id).get().val()
    post_title = post_data["title"]
    post_banner = post_data["banner"]
    post_content = post_data["content"]

    return post_title, post_banner, post_content
