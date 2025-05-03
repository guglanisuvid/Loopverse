const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
};

const sha256 = async (plain) => {
    const encoder = new TextEncoder()
    const data = encoder.encode(plain)
    return window.crypto.subtle.digest('SHA-256', data)
};

const base64encode = (input) => {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
};

const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const redirect_uri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

export const getSpotifyAuthUrl = async () => {
    const code_verifier = generateRandomString(64);
    const hashed = await sha256(code_verifier)
    const code_challenge = base64encode(hashed);

    const scope = [
        "user-read-playback-state",
        "user-read-recently-played",
        "user-follow-read",
        "playlist-modify-private",
        "user-read-email",
        "user-read-currently-playing",
        "playlist-read-private",
        "user-library-modify",
        "user-follow-modify",
        "user-library-read",
        "user-top-read",
        "playlist-modify-public"
    ].join(" ");
    const authUrl = new URL(import.meta.env.VITE_SPOTIFY_AUTH_URL)

    window.localStorage.setItem('spotify_code_verifier', code_verifier);

    authUrl.search = new URLSearchParams({
        response_type: 'code',
        client_id,
        scope,
        code_challenge_method: 'S256',
        code_challenge,
        redirect_uri,
    }).toString();

    window.location.href = authUrl.toString();
};

export const getSpotifyToken = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    const code_verifier = localStorage.getItem('spotify_code_verifier');

    const url = import.meta.env.VITE_SPOTIFY_TOKEN_URL;
    const payload = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            client_id,
            grant_type: 'authorization_code',
            code,
            redirect_uri,
            code_verifier
        }),
    }

    const body = await fetch(url, payload);
    if (body?.ok) {
        const response = await body.json();
        return response;
    }

    return null
};