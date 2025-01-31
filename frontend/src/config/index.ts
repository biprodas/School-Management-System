const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
const apiBaseUrl =
  process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:3900";

export const appConfig = {
  title: "School ERP",
  description: "A complete solution for managing student records, attendance, fees, exams, and communication, making school administration efficient and seamless. 🚀",
  appUrl,
  apiBaseUrl,
  robots: "noindex, nofollow",
  author: {
    name: "Biprodas Roy",
    website: "https://biprodas.me",
  },
  links: {
    linkedIn: "https://www.linkedin.com/in/biprodas-roy",
    github: "https://github.com/biprodas/nextop",
  },
};

export type AppConfig = typeof appConfig;
