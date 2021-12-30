import Power from '../../../models/Power.js';

const resolvers = {
  Query: {
    powers: async () => {
      const powers = await Power.find();
      return powers;
    },
  },
  Mutation: {
    addPower: async (_, args) => {
      const { name, description } = args.params;
      const power = new Power({ name, description });

      await power.save();
      return power;
    },
  },
};

export default resolvers;
