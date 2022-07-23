const parameterize = (itemName) => itemName.toLowerCase().replace(/[^a-zA-Z0-9 -]/, '').trim().replace(/\s/g, '-');

export default parameterize;
