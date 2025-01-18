import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AddPost, AllPosts, EditPost, Home, Login, Post, Signup } from './pages';
import { AuthLayout } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/login',
        element: <AuthLayout authentication={false} >
          <Login />
        </AuthLayout>
      },
      {
        path: '/signup',
        element: <AuthLayout authentication={false}>
          <Signup />
        </AuthLayout>
      },
      {
        path: '/add-post',
        element: <AuthLayout authentication>
          <AddPost />
        </AuthLayout>
      },
      {
        path: '/all-posts',
        element: <AuthLayout authentication>
          <AllPosts />
        </AuthLayout>
      },
      {
        path: '/post/edit/:slug',
        element: <AuthLayout authentication>
          <EditPost />
        </AuthLayout>
      },
      {
        path: '/post/:slug',
        element: <AuthLayout authentication>
          <Post />
        </AuthLayout>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
)
