import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

export default function AboutPage() {
  return (
    <>
    <HeaderComponent/>
    <div style={styles.container}>
      <h1 style={styles.title}>Sobre nosotros</h1>

      <p style={styles.paragraph}>
        Este sitio web es una plataforma informativa cuyo objetivo es facilitar
        el acceso a recursos que ya se encuentran disponibles públicamente en
        Internet.
      </p>

      <p style={styles.paragraph}>
        <strong>No alojamos, almacenamos ni distribuimos archivos </strong>
        protegidos por derechos de autor. Los enlaces publicados en esta
        plataforma redirigen a sitios externos de terceros, los cuales son los
        únicos responsables del contenido que ofrecen.
      </p>

      <p style={styles.paragraph}>
        Todo el material enlazado ha sido obtenido de fuentes públicas y
        accesibles en la web. Este sitio no tiene control sobre la disponibilidad,
        legalidad o exactitud del contenido alojado en páginas externas.
      </p>

      <p style={styles.paragraph}>
        Si usted es titular de derechos de autor y considera que algún enlace
        publicado infringe dichos derechos, puede contactarnos para solicitar su
        revisión o eliminación.
      </p>

      <p style={styles.paragraph}>
        El uso de este sitio implica la aceptación de que el usuario accede al
        contenido externo bajo su propia responsabilidad.
      </p>
    </div>
    <FooterComponent/>
    </>
    
  );
}

const styles = {
  container: {
    maxWidth: "950px",
    margin: "0 auto",
    padding: "20px",
    lineHeight: "1.6",
  },
  title: {
    marginBottom: "20px",
  },
  paragraph: {
    marginBottom: "15px",
  },
};