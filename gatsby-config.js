module.exports = {
    siteMetadata: {
        title: "Fun Board Games"
    },
    plugins: [
        `gatsby-plugin-sharp`,
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            }
        },
        "gatsby-plugin-mdx",
        {
            resolve: `gatsby-remark-images`,
            options: {
                // It's important to specify the maxWidth (in pixels) of
                // the content container as this plugin uses this as the
                // base for generating different widths of each image.
                maxWidth: 590,
            },
        }
    ]
}