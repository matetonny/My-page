from flask import Blueprint, render_template, request, flash, redirect, url_for, send_file
from werkzeug.utils import secure_filename
from PIL import Image
from os import remove

views = Blueprint(__name__, 'views')

UPLOAD_FOLDER = '/upload_files'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

@views.route('/')
def root_redirect():
    return redirect(url_for('views.home'))

@views.route('/home')
def home():
    return render_template('index.html')

@views.route('/projects')
def projects():
    return render_template('projects.html')

@views.route('/utilities')
def utilities():
    return render_template('utilities.html')

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def downscale_image(image_path, scale_factor):
    with Image.open(image_path) as img:
        new_size = (
            int(img.width * scale_factor),
            int(img.height * scale_factor)
        )
        
        downscaled_img = img.resize(new_size, Image.Resampling.LANCZOS)
        
        remove(image_path)
        downscaled_img.save(image_path)
        
def download(filename):
    sent_file = send_file(filename, as_attachment=True)
    
    remove(filename)
    
    return sent_file

@views.route('/resize_img', methods=['POST', 'GET'])
def resize_img():
    if request.method == 'GET':
        return redirect(url_for('views.home'))
    if request.method == 'POST':
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(filename)
            
            downscale_image(filename, int(request.form['scale_factor']) / 100)
            
            return download(filename)
            