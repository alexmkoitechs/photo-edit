"use client"

import { useState, useEffect } from 'react';
import { getSortedImagesList } from '../helpers';

import Upload from "../components/Upload";
import Tree from "../components/Tree";
import Gallery from "../components/Gallery";
import Preview from "../components/Preview";

import styles from "./page.module.scss";

const Home = () => {
  const [imagesList, setImagesList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const sortedImagesList = getSortedImagesList(imagesList);

  const getImages = async () => {
    try {
      const response = await fetch("/api/upload", {
        method: "GET",
      });

      const result = await response.json();

      setImagesList(result);
    } catch (error) {
      console.log('Error', error)
    }
  };

  useEffect(() => {
    getImages();
  }, []);
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <Upload data={sortedImagesList} getImages={getImages} />

       <div className={styles.content}>
        <Tree data={sortedImagesList} onClick={setSelectedImage} selectedItem={selectedImage} />
        <Gallery data={sortedImagesList} onClick={setSelectedImage} selectedItem={selectedImage} />
        <Preview selectedItem={selectedImage} />
       </div>

      </main>
    </div>
  );
};

export default Home;
