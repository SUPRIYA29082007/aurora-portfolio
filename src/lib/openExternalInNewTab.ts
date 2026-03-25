import type { MouseEvent } from "react";

export const openExternalInNewTab =
  (url: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const newTab = window.open(url, "_blank", "noopener,noreferrer");

    if (!newTab) {
      window.location.href = url;
    }
  };
