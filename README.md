# Loopverse — Where Creativity Finds Its Rhythm

Loopverse is your all-in-one creative hub designed for content creators and music lovers alike. With two powerful products — Uploop and Filtered Spotify — Loopverse empowers you to collaborate smarter and vibe deeper.

## 🚀 Products

### 🔁 Uploop — Video Collaboration Made Effortless

Uploop bridges the gap between YouTubers and editors, streamlining the video creation and publishing process with ease.

Key Features:

- **Upload Drafts:** Editors can share drafts quickly and efficiently.
- **Instant Feedback:** YouTubers provide real-time feedback and approvals directly in the platform.
- **Direct Publishing:** Finalized videos can be published straight to YouTube — no app switching, no reuploads.

Why Uploop Needs YouTube Access:

- Uses official YouTube API and OAuth 2.0 for secure integration.
- Requires only permissions necessary for uploading and managing videos.
- Ensures full user control — access can be revoked anytime.

### 🎵 Filtered Spotify — Smarter Playlists, Your Way

Filtered Spotify is a Chrome extension that makes your Spotify experience more personal and powerful.

Key Features:

- **Artist Filtering:** Select your favorite artists effortlessly.
- **Era Selection:** Choose a specific date range to curate the vibe.
- **Instant Playlists:** Enjoy tailored playlists — no skips, just hits.

Why We Request Spotify Access:

- We use Spotify’s secure OAuth system.
- Only necessary permissions are requested to read and curate your playlists.
- We never access your credentials or private data.

## 🌐 About Loopverse

Loopverse is more than a tool — it’s a creative playground. Whether you're editing videos or building the perfect playlist, Loopverse helps you:

- Connect. Create. Filter. Approve. Upload.
- Collaborate and publish with ease.
- Listen smarter, vibe deeper.

Join the Loop — where creativity finds its rhythm.

#### Note

This website is currently best enjoyed on desktop screens. While we absolutely love mobile devices, tablets, and everything in between, the layout hasn’t quite caught up with the multiverse of screen dimensions just yet.

## 🛠️ Running the Project

Want to run **AcadAI** on your local machine? Follow these steps:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/guglanisuvid/Loopverse.git
cd Loopverse
```

### 2️⃣ Create a Firebase Project

```plaintext
https://console.firebase.google.com/
```

### 3️⃣ Create an app on Spotify Dashboard

```plaintext
https://developer.spotify.com/dashboard
```

### 4️⃣ Install Dependencies

Navigate into the folder and install dependencies:

```bash
npm install
```

### 5️⃣ Set Up Environment Variables

Create a .env file in the server folder and add:

```plaintext
VITE_FIREBASE_API_KEY = your_firebase_api_key

VITE_FIREBASE_AUTH_DOMAIN = your_firebase_auth_domain

VITE_FIREBASE_PROJECT_ID = your_firebase_project_id

VITE_FIREBASE_STORAGE_BUCKET = your_firebase_storage_bucket

VITE_FIREBASE_MESSAGING_SENDER_ID = your_firebase_message_sender_id

VITE_FIREBASE_APP_ID = ypur_firebase_app_id

VITE_FIREBASE_MEASUREMENT_ID = your_firebase_measurement_id

VITE_SPOTIFY_CLIENT_ID = your_spotify_client_id

VITE_SPOTIFY_REDIRECT_URI = your_spotify_redirect_uri

VITE_SPOTIFY_AUTH_URL = https://accounts.spotify.com/authorize

VITE_SPOTIFY_TOKEN_URL = https://accounts.spotify.com/api/token
```

### 6️⃣ Start the Development Server

```bash
npm run dev
```

### 7️⃣ Open in Browser

Once the server is running, open http://127.0.0.1:5173 to explore the app! 🎉

## 📄 License

MIT License
