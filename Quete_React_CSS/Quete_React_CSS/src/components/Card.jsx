
const Card = () => {
    return (
        <div className="container">
            <div className="top">
                <div className="cover">
                    <img src="https://raplume.eu/wp-content/uploads/2021/04/SDM.jpg"></img>
                </div>
                <div className="album">
                    <h1 className="albumName">OCHO</h1>
                    <p className="artistName">SDM</p>
                </div>
            </div>
            <div className="bottom">
                <div className="rate">
                    <p>Rate this album</p>
                    <ul className="stars">
                        <li><i className="fa-regular fa-star"></i></li>
                        <li><i className="fa-regular fa-star"></i></li>
                        <li><i className="fa-regular fa-star"></i></li>
                        <li><i className="fa-regular fa-star"></i></li>
                        <li><i className="fa-regular fa-star"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Card;