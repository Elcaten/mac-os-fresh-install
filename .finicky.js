// Save as ~/.finicky.js

// Default = semrush
// Profile 1 = personal

module.exports = {
    options: {
        // Hide the finicky icon from the top bar. Default: false
        hideIcon: true
    },
    defaultBrowser: {
        name: "Brave Browser",
        profile: "Profile 1",
    },
    rewrite: [
        {
            // Redirect all urls to use https
            match: ({ url }) => url.protocol === "http",
            url: { protocol: "https" }
        }
    ],
    handlers: [
        {
            match: [
                /^https:\/\/mail\.google\.com\/.*$/,
                /^https:\/\/meet\.google\.com\/.*$/,
                /^https:\/\/crowdin\.com\/.*$/,
                /yougood\.one/,
                /semrush/
            ],
            browser: {
                name: "Brave Browser",
                profile: "Default",
            }
        },
    ]
}
