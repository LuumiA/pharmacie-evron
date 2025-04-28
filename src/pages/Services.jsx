import React from "react";
import "../styles/Services.css"; // On va créer ce fichier

function Services() {
  return (
    <div className="services-page">
      {/* Bannière de la page */}
      <section className="services-banner">
        <h1>Nos Services</h1>
      </section>

      {/* Liste des services */}
      <section className="services-details">
        <div className="service-item">
          <h2>Orthopédie</h2>
          <p>
            Nous vous proposons une large gamme de matériel orthopédique adapté
            à vos besoins : attelles, ceintures lombaires, genouillères, etc.
          </p>
        </div>

        <div className="service-item">
          <h2>Aromathérapie</h2>
          <p>
            Découvrez notre sélection d’huiles essentielles et profitez des
            bienfaits naturels pour votre bien-être au quotidien.
          </p>
        </div>

        <div className="service-item">
          <h2>Location de Matériel Médical</h2>
          <p>
            Nous mettons à votre disposition la location de matériel médicalisé
            : lits médicalisés, fauteuils roulants, déambulateurs, etc.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Services;
