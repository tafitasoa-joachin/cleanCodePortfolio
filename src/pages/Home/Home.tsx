import React, { useState, useEffect } from 'react';

interface Project {
    id: number;
    title: string;
    body: string;
}

const Home: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // API publique pour test
                if (!response.ok) {
                    throw new Error('Erreur de chargement des projets');
                }
                const data = await response.json();
                if (Array.isArray(data)) {
                    setProjects(data); // Mise à jour de l'état avec les projets
                } else {
                    throw new Error('Données des projets non valides');
                }
            } catch (error) {
                setError(error instanceof Error ? error.message : 'Une erreur est survenue');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return <div>Chargement des projets...</div>;
    }

    if (error) {
        return <div>Erreur: {error}</div>;
    }

    return (
        <div>
            <h1>Liste des projets</h1>
            <div>
                {projects.length === 0 ? (
                    <p>Aucun projet trouvé.</p>
                ) : (
                    projects.map((project) => (
                        <div key={project.id}>
                            <h2>{project.title}</h2>
                            <p>{project.body}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Home;
