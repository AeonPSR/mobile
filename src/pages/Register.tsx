import { IonContent, IonHeader, IonPage, IonText, IonTextarea, IonTitle, IonToolbar, IonButton, IonInput } from '@ionic/react';
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
				<IonTextarea placeholder="Username" />
				<IonTextarea placeholder="Email" />
				<IonInput placeholder="Password" type="password" />
				<IonInput placeholder="Re-type Password" type="password" />
				<IonButton routerLink="/home">Send</IonButton>
			</IonContent>
		</IonPage>
	);
};

export default Register;