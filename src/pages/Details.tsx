import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonImg, IonSearchbar, IonGrid, IonCol, IonRow} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useParams } from 'react-router';
import { useState } from 'react';
import { Categorie, getCategorieById } from '../data/Categorie';
import { Article, getArticleByCategory } from '../data/Article';
import { Detail, getDetailById } from '../data/Detail';

const Details: React.FC = () => {
	const { id } = useParams<{ id: string; }>();
	const[details, setDetails] = useState(getDetailById(parseInt(id)));

	  return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					Details page
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
			<IonHeader collapse="condense">
				<IonToolbar>
					<IonTitle size="large">Blank</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonButton routerLink="/home">Home</IonButton>
			<IonGrid>
					<IonCol>
						<IonRow>{details.description}</IonRow> 
					</IonCol>
				</IonGrid>
		  </IonContent>
		</IonPage>
	  );
	};
	
	export default Details;
	