import { useCallback, useEffect, useState } from "react";

// The reference site drives its Photo Tour / Lightbox overlay state via URL
// query params: ?modal=PHOTO_TOUR_SCROLLABLE&modalItem=1003 (confirmed by
// reading the browser address bar visible in the screen recording). We
// reproduce that same pattern here so the overlay is shareable/back-button
// friendly, matching the reference's actual behavior rather than inventing
// a simpler local-state-only modal.

export type ModalState = {
  modal: string | null;
  modalItem: string | null;
};

function readFromLocation(): ModalState {
  const params = new URLSearchParams(window.location.search);
  return {
    modal: params.get("modal"),
    modalItem: params.get("modalItem"),
  };
}

export function useModalRoute() {
  const [state, setState] = useState<ModalState>(() => readFromLocation());

  useEffect(() => {
    const onPop = () => setState(readFromLocation());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const push = useCallback((next: ModalState) => {
    const params = new URLSearchParams(window.location.search);
    if (next.modal) params.set("modal", next.modal);
    else params.delete("modal");
    if (next.modalItem) params.set("modalItem", next.modalItem);
    else params.delete("modalItem");
    const query = params.toString();
    const url = query ? `${window.location.pathname}?${query}` : window.location.pathname;
    window.history.pushState({}, "", url);
    setState(next);
  }, []);

  const close = useCallback(() => {
    window.history.pushState({}, "", window.location.pathname);
    setState({ modal: null, modalItem: null });
  }, []);

  return { ...state, push, close };
}
