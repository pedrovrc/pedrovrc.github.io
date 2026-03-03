const GITHUB_API_URL = "https://api.github.com/users/pedrovrc/repos?sort=updated";

export async function fetchRepos() {
    const response = await fetch(GITHUB_API_URL);

    if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

export async function fetchPinnedRepos() {
    const token = import.meta.env.VITE_GITHUB_TOKEN;

    const query = `{
        user(login: "pedrovrc") {
            pinnedItems(first: 6, types: REPOSITORY) {
                nodes {
                    ... on Repository {
                        name
                        description
                        url
                        stargazerCount
                        forkCount
                        primaryLanguage {
                            name
                            color
                        }
                        repositoryTopics(first: 5) {
                            nodes {
                                topic {
                                    name
                                }
                            }
                        }
                    }
                }
            }
        }
    }`;

    const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query }),
    });

    if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const { data, errors } = await response.json();
    if (errors) {
        throw new Error(`GraphQL error: ${errors[0].message}`);
    }

    return data.user.pinnedItems.nodes;
}
