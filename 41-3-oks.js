const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
  
    getPotions() {
      return this.potions;
    },
    addPotion(newPotion) {
      for (const potion of this.potions ){
      if (potion.name === newPotion.name) {
        return "Error! Potion ${newPotion.name} is already in your inventory!";
      }    
  }
      const newProduct = { ...newPotion,};
      this.potions.push(newPotion);
      return this.potions
    },
    removePotion(potionName) {
      for ( const potion  of this.potions) {
       
      if (potion.name === potionName) {  
      const potionIndex = this.potions.indexOf(potion);   
      this.potions.splice(potionIndex , 1);
      }  
      }
   return "Potion ${potionName} is not in inventory!";
     
    },
    updatePotionName(oldName, newName) {
     
       for ( const potion  of this.potions) {
        if ( potion.name === oldName ){
          potion.name = newName
      
      }  
       }
    return "Potion ${oldName} is not in inventory!";
    },
  
  };