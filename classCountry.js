const countryData = {
    name: 'France',
    continent: 'Europe',
    currency: 'Euro',
    population: '67.75 million',
};

class Country {
    constructor(name, continent, currency, population) {
        this.name = name;
        this.continent = continent;
        this.currency = currency;
        this.population = population;
    }

    getOverview() {
        return `${this.name} é um país na ${this.continent}. Sua moeda é o ${this.currency} e a sua população é de ${this.population} pessoas.`;
    }

    setPopulation(newPopulation) {
        return (this.population = newPopulation);
    }
}

const country = new Country(
    countryData.name,
    countryData.continent,
    countryData.currency,
    countryData.population,
);
console.log(country);
