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
    }

}

export default Helpers;