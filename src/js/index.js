let btn = document.querySelector('#new-quote-btn');
let quote = document.querySelector('.quote-body-text');
let attribute = document.querySelector('.quote-body-attribute');

const quotes = [
   {
	  quote: 'The best way to find yourself is to lose yourself in the service of others.',
	  attribute: 'Mahatma Gandhi'
   },
   {
	  quote: 'If you want to live a happy life, tie it to a goal, not to people or things.',
	  attribute: 'Albert Einstein'
   },
   {
	  quote: 'At his best, man is the noblest of all animals; separated from law and just he is the worst.',
	  attribute: 'Aristotle'
   },
   {
	  quote: 'Your time is limited, so don\'t waste it living someone else\'s life.',
	  attribute: 'Steve Jobs'
   },
   {
	  quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
	  attribute: 'Benjamin Franklin'
   },
   {
	  quote: 'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.',
	  attribute: 'Oprah Winfrey'
   },
   {
	  quote: 'It does not matter how slowly you go as long as you do not stop.',
	  attribute: 'Confucius'
   },
   {
	  quote: 'Our lives begin to end the day we become silent about things that matter.',
	  attribute: 'Martin Luther King, Jr.'
   },
   {
	  quote: 'Remember that not getting what you want is sometimes a wonderful stroke of luck.',
	  attribute: 'Dalai Lama'
   },
   {
	  quote: 'The journey of a thousand miles begins with one step.',
	  attribute: 'Lao Tzu'
   },
   {
	  quote: 'I do the very best     I know how - the very best I can; and I mean to keep on doing so until the end.',
	  attribute: 'Abraham Lincoln'
   }
];

btn.addEventListener('click', function() {
   let random = Math.floor(Math.random() * quotes.length);
   quote.innerText = quotes[random].quote;
   attribute.innerText = quotes[random].attribute;
});
