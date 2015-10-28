var photos = [];

function Photo() {
	this.photoID = Photo.counter++;
	this.photoname;
	this.photopath;
	this.phototitle;
	this.photocaption;
	this.photoUploadDate;
	this.photoTakenDate;
	this.metatags = [];
	this.albums = [];	
}

Photo.counter = 0;

Photo.prototype.newphoto = function(filepath) {
	this.photopath = filepath;
	var slashpos = filepath.lastIndexOf("/");
	var dotpos = filepath.lastIndexOf(".");
	this.photoname = filepath.substring(slashpos, dotpos);
	this.photoUploadDate = new Date(Date.now());
	
	photos.push(this);
}

Photo.prototype.setPhototitle = function(t) {
	this.phototitle = t;
}

Photo.prototype.setPhotocaption = function(c) {
	this.photocaption = c;
}

Photo.prototype.setPhotoTakenDate = function(d) {
	this.photoTakenDate = d;
}

