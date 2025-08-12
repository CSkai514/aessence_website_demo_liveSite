const toggleBtn = document.getElementById('whatsappToggle');
const chatbox = document.getElementById('whatsappChatbox');

toggleBtn.addEventListener('click', () => {
  chatbox.style.display = chatbox.style.display === 'block' ? 'none' : 'block';
});

// JS for Google Analytics track Whatsapp Button
document.addEventListener('DOMContentLoaded', function() {
  var btn = document.querySelector('#whatsappChatbox a');
  if (btn) {
    btn.addEventListener('click', function(event) {
      // Send GA4 event
      gtag('event', 'whatsapp_button_click', {
        event_category: 'contact',
        event_label: 'WhatsApp Start Chat'
      });

      // If you want to make sure tracking fires before navigation:
      event.preventDefault(); 
      setTimeout(function() {
        window.open(btn.href, '_blank'); // Open in new tab
      }, 300);
    });
  }
});

// For contact us form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // stop normal form submit

    let formData = new FormData(this);

    fetch("contact.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data.includes("Message sent")) {
            // Show SweetAlert
            Swal.fire({
                icon: 'success',
                title: 'Message Sent',
                text: 'Thank you for contacting us!',
            });

            // 🔹 Track successful submission
            gtag('event', 'form_submit', {
                event_category: 'Contact',
                event_label: 'Contact Form'
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Something went wrong. Please try again.',
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
