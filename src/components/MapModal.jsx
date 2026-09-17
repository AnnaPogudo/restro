import { XIcon } from "lucide-react";

const MapModal = ({ isOpen, onClose, title, address }) => {
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

        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-white rounded-full size-9 flex items-center justify-center shadow-md hover:bg-gray-100 text-xl font-bold"
          aria-label='Close map'
        >
          <XIcon />
        </button>

        <div className="h-100 w-full">
          <iframe
            src='https://yandex.ru/map-widget/v1/?um=constructor%3A82676a7fa92328c5fd654980320bb9300f9aae6cb49e2fbad728abf61834047d&source=constructor'
            width='100%'
            height='100%'
            frameBorder='0'
            allowFullScreen
            style={{ border: 0 }}
            title={`Карта: ${title}`}
          />
        </div>

        <div className="p-4 border-t flex items-center justify-between gap-4">
          <div>
            <p className="text-4xl md:text-5xl max-w-lg mx-auto text-balancemt-5 text-4xl md:text-5xl text-balance">{title}</p>
            <p className="mt-4.5 text-zinx-600 max-w-sm">{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapModal;