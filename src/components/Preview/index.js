import { useMemo, useState, useRef } from 'react';
import Image from "next/image";
import Socials from './Socials';
import Draggable from 'react-draggable';
import TextSettings from './TextSettings';

import styles from "./styles.module.scss";

const Tree = ({ selectedItem }) => {
  const nodeRef = useRef(null);
  const [text, setText] = useState("Sample Text");
  const [fontSize, setFontSize] = useState(40);
  const [fontColor, setFontColor] = useState('#000');
  const path = useMemo(() => selectedItem && `/uploads/${selectedItem}`, [selectedItem])
  const textSettings = {
    color: fontColor,
    fontSize: `${fontSize}px`,
  };

  return (
    <div className={styles.preview}>
      {!selectedItem && (
        <div className={styles.empty_text}>Please select the file</div>
      )}
      {selectedItem && (
        <div className={styles.active_section_wrapper}>
          <div className={styles.settings}>
            <TextSettings
              text={text}
              setText={setText}
              fontSize={fontSize}
              fontColor={fontColor}
              setFontSize={setFontSize}
              setFontColor={setFontColor}
            />
            <Socials />
          </div>
          
          <div className={styles.image_wrapper}>
            <Image
              fill
              src={path}
              sizes="100%"
              alt={selectedItem}
              style={{ objectFit: 'contain' }}
            />
            <Draggable
              nodeRef={nodeRef}
              defaultPosition={{x: 100, y: 100}}
            >
              <div
                ref={nodeRef}
                style={textSettings}
                className={styles.draggable_text_wrapper}
              >
                {text}
              </div>
            </Draggable>
          
          </div>
        </div>
      )}

    </div>
  );
};

export default Tree;
