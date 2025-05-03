import { app } from "./Firebase";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const db = getFirestore(app);

export const setYoutubeData = async (data) => {
    try {
        await setDoc(doc(db, "userData", data?.user?.uid), {
            name: data?.user?.displayName,
            email: data?.user?.email,
            photo: data?.user?.photoURL,
            youtube: {
                accessToken: data?._tokenResponse?.oauthAccessToken,
                refreshToken: data?._tokenResponse?.refreshToken,
            }
        }, { merge: true });
    } catch (error) {
        console.error("Error writing user data: ", error);
    }
}

export const setSpotifyData = async (uid, data) => {
    try {
        await setDoc(doc(db, "userData", uid), {
            spotify: {
                accessToken: data?.access_token,
                refreshToken: data?.refresh_token
            }
        }, { merge: true });
    } catch (error) {
        console.error("Error writing user data: ", error);
    }
}

export const getData = async (uid) => {
    try {
        const data = await getDoc(doc(db, "userData", uid));

        if (data.exists()) {
            return data.data();
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error getting user data: ", error);
        return null;
    }
}