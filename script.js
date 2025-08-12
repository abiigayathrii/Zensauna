document.getElementById('details-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const phone = this.phone.value.trim();
  const otp = this.otp.value.trim();
  if(name && phone.match(/^\d{10}$/) && otp.length > 0) {
    alert(`Thanks, ${name}! Your details are received.\nPhone: ${phone}\nOTP: ${otp}`);
    this.reset();
  } else {
    alert('Please enter valid details.');
  }
});
