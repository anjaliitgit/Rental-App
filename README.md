# 🏡 Rental-App

A full-stack property rental platform inspired by Airbnb, built using **Node.js, Express.js, MongoDB Atlas, Passport.js, Cloudinary, and Mapbox**. Users can securely create accounts, manage property listings, upload images, and explore rental locations through an interactive map.

## 🚀 Live Demo

https://rental-app-ikfd.onrender.com

## 📌 Features

- User Authentication (Signup/Login/Logout)
- Create, Update & Delete Property Listings
- Upload Images with Cloudinary
- Interactive Maps using Mapbox
- Reviews and Ratings
- Secure Session Management
- Responsive User Interface

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, Bootstrap, EJS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas, Mongoose
- **Authentication:** Passport.js
- **Cloud Services:** Cloudinary, Mapbox
- **Deployment:** Render

## ⚙️ Installation

```bash
git clone https://github.com/anjaliitgit/Rental-App.git
cd Rental-App
npm install
```

Create a `.env` file:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_access_token
```

Run the application:

```bash
npm start
```

Open:

```
http://localhost:8080
```

## 📂 Project Structure

```
controllers/
models/
routes/
views/
public/
utils/
app.js
middleware.js
cloudConfig.js
package.json
```

## 🔮 Future Enhancements

- Wishlist functionality
- Property booking system
- Advanced search and filters
- User profile management
- Payment integration

## 👩‍💻 Author

**Anjali Yadav**
- GitHub: https://github.com/anjaliitgit

⭐ If you like this project, consider giving it a star!
