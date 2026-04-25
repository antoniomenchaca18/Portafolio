        const serviceID = 'service_zq8ppc8'; 
        const templateID = 'template_q3dg4al';
        const userID = 'NP5JEND4fJn0r72uk';

        emailjs.init(userID);

        document.getElementById('form-contact').addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(this);
            const data = {
                name: formData.get('from_name'),
                email: formData.get('reply_to'),
                message: formData.get('message')
            };

            emailjs.send(serviceID, templateID, data)
                .then(function(response) {
                    alert('¡Mensaje enviado con éxito!');
                }, function(error) {
                    alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.');
                });
        });
        
