import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Breadcrumb = ({ pageName }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const banglaFontClass = currentLanguage === 'bn' ? 'font-bangla' : 'font-satoshi';
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className={`text-title-md2 font-semibold text-black dark:text-white ${banglaFontClass}`}>
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li className={`${banglaFontClass}`}>
            <Link to="/">{t('dashboard')} /</Link>
          </li>
          <li className={`text-primary ${banglaFontClass}`}>{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
