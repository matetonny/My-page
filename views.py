from flask import Blueprint, render_template, request, jsonify, redirect, url_for
from json import loads, dumps


views = Blueprint(__name__, 'views')

@views.route('/')
def root_redirect():
    return redirect(url_for('views.home'))

@views.route('/home')
def home():
    return render_template('index.html')

# @views.route('/mate_transport_new_acc', methods = ['POST', 'GET'])
# def create_acc():
#     if request.method == 'GET':
#         return redirect(url_for('views.register'))
#     if request.method == 'POST':
#         form_data = request.form
        
#         with open('accounts.json', 'r') as f:
#             accounts = loads(f.read())
            
#         if form_data.to_dict()['username'] in accounts:
#             return render_template('register.html', error='Account already exists')
#         else:
#             accounts[form_data.to_dict()['username']] = {
#                 'password': form_data.to_dict()['password'],
#                 'mate_coins': 0,
#             }
            
#             with open('accounts.json', 'w') as f:
#                 f.write(dumps(accounts, indent=2))
            
#         return render_template('mate_transport.html', form_data=form_data)
    
