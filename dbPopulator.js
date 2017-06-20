const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const connectionPromise = MongoClient.connect(url);

connectionPromise.then(db => {
    const devStats = db.db("devStats");
    return Promise.all([devStats.collection("testCollection", null), db]);
}).then(collection => {
    const preparedData = prepareData();
    return Promise.all([collection[0].insertMany(preparedData), collection[1]]);
}).then(data => {
    data[1].close();
});

function prepareData() {
    const seed = {
        date: new Date(),
        javascript: 1500,
        typescript: 500
    };

    function mutateSeed() {
        const newDate = new Date(seed.date);
        newDate.setDate(newDate.getDate() + 1);
        seed.date = newDate;
        seed.javascript = seed.javascript - 2;
        seed.typescript = seed.typescript + 2;

        return {
            date: seed.date,
            javascript: seed.javascript,
            typescript: seed.typescript
        };
    }

    const seeds = [];
    for(let i=0;i<100;i++) {
        seeds.push(mutateSeed());
    }
    return seeds;
}
