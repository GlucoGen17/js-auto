const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    const { potions } = this;
    for (let potion of potions) {
      if (potion.name === newPotion.name)
        return `Error! Potion ${newPotion} is already in your inventory!`;
    }
    potions.push(newPotion);
    return potions;
  },

  removePotion(potionName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      if (potionName === potions[i].name) {
        potions.splice(i, 1);
        return potions;
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      if (oldName === potions[i].name) {
        potions[i].name = newName;
        return potions;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
};
