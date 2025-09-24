const GENERATE_BUTTON = document.getElementById('generator');
const DISPLAY_TOWNS = document.getElementById('townNames');
const POSSESSIVE = document.getElementById('forcePossessive');
let townNames = [];

const directions = ['North', 'South', 'East', 'West'];

const prefixes = [
    'north', 'nor', 'no', 'east', 'eas', 'es',
    'south', 'sou', 'so', 'west', 'wes', 'we',
    'cold', 'col', 'hot', 'ho', 'grave', 'jon',
    'coul', 'woud', 'wood', 'stone', 'sus', 'husk',
    'sea', 'bright', 'dark', 'gal', 'stock', 'tap',
    'odor', 'gar', 'storm', 'rain', 'gale', 'dry',
    'ary', 'arid', 'a', 'ba', 'ca', 'eck', 'dim', 'first',
    'last', 'summer', 'winter', 'spring', 'autumn', 'fall',
    'soul', 'sol', 'moon', 'star', 'blan', 'verse', 'poet',
    'lara', 'lim', 'glass', 'jam', 'honey', 'farm', 'field',
    'gem', 'mine', 'oak', 'pine', 'elm', 'yew', 'maple', 'beech',
    'emerald', 'ruby', 'ala', 'elle', 'isle', 'staple', 'beef',
    'cattle', 'sword', 'shield', 'grain', 'rot', 'mire', 'odd',
    'strange', 'cool', 'breeze', 'wind', 'gust', 'wet', 'fire',
    'smoke', 'fog', 'earth', 'bed', 'lamb', 'steer', 'stur',
    'milk', 'ale', 'wine', 'boor', 'boar', 'spindle', 'wool',
    'bud', 'green', 'gren', 'blue', 'blu', 'red', 'yellow', 'white',
    'black', 'gray', 'grey', 'gavel', 'smith', 'dawn', 'day', 'night',
    'lemon', 'orange', 'apple', 'pea', 'wheat', 'barly', 'jarl', 'earl',
    'king', 'queen', 'jack', 'shim', 'sham', 'dust', 'sand', 'grit', 'gran',
    'grand', 'great', 'rich', 'money', 'silver', 'gold', 'tin', 'home', 'canter',
    'gallop', 'trot', 'amble', 'gutter', 'trim', 'dore', 'dour', 'world',
    'orb', 'crystal', 'cave', 'cava', 'merl', 'tiny', 'wee',
    'small', 'little', 'iron', 'steel', 'clock', 'par', 'parad', 'monk',
    'god', 'hollow', 'jua', 'hill', 'ann', 'grim', 'war', 'wart', 'amber', 
    'arthur', 'bonnie', 'bryn', 'caul', 'cal', 'don', 'din', 'evan', 'edel', 'far', 'near',
    'gar', 'him', 'her', 'igor', 'ivan', 'ingrid', 'john', 'jan', 'kill',
    'kels', 'linger', 'liam', 'lisa', 'mark', 'mary', 'nature', 'nida',
    'ogre', 'giant', 'orc', 'ol', 'peter', 'paul', 'pat', 'quinn',
    'rian', 'seth', 'sal', 'trent', 'terry', 'ulric', 'uni', 'victor', 'val',
    'wes', 'wed', 'xal', 'xen', 'yeger', 'yea', 'za', 'zoo', 'day', 'year',
    'knight', 'squire', 'circ', 'rect', 'tri', 'cole', 'salt', 'sal',
    'sel', 'sla', 'ocean', 'varis', 'gable', 'steeple', 'balti', 'fredricks',
    'louis', 'naple', 'nato', 'ursa', 'tauro', 'leo', 'goblin', 'gob', 'eden',
    'mead', 'hob', 'hobli', 'hog', 'bennett', 'heit', 'san', 'saint', 'serpent',
    'dire', 'wolf', 'wolves', 'dragon', 'wyvern', 'ox', 'axe', 'ache', 'stout',
    'lager', 'espi', 'umbre', 'ochre', 'cadmi', 'caw', 'crow', 'raven', 'fumble',
    'bron', 'brom', 'cauld', 'jesper', 'vesper', 'konst', 'field', 'aspen', 'birch',
    'blank', 'saddle', 'spur', 'buck', 'doe', 'skol', 'skal', 'skil', 'grym', 'oer',
    'under', 'over', 'un', 'cask', 'spell', 'magick', 'mara', 'margo', 'tet', 'log',
    'stump', 'leaf', 'blade', 'bruck'
    ];
const suffixes = [
    'lam', 'vain', 'wan', 'ville',
    'fail', 'vain', 'mere', 'deen',
    'don', 'ton', 'lat', 'town',
    'folk', 'lem', 'let', 'lis',
    'oque', 'ex', 'heim', 'mar', 
    'ette', 'haven', 'hovel', 'water', 
    'grass', 'field', 'feld', 'rock',
    'stone', 'fall', 'spring', 'well',
    'view', 'ter', 'all', 'urns', 'fell',
    'thix', 'helm', 'burrow', 'dale', 'wood',
    'hol', 'mire', 'marsh', 'moor', 'od',
    'shoal', 'mound', 'mont', 'mint', 'lax',
    'rex', 'pox', 'cairn', 'mount', 'tin', 'ent', 'bury',
    'berry', 'bry', 'sou', 'lamb', 'dock', 'sque', 'by', 'abbey',
    'aven', 'arnet', 'vine', 'gate', 'got', 'get',
    'fang', 'tooth', 'amble', 'path', 'road', 'vale', 'veil',
    'font', 'sans', 'ans', 'ads', 'glade', 'grove',
    'meadow', 'medow', 'med', 'tine', 'is', 'ad', 'id', 'nath',
    'nax', 'ax', 'ix', 'esa', 'isu', 'ego', 'teeth', 'hum', 'home',
    'holm', 'hollow', 'bog', 'burg', 'berg', 'bar', 'door', 'apolis',
    'polis', 'church', 'reach', 'stil', 'more', 'mead', 'eden',
    'axis', 'axes', 'bon', 'ababa', 'saba', 'sad', 'stable', 'stock',
    'yard', 'pier', 'jetty', 'oak', 'worth', 'elm', 'fax', 'tor',
    'finger', 'lyx', 'lich', 'ixys', 'aspen', 'loch', 'lock', 'lake',
    'axon', 'axion', 'nion', 'mine', 'hold', 'held', 'ion', 'ro', 'airo',
    'ia', 'ria', 'saddle', 'spur', 'buck', 'doe', 'ether', 'dova', 'ova',
    'via', 'ov', 'ovia', 'rot', 'tree', 'glom', 'glim', 'grim', 'grym',
    'lago', 'era'
];

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
GENERATE_BUTTON.addEventListener('click', () => {
    document.getElementById('townNames').innerHTML = '';
    townNames = [];
    for (let i = 0; i < 40; i++) {
        generateName()
    }
    townNames.sort();
    for (let i = 0; i < townNames.length; i++) {
        DISPLAY_TOWNS.innerHTML += `<p>${townNames[i]}</p>`
    }
})

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function generateName() {
    let rand = Math.random()
    let townname;
    if (rand > 0.2){
        let prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        let suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        while (suffix == prefix) {
            suffix = suffixes[Math.floor(Math.random() * suffixes.length)]
        }
        townname = cleanUpTown(prefix, suffix);
    } else {
        let prefix = suffixes[Math.floor(Math.random() * suffixes.length)];
        let suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        while (suffix == prefix) {
            suffix = suffixes[Math.floor(Math.random() * suffixes.length)]
        }
        townname = cleanUpTown(prefix, suffix);
    }
    
    
    if (townname.toLowerCase().includes('north') || townname.toLowerCase().includes('south') || townname.toLowerCase().includes('east') || townname.toLowerCase().includes('west')) {
        townNames.push(townname)
        return;
    }
    
    townname = capitalizeFirstLetter(townname)

    if (Math.random() > 0.8) {
        townname = directions[Math.floor(Math.random() * directions.length)] + ' ' + townname
    }

    townNames.push(townname)
}

function cleanUpTown(pref, suff) {
    let pre = pref;
    let suf = suff;
    let end = pre[pre.length - 1];
    let start = suf[0];
    
    if (end == start) {
        suf = suf.slice(1)
    }

    if (POSSESSIVE.checked) {
        if (end == 's' || start == 's') {
            return capitalizeFirstLetter(pre) + suf
        }
        return capitalizeFirstLetter(pre) + 's' + suf
    }

    if (Math.random() > 0.7 && end != 's' && start != 's') {
        return capitalizeFirstLetter(pre) + 's' + suf
    }
    return capitalizeFirstLetter(pre) + suf
}