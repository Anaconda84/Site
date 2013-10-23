from django.db import models

# Create your models here.
class VideoBaza(models.Model):
    name = models.CharField(max_length=255, unique=True, db_index=True)
    description = models.CharField(max_length=2048, blank=True)
    year = models.CharField(max_length=4, blank=True)
    register = models.CharField(max_length=255, blank=True)
    actors = models.CharField(max_length=2048, blank=True)
    duration = models.CharField(max_length=5, blank=True)
    rating = models.CharField(max_length=1, blank=True)
    publication_date = models.CharField(max_length=20)
    janr = models.CharField(max_length=50, blank=True)
    janr2 = models.CharField(max_length=50, blank=True)
    janr3 = models.CharField(max_length=50, blank=True)
    janr4 = models.CharField(max_length=50, blank=True)
    janr5 = models.CharField(max_length=50, blank=True)
    poster = models.CharField(max_length=255)
    url = models.URLField()
    torrent = models.CharField(max_length=255)
    cur_date = models.DateTimeField(auto_now_add=True, blank=True)
    
    def __unicode__(self):
	return self.name
