from rest_framework import generics, permissions
from .models import OrphanageProfile
from .serializers import OrphanageProfileSerializer
from rest_framework.permissions import AllowAny


class OrphanageProfileCreateView(generics.CreateAPIView):
    serializer_class = OrphanageProfileSerializer
    permission_classes = (AllowAny,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class OrphanageProfileDetailView(generics.RetrieveUpdateAPIView):
    serializer_class = OrphanageProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return OrphanageProfile.objects.get(user=self.request.user)
