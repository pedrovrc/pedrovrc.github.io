const FEATURED_REPOS = [
    'pedrovrc.github.io',
    'krita-timelapse-resizer',
    'React-Crash-Course',
    'Django',
    'Flask',
    'IMC',
];

const BASE = 'https://api.github.com/repos/pedrovrc';
const HEADERS = { Accept: 'application/vnd.github+json' };

async function fetchRepoData(name) {
    const [repoRes, topicsRes] = await Promise.all([
        fetch(`${BASE}/${name}`, { headers: HEADERS }),
        fetch(`${BASE}/${name}/topics`, { headers: HEADERS }),
    ]);

    if (!repoRes.ok) throw new Error(`GitHub API error: ${repoRes.status} ${repoRes.statusText}`);

    const repo = await repoRes.json();
    const { names: topicNames } = topicsRes.ok ? await topicsRes.json() : { names: [] };

    return {
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        stargazerCount: repo.stargazers_count,
        forkCount: repo.forks_count,
        primaryLanguage: repo.language ? { name: repo.language, color: null } : null,
        repositoryTopics: {
            nodes: topicNames.map((t) => ({ topic: { name: t } })),
        },
    };
}

export async function fetchPinnedRepos() {
    return Promise.all(FEATURED_REPOS.map(fetchRepoData));
}
