import {colors} from './colors-from-api.js';
import {swatchcolors} from './swatches.js';
import fs from 'fs';

const combinations = new Map();

swatchcolors.forEach(swatch => {
  swatch.combinations.forEach(combinationId => {
    combinations.set(combinationId, []);
  });
});

const sortedIds = Array.from(combinations.keys()).sort((a, b) => a - b);

colors.forEach(color => {
  swatchcolors.find(swc => swc.name === color.name).combinations.forEach(combinationId => {
    delete color.rgb;
    delete color.rgb_array;
    delete color.slug;
    delete color.use_count;
    delete color.combinations;
    delete color.cmyk;
    combinations.get(combinationId).push(color);
  });
});       

const comboArray = [];

sortedIds.forEach((key) => {
  const value = combinations.get(key);
  comboArray.push({
    name: 'Combination ' + key,
    id: key,
    colors: value
  });
});

fs.writeFileSync('./combinations.json', JSON.stringify(comboArray, null, 2));