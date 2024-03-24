from flask import Blueprint, render_template, request, jsonify, redirect, url_for
from json import loads, dumps

views = Blueprint(__name__, 'views')

@views.route('/')
def root_redirect():
    return redirect(url_for('views.home'))

@views.route('/home')
def home():
    return render_template('index.html')

@views.route('/login')
def login():
    return render_template('login.html', error='')

@views.route('/register')
def register():
    return render_template('register.html', error='')
    
@views.route('/pnda')
def pnda():
    return render_template('pnda.html')

@views.route('/mate_transport_new_acc', methods = ['POST', 'GET'])
def create_acc():
    if request.method == 'GET':
        return redirect(url_for('views.register'))
    if request.method == 'POST':
        form_data = request.form
        
        with open('accounts.json', 'r') as f:
            accounts = loads(f.read())
            
        if form_data.to_dict()['username'] in accounts:
            return render_template('register.html', error='Account already exists')
        else:
            accounts[form_data.to_dict()['username']] = {
                'password': form_data.to_dict()['password'],
                'mate_coins': 0,
            }
            
            with open('accounts.json', 'w') as f:
                f.write(dumps(accounts, indent=2))
            
        return render_template('mate_transport.html', form_data=form_data)
    
@views.route('/mate_transport', methods = ['POST', 'GET'])
def login_acc():
    if request.method == 'GET':
        return redirect(url_for('views.login'))
    if request.method == 'POST':
        form_data = request.form
        
        with open('accounts.json', 'r') as f:
            accounts = loads(f.read())
            
        if form_data.to_dict()['username'] in accounts:
            if form_data.to_dict()['password'] == accounts[form_data.to_dict()['username']]['password']:
                return render_template('mate_transport.html', form_data=form_data)
            else:
                return render_template('login.html', error='Wrong password')    
        else:
            return render_template('login.html', error='No account with that username')