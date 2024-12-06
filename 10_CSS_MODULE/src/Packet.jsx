import style from "./Packet.module.css"

//te props , app.jsx me jo Container tag ne jo kuch likha hai us content ko is container me ui par show kar raha hai,
const Packet = (props) => {
  return <div className={style.packet}>
    {props.children}
  </div>


}

export default Packet;