import { IonContent, IonHeader, IonPage, IonText, IonTextarea, IonTitle, IonToolbar, IonButton, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Login.css';

const Login: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Login page</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonText>
					<h1>Connection required</h1>
				</IonText>
				<IonTextarea placeholder="Email" />
				<IonInput placeholder="Password" type="password" />
				<IonButton routerLink="/home">Send</IonButton>
			</IonContent>
		</IonPage>
	);
};

export default Login;