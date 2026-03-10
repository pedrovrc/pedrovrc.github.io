import React from 'react'
import { useState, useEffect } from 'react';
import RepoCard from '../ui/RepoCard';
import Spinner from '../ui/Spinner';
import { fetchPinnedRepos } from '../../services/githubService';

const ProjectListings = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await fetchPinnedRepos();
                setRepos(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProjects();
    }, [])

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                {loading ? (
                    <Spinner loading={loading} />
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {repos.map((repo) => (
                                <RepoCard key={repo.name} repo={repo} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}

export default ProjectListings