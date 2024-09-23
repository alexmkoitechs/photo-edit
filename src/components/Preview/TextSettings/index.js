import { HexColorPicker } from "react-colorful";

import styles from "./styles.module.scss";

const TextSettings = ({
  text,
  setText,
  fontSize,
  fontColor,
  setFontSize,
  setFontColor,
}) => (
  <div className={styles.text_settings}>
    <div className={styles.row}>
      <div className={styles.row_text}>
        Text:
      </div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text" className='handle'/>
    </div>
    <div className={styles.row}>
      <div className={styles.row_text}>
        Font size:
      </div>
      <input type="number" value={fontSize} onChange={(e) => setFontSize(e.target.value)} placeholder="Font size" />
    </div>
    <div className={styles.row}>
      <div className={styles.row_text}>
        Font color:
      </div>
      <HexColorPicker color={fontColor} onChange={setFontColor} />
    </div>
  </div>
);

export default TextSettings;
