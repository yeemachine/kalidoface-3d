self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("fetch", function (event) {
     event.respondWith(
        // caches.match() will look for a cache entry in all of the caches available to the service worker.
        // It's an alternative to first opening a specific named cache and then matching on that.
        caches.match(event.request).then(function (response) {
          if (response) {
            // console.log("Found response in cache:", response);
            return response;
          }
          //   console.log(
          //     "No response found in cache. About to fetch from network..."
          //   );
          // event.request will always have the proper mode set ('cors, 'no-cors', etc.) so we don't
          // have to hardcode 'no-cors' like we do when fetch()ing in the install handler.
          return fetch(event.request)
            .then(function (response) {
              //   console.log("Response from network is:", response);

              return response;
            })
            .catch(function (error) {
              // This catch() will handle exceptions thrown from the fetch() operation.
              // Note that a HTTP error response (e.g. 404) will NOT trigger an exception.
              // It will return a normal response object that has the appropriate error code set.
              //   console.error("Fetching failed:", error);

              throw error;
            });
        })
      );
});