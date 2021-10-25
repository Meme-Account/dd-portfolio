from app import app
from flask_mail import Message, Mail
import os

email_address = "tarini.bengani@gmail.com"

app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 465
app.config["MAIL_USE_SSL"] = True
app.config["MAIL_USERNAME"] = email_address
app.config["MAIL_PASSWORD"] = f"{os.environ.get('EMAIL_PASSWORD')}"

mail = Mail()

mail.init_app(app)


def send_mail(email, name, message):
    msg = Message(
        f"Message from {name}",
        sender=email_address,
        recipients=[email_address],
    )
    msg.body = f"From {name}: {email}\n\n{message}"
    mail.send(msg)
