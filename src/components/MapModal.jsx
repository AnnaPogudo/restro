import { XIcon } from "lucide-react";
import { useTranslation } from 'react-i18next';

const MapModal = ({ isOpen, onClose, titleKey, addressKey }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-white rounded-full size-9 flex items-center justify-center shadow-md hover:bg-gray-100"
          aria-label='Close map'
        >
          <XIcon size={18} />
        </button>

        {/* Карта */}
        <div className="w-full" style={{ height: '400px' }}>
          <iframe
            src='https://yandex.ru/map-widget/v1/?um=constructor%3A82676a7fa92328c5fd654980320bb9300f9aae6cb49e2fbad728abf61834047d&source=constructor'
            width='100%'
            height='100%'
            frameBorder='0'
            allowFullScreen
            style={{ border: 0 }}
            title={t(titleKey)}
          />
        </div>

        {/* Нижняя панель */}
        <div className="p-4 border-t">
          <p className="font-medium text-lg">{t(titleKey)}</p>
          <p className="mt-1 text-sm text-zinc-600">{t(addressKey)}</p>
        </div>
      </div>
    </div>
  );
};

export default MapModal;