"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_loading_markup_1 = require("./get-loading-markup");
var loading = get_loading_markup_1.default();
var getCdnMarkup = function (options) { return "\n    <link rel=\"stylesheet\" href=\"//cdn.jsdelivr.net/npm/graphql-playground-react@" + options.version + "/build/static/css/index.css\" />\n    <link rel=\"shortcut icon\" href=\"//cdn.jsdelivr.net/npm/graphql-playground-react@" + options.version + "/build/favicon.png\" />\n    <script src=\"https://rawgit.com/leonaves/graphql-playground/master/packages/graphql-playground-react/build/static/js/middleware.js\"></script>\n"; };
function renderPlaygroundPage(options) {
    var extendedOptions = __assign({}, options, { canSaveConfig: false });
    // for compatibility
    if (options.subscriptionsEndpoint) {
        extendedOptions.subscriptionEndpoint = options.subscriptionsEndpoint;
    }
    if (options.config) {
        extendedOptions.configString = JSON.stringify(options.config, null, 2);
    }
    if (!extendedOptions.endpoint && !extendedOptions.configString) {
        /* tslint:disable-next-line */
        console.warn("WARNING: You didn't provide an endpoint and don't have a .graphqlconfig. Make sure you have at least one of them.");
    }
    return "\n  <!DOCTYPE html>\n  <html>\n  <head>\n    <meta charset=utf-8 />\n    <meta name=\"viewport\" content=\"user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui\">\n    <link rel=\"shortcut icon\" href=\"https://graphcool-playground.netlify.com/favicon.png\">\n    <title>" + (extendedOptions.title || 'GraphQL Playground') + "</title>\n    " + (extendedOptions.env === 'react' || extendedOptions.env === 'electron'
        ? ''
        : getCdnMarkup(extendedOptions)) + "\n  </head>\n  <body>\n    <style type=\"text/css\">\n      html {\n        font-family: \"Open Sans\", sans-serif;\n        overflow: hidden;\n      }\n  \n      body {\n        margin: 0;\n        background: #172a3a;\n      }\n  \n      .playgroundIn {\n        -webkit-animation: playgroundIn 0.5s ease-out forwards;\n        animation: playgroundIn 0.5s ease-out forwards;\n      }\n  \n      @-webkit-keyframes playgroundIn {\n        from {\n          opacity: 0;\n          -webkit-transform: translateY(10px);\n          -ms-transform: translateY(10px);\n          transform: translateY(10px);\n        }\n        to {\n          opacity: 1;\n          -webkit-transform: translateY(0);\n          -ms-transform: translateY(0);\n          transform: translateY(0);\n        }\n      }\n  \n      @keyframes playgroundIn {\n        from {\n          opacity: 0;\n          -webkit-transform: translateY(10px);\n          -ms-transform: translateY(10px);\n          transform: translateY(10px);\n        }\n        to {\n          opacity: 1;\n          -webkit-transform: translateY(0);\n          -ms-transform: translateY(0);\n          transform: translateY(0);\n        }\n      }\n    </style>\n    " + loading.container + "\n    <div id=\"root\" />\n    <script type=\"text/javascript\">\n      window.addEventListener('load', function (event) {\n        " + loading.script + "\n  \n        const root = document.getElementById('root');\n        root.classList.add('playgroundIn');\n  \n        GraphQLPlayground.init(root, " + JSON.stringify(extendedOptions, null, 2) + ")\n      })\n    </script>\n  </body>\n  </html>\n";
}
exports.renderPlaygroundPage = renderPlaygroundPage;
//# sourceMappingURL=render-playground-page.js.map