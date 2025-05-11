import { app } from "./Firebase";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const db = getFirestore(app);

export const setUserData = async (data) => {
    try {
        const exists = await getData(data?.uid);

        if (!exists) {
            await setDoc(doc(db, "userData", data?.uid), {
                name: data?.displayName,
                email: data?.email,
                photo: data?.photoURL
            }, { merge: true });
        }
    } catch (error) {
        console.error("Error writing user data: ", error);
    }
}

export const setYoutubeData = async (data) => {
    try {
        console.log(data)
        await setDoc(doc(db, "userData", data?.user?.uid), {
            youtube: {
                accessToken: data?._tokenResponse?.oauthAccessToken,
                refreshToken: data?._tokenResponse?.refreshToken,
                expiresIn: Number(data?._tokenResponse?.expiresIn),
                recievedAt: new Date().toISOString()
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
                refreshToken: data?.refresh_token,
                expiresIn: data?.expires_in,
                recievedAt: new Date().toISOString()
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