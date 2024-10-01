import { DateTime } from "luxon";

export const generateUniqueId = () => {
  return "id-" + Math.random().toString(36).substr(2, 16);
};

export const proceedToHref = (href, navigate) => {
  if (href.startsWith("http")) {
    window.location.href = href;
    return;
  }
  navigate(href);
};

export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};

export const dateToLocaleString = (dateString) => {
  return DateTime.fromJSDate(new Date(dateString)).toLocaleString({
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
};

export const formatDate = (dateString) => {
  return DateTime.fromISO(dateString).toFormat("MM.dd.y HH:mm");
};
