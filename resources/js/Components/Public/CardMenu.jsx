export default function CardMenu(props) {
    const { name, alt, img, price } = props;
    return (
        <div className="card-menu">
            <div className='overlay-card'></div>
            <img src={img} className='bg-blue-500' alt={alt} />
            <span>{name}</span>
            <div className="card-harga">{price}</div>
        </div>
    )
}