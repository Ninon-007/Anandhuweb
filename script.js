import { createNavigation } from './components/Navigation.js';
import { createMovingBoxes } from './components/MovingBoxes.js';

// Replace existing navigation with new responsive navigation
const oldNav = document.querySelector('nav');
const newNav = createNavigation();
oldNav.parentNode.replaceChild(newNav, oldNav);

// Add moving boxes after the main heading
const main = document.querySelector('main');
const movingBoxes = createMovingBoxes();
main.insertBefore(movingBoxes, main.children[1]); // Insert after the first section