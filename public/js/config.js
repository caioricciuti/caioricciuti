var klaroConfig = {
  elementID: "cookieConsent",
  storageMethod: "cookie",
  storageName: "consent",
  htmlTexts: !0,
  cookieDomain: "",
  cookieExpiresAfterDays: 365,
  default: !1,
  mustConsent: !1,
  acceptAll: !0,
  hideDeclineAll: !0,
  hideLearnMore: !1,
  noticeAsModal: true,
  translations: {},
  services: [
    {
      name: "googleAnalytics",
      title: "Gooogle Analytics",
      purposes: ["analytics"],
      cookies: [
        [/^_gid$/, "/", ".caioricciuti.com"],
        [/^_ga$/, "/", ".caioricciuti.com"],
        [/^_gat_UA.*$/, "/", ".caioricciuti.com"],
      ],
    },
    {
      name: "consentManager",
      purposes: ["necessary"],
      cookies: [
        [/^consent$/, "/", ".caioricciuti.com"],
        [/^consentFull$/, "/", ".caioricciuti.com"],
      ],
      required: !0,
    },
    { name: "googleTagManager", purposes: ["necessary"], required: !0 },
  ],
};
