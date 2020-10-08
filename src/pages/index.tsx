import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation('Home');

  const handleClick = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => handleClick('pt-BR')}>portuguese</button>
      <button onClick={() => handleClick('en-US')}>english</button>
      <h1>{t('HomeTitle')}</h1>
    </div>
  );
};

export default App;
