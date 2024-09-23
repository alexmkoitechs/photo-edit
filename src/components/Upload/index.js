// "use client";

import styles from "./styles.module.scss";

const Upload = ({ getImages }) => {
  const onChange = async (e) => {
    try {
      if (e.target.files) {
        const formData = new FormData();
        Object.values(e.target.files).forEach((file) => {
          formData.append("file", file);
        });

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();

        if (result.success) getImages();
      }
    } catch (error) {
      console.log('err', error)
    }
  };

  return (
    <div className={styles.upload}>
      <input
        multiple
        type="file"
        accept="image/*"
        onChange={onChange}
        className={styles.upload_input}
      />
    </div>
  );
};

export default Upload;
