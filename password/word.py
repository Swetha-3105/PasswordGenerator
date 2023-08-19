from flask import Flask, render_template, request
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/password', methods=['POST'])
def password():
    result=[]
    u=[]
    alpha=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    symbol = [
    '!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', '~', '?', '/','\\', '(', ')', '{', '}', '[', ']', '<', '>', '|', ':', ';', ',', '.']
    num=['0','1','2','3','4','5','6','7','8','9']
    a = int(request.form['num1'])
    for i in range(a):
        u.append(random.choice(alpha))
    result=[i.upper() for i in u]
   
    b = int(request.form['num2'])
    for i in range(b):
        result.append(random.choice(alpha))
    c = int(request.form['num3'])
    for i in range(c):
        result.append(random.choice(num))
    d = int(request.form['num4'])
    for i in range(d):
        result.append(random.choice(symbol))
    random.shuffle(result)
    p=''
    for i in result:
        p+=i
    return render_template('word2.html', p=p)

if __name__ == '__main__':
    app.run(debug=True)
