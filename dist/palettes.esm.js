const palettes = [{"name":"Combination 176","id":176,"colors":["#ffb3f0","#ffcfc4","#80ffcc"]},{"name":"Combination 227","id":227,"colors":["#ffb3f0","#a6e6db","#29bdad"]},{"name":"Combination 273","id":273,"colors":["#ffb3f0","#6f0043","#9b5348","#b5d1cc"]},{"name":"Combination 27","id":27,"colors":["#ffa6d9","#1b3644"]},{"name":"Combination 43","id":43,"colors":["#ffa6d9","#9c52f2"]},{"name":"Combination 87","id":87,"colors":["#ffa6d9","#a6d40d"]},{"name":"Combination 97","id":97,"colors":["#ffa6d9","#c9303e"]},{"name":"Combination 128","id":128,"colors":["#ffa6d9","#6bffb3","#9161f2"]},{"name":"Combination 169","id":169,"colors":["#ffa6d9","#fff59e","#9cb29e"]},{"name":"Combination 174","id":174,"colors":["#ffa6d9","#bfabcc","#6b2e63"]},{"name":"Combination 206","id":206,"colors":["#ffa6d9","#fa9442","#c2612c"]},{"name":"Combination 246","id":246,"colors":["#ffa6d9","#a32100","#f5f5b8","#ffbf6e"]},{"name":"Combination 254","id":254,"colors":["#ffa6d9","#f5f5b8","#718600","#cc85d1"]},{"name":"Combination 264","id":264,"colors":["#ffa6d9","#e81900","#b3d9a3","#29bdad"]},{"name":"Combination 342","id":342,"colors":["#ffa6d9","#ffb852","#8c6510","#172713"]},{"name":"Combination 101","id":101,"colors":["#e6adcf","#0024cc"]},{"name":"Combination 105","id":105,"colors":["#e6adcf"]},{"name":"Combination 116","id":116,"colors":["#e6adcf","#4733ff"]},{"name":"Combination 120","id":120,"colors":["#e6adcf","#a90636"]},{"name":"Combination 165","id":165,"colors":["#e6adcf","#ff4dc9","#5c2c45"]},{"name":"Combination 231","id":231,"colors":["#e6adcf","#681916","#4f8fe6"]},{"name":"Combination 18","id":18,"colors":["#d1b0b3","#2d0060"]},{"name":"Combination 125","id":125,"colors":["#d1b0b3","#29bdad","#202d85"]},{"name":"Combination 308","id":308,"colors":["#d1b0b3","#d50c42","#de4500","#94ff94"]},{"name":"Combination 35","id":35,"colors":["#b08699","#a10b2b"]},{"name":"Combination 68","id":68,"colors":["#b08699","#ffff00"]},{"name":"Combination 185","id":185,"colors":["#b08699","#c9303e","#fff59e"]},{"name":"Combination 191","id":191,"colors":["#b08699","#e0b81f","#0d75ff"]},{"name":"Combination 223","id":223,"colors":["#b08699","#d99e73","#b5ffc2"]},{"name":"Combination 239","id":239,"colors":["#b08699","#c4bf33","#b3e8c2"]},{"name":"Combination 244","id":244,"colors":["#b08699","#c74300","#5c8a73","#008aa1"]},{"name":"Combination 268","id":268,"colors":["#b08699","#b85e00","#172713","#bfffe6"]},{"name":"Combination 285","id":285,"colors":["#b08699","#a93400","#ff3319","#b5ffc2"]},{"name":"Combination 321","id":321,"colors":["#b08699","#f5f5b8","#172713","#96bfe6"]},{"name":"Combination 92","id":92,"colors":["#ff7399","#00d973"]},{"name":"Combination 123","id":123,"colors":["#ff7399","#f2ff26","#6b2e63"]},{"name":"Combination 320","id":320,"colors":["#ff7399","#f5f5b8","#6ea900","#a6e6db"]},{"name":"Combination 332","id":332,"colors":["#ff7399","#d50c42","#172713","#00592e"]},{"name":"Combination 240","id":240,"colors":["#ff788c","#ffff00","#29bdad"]},{"name":"Combination 6","id":6,"colors":["#ff616b","#000831"]},{"name":"Combination 21","id":21,"colors":["#ff616b","#33ff7d"]},{"name":"Combination 112","id":112,"colors":["#ff616b","#000000"]},{"name":"Combination 166","id":166,"colors":["#ff616b","#faed8f","#0f261f"]},{"name":"Combination 193","id":193,"colors":["#ff616b","#faed8f","#23c17c"]},{"name":"Combination 201","id":201,"colors":["#ff616b","#718600","#94ff94"]},{"name":"Combination 230","id":230,"colors":["#ff616b","#b5ffc2","#94ff94"]},{"name":"Combination 300","id":300,"colors":["#ff616b","#ffb852","#b5ffc2","#80ffcc"]},{"name":"Combination 315","id":315,"colors":["#ff616b","#f5f5b8","#fa9442","#bf36e0"]},{"name":"Combination 341","id":341,"colors":["#ff616b","#328e13","#172713","#a6e6db"]},{"name":"Combination 34","id":34,"colors":["#ff5ec4","#b5d1cc"]},{"name":"Combination 59","id":59,"colors":["#ff5ec4"]},{"name":"Combination 90","id":90,"colors":["#ff5ec4","#9c52f2"]},{"name":"Combination 108","id":108,"colors":["#ff5ec4","#a32100"]},{"name":"Combination 134","id":134,"colors":["#ff5ec4","#9161f2","#3400a3"]},{"name":"Combination 153","id":153,"colors":["#ff5ec4","#ffab00","#a6d40d"]},{"name":"Combination 197","id":197,"colors":["#ff5ec4","#4d52de","#b5d1cc"]},{"name":"Combination 242","id":242,"colors":["#ff5ec4","#a93400","#1b8e13","#000000"]},{"name":"Combination 248","id":248,"colors":["#ff5ec4","#b68400","#b8b8ff","#53225c"]},{"name":"Combination 276","id":276,"colors":["#ff5ec4","#ffcfc4","#a6ff47","#000000"]},{"name":"Combination 287","id":287,"colors":["#ff5ec4","#c4bf33","#abf5ed","#80ffcc"]},{"name":"Combination 314","id":314,"colors":["#ff5ec4","#681916","#0024cc","#2d0060"]},{"name":"Combination 327","id":327,"colors":["#ff5ec4","#b85e00","#c0b490","#bfabcc"]},{"name":"Combination 336","id":336,"colors":["#ff5ec4","#681916","#fff59e","#324e2a"]},{"name":"Combination 14","id":14,"colors":["#ff4dc9","#faed8f"]},{"name":"Combination 147","id":147,"colors":["#ff4dc9","#740909","#b5ffc2"]},{"name":"Combination 184","id":184,"colors":["#ff4dc9","#ebd999","#76844e"]},{"name":"Combination 195","id":195,"colors":["#ff4dc9","#fff59e","#b5d1cc"]},{"name":"Combination 224","id":224,"colors":["#ff4dc9","#417777","#6b2e63"]},{"name":"Combination 277","id":277,"colors":["#ff4dc9","#b319ab","#718600","#06004f"]},{"name":"Combination 55","id":55,"colors":["#d94d99","#ffffff"]},{"name":"Combination 162","id":162,"colors":["#d94d99","#85b857","#b875eb"]},{"name":"Combination 260","id":260,"colors":["#d94d99","#f59994","#b3e8c2","#33ff7d"]},{"name":"Combination 265","id":265,"colors":["#d94d99","#ffe600","#99b333","#06004f"]},{"name":"Combination 284","id":284,"colors":["#ed3d66","#ffe600","#33ff7d","#00592e"]},{"name":"Combination 17","id":17,"colors":["#e62e73","#33ff7d"]},{"name":"Combination 77","id":77,"colors":["#e62e73","#003e83"]},{"name":"Combination 252","id":252,"colors":["#e62e73","#b85e00","#baa600","#2dbc94"]},{"name":"Combination 262","id":262,"colors":["#e62e73","#ebd999","#328e13"]},{"name":"Combination 270","id":270,"colors":["#e62e73","#f5f5b8","#58771e","#328e13"]},{"name":"Combination 280","id":280,"colors":["#e62e73","#405416","#cc85d1","#6b2e63"]},{"name":"Combination 282","id":282,"colors":["#e62e73","#c2975a","#94ff94","#b875eb"]},{"name":"Combination 325","id":325,"colors":["#e62e73","#faed8f","#e0b81f","#0f261f"]},{"name":"Combination 3","id":3,"colors":["#b85e00","#fff59e"]},{"name":"Combination 13","id":13,"colors":["#b85e00","#7e3075"]},{"name":"Combination 33","id":33,"colors":["#b85e00","#1b3644"]},{"name":"Combination 70","id":70,"colors":["#b85e00","#405416"]},{"name":"Combination 86","id":86,"colors":["#b85e00","#33ff7d"]},{"name":"Combination 130","id":130,"colors":["#b85e00","#a10b2b","#2619d1"]},{"name":"Combination 131","id":131,"colors":["#b85e00","#de4500","#00cf91"]},{"name":"Combination 182","id":182,"colors":["#b85e00","#362304","#000831"]},{"name":"Combination 243","id":243,"colors":["#b85e00","#ebd999","#58771e","#1b3644"]},{"name":"Combination 247","id":247,"colors":["#b85e00","#ffe600","#00d973","#0024cc"]},{"name":"Combination 255","id":255,"colors":["#b85e00","#c4bf33","#80ffcc","#000000"]},{"name":"Combination 269","id":269,"colors":["#b85e00","#730f1f","#9c52f2","#000000"]},{"name":"Combination 279","id":279,"colors":["#b85e00","#f59994","#c0b490","#0d2b52"]},{"name":"Combination 293","id":293,"colors":["#b85e00","#b5ffc2","#65a98f","#40c945"]},{"name":"Combination 298","id":298,"colors":["#b85e00","#f2ff26","#ff3319","#000000"]},{"name":"Combination 319","id":319,"colors":["#b85e00","#ffe600","#ff8c00","#328e13"]},{"name":"Combination 40","id":40,"colors":["#c74300","#a6d40d"]},{"name":"Combination 85","id":85,"colors":["#c74300","#008aa1"]},{"name":"Combination 155","id":155,"colors":["#fa2b00","#00d973","#000831"]},{"name":"Combination 194","id":194,"colors":["#fa2b00","#ffcfc4","#4f8fe6"]},{"name":"Combination 216","id":216,"colors":["#fa2b00","#40c945","#000000"]},{"name":"Combination 219","id":219,"colors":["#fa2b00","#00592e"]},{"name":"Combination 257","id":257,"colors":["#f20000","#ffab00","#0d75ff","#9c52f2"]},{"name":"Combination 266","id":266,"colors":["#f20000","#ebd999","#85b857","#00d973"]},{"name":"Combination 301","id":301,"colors":["#f20000","#ebd999","#85b857","#9c52f2"]},{"name":"Combination 322","id":322,"colors":["#f20000","#a32100","#bf36e0","#4733ff"]},{"name":"Combination 31","id":31,"colors":["#e81900","#fff59e"]},{"name":"Combination 164","id":164,"colors":["#e81900","#ffab00","#2619d1"]},{"name":"Combination 179","id":179,"colors":["#e81900","#fa9442","#0024cc"]},{"name":"Combination 241","id":241,"colors":["#e81900","#fff59e","#c3a55c","#417777"]},{"name":"Combination 25","id":25,"colors":["#c9303e","#bfffe6"]},{"name":"Combination 47","id":47,"colors":["#c9303e","#bfabcc"]},{"name":"Combination 137","id":137,"colors":["#c9303e","#ffbf6e","#56aa69"]},{"name":"Combination 152","id":152,"colors":["#c9303e","#681916","#a6e6db"]},{"name":"Combination 275","id":275,"colors":["#c9303e","#c0b490","#651300","#6b2e63"]},{"name":"Combination 198","id":198,"colors":["#a93400","#ffe600","#40c945"]},{"name":"Combination 263","id":263,"colors":["#a93400","#f2ad78","#b5ffc2","#1b3644"]},{"name":"Combination 286","id":286,"colors":["#a93400","#ffab00","#00cf91","#202d85"]},{"name":"Combination 297","id":297,"colors":["#a93400","#ff8c00","#58771e","#202d85"]},{"name":"Combination 312","id":312,"colors":["#a93400","#ff8c00","#65a98f","#0057ba"]},{"name":"Combination 333","id":333,"colors":["#a93400","#f2ff26","#94ff94","#0d75ff"]},{"name":"Combination 343","id":343,"colors":["#a93400","#ebd999","#505423","#003e83"]},{"name":"Combination 199","id":199,"colors":["#a7374b","#706934","#0024cc"]},{"name":"Combination 283","id":283,"colors":["#a7374b","#730f1f","#6bffb3"]},{"name":"Combination 136","id":136,"colors":["#d50c42","#19cc33","#3400a3"]},{"name":"Combination 39","id":39,"colors":["#d60036","#0057ba"]},{"name":"Combination 117","id":117,"colors":["#d60036","#000000"]},{"name":"Combination 122","id":122,"colors":["#d60036","#ffb852","#00d973"]},{"name":"Combination 154","id":154,"colors":["#d60036","#ffff00","#0d75ff"]},{"name":"Combination 225","id":225,"colors":["#d60036","#00592e","#53225c"]},{"name":"Combination 232","id":232,"colors":["#d60036","#f2ad78","#000831"]},{"name":"Combination 307","id":307,"colors":["#d60036","#b8b8ff","#9c52f2","#340059"]},{"name":"Combination 313","id":313,"colors":["#d60036","#ffff00","#1b8e13","#000000"]},{"name":"Combination 299","id":299,"colors":["#cc1a97","#f59994","#6ea900","#008aa1"]},{"name":"Combination 331","id":331,"colors":["#cc1a97","#06004f","#9161f2","#2619d1"]},{"name":"Combination 48","id":48,"colors":["#b319ab","#0057ba"]},{"name":"Combination 144","id":144,"colors":["#b319ab","#ff5200","#000000"]},{"name":"Combination 170","id":170,"colors":["#b319ab","#ffab00","#3400a3"]},{"name":"Combination 204","id":204,"colors":["#b319ab","#c2612c","#a6e6db"]},{"name":"Combination 346","id":346,"colors":["#b319ab","#b5ffc2","#bdf226","#5c8a73"]},{"name":"Combination 220","id":220,"colors":["#b90078","#d99e73","#9c52f2"]},{"name":"Combination 271","id":271,"colors":["#b90078","#94ff94","#2dbc94","#0f261f"]},{"name":"Combination 142","id":142,"colors":["#9e194d","#baa600","#96bfe6"]},{"name":"Combination 37","id":37,"colors":["#a32100","#3400a3"]},{"name":"Combination 328","id":328,"colors":["#a32100","#ff7340","#362304","#23c17c"]},{"name":"Combination 51","id":51,"colors":["#a10b2b","#0d75ff"]},{"name":"Combination 104","id":104,"colors":["#a10b2b","#f5f5b8"]},{"name":"Combination 181","id":181,"colors":["#a10b2b","#2619d1","#340059"]},{"name":"Combination 200","id":200,"colors":["#a10b2b","#bcd382"]},{"name":"Combination 221","id":221,"colors":["#a10b2b","#b5d1cc","#000000"]},{"name":"Combination 228","id":228,"colors":["#a10b2b","#fff59e","#b5d1cc"]},{"name":"Combination 233","id":233,"colors":["#a10b2b","#888d2a","#202d85"]},{"name":"Combination 237","id":237,"colors":["#a10b2b","#651300","#96bfe6"]},{"name":"Combination 245","id":245,"colors":["#a10b2b","#6ea900","#0d2b52","#1b3644"]},{"name":"Combination 338","id":338,"colors":["#a10b2b","#ffab00","#00592e","#bfabcc"]},{"name":"Combination 30","id":30,"colors":["#a90636","#9fc2b2"]},{"name":"Combination 71","id":71,"colors":["#a90636","#d99e73"]},{"name":"Combination 212","id":212,"colors":["#a90636","#8c6510","#96bfe6"]},{"name":"Combination 311","id":311,"colors":["#a90636","#ffb852","#b3d9a3","#bdf226"]},{"name":"Combination 324","id":324,"colors":["#a90636","#4f8fe6","#9c52f2","#b5d1cc"]},{"name":"Combination 251","id":251,"colors":["#a10045","#ffff00","#1b8e13","#1b3644"]},{"name":"Combination 261","id":261,"colors":["#a10045","#fff59e","#80ffcc","#9cb29e"]},{"name":"Combination 110","id":110,"colors":["#6c2b11","#362304"]},{"name":"Combination 121","id":121,"colors":["#6c2b11","#d99e73","#405416"]},{"name":"Combination 145","id":145,"colors":["#6c2b11","#a6d40d","#06004f"]},{"name":"Combination 161","id":161,"colors":["#6c2b11","#f2ad78","#0057ba"]},{"name":"Combination 58","id":58,"colors":["#681916","#33ff7d"]},{"name":"Combination 82","id":82,"colors":["#681916","#2d0060"]},{"name":"Combination 95","id":95,"colors":["#681916","#06004f"]},{"name":"Combination 186","id":186,"colors":["#681916","#d99e73","#0d75ff"]},{"name":"Combination 249","id":249,"colors":["#681916","#c0b490","#d1bd19","#417777"]},{"name":"Combination 304","id":304,"colors":["#681916","#ffb852","#7e8743","#00d973"]},{"name":"Combination 345","id":345,"colors":["#681916","#bfffe6","#6bffb3","#4733ff"]},{"name":"Combination 16","id":16,"colors":["#740909","#abf5ed"]},{"name":"Combination 133","id":133,"colors":["#740909","#33ff7d"]},{"name":"Combination 316","id":316,"colors":["#740909","#19cc33","#2619d1","#3400a3"]},{"name":"Combination 335","id":335,"colors":["#740909","#ff8c00","#2619d1","#1b3644"]},{"name":"Combination 157","id":157,"colors":["#6f0043","#d1bd19","#4f8fe6"]},{"name":"Combination 124","id":124,"colors":["#730f1f","#e0b81f","#99b333"]},{"name":"Combination 171","id":171,"colors":["#730f1f","#ff8c00","#b3e8c2"]},{"name":"Combination 177","id":177,"colors":["#730f1f","#888d2a","#b8b8ff"]},{"name":"Combination 205","id":205,"colors":["#730f1f","#f59994","#2619d1"]},{"name":"Combination 217","id":217,"colors":["#730f1f","#d99e73","#1b8e13"]},{"name":"Combination 258","id":258,"colors":["#730f1f","#f2ad78","#718600","#008aa1"]},{"name":"Combination 9","id":9,"colors":["#3d0079","#6e66d4"]},{"name":"Combination 63","id":63,"colors":["#5c2c45","#29bdad"]},{"name":"Combination 91","id":91,"colors":["#5c2c45","#c05200"]},{"name":"Combination 226","id":226,"colors":["#5c2c45","#ffb852","#2619d1"]},{"name":"Combination 290","id":290,"colors":["#5c2c45","#fff59e","#405416","#94ff94"]},{"name":"Combination 337","id":337,"colors":["#5c2c45","#cc85d1","#531745","#000000"]},{"name":"Combination 52","id":52,"colors":["#f5f5b8","#000000"]},{"name":"Combination 72","id":72,"colors":["#f5f5b8","#abf5ed"]},{"name":"Combination 80","id":80,"colors":["#f5f5b8","#9161f2"]},{"name":"Combination 132","id":132,"colors":["#f5f5b8","#fa9442"]},{"name":"Combination 135","id":135,"colors":["#f5f5b8","#328e13","#96bfe6"]},{"name":"Combination 151","id":151,"colors":["#f5f5b8","#ff8c00","#003e83"]},{"name":"Combination 208","id":208,"colors":["#f5f5b8","#2dbc94","#008aa1"]},{"name":"Combination 294","id":294,"colors":["#f5f5b8","#ffb852","#328e13","#96bfe6"]},{"name":"Combination 296","id":296,"colors":["#f5f5b8","#d99e73","#5e4017","#1b3644"]},{"name":"Combination 310","id":310,"colors":["#f5f5b8","#f2ad78","#718600","#172713"]},{"name":"Combination 326","id":326,"colors":["#f5f5b8","#ff3319","#a6ff47","#7aff00"]},{"name":"Combination 60","id":60,"colors":["#fff59e","#0d2b52"]},{"name":"Combination 76","id":76,"colors":["#fff59e","#9cb29e"]},{"name":"Combination 99","id":99,"colors":["#fff59e","#29bdad"]},{"name":"Combination 109","id":109,"colors":["#fff59e","#324e2a"]},{"name":"Combination 111","id":111,"colors":["#fff59e","#a6ff47"]},{"name":"Combination 203","id":203,"colors":["#fff59e","#f59994","#405416"]},{"name":"Combination 272","id":272,"colors":["#fff59e","#ff5200","#b5ffc2","#96bfe6"]},{"name":"Combination 281","id":281,"colors":["#fff59e","#00d973","#94ff94","#008aa1"]},{"name":"Combination 292","id":292,"colors":["#fff59e","#f2ad78","#c3a55c","#c0b490"]},{"name":"Combination 115","id":115,"colors":["#faed8f","#ff3319"]},{"name":"Combination 303","id":303,"colors":["#faed8f","#ff3319","#172713","#b5d1cc"]},{"name":"Combination 11","id":11,"colors":["#ebd999","#9fc2b2"]},{"name":"Combination 50","id":50,"colors":["#ebd999","#2d0060"]},{"name":"Combination 94","id":94,"colors":["#ebd999","#00592e"]},{"name":"Combination 102","id":102,"colors":["#ebd999","#c05200"]},{"name":"Combination 126","id":126,"colors":["#ebd999","#e0b81f","#0024cc"]},{"name":"Combination 178","id":178,"colors":["#ebd999","#a6e6db","#2dbc94"]},{"name":"Combination 190","id":190,"colors":["#ebd999","#de4500","#000000"]},{"name":"Combination 209","id":209,"colors":["#ebd999","#ff8c00","#96bfe6"]},{"name":"Combination 214","id":214,"colors":["#ebd999","#9b5348","#2619d1"]},{"name":"Combination 235","id":235,"colors":["#ebd999","#ff8c00","#bfabcc"]},{"name":"Combination 45","id":45,"colors":["#ffcfc4","#f2ff26"]},{"name":"Combination 84","id":84,"colors":["#ffcfc4","#0f261f"]},{"name":"Combination 88","id":88,"colors":["#ffcfc4","#0d75ff"]},{"name":"Combination 113","id":113,"colors":["#ffcfc4","#362304"]},{"name":"Combination 150","id":150,"colors":["#ffcfc4","#a6d40d","#b3e8c2"]},{"name":"Combination 334","id":334,"colors":["#ffcfc4","#718600","#a6ff47","#008aa1"]},{"name":"Combination 317","id":317,"colors":["#ffbf99","#c0b490","#f2ff26","#b5ffc2"]},{"name":"Combination 78","id":78,"colors":["#f2ad78","#6bffb3"]},{"name":"Combination 175","id":175,"colors":["#f2ad78","#bcd382","#4733ff"]},{"name":"Combination 305","id":305,"colors":["#f2ad78","#ffe600","#a6d40d","#b5ffc2"]},{"name":"Combination 23","id":23,"colors":["#ffbf6e","#9161f2"]},{"name":"Combination 127","id":127,"colors":["#ffbf6e","#56aa69","#4d52de"]},{"name":"Combination 180","id":180,"colors":["#ffbf6e","#9161f2","#b5d1cc"]},{"name":"Combination 210","id":210,"colors":["#ffbf6e","#f2ff26","#405416"]},{"name":"Combination 234","id":234,"colors":["#ffbf6e","#5e4017","#abf5ed"]},{"name":"Combination 323","id":323,"colors":["#ffbf6e","#a6d40d","#651300","#000000"]},{"name":"Combination 344","id":344,"colors":["#ffbf6e","#0024cc","#9c52f2","#000000"]},{"name":"Combination 192","id":192,"colors":["#ffb852","#362304","#5c7287"]},{"name":"Combination 215","id":215,"colors":["#ffb852","#0d75ff","#bf36e0"]},{"name":"Combination 267","id":267,"colors":["#ffb852","#ff8c00","#00d973","#0d75ff"]},{"name":"Combination 278","id":278,"colors":["#ffb852","#d1bd19","#328e13","#00592e"]},{"name":"Combination 295","id":295,"colors":["#ffb852","#ffff00","#0d75ff","#06004f"]},{"name":"Combination 302","id":302,"colors":["#ffb852","#c0b490","#bfffe6","#008aa1"]},{"name":"Combination 329","id":329,"colors":["#ffb852","#bfabcc","#340059","#1b3644"]},{"name":"Combination 26","id":26,"colors":["#fa9442","#5e4017"]},{"name":"Combination 81","id":81,"colors":["#fa9442","#9cb29e"]},{"name":"Combination 138","id":138,"colors":["#fa9442","#f2ff26","#6bffb3"]},{"name":"Combination 140","id":140,"colors":["#fa9442","#008aa1","#1b3644"]},{"name":"Combination 229","id":229,"colors":["#fa9442","#172713","#b5d1cc"]},{"name":"Combination 309","id":309,"colors":["#fa9442","#ff7340","#202d85","#003e83"]},{"name":"Combination 213","id":213,"colors":["#f59994","#ffe600","#abf5ed"]},{"name":"Combination 256","id":256,"colors":["#f59994","#ff5200","#19cc33","#000000"]},{"name":"Combination 32","id":32,"colors":["#d99e73","#7aff00"]},{"name":"Combination 238","id":238,"colors":["#d99e73","#340059","#9cb29e"]},{"name":"Combination 339","id":339,"colors":["#d99e73","#de4500","#a6e6db","#202d85"]},{"name":"Combination 4","id":4,"colors":["#c3a55c","#3400a3"]},{"name":"Combination 12","id":12,"colors":["#c3a55c","#2dbc94"]},{"name":"Combination 83","id":83,"colors":["#bcd382","#202d85"]},{"name":"Combination 330","id":330,"colors":["#bcd382","#bfffe6","#96bfe6","#2dbc94"]},{"name":"Combination 348","id":348,"colors":["#bcd382","#328e13","#172713","#340059"]},{"name":"Combination 167","id":167,"colors":["#c0b490","#abf5ed","#003e83"]},{"name":"Combination 22","id":22,"colors":["#ffff00","#0024cc"]},{"name":"Combination 62","id":62,"colors":["#ffff00","#000000"]},{"name":"Combination 158","id":158,"colors":["#f2ff26","#c2612c","#7aff00"]},{"name":"Combination 168","id":168,"colors":["#f2ff26","#003e83","#7e3075"]},{"name":"Combination 173","id":173,"colors":["#f2ff26","#651300","#b5ffc2"]},{"name":"Combination 189","id":189,"colors":["#f2ff26","#172713","#6bffb3"]},{"name":"Combination 253","id":253,"colors":["#f2ff26","#ff7340","#340059","#1b3644"]},{"name":"Combination 259","id":259,"colors":["#f2ff26","#2dbc94","#0057ba","#9cb29e"]},{"name":"Combination 289","id":289,"colors":["#f2ff26","#bdf226","#202d85","#06004f"]},{"name":"Combination 306","id":306,"colors":["#f2ff26","#00d973","#19cc33","#bfffe6"]},{"name":"Combination 107","id":107,"colors":["#ffe600","#76844e"]},{"name":"Combination 129","id":129,"colors":["#ffe600","#b68400","#96bfe6"]},{"name":"Combination 163","id":163,"colors":["#ffe600","#b5ffc2","#008aa1"]},{"name":"Combination 250","id":250,"colors":["#c4bf33","#ff3319","#33ff7d","#bfffe6"]},{"name":"Combination 66","id":66,"colors":["#d1bd19","#58771e"]},{"name":"Combination 148","id":148,"colors":["#d1bd19","#ffab00","#29bdad"]},{"name":"Combination 149","id":149,"colors":["#d1bd19","#ff5200","#0f261f"]},{"name":"Combination 156","id":156,"colors":["#d1bd19","#94ff94","#2619d1"]},{"name":"Combination 42","id":42,"colors":["#e0b81f","#2619d1"]},{"name":"Combination 96","id":96,"colors":["#e0b81f","#718600"]},{"name":"Combination 118","id":118,"colors":["#e0b81f","#362304"]},{"name":"Combination 222","id":222,"colors":["#e0b81f","#ff8c00","#c05200"]},{"name":"Combination 114","id":114,"colors":["#ffab00","#008aa1"]},{"name":"Combination 2","id":2,"colors":["#ff8c00","#0d2b52"]},{"name":"Combination 53","id":53,"colors":["#ff8c00","#2d0060"]},{"name":"Combination 89","id":89,"colors":["#ff8c00","#202d85"]},{"name":"Combination 288","id":288,"colors":["#ff8c00","#503d00","#6b2e63","#000000"]},{"name":"Combination 211","id":211,"colors":["#ff7340","#99b333","#000831"]},{"name":"Combination 7","id":7,"colors":["#ff5200","#b3e8c2"]},{"name":"Combination 46","id":46,"colors":["#ff5200","#000000"]},{"name":"Combination 141","id":141,"colors":["#ff5200","#a6ff47","#0d2b52"]},{"name":"Combination 274","id":274,"colors":["#ff3319","#7e8743","#4f8fe6","#9161f2"]},{"name":"Combination 340","id":340,"colors":["#ff3319","#33ff7d","#b5d1cc","#000000"]},{"name":"Combination 1","id":1,"colors":["#de4500","#29bdad"]},{"name":"Combination 8","id":8,"colors":["#c2612c","#b8b8ff"]},{"name":"Combination 10","id":10,"colors":["#c2612c","#7e8743"]},{"name":"Combination 103","id":103,"colors":["#c2612c","#2d0060"]},{"name":"Combination 172","id":172,"colors":["#c2612c","#008aa1","#3400a3"]},{"name":"Combination 36","id":36,"colors":["#baa600","#b5ffc2"]},{"name":"Combination 65","id":65,"colors":["#baa600","#80ffcc"]},{"name":"Combination 160","id":160,"colors":["#baa600","#5e4017","#417777"]},{"name":"Combination 146","id":146,"colors":["#b68400","#505423","#1b8e13"]},{"name":"Combination 159","id":159,"colors":["#b68400","#80ffcc","#b8b8ff"]},{"name":"Combination 236","id":236,"colors":["#b68400","#0024cc","#754260"]},{"name":"Combination 196","id":196,"colors":["#a6d40d","#abf5ed","#4733ff"]},{"name":"Combination 93","id":93,"colors":["#a6e6db"]},{"name":"Combination 100","id":100,"colors":["#888d2a","#6e66d4"]},{"name":"Combination 41","id":41,"colors":["#7e8743","#80ffcc"]},{"name":"Combination 29","id":29,"colors":["#759243","#96bfe6"]},{"name":"Combination 207","id":207,"colors":["#9b5348","#b3e8c2","#000000"]},{"name":"Combination 318","id":318,"colors":["#706934","#324e2a","#00592e","#0f261f"]},{"name":"Combination 73","id":73,"colors":["#5e4017","#85b857"]},{"name":"Combination 24","id":24,"colors":["#503d00","#7e3075"]},{"name":"Combination 28","id":28,"colors":["#651300","#000831"]},{"name":"Combination 79","id":79,"colors":["#651300","#2dbc94"]},{"name":"Combination 98","id":98,"colors":["#651300","#202d85"]},{"name":"Combination 19","id":19,"colors":["#522000","#7aff00"]},{"name":"Combination 74","id":74,"colors":["#b5ffc2","#2dbc94"]},{"name":"Combination 202","id":202,"colors":["#b5ffc2","#94ff94","#1b3644"]},{"name":"Combination 61","id":61,"colors":["#bdf226","#340059"]},{"name":"Combination 291","id":291,"colors":["#bdf226","#33ff7d","#94ff94","#80ffcc"]},{"name":"Combination 347","id":347,"colors":["#99b333","#33ff7d","#0057ba","#b875eb"]},{"name":"Combination 188","id":188,"colors":["#85b857","#96bfe6","#94ff94"]},{"name":"Combination 15","id":15,"colors":["#00d973","#b8b8ff"]},{"name":"Combination 54","id":54,"colors":["#00d973","#a6e6db"]},{"name":"Combination 44","id":44,"colors":["#23c17c","#4f8fe6"]},{"name":"Combination 38","id":38,"colors":["#1b8e13","#0024cc"]},{"name":"Combination 5","id":5,"colors":["#328e13","#003e83"]},{"name":"Combination 49","id":49,"colors":["#abf5ed","#0d75ff"]},{"name":"Combination 75","id":75,"colors":["#abf5ed","#202d85"]},{"name":"Combination 119","id":119,"colors":["#a6e6db","#0d2b52"]},{"name":"Combination 139","id":139,"colors":["#96bfe6","#000831","#b5d1cc"]},{"name":"Combination 20","id":20,"colors":["#80ffcc","#cc85d1"]},{"name":"Combination 67","id":67,"colors":["#4f8fe6","#0d2b52"]},{"name":"Combination 143","id":143,"colors":["#0d75ff","#b875eb","#9cb29e"]},{"name":"Combination 106","id":106,"colors":["#008aa1","#06004f"]},{"name":"Combination 187","id":187,"colors":["#0057ba","#bfabcc","#9c52f2"]},{"name":"Combination 218","id":218,"colors":["#0057ba","#b8b8ff","#5c7287"]},{"name":"Combination 56","id":56,"colors":["#bfabcc","#2619d1"]},{"name":"Combination 64","id":64,"colors":["#9c52f2","#4d52de"]},{"name":"Combination 183","id":183,"colors":["#5c7287","#7e3075","#3400a3"]},{"name":"Combination 57","id":57,"colors":["#6b2e63","#1b3644"]},{"name":"Combination 69","id":69,"colors":["#9cb29e","#000000"]}]

/**
 * @param {Array} palettes
 * @return {Array} Array of arrays of colors
 */
function flattenPalettes(palettes) {
  return palettes.reduce((acc, palette) => {
    if (palette.hasOwnProperty('palettes')) {
      return acc.concat(flattenPalettes(palette.palettes));
    }
    return acc.concat(palette);
  }, []);
}

let localPalettes = palettes;
let localPalettesFlat = flattenPalettes(localPalettes);

const colorPalettes = {
  palettes: localPalettes,
  palettesFlat: localPalettesFlat,
  get: (nameOrIndex) => {
    if (typeof nameOrIndex === 'number') {
      return localPalettesFlat[nameOrIndex];
    }
    return localPalettesFlat.find((p) => p.name === nameOrIndex);
  },
  random: (nbr) => {
    if (nbr && typeof nbr != 'number' || nbr > 1 || nbr < 0) {
      throw new Error('random() only accepts a number between 0 and 1');
    }

    return localPalettesFlat[
        Math.floor(
            (nbr || Math.random()) * localPalettesFlat.length,
        )
    ];
  },
  addPalettes: (newPalettes) => {
    localPalettes = palettes.concat(newPalettes);
    localPalettesFlat = flattenPalettes(localPalettes);
  },
};

export {colorPalettes};