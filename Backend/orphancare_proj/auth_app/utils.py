# auth_app/utils.py
from django.core.mail import send_mail
from django.conf import settings

def send_otp_email(to_email, otp_code):
    subject = "Your OrphanCare Verification OTP"
    message = f"""
    Welcome to OrphanCare! 
    Your OTP code for account verification is: {otp_code}

    This code will expire in 10 minutes.

    If you did not request this, please ignore this email.
    """
    send_mail(
        subject=subject,
        message=message,
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[to_email],
        fail_silently=False,
    )
