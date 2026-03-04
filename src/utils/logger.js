/**
 * Exibe uma lista de filmes formatada no console
 * @param {Array} movies - Lista de filmes do TMDB
 * @param {string} label - Título da categoria
 */
export function showMovies(movies, label) {
    console.log('\nBuscando ' + label + '...\n');

    if (!movies || movies.length === 0) {
        console.log('Nenhum filme encontrado.');
        return;
    }

    movies.forEach((movie, index) => {
        const title = movie.title;
        const date = movie.release_date || 'Sem data';
        const rating = movie.vote_average;

        // Formato: index. Titulo (Ano) - Nota: X.X
        console.log(`${index + 1}. ${title} (${date.substring(0, 4)}) - Nota: ${rating}`);
    });

    console.log(`\nTotal de resultados: ${movies.length}\n`);
}

/**
 * Exibe uma mensagem de erro formatada
 * @param {string} message 
 */
export function showError(message) {
    console.error(`\nErro: ${message}\n`);
}