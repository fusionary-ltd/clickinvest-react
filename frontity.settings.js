const settings = {
  "name": "my-app",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "clickinvest-theme"
      // "state": {
      //   "theme": {
      //     "menu": [
      //       [
      //         "Home",
      //         "/"
      //       ],
      //       [
      //         "Nature",
      //         "/category/nature/"
      //       ],
      //       [
      //         "Travel",
      //         "/category/travel/"
      //       ],
      //       [
      //         "Japan",
      //         "/tag/japan/"
      //       ],
      //       [
      //         "About Us",
      //         "/about-us/"
      //       ]
      //     ],
      //     "featured": {
      //       "showOnList": false,
      //       "showOnPost": false
      //     }
      //   }
      // }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://architects-seattle.com",
          "api": "https://architects-seattle.com/wp-json"
        }
      }
    },
    // '@10up/frontity-build-config',
    // {
    //   name: '@10upfrontity-build-config',
    //   state: {
    //     TenUpBuildConfig: {
    //       publicPath: '/custom-public-path'
    //     }
    //   }
    // },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
