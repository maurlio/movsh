/**
 * Módulo para parsear os argumentos de linha de comando.
 */
const VALID_TYPES = {
    'em-cartaz': 'Filmes em cartaz',
    'populares': 'Filmes populares',
    'bem-avaliados': 'Filmes mais bem avaliados',
    'futuros': 'Filmes que estrearão em breve',
}

/**
 * Valida os argumentos de linha de comando e retorna o tipo de filme solicitado.
 * @returns {string} O tipo de filme solicitado.
 */
export function parseArgs() {
    const args = process.argv.slice(2);
    const typeIndex = args.indexOf('--tipo');

    if (typeIndex === -1 || !args[typeIndex + 1]) {
        console.error('Erro: Você deve fornecer um tipo de filme usando --tipo <tipo>');
        console.log('Tipos válidos: em-cartaz, populares, bem-avaliados, futuros');
        process.exit(1);
    }

    const selectedType = args[typeIndex + 1];

    if (!VALID_TYPES[selectedType]) {
        console.error('Erro: O tipo "' + selectedType + '" é inválido.');
        console.log('Tipos válidos: em-cartaz, populares, bem-avaliados, futuros');
        process.exit(1);
    }

    return selectedType;
}
