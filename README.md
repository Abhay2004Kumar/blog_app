# Blog App

A full-featured blog application built with **Vite React**, **Appwrite**, and **TinyMCE Editor**. This application allows users to create, edit, and manage blogs with a rich text editor.

---

## Features

- **Create Blogs**: Users can write and publish blogs using the TinyMCE rich text editor.
- **Edit Blogs**: Update existing blogs with an intuitive editing interface.
- **User Authentication**: Secure login and registration using Appwrite.
- **Responsive Design**: Fully responsive interface for seamless usage on mobile and desktop devices.
- **Real-time Updates**: Blog data is stored and retrieved in real time using Appwrite services.

---

## Tech Stack

- **Frontend**: Vite React
- **Backend**: Appwrite (self-hosted backend-as-a-service)
- **Rich Text Editor**: TinyMCE
- **Styling**: Tailwind CSS (or any other CSS framework, if applicable)
- **Deployment**: Vercel (or any platform of your choice)

---

## Installation and Setup

Follow these steps to set up the project on your local machine:

### Prerequisites

- Node.js and npm installed on your system.
- Appwrite instance set up (self-hosted or cloud).
- TinyMCE API key (if required for advanced features).

### Clone the Repository

```bash
git clone https://github.com/Abhay2004Kumar/blog_app.git
cd blog_app
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
VITE_APPWRITE_ENDPOINT=<Your Appwrite Endpoint>
VITE_APPWRITE_PROJECT=<Your Appwrite Project ID>
VITE_TINYMCE_API_KEY=<Your TinyMCE API Key>
```

Replace the placeholders with your actual Appwrite endpoint, project ID, and TinyMCE API key.

### Run the Application

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Usage

1. **Register/Login**: Create an account or log in using your credentials.
2. **Create Blog**: Use the "Create Blog" button to write and publish a new blog.
3. **Edit Blog**: Click on any blog to edit it using the TinyMCE editor.
4. **Manage Blogs**: View all your blogs in a user-friendly dashboard.

---

## Screenshots

### Home Page
![Home Page](https://via.placeholder.com/800x400?text=Home+Page)

### Blog Editor
![Blog Editor](https://via.placeholder.com/800x400?text=Blog+Editor)

---

## Folder Structure

```
blog_app/
├── public/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/           # Page components (Home, BlogEditor, etc.)
│   ├── services/        # Appwrite service integration
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
├── .env                 # Environment variables
├── package.json         # Project dependencies
├── README.md            # Project documentation
```

---

## Deployment

### Deploy Frontend

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist/` directory to a hosting platform like Vercel, Netlify, or AWS.

### Deploy Backend

1. Set up Appwrite (self-hosted or cloud).
2. Create a project and configure database collections for blogs and users.
3. Update the Appwrite endpoint and project ID in the `.env` file.

---

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- [Vite React](https://vitejs.dev/)
- [Appwrite](https://appwrite.io/)
- [TinyMCE](https://www.tiny.cloud/)
