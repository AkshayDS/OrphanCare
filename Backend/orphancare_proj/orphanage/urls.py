from django.urls import path
from .views import OrphanageProfileCreateView, OrphanageProfileDetailView

urlpatterns = [
    path('create/', OrphanageProfileCreateView.as_view(), name='orphanage-create'),
    path('me/', OrphanageProfileDetailView.as_view(), name='orphanage-detail'),
]
