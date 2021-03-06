// Default = semrush
// Profile 1 = personal

module.exports = {
    options: {
        // Hide the finicky icon from the top bar. Default: false
        hideIcon: true
    },
    defaultBrowser: 'safari',
    // defaultBrowser: {
    //     name: "Brave Browser",
    //     profile: "Profile 1", // Personal
    // },
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
                /^https:\/\/docs\.google\.com\/.*$/,
                /^https:\/\/drive\.google\.com\/.*$/,
                /^https:\/\/crowdin\.com\/.*$/,
                /^https:\/\/.*recruitee\.com\/.*$/,
                /sendgrid/,
                /zoom.us/,
                /figma/,
                /yougood/,
                /semrush/
            ],
            browser: {
                name: "Brave Browser",
                profile: "Default", // Work
            }
        },
    ]
}
