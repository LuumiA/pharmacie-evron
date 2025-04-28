import React from "react";
import "../styles/ServiceCard.css"; // On va aussi créer un petit CSS pour ça

function ServiceCard({ title, description }) {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
