import { createPortal } from "react-dom";
import LazyImage from "./LazyImage";
import ToggleClose from "./ToggleClose";
import CategoryPhotoDisplay from "./CategoryPhotoDisplay";
import React from "react";
import { ServiceImageType } from "@/lib/globalTypes";

type ModalView = "categories" | "category-photos";

interface ModalState {
  isVisible: boolean;
  view: ModalView;
  selectedCategory?: {
    name: string;
    description: string | null;
    data: ServiceImageType[];
    icon: string | null;
  };
  selectedPhotoIndex?: number;
}

interface ModalStateSelectedCategory {
  name: string;
  description: string | null;
  data: ServiceImageType[];
  icon: string | null;
}

// Memoize the portal to prevent re-renders
const MemoizedPortal = React.memo(
  ({
    portalRef,
    serviceBackdrop,
    closeModal,
    modalState,
    renderAllCategoriesView,
    onNavigatePhoto,
    onBackToCategories,
  }: {
    portalRef: React.RefObject<HTMLDivElement>;
    serviceBackdrop: ServiceImageType;
    closeModal: () => void;
    modalState: ModalState;
    renderAllCategoriesView: () => React.ReactNode;
    onNavigatePhoto: (direction: "next" | "prev") => void;
    onBackToCategories: () => void;
  }) => {
    return createPortal(
      <main
        ref={portalRef}
        id="all-photos-portal"
        className="fixed inset-0 min-h-screen w-full h-[100dvh] bg-slate-900/90 backdrop-blur-sm z-[100] scrollbar-hide opacity-0"
      >
        <LazyImage
          src={serviceBackdrop.url}
          alt={serviceBackdrop.alt || "alt"}
          isFill={true}
          sizes="100vw"
          containerClassName="w-full h-full opacity-15"
          imageClassName="object-cover absolute inset-0 w-full h-full object-top opacity-15 z-15"
        />
        <div className="relative flex flex-col xs:hidden w-full h-full">
          <div className="flex flex-col xs:hidden w-full h-full">
            <div className="flex flex-row justify-end p-5 ">
              <ToggleClose closeFunction={closeModal} />
            </div>
            {modalState.view === "categories" && renderAllCategoriesView()}
            {modalState.view === "category-photos" && (
              <CategoryPhotoDisplay
                selectedCategory={
                  modalState.selectedCategory as ModalStateSelectedCategory
                }
                selectedPhotoIndex={modalState.selectedPhotoIndex || 0}
                onNavigate={onNavigatePhoto}
                onBack={onBackToCategories}
              />
            )}
          </div>
        </div>
      </main>,
      document.body
    );
  }
);

export default MemoizedPortal;
