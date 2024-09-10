from flask import Flask, request, redirect, url_for
from dotenv import load_dotenv
from flask_mail import Mail, Message
import os

load_dotenv()

app = Flask(__name__)

# Configurações do Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False

mail = Mail(app)

@app.route('/', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('e-mail')
        message = request.form.get('message')
        
        if not name:
            return "Nome é obrigatório.", 400
        
        if email and not validate_email(email):
            return "E-mail inválido.", 400
        
        if len(message) > 300:
            return "A mensagem não pode ter mais de 300 caracteres.", 400
        
        msg = Message("Novo contato",
                      sender="seuemail@gmail.com",  # Seu e-mail
                      recipients=["seuemail@gmail.com"])  # Seu e-mail
        msg.body = f"Nome: {name}\nE-mail: {email}\nMensagem: {message}"
        mail.send(msg)
        
        return redirect(url_for('thank_you'))
    return '''
        <form method="post">
            Nome: <input type="text" name="name"><br>
            E-mail: <input type="email" name="e-mail"><br>
            Mensagem: <textarea name="message"></textarea><br>
            <input type="submit" value="Enviar">
        </form>
    '''

@app.route('/thank_you')
def thank_you():
    return "Obrigado por sua mensagem!"

def validate_email(email):
    import re
    regex = r'^[^\s@]+@[^\s@]+\.[^\s@]+$'
    return re.match(regex, email) is not None

if __name__ == '__main__':
    app.run(debug=True)
