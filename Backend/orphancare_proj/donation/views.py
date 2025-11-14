from rest_framework import generics, permissions
from .models import Donation
from .serializers import DonationSerializer
from donor.models import DonorProfile
from orphanage.models import OrphanageProfile

# ------------------ DONOR VIEWS ------------------

class DonationCreateView(generics.CreateAPIView):
    serializer_class = DonationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        donor_profile = DonorProfile.objects.get(user=self.request.user)
        serializer.save(donor=donor_profile)


class DonorDonationListView(generics.ListAPIView):
    serializer_class = DonationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        donor_profile = DonorProfile.objects.get(user=self.request.user)
        return Donation.objects.filter(donor=donor_profile).order_by("-donation_date")


# ------------------ ORPHANAGE VIEWS ------------------

class OrphanageDonationListView(generics.ListAPIView):
    serializer_class = DonationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        orphanage_profile = OrphanageProfile.objects.get(user=self.request.user)
        return Donation.objects.filter(orphanage=orphanage_profile).order_by("-donation_date")


class DonationStatusUpdateView(generics.UpdateAPIView):
    serializer_class = DonationSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = Donation.objects.all()

    def perform_update(self, serializer):
        orphanage_profile = getattr(self.request.user, "orphanageprofile", None)

        # if orphanage_profile is None:
        #     raise PermissionDenied("Only orphanages can update donation status.")

        donation = self.get_object()

        # if donation.orphanage != orphanage_profile:
        #     raise PermissionDenied("You are not allowed to update this donation.")

        # Save the update
        serializer.save()
