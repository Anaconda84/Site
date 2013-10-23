import logging
from django.conf.urls import patterns, include, url
from VideoApp.views import *
from VideoSite.settings import *

from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from django.views.generic.base import TemplateView, RedirectView

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'VideoSite.views.home', name='home'),
    # url(r'^VideoSite/', include('VideoSite.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', video),
    url(r'^video/$', video),
    url(r'^video/(\d+)/$', video_category),
    url(r'^version/$', version),
    url(r'^seeders/(.+)/$', seeders),
    url(r'^notsupport/$', notsupport),
    url(r'^about/$', about),
    url(r'^favicon\.ico$', RedirectView.as_view(url='/static/images/favicon.ico')),
)

urlpatterns += static(MEDIA_URL, document_root=MEDIA_ROOT)
urlpatterns += staticfiles_urlpatterns()

#log = logging.getLogger(__name__)
#log.error("Error 404 %s, %s" % ('PATH=',os.path.abspath(os.path.dirname(__file__))))

if DEBUG is False:   #if DEBUG is True it will be served automatically
    urlpatterns += patterns('',
	url(r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': os.path.join(os.path.abspath(os.path.dirname(__file__)), 'static') }),
    )
    