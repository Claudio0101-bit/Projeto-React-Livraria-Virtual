import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage/Login";
import Home from "./pages/Home/Home";
import GenrePage from "./pages/GenrePage/GenrePage";
import BookPage from "./pages/BookPage";
import RootLayout from "./RootLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/home",
        element: <RootLayout />,
        children: [
            {   
                index: true,
                element: <Home/>,
                
            },
            {
                path: "genres/:genre",
                element: <GenrePage/>,
            },
            {
                path: "books/:bookId",
                element: <BookPage/>,
            }],
    },
    
]);

export default router;