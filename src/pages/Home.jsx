import React from "react";
import "../styles/Home.css"; // N'oublie pas de créer ce fichier
import ServiceCard from "../components/ServiceCard";

function Home() {
  return (
    <div className="home">
      {/* Section Bannière */}
      <section className="banner">
        <div className="banner-content">
          <h1>Bienvenue à la Pharmacie de la Fontaine</h1>
          <p>Votre santé, notre priorité.</p>
          <a href="/contact" className="banner-button">
            Contactez-nous
          </a>
        </div>
      </section>

      {/* Section Services */}
      <section className="services-preview">
        <h2>Nos Services</h2>
        <div className="services-list">
          <ServiceCard
            title="Orthopédie"
            description="Conseils et matériel adapté à vos besoins."
          />
          <ServiceCard
            title="Aromathérapie"
            description="Huiles essentielles et bien-être naturel."
          />
          <ServiceCard
            title="Location Matériel Médical"
            description="Location de lits médicalisés, fauteuils roulants, etc."
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
