
import dust2 from "../../../assets/imgs/dust-2.jpg";
import inferno from "../../../assets/imgs/inferno.jpg";
import cache from "../../../assets/imgs/cache.jpg";
import overpass from "../../../assets/imgs/overpass.jpg";
import mirage from "../../../assets/imgs/mirage.jpg";
import "./GalleryImages.css";

const GalleryImages = () => {
	return (
		
		<main className="main__section">
			
			<section className="section__gallery">
				<img src={dust2} alt="Map Dust-2" />
				<img src={inferno} alt="Map Inferno"/>
				<img src={mirage} alt="Map Mirage" />
				<img src={overpass} alt="Map Overpass" />
				<img src={cache} alt="Map Cache" />
			</section>
		</main>


	)
};

export default GalleryImages;
