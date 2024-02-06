// 1.
const names = [
	'Estrella',
	'Brigitta',
	'Ferrel',
	'Alisun',
	'Gertie',
	'Shurlock',
	'Anselm',
	'Kellina',
	'Peirce',
	'Caty',
	'Tess',
	'Philippine',
	'Tanney',
	'Steven',
	'Aida',
];
const maganhangzok = [
	'a',
	'á',
	'e',
	'é',
	'i',
	'í',
	'o',
	'ó',
	'ö',
	'ő',
	'u',
	'ú',
	'ü',
	'ű',
];
const maganhangzovalKezdodoNevek = names.filter((name) =>
	maganhangzok.includes(name[0].toLowerCase()),
);
maganhangzovalKezdodoNevek.sort((a, b) => a.localeCompare(b));

const namesWrapper = document.querySelector('#names');
const namesParagraph = document.createElement('p');
namesParagraph.textContent = maganhangzovalKezdodoNevek.join('; ');
namesWrapper.appendChild(namesParagraph);

//2.
const quotes = [
	{
		author: 'Albert Einstein',
		quote: 'A person who never made a mistake never tried anything new.',
	},
	{
		author: 'Douglas Adams',
		quote: 'In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.',
	},
	{
		author: 'Terry Pratchett',
		quote: 'Imagination, not intelligence, made us human.',
	},
	{
		author: 'Terry Pratchett',
		quote: "It is said that your life flashes before your eyes before you die. That is true, it's called Life.",
	},
];

const stringQuotes = quotes.map(
	(quote) => `”${quote.quote}” – ${quote.author}`,
);

const createQuote = (quote, parentElement) => {
	const blockquote = document.createElement('blockquote');
	blockquote.textContent = quote;
	parentElement.appendChild(blockquote);
};

const quotesWrapper = document.querySelector('#quotes');
stringQuotes.forEach((quote) => createQuote(quote, quotesWrapper));

//3.
const diceButton = document.querySelector('#dice');
const diceWrapper = document.querySelector('#dice-wrapper');
const dicethrows = [];

const throwsParagraph = document.createElement('p');
diceWrapper.appendChild(throwsParagraph);

const updateDiceThrows = () => {
	dicethrows.sort((a, b) => b - a);
	throwsParagraph.textContent = dicethrows.join(', ');
};

diceButton.addEventListener('click', () => {
	const throw1 = Math.floor(Math.random() * 6) + 1;
	const throw2 = Math.floor(Math.random() * 6) + 1;
	dicethrows.push(throw1 + throw2);

	updateDiceThrows();
});
