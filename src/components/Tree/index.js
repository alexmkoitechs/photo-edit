import cn from 'classnames';

import styles from "./styles.module.scss";

const Tree = ({ data, onClick, selectedItem }) => {
  const treeItems = data.map((imageName) => {
    const itemClassNames = cn(styles.item, { [styles.active]: imageName === selectedItem })

    return (
      <div
        key={imageName}
        className={itemClassNames}
        onClick={() => onClick(imageName)}
      >
        {imageName}
      </div>
    )
  })

  return (
    <div className={styles.tree}>
      {data.length === 0 && (<div className={styles.empty}>Please upload the file</div>)}
      <div className={styles.tree_content}>{treeItems}</div>
    </div>
  );
};

export default Tree;
