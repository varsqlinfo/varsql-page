(function () {
  function initDefaultLang() {
    try {
      const USER_LANG_KEY = "varsqlPageUserLang";

      try {
        let loadInterval = setInterval(() => {
          let langElement = document.querySelectorAll(".dropdown__link[lang]");

          if (langElement.length > 0) {
            clearInterval(loadInterval);
            document.querySelectorAll(".dropdown__link[lang]").forEach((el) => {
              el.addEventListener("click", (e) => {
                localStorage.setItem(
                  USER_LANG_KEY,
                  el.getAttribute("lang").split("-")[0]
                );
              });
            });
          }
        }, 1000);
      } catch (e) {
        console.log(e);
      }

      if (
        "127.0.0.1" != location.hostname &&
        "localhost" != location.hostname
      ) {
        const supportLanguage = ["ko", "zh", "ja"];
        let userLang = localStorage.getItem(USER_LANG_KEY);

        if (!userLang) {
          userLang = "en";
          const userLocale =
            navigator.language ||
            navigator.userLanguage ||
            new Intl.DateTimeFormat().resolvedOptions().locale;
          userLang = userLocale.split("-")[0];
          localStorage.setItem(USER_LANG_KEY, userLang);
        }

        if (userLang != "en") {
          if (
            supportLanguage.includes(userLang) &&
            location.pathname.indexOf(`/${userLang}`) < 0
          ) {
            location.href = `/${userLang}`;
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  window.addEventListener("load", function () {
    //initDefaultLang();
  });
})();
