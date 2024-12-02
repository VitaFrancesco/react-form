import style from './Card.module.css';

export default function Card(props) {
    return (
        <div className={style.card}>
            <div className={style.cardImg}>
                <img src={props.image} alt="#" />
            </div>
            <div className={style.cardBody}>
                <h2>{props.title}</h2>
                <div className={style.tags}>
                    {
                        props.tags.map((tag) => <div className={style[tag]}>{tag}</div>)
                    }
                </div>
                <p>{props.content}</p>
                <button>Leggi di più</button>
            </div>
        </div>
    );
};