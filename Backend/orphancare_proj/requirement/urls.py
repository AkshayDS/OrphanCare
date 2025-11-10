from django.urls import path
from .views import (
    OrphanageRequirementCreateView,
    OrphanageRequirementListView,
    OrphanageRequirementUpdateView,
    OrphanageRequirementDeleteView,
    PublicRequirementListView,
)

urlpatterns = [
    path("create/", OrphanageRequirementCreateView.as_view(), name="requirement-create"),
    path("mine/", OrphanageRequirementListView.as_view(), name="requirement-list"),
    path("<int:pk>/update/", OrphanageRequirementUpdateView.as_view(), name="requirement-update"),
    path("<int:pk>/delete/", OrphanageRequirementDeleteView.as_view(), name="requirement-delete"),
    path("public/", PublicRequirementListView.as_view(), name="requirement-public"),
]
