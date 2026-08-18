const CALENDLY_FALLBACK = "https://calendly.com/andres-macedo/30min";

export function calendlyUrl() {
  return import.meta.env.VITE_CALENDLY_URL || CALENDLY_FALLBACK;
}

export function initAnalytics() {
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!id) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + id;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", id);
}

export function initClarity() {
  const id = import.meta.env.VITE_CLARITY_PROJECT_ID;
  if (!id) return;
  (function (c, l, a, r, i) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    const t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    const y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", id);
}

let calendlyLoading = null;
function ensureCalendly() {
  if (window.Calendly) return Promise.resolve(true);
  if (!calendlyLoading) {
    calendlyLoading = new Promise((resolve) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
      const s = document.createElement("script");
      s.async = true;
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.onload = () => resolve(true);
      s.onerror = () => resolve(false);
      document.head.appendChild(s);
    });
  }
  return calendlyLoading;
}

export async function bookCall() {
  if (window.gtag) window.gtag("event", "book_call_click");
  const url = calendlyUrl();
  const ok = await ensureCalendly();
  if (ok && window.Calendly && window.Calendly.initPopupWidget) {
    window.Calendly.initPopupWidget({ url });
  } else {
    window.open(url, "_blank", "noopener");
  }
}
