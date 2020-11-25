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
    }

}

export default Helpers;