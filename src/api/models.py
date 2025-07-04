from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class Users(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    first_name = db.Column(db.String(80))
    last_name = db.Column(db.String(80))
    is_active = db.Column(db.Boolean, nullable=False)
    is_admin = db.Column(db.Boolean, nullable=False)

    def __repr__(self):
        return f'<Users: {self.id} - email: {self.email}>'
    
    def serialize(self):
        return {"id": self.id,
                "email": self.email,
                "first_name": self.first_name,
                "last_name": self.last_name,
                "is_active": self.is_active,
                "is_admin": self.is_admin,
                'followers': [row.serialize()['following_id'] for row in self.follower_to],
                'followings': [row.serialize()['follower_id'] for row in self.following_to]}    


class Media(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    media_type = db.Column(db.Enum( "image", "video", "audio", name="media_type"), nullable=False)
    url = db.Column(db.String)


class Comments (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db. String)


class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=True)
    body = db.Column(db.String)
    date = db.Column(db.Date, nullable=False)
    image_url = db.Column(db.String)

     

class Followers(db.Model):
    __tablename__ = 'followers'
    id = db.Column(db.Integer, primary_key=True)
    following_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    following_to = db.relationship('Users', foreign_keys=[following_id],
                                   backref=db.backref('following_to', lazy='select'))
    follower_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    follower_to = db.relationship('Users', foreign_keys=[follower_id],
                                  backref=db.backref('follower_to', lazy='select'))

    def __repr__(self):
        return f'following: {self.following_id} - follower: {self.follower_id}'

    def serialize(self):
        return {'id': self.id,
                'following_id': self.following_id,
                'follower_id': self.follower_id}


class CharacterFavorites (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    character_id = db.Column(db.Integer, db.ForeignKey('characters.id'), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "character_id": self.character_id
        }

    

class PlanetFavorites (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    planet_id = db.Column(db.Integer, db.ForeignKey('planets.id'), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "planet_id": self.planet_id
        }


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
   