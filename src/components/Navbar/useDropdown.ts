import { useEffect, useRef, useState } from "react";

/**
 * Click-to-toggle behaviour shared by the three navbar pills. The trigger opens
 * and closes its panel; a pointer press outside the pill, or Escape, closes it.
 * Hover is deliberately not a trigger — on touch it left the panel stuck open.
 */
export const useDropdown = <T extends HTMLElement>() => {
  const [open, setOpen] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return {
    open,
    setOpen,
    ref,
    toggle: () => setOpen((prev) => !prev),
  };
};

export default useDropdown;
