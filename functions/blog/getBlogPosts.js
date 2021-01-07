function importAllPosts(context)
{
    return context.keys().map((fileName) => ({
        link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
        module: context(fileName)
    }));
}

export function importPost(postName)
{
    return {
        link: "/" + postName,
        module: require.context("../../pages/blog/posts/", true, /\.mdx$/)("./" + postName + "/index.mdx")
    }
}

export const posts = importAllPosts(
    require.context("../../pages/blog/posts/", true, /\.mdx$/)
);