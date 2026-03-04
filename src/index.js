import { parseArgs } from './cli/parseArgs.js';
import { fetchMovies } from './services/tmdbService.js';

async function main() { 
    try {
        const type = parseArgs();
        console.log(`Buscando filmes do tipo: ${type.replace('-', ' ')}...`);
        
        const movies = await fetchMovies(type);
        if (movies.length === 0) { 
            console.log('Nenhum filme encontrado para este tipo.');
            return;
        }

        movies.forEach((movie, index) => {
            console.log(`${index + 1}. ${movie.title} (Avaliação: ${movie.vote_average})`);
        });

        console.log(`Total de filmes encontrados: ${movies.length}`);
    } catch (error) {
        console.error(`Erro: ${error.message}`);
        process.exit(1);
    }
}

main();
