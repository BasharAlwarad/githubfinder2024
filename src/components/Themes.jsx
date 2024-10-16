// Import necessary icons
import { FaMoon, FaSun, FaRobot } from 'react-icons/fa';
import { IoMdNuclear } from 'react-icons/io';
import { GiCircuitry } from 'react-icons/gi';

const Themes = () => {
  const themes = [
    {
      name: 'myDarkTheme',
      icon: <FaMoon className="pr-2 text-5xl text-black" />,
    },
    { name: 'light', icon: <FaSun className="pr-2 text-5xl text-pink-500" /> },
    {
      name: 'cyberpunk',
      icon: <FaRobot className="pr-2 text-5xl text-yellow-500" />,
    },
    {
      name: 'luxury',
      icon: <IoMdNuclear className="pr-2 text-5xl text-green-500" />,
    },
    {
      name: 'synthwave',
      icon: <GiCircuitry className="pr-2 text-5xl text-blue-500" />,
    },
  ];

  const toggleTheme = (mode) => {
    document.documentElement.setAttribute('data-theme', mode);
  };

  return (
    <details className="dropdown">
      <summary className="m-1 btn">Themes</summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] shadow">
        {themes.map((theme) => (
          <li key={theme.name} onClick={() => toggleTheme(theme.name)}>
            {theme.icon}
          </li>
        ))}
      </ul>
    </details>
  );
};

export default Themes;
