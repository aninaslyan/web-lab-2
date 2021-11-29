/* Selecting existing Elements */

// input
const input = document.querySelector('.stream-input');

// paragraphs
const outputSubscription1 = document.querySelector('.p1');
const outputSubscription2 = document.querySelector('.p2');
const outputSubscription3 = document.querySelector('.p3');

// buttons
const subscribeP1 = document.querySelector('.button-subscribe-p1');
const subscribeP2 = document.querySelector('.button-subscribe-p2');
const subscribeP3 = document.querySelector('.button-subscribe-p3');

const unsubscribeP1 = document.querySelector('.button-unsubscribe-p1');
const unsubscribeP2 = document.querySelector('.button-unsubscribe-p2');
const unsubscribeP3 = document.querySelector('.button-unsubscribe-p3');

/* Update functions */

const updateP1 = text => outputSubscription1.textContent = text;

const updateP2 = text => outputSubscription2.textContent = text;

const updateP3 = text => outputSubscription3.textContent = text;

/* Observable instance */

const headingsObserver = new Observable();

/* Event listeners */

subscribeP1.addEventListener('click', () => headingsObserver.subscribe(updateP1));
unsubscribeP1.addEventListener('click', () => headingsObserver.unsubscribe(updateP1));
subscribeP2.addEventListener('click', () => headingsObserver.subscribe(updateP2));
unsubscribeP2.addEventListener('click', () => headingsObserver.unsubscribe(updateP2));
subscribeP3.addEventListener('click', () => headingsObserver.subscribe(updateP3));
unsubscribeP3.addEventListener('click', () => headingsObserver.unsubscribe(updateP3));

input.addEventListener('keyup', (e) => headingsObserver.notify(e.target.value));
