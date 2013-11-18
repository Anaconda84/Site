# -*- coding: utf-8 -*-
# Create your views here.
from django.shortcuts import render_to_response
from django.http import HttpResponse
from VideoApp.models import VideoBaza
#from VideoApp.utils import *
from VideoSite.settings import FILM_STORAGE_URL
from VideoSite.settings import FILM_TRACKER_URL
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

def video(request):
    list = VideoBaza.objects.all()
    paginator = Paginator(list, 10) # Show 10 contacts per page
    
    page = request.GET.get('page')
    try:
        list = paginator.page(page)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        list = paginator.page(1)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        list = paginator.page(paginator.num_pages)    
    return render_to_response('base.html', {'list':list, 'film_storage_url':FILM_STORAGE_URL, 'film_tracker_url':FILM_TRACKER_URL})

def video_category(request, category):
    cat ={}
    cat[1] = u'Авторское кино'
    cat[2] = u'Аниме'
    cat[3] = u'Артхаус'
    cat[4] = u'Биографические'
    cat[5] = u'Боевики'
    cat[6] = u'Военные'
    cat[7] = u'Детективы'
    cat[8] = u'Детские'
    cat[9] = u'Документальные'
    cat[10] = u'Драмы'
    cat[11] = u'Исторические'
    cat[12] = u'Комедии'
    cat[13] = u'Концерты'
    cat[14] = u'Короткометражные'
    cat[15] = u'Криминальные'
    cat[16] = u'Мелодрамы'
    cat[17] = u'Мистика'
    cat[18] = u'Музыкальные'
    cat[19] = u'Мультфильмы'
    cat[20] = u'Мюзиклы'
    cat[21] = u'Отечественные'
    cat[22] = u'Приключения'
    cat[23] = u'Семейные'
    cat[24] = u'Сериалы'
    cat[25] = u'Спорт'
    cat[26] = u'ТВ-передачи'
    cat[27] = u'Триллеры'
    cat[28] = u'Ужасы'
    cat[29] = u'Фантастика'
    cat[30] = u'Фентези'
    cat[31] = u'Эротика'

    list = VideoBaza.objects.filter(janr=cat[int(category)])
    paginator = Paginator(list, 10) # Show 10 contacts per page
    
    page = request.GET.get('page')
    try:
        list = paginator.page(page)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        list = paginator.page(1)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        list = paginator.page(paginator.num_pages)    
    return render_to_response('base.html', {'list':list})


def version(request):
    return HttpResponse("0.9")

def seeders(request, torrent):
    resp = get_seeders(request, torrent)
    out = ''
    i = 0
    for ip in resp:
      if i == 0:
          out = ip
      else:
          out = out+','+ip
      i = i + 1

    return HttpResponse(out)

def notsupport(request):
    return render_to_response('notsupport.html')

def about(request):
    return render_to_response('about.html')

def forum(request):
    return render_to_response('forum.html')
                                                        