from django.db import models


class Genre(models.Model):
    name = models.CharField(max_length = 255, blank = False) # blank false prevents empty entries

    def __str__(self):
        return self.name

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length = 255, blank = False)
    author = models.CharField(max_length = 255)
    description = models.CharField(max_length = 255)
    genre = models.ForeignKey(Genre, on_delete = models.CASCADE, default = 1)
    # A book can have ONE genre, but a genre can have MANY books. One-to-Many relationship

    def __str__(self):
        return self.title