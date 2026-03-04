import { parseArgs } from './cli/parseArgs.js';
import { fetchMovies } from './services/tmdbService.js';
import { showMovies, showError } from './utils/logger.js';

async function main() {
    try {
        const type = parseArgs();

        const labels = {
            'em-cartaz': 'Filmes em Cartaz',
            'populares': 'Filmes Populares',
            'bem-avaliados': 'Filmes Bem Avaliados',
            'futuros': 'Próximos Lançamentos'
        };

        const movies = await fetchMovies(type);
        showMovies(movies, labels[type]);
    } catch (error) {
        showError(error.message);
        process.exit(1);
    }
}

main();
