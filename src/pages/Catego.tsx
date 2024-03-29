import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonImg, IonSearchbar, IonGrid, IonCol, IonRow} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useParams } from 'react-router';
import { useState } from 'react';
import { Categorie, getCategorieById } from '../data/Categorie';
import { Article, getArticleByCategory } from '../data/Article';
import { Link } from 'react-router-dom';

const Catego: React.FC = () => {
	const { id } = useParams<{ id: string; }>();
//	const[categories, setCategories] = useState(getCategorieById(parseInt(id)));
	const[articles, setArticles] = useState(getArticleByCategory(parseInt(id)));

	  return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					Category page
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
						{articles.map((article) => {
						return <> 
						<Link to={"/details/"+article.idArt}>
							<IonRow>{article.nom}</IonRow> 
							<IonRow>{article.desc}</IonRow> 
							<IonRow>{article.prix}</IonRow> 
						</Link>
						<br />
						</>
						})}
					</IonCol>
				</IonGrid>
		  </IonContent>
		</IonPage>
	  );
	};
	
	export default Catego;
	