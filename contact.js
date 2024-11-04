const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_i2jd8c1';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Message Sent Sucessfully! We will contact back you soon.');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});