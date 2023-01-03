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
  
      for (let i = 0; i < potions.length; i += 1) {
        const { name } = potions[i];
        if (name === newPotion.name) {
          return `Error! Potion ${newPotion.name} is already in your inventory!`;
        }
      }
      potions.push(newPotion);
    },
    
    removePotion(potionName) {
      const { potions } = this;
  
      for (let i = 0; i < potions.length; i += 1) {
        const { name } = potions[i];
        if (name === potionName) {
          potions.splice(i, 1);
        }
      }
    },
    
    updatePotionName(oldName, newName) {
  
      const { potions } = this;
  
      for (let i = 0; i < potions.length; i += 1) {
        const { name } = potions[i];
        if (name === oldName) {
          potions[i].name = newName;
        }
      }
    },
    // Change code above this line
  };