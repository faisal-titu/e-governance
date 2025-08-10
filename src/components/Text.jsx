import { useLanguage } from '../contexts/LanguageContext';

const Text = ({ bn, en, className = '' }) => {
  const { language } = useLanguage();
  
  return (
    <span className={className}>
      {language === 'bn' ? bn : en}
    </span>
  );
};

export default Text;