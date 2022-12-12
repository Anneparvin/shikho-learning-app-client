import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Home/Home";
import Main from "../../Layout/Main";
import Login from '../../Components/Login/Login';
import Register from "../../Components/Register/Register";
import FAQ from "../../Components/FAQ/FAQ";
import Blog from "../../Components/Blog/Blog";
import Profile from "../../Components/Profile/Profile";
import Checkout from "../../Components/Checkout/Checkout";
import Courses from "../../Components/Courses/Courses";
import CategoryDetails from '../../Components/CategoryDetails/CategoryDetails';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/courses/:id',
        element:<Courses></Courses>,
         loader: ({params}) =>fetch (`https://shikho-learning-app-server.vercel.app/courses/${params.id}`)
       },
       {
        path:'/category/:id',
        element:<CategoryDetails></CategoryDetails>,
        loader: ({params}) =>fetch (`https://shikho-learning-app-server.vercel.app/category/${params.id}`)
       },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/faq',
        element:<FAQ></FAQ>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/profile',
        element:<Profile></Profile>
      },
      {
        path:'/checkout',
        element:<Checkout></Checkout>,
        loader: ({params}) =>fetch (`https://shikho-learning-app-server.vercel.app/courses/${params.id}`)
      }
    ]
  },
  {
    path:'*',
    element:<div><img src='https://static3.depositphotos.com/1002881/151/i/600/depositphotos_1519030-stock-photo-error-404.jpg' alt='404'/></div>
}

]);

export default router;