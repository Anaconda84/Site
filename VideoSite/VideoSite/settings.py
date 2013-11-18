import os.path

# Django settings for VideoSite project.

DEBUG = True
ALLOWED_HOSTS = ['*']

TEMPLATE_DEBUG = DEBUG

_PATH = os.path.abspath(os.path.dirname(__file__))

ADMINS = (
    # ('Your Name', 'your_email@example.com'),
)

MANAGERS = ADMINS

dirs=_PATH.replace('\\','/').split('/')
pardir = dirs[0]
for di in dirs[1:-1]:
  pardir = pardir+'/'+di 

print os.path.join(pardir, 'videobaza.db').replace('\\','/')

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3', # Add 'postgresql_psycopg2', 'mysql', 'sqlite3' or 'oracle'.
        'NAME': os.path.join(pardir, 'videobaza.db').replace('\\','/'),                      # Or path to database file if using sqlite3.
#	'NAME': 'C:/nginx/html/VideoSite/videobaza.db',                      # Or path to database file if using sqlite3.
        'USER': '',                      # Not used with sqlite3.
        'PASSWORD': '',                  # Not used with sqlite3.
        'HOST': '',                      # Set to empty string for localhost. Not used with sqlite3.
        'PORT': '',                      # Set to empty string for default. Not used with sqlite3.
    }
}

# Local time zone for this installation. Choices can be found here:
# http://en.wikipedia.org/wiki/List_of_tz_zones_by_name
# although not all choices may be available on all operating systems.
# On Unix systems, a value of None will cause Django to use the same
# timezone as the operating system.
# If running in a Windows environment this must be set to the same as your
# system time zone.
TIME_ZONE = 'America/Chicago'

# Language code for this installation. All choices can be found here:
# http://www.i18nguy.com/unicode/language-identifiers.html
LANGUAGE_CODE = 'ru-RU'

SITE_ID = 1

# If you set this to False, Django will make some optimizations so as not
# to load the internationalization machinery.
USE_I18N = True

# If you set this to False, Django will not format dates, numbers and
# calendars according to the current locale.
USE_L10N = True

# If you set this to False, Django will not use timezone-aware datetimes.
USE_TZ = True


# Absolute filesystem path to the directory that will hold user-uploaded files.
# Example: "/home/media/media.lawrence.com/media/"
#MEDIA_ROOT = ''
MEDIA_ROOT = os.path.join(_PATH, 'files', 'media')

# URL that handles the media served from MEDIA_ROOT. Make sure to use a
# trailing slash.
# Examples: "http://media.lawrence.com/media/", "http://example.com/media/"
MEDIA_URL = '/media/'

# Absolute path to the directory static files should be collected to.
# Don't put anything in this directory yourself; store your static files
# in apps' "static/" subdirectories and in STATICFILES_DIRS.
# Example: "/home/media/media.lawrence.com/static/"
#STATIC_ROOT = ''
STATIC_ROOT = os.path.join(_PATH, 'VideoSite', 'static')

# URL prefix for static files.
# Example: "http://media.lawrence.com/static/"
STATIC_URL = '/static/'

# Additional locations of static files
STATICFILES_DIRS = (
    # Put strings here, like "/home/html/static" or "C:/www/django/static".
    # Always use forward slashes, even on Windows.
    # Don't forget to use absolute paths, not relative paths.
    #os.path.join(os.path.dirname(__file__), 'static').replace('\\','/'),
    os.path.join(_PATH, 'static'),
)

# List of finder classes that know how to find static files in
# various locations.
STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
#    'django.contrib.staticfiles.finders.DefaultStorageFinder',
)

# Make this unique, and don't share it with anybody.
SECRET_KEY = 'nimlrcxe88g$p()jouirru$#ulbod8ei(p4bsfe)34whn63m7b'

# List of callables that know how to import templates from various sources.
TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
#     'django.template.loaders.eggs.Loader',
)

MIDDLEWARE_CLASSES = (
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    # Uncomment the next line for simple clickjacking protection:
    # 'django.middleware.clickjacking.XFrameOptionsMiddleware',
    #'debug_toolbar.middleware.DebugToolbarMiddleware',
)

ROOT_URLCONF = 'VideoSite.urls'

# Python dotted path to the WSGI application used by Django's runserver.
WSGI_APPLICATION = 'VideoSite.wsgi.application'

TEMPLATE_DIRS = (
    # Put strings here, like "/home/html/django_templates" or "C:/www/django/templates".
    # Always use forward slashes, even on Windows.
    # Don't forget to use absolute paths, not relative paths.
    os.path.join(os.path.dirname(__file__), 'templates').replace('\\','/'),
)

INSTALLED_APPS = (
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # Uncomment the next line to enable the admin:
    'django.contrib.admin',
    # Uncomment the next line to enable admin documentation:
    # 'django.contrib.admindocs',
    'VideoApp',
    #'debug_toolbar',
)

FILM_STORAGE_URL = 'http://duroskop.net:6878'
FILM_TRACKER_URL = 'http://duroskop.net:8888'

# A sample logging configuration. The only tangible logging
# performed by this configuration is to send an email to
# the site admins on every HTTP 500 error when DEBUG=False.
# See http://docs.djangoproject.com/en/dev/topics/logging for
# more details on how to customize your logging configuration.
#LOGGING = {
#    'version': 1,                       # should always be 1
#    'disable_existing_loggers': True,
#    'formatters': {
#        'standard': {
#            # see http://docs.python.org/library/logging.html#logrecord-attributes
#            'format': '%(asctime)s %(levelname)s %(name)s %(message)s'
#        },
#    },
#    'handlers': {
#        'default': {
#            'level':'ERROR',
#            # see http://docs.python.org/library/logging.handlers.html
#            'class':'logging.handlers.RotatingFileHandler',
#            'filename': 'django_messages.log',
#            'maxBytes': 1024*1024*5, # 5 MB
#            'backupCount': 5,
#            'formatter':'standard',
#        },
#        'request_handler': {
#            'level':'ERROR',
#            #'class':'logging.StreamHandler', # --> to stderr, and comment 4 rows below
#            'class':'logging.handlers.RotatingFileHandler',
#            'filename': 'django_req.log',
#            'maxBytes': 1024*1024*5, # 5 MB
#            'backupCount': 5,
#            'formatter':'standard',
#        },
#    },
#    'loggers': {
#        '': {
#            'handlers': ['default'],
#            'level': 'ERROR',
#            'propagate': True
#        },
#        'django.request': { # Stop SQL debug from logging to main logger
#            'handlers': ['request_handler'],
#            'level': 'ERROR',
#            'propagate': False
#        },
#    }
#}
