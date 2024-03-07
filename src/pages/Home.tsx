import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonImg, IonSearchbar, IonGrid, IonCol, IonRow} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useState } from 'react';
import { getAllCategories } from '../data/Categorie';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
const[categories, setCategories] = useState(getAllCategories);
const[images, setImages] = useState(["https://media.istockphoto.com/id/1322277517/fr/photo/herbe-sauvage-dans-les-montagnes-au-coucher-du-soleil.jpg?s=612x612&w=0&k=20&c=tQ19uZQLlIFy8J6QWMyOL6lPt3pdSHBSDFHoXr1K_g0=", "https://ichef.bbci.co.uk/news/976/cpsprodpb/1572B/production/_88615878_976x1024n0037151.jpg.webp", "https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?auto=compress&cs=tinysrgb&w=400"])

  return (
	<IonPage>
		<IonHeader>
			<IonToolbar>
				<IonSearchbar placeholder="Search stuff..." />
				<IonGrid>
					<IonRow>
						{categories.map((category, index) => {
						return <>
						<IonCol>
							<Link to={"/catego/"+category.id}>
								{category.nom}
							</Link>
						</IonCol>
						</>
						})}
					</IonRow>
				</IonGrid>
				<IonList>
					{images.map((image, index) => {
						return <IonImg src={image} />
					})}
				</IonList>
			</IonToolbar>
		</IonHeader>
		<IonContent fullscreen>
		<IonHeader collapse="condense">
			<IonToolbar>
				<IonTitle size="large">Blank</IonTitle>
			</IonToolbar>
		</IonHeader>
		<IonButton routerLink="/login">Login</IonButton>
		<IonButton routerLink="/register">Register</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
