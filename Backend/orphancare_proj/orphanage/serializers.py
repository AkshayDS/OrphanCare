from rest_framework import serializers
from .models import OrphanageProfile

class OrphanageProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrphanageProfile
        fields = [
            "id", "user", "orphanage_name", "description",
            "address", "city", "state", "pincode", "phone_number",
            "email", "total_orphans", "boys_count", "girls_count", 
            "students_count", "registration_no", "website", "verified","banner_image","established_on"
        ]
        read_only_fields = ["user", "verified"]
