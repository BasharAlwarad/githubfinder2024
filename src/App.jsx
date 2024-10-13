const App = () => {
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'mydarktheme' ? 'light' : 'mydarktheme';
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="min-h-screen">
      <button onClick={toggleTheme} className="btn">
        Toggle Theme
      </button>
      <div className="p-6">
        <h1 className="text-2xl">Welcome to My App!</h1>
        <p>This is a sample application using DaisyUI with Tailwind CSS.</p>
      </div>
    </div>
  );
};

export default App;
