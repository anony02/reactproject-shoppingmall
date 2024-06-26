import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({ id, thumbnail, title, discountPercentage, price, rating, stock }) {
  return (
    <li className={styles.card}>
      <Link className={styles.linkwrap} to={`/detail/${id}`}>
        <img className={styles.img} src={thumbnail} alt="" />
        <div className={styles.info}>
          <div className={styles.title}>{title}</div>
          <div>평점 : {rating}/5점</div>
          <div>
            <span className={styles.discount}>{Math.round(discountPercentage)}%</span>
            <span className={styles.price}>{(price * 1350).toLocaleString("ko-KR")}원</span>
          </div>
          <div>
            <span>남은수량 : {stock}</span>
            <span className={styles.soldout}>{stock < 10 ? "(매진임박)" : ""}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}
