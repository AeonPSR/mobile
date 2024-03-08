import { IonCol, IonGrid, IonContent, IonHeader, IonPage, IonText, IonTextarea, IonTitle, IonToolbar, IonButton, IonInput, IonRow } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Register.css';

const Register: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Register page</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonText>
					<h1>Please create an account</h1>
				</IonText>
				<IonGrid>
					<IonRow>
						<IonCol class="icon" size="1">1</IonCol>
						<IonCol>
							<IonTextarea placeholder="Username" />
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol class="icon">2</IonCol>
						<IonCol>
							<IonTextarea placeholder="Email" />
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol class="icon">3</IonCol>
						<IonCol>
							<IonInput placeholder="Password" type="password" />
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol class="icon">4</IonCol>
						<IonCol>
							<IonInput placeholder="Re-type Password" type="password" />
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol class="icon">5</IonCol>
						<IonCol>
							<IonButton routerLink="/home">Send</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Register;