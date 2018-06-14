'use strict';

import { Horloge } from './horloge';

const divElt = <HTMLElement> document.querySelector('.horloge');
const clock = new Horloge(divElt);
clock.start();
