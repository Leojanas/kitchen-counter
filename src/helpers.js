import InventoryItem from './InventoryItem/inventory-item';

const Helpers = {
    getItemById(items, id){
        return items.filter(i => {
            return i.id === Number(id)
        })[0]
    },
    getIngredientsFromRecipe(recipe){
        return recipe.ingredients.map((item, index) => {
            return <InventoryItem key={index} item={item} recipe={true} />
        })
    },
    getInstructionsFromRecipe(recipe){
        return recipe.instructions.map((item, index) => {
            return <li key={index}>{item.content}</li>
        })
    },
    getQtyFromName(items, name){
        let item = items.filter(i => {
            return i.name === name
        })[0]
        return item.qty
    },
    getItemByName(items, name){
        let item = items.filter(i => {
            return i.name === name
        })[0]
        return item
    },
    stringifyRecipeInstructions(recipe){
        let instructionsString = '';
        let instructionsArray = recipe.instructions;
        for(let i=0;i<instructionsArray.length; i++){
            let step = instructionsArray[i].number;
            let content = instructionsArray[i].content;
            instructionsString = instructionsString.concat(`Step ${step}:=${content}=`)
        }
        recipe.instructions = instructionsString;
        return recipe;
    },
    makeInstructionsArray(recipes){
        recipes = recipes.map(recipe => {
            let instructionString = recipe.instructions;
            let instructionsArray = instructionString.split('=');
            instructionsArray.pop()
            let finalArray = []
            for(let i=0;i<instructionsArray.length; i = i+2){
              let number = parseInt(instructionsArray[i].split(' ')[1])
              let content = instructionsArray[i+1];
              finalArray.push({
                number: number,
                content: content
              })
            }
            recipe.instructions = finalArray
            return recipe
          })
          return recipes
    }

}

export default Helpers;