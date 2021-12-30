import Hero from '../../../models/Hero.js';
import Power from '../../../models/Power.js';

const resolvers = {
  Query: {
    heros: async () => {
      const heros = await Hero.find();

      return heros;
    },
    hero: async (_, args) => {
      const { id } = args;

      const hero = await Hero.findById(id);

      if (!hero) {
        throw new Error('Hero does not exist');
      }

      return hero;
    },
  },
  Mutation: {
    addHero: async (_, args) => {
      const { name, powerId } = args.params;

      const hero = new Hero({ name });

      if (powerId) {
        const power = await Power.findById(powerId);
        if (power) hero.powers = [power];
      }

      await hero.save();

      return hero;
    },
  },
  Hero: {
    powers: async (obj) => {
      const hero = await Hero.findById(obj.id).populate('powers');

      return hero.powers;
    },
  },
};

export default resolvers;
