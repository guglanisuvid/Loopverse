import { app } from "./Firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup, reauthenticateWithPopup, signOut } from "firebase/auth";
import { setYoutubeData } from "./Firestore";

export const auth = getAuth(app);
auth.useDeviceLanguage();
export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, new GoogleAuthProvider());
        if (result) {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            return { token, result }
        }
    } catch (error) {
        console.error(error.code, ": ", error.message);
        console.error("Email:", error.customData?.email);
        console.error("Credential:", GoogleAuthProvider.credentialFromError(error));
    }
}

export const getYoutubeAuthorization = async () => {
    const provider = new GoogleAuthProvider();
    const scopes = [
        "https://www.googleapis.com/auth/youtube.readonly",
        "https://www.googleapis.com/auth/youtube.upload"
    ].join(" ");
    provider.addScope(scopes);
    provider.setCustomParameters({ prompt: 'consent' });

    try {
        const result = await reauthenticateWithPopup(auth?.currentUser, provider);
        if (result) {
            setYoutubeData(result);
        }
    } catch (error) {
        console.error(error.code, ": ", error.message);
        console.error("Email:", error.customData?.email);
        console.error("Credential:", GoogleAuthProvider.credentialFromError(error));
    }
}

export const userSignOut = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error(error);
    }
}