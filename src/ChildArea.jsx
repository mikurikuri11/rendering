import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
}

// eslint-disable-next-line react/display-name
const ChildArea = memo(({ open, onClickClose }) => {

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log('...');
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : (
        null
      )}
    </>
  )
}
)


export default ChildArea
