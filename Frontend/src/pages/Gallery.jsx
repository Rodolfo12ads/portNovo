import styles from "./Gallery.module.css";

function Gallery() {
  return (
    
    
    <div className={styles.container}>
        <div className={styles.backgroundAnimation}>
                {[...Array(10)].map((_, i) => (
                  <div key={i} className={styles.box}></div>
                ))}
              </div>
      <h1>Galeria de Fotos Acadêmicas</h1>

      <div className={styles.gallery}>
      <div className={styles.photoCard}>
          <iframe
          className={styles.photo} src="https://drive.google.com/file/d/1HZ7L_TK3xitq2D7GEofEUG0b0Cl-iKx_/preview" width="640" height="480" allow="autoplay"></iframe>
          <p>Participação da Join em 2023</p>
        </div>
      <div className={styles.photoCard}>
          <iframe
          className={styles.photo} src="https://drive.google.com/file/d/1HJXomg7BqR1nVJmEKrrsyOvFzb7xQyyw/preview" width="640" height="480" allow="autoplay"></iframe>
          <p>Pojeto Científico na escola E. E. Dr Napoleão Salles </p>
        </div>
        
      </div>
    </div>
  );
}

export default Gallery;
