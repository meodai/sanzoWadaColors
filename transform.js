import {colors} from './colors-from-api.js';
import {swatchcolors} from './swatches.js';
import fs from 'fs';

const combinations = new Map();

swatchcolors.forEach(swatch => {
  swatch.combinations.forEach(combinationId => {
    combinations.set(combinationId, []);
  });
});

colors.forEach(color => {
  swatchcolors.find(swc => swc.name === color.name).combinations.forEach(combinationId => {
    color.combinations = swatchcolors.find(swc => swc.name === color.name).combinations;
    delete color.rgb;
    delete color.rgb_array;
    delete color.slug;
    delete color.use_count;
    combinations.get(combinationId).push(color);
  });
});       

const comboArray = [];

combinations.forEach((value, key) => {
  comboArray.push({
    name: 'Combination ' + key,
    id: key,
    colors: value
  });
});

fs.writeFileSync('./combinations.json', JSON.stringify(comboArray, null, 2));