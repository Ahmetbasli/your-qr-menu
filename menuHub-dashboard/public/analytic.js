// Initialize the agent at application startup.
var isOnce = false;
if (isOnce === false) {
  const fpPromise = import("https://openfpcdn.io/fingerprintjs/v3").then(
    (FingerprintJS) => FingerprintJS.load()
  );
  // Get the visitor identifier when you need it.
  fpPromise
    .then((fp) => fp.get())
    .then((result) => {
      // This is the visitor identifier:
      var visitorId = result.visitorId;

      const initialize = () => {
        window.addEventListener("load", () => {
          setTimeout(handleWindowLoad, 0);
        });
      };

      const handleWindowLoad = () => {
        const performance = window.performance;
        if (!performance) return;
        // performance.timing is deprecated, but used here for browser compatibility
        // time = performance.getEntriesByType("navigation")[0] is another option
        const time = performance.timing;
        const ttfb = time.responseStart - time.navigationStart;
        const fcpTime = performance.getEntriesByName(
          "first-contentful-paint"
        )[0].startTime;
        const domLoadTime =
          time.domContentLoadedEventEnd - time.navigationStart;
        const windowLoadTime = time.loadEventEnd - time.navigationStart;
        const resourceLoadTimes = getResourceLoadTimings(performance);

        postPerformanceMetrics({
          ttfb: "visitorId",
          fcpTime,
          domLoadTime,
          windowLoadTime,
          resourceLoadTimes,
          creationDate: new Date(),
        });
      };

      const postPerformanceMetrics = (performanceMetrics) => {
        const analyticsData = {
          data: performanceMetrics,
          origin: window.location.origin,
          url: window.location.href,
        };

        postData(
          "https://nodejs-gambling-01.herokuapp.com/website",
          analyticsData
        );
      };

      const postData = async (endpoint = "", data = {}) => {
        try {
          const response = await fetch(endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          if (!response.ok)
            throw new Error(`An error accored ${response.status}`);

          return response.json();
        } catch (error) {
          console.log(error);
        }
      };

      const getResourceLoadTimings = (performance) => {
        return performance
          .getEntriesByType("resource")
          .filter((element) => {
            return element.initiatorType;
          })
          .map((element) => {
            return {
              name: element.name,
              initiatorType: element.initiatorType,
              transferSize: element.transferSize,
              duration: element.duration,
            };
          });
      };

      initialize();
    });
}
isOnce = true;
