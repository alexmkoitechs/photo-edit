import cn from 'classnames';
import Image from "next/image";

import styles from "./styles.module.scss";

const Gallery = ({ data, onClick, selectedItem }) => {
  const galleryItems = data.map(imageName => {
    const path = `/uploads/${imageName}`;
    const itemWrapperClassNames = cn(styles.image_wrapper, { [styles.active]: imageName === selectedItem })

    return (
      <div
        key={imageName}
        className={itemWrapperClassNames}
        onClick={() => onClick(imageName)}
      >
        <Image
          priority
          src={path}
          width={250}
          height={200}
          alt={imageName}
        />
      </div>
    )
  })

  return (
    <div className={styles.gallery}>
      {data.length === 0 && (<div className={styles.empty}>Please upload the file</div>)}

      <div className={styles.content}>
        {galleryItems}
      </div>
    </div>
  );
};

export default Gallery;
