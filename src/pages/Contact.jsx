import React from "react";
import "../styles/Contact.css"; // On va créer ce fichier CSS aussi

function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-banner">
        <h1>Contactez-nous</h1>
      </section>

      <section className="contact-details">
        <div className="contact-info">
          <h2>Nos Coordonnées</h2>
          <p>📍 123 Rue de la Fontaine, 53600 Évron</p>
          <p>📞 02 43 00 00 00</p>
          <p>📧 contact@pharmacie-fontaine.com</p>
        </div>

        <div className="contact-form">
          <h2>Envoyer un message</h2>
          <form>
            <input type="text" placeholder="Votre nom" required />
            <input type="email" placeholder="Votre email" required />
            <textarea placeholder="Votre message" required />
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
