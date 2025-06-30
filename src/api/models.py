from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        # do not serialize the password, its a securty
        return {"id": self.id,
                "email": self.email,
                "is_active": self.is_active
                }


class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable = False)
    description = db.Column(db.String, nullable = True)
    body = db.Column(db.String)
    date = db.Column(db.Date, nullable = False)
    image_url = db.Column(db.String)    


class Media(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    media_type = db.Column(db.Enum( "image", "video", "audio", name="media_type"), nullable=False)
    url = db.Column(db.String)


class Comments (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db. String)
     

class Followers (db.Model):
    id = db.Column(db.Integer, primary_key=True)


class CharacterFavorites (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    

class PlanetFavorites (db.Model):
    id = db.Column(db.Integer, primary_key=True)


class Characters(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable = False)
    height = db.Column(db.String, nullable = True)
    mass = db.Column(db.String, nullable = True)
    hair_color = db.Column(db.String, nullable = False)
    skin_color = db.Column(db.String, nullable = False)
    eye_color = db.Column(db.String, nullable = False)          
    birth_year = db.Column(db.String, nullable = False)   
    gender = db.Column(db.String, nullable = False)


class Planets(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable = False)
    diameter = db.Column(db.Integer, nullable = True)
    rotation_period = db.Column(db.String, nullable = True)
    gravity = db.Column(db.String, nullable = False)
    population = db.Column(db.Integer, nullable = False)
    climate = db.Column(db.String, nullable = False)          
    terrain = db.Column(db.String, nullable = False)   
   