import { firebaseAuth, googleProvider, githubProvider } from '../config/firebaseConfig.js';

class AuthService {
    login(providerName) {
        const provider = this.#getProvider(providerName);
        return firebaseAuth.signInWithPopup(provider);
    }

    logout() {
        return firebaseAuth.signOut();
    }

    onAuthChange(onUserChanged) {
        firebaseAuth.onAuthStateChanged((user) => {
            onUserChanged(user);
        });
    }

    #getProvider = (providerName) => {
        switch (providerName) {
            case 'Google':
                return googleProvider;
            case 'Github':
                return githubProvider;
            default:
                throw new Error(`not supported provider :${providerName}`);
        }
    };
}

export default AuthService;
