// React Redux Imports
import { useSelector } from "react-redux";

// React-Router
import { Link, useNavigate } from "react-router-dom";

// Components
import Logo from "../Logo";
import LogoutButton from "./LogoutButton";

export default function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus
    }
  ];

  return (
    <header className="w-full md:max-w-5xl md:mx-auto md:my-4 h-fit px-4 md:pl-6 md:pr-3 py-3 border-[1.5px] border-stroke md:rounded-2xl flex items-center justify-between">
      <Link to={"/"}>
        <Logo />
      </Link>
      <ul className="size-fit flex items-center gap-x-6">
        {
          navItems.map((items) => (
            items.active && <li key={items.name}>
              <button className="font-regular" onClick={() => navigate(items.slug)}>
                {items.name}
              </button>
            </li>
          ))
        }
      </ul>
      <LogoutButton />
    </header>
  )
}
