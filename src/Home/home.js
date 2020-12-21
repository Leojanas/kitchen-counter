import React, {Component} from 'react';
import './home.css';

class Home extends Component {
    render () {
        return(
            <div>
                <section className='home'>
                    <h2>Record Your Inventory</h2>
                    <p>With Kitchen Counter, you can easily input all the food items you currently have
                        in your kitchen.  After you set up your initial inventory, you can always manually
                        adjust it by adding or removing items to make sure it is stays accurate.
                    </p>
                </section>
                <section className='home'>
                    <h2>Create Recipes</h2>
                    <p>Kitchen Counter allows you to create and save recipes for easy access.  You can use recipes
                        to build a meal plan and then when you actually use the recipe, Kitchen Counter will automatically
                        remove the ingredients you used from your inventory.
                    </p>
                </section>
                <section className='home'>
                    <h2>Meal Plans and Shopping Lists</h2>
                    <p>Once you have some recipes saved, you can start planning out which ones you need to 
                        get groceries for.  Kitchen Counter makes it easy to generate a meal plan, just add whatever 
                        recipes or individual items you know you'll want to use.  Once you have a meal plan, you
                        can generate a shopping list, and Kitchen Counter will get a list together of everything 
                        you need to buy to make all the recipes in your meal plan.  It will automatically remove
                        any ingredients you already have to make sure you don't buy too much.
                    </p>
                </section>

            </div>
        )
    }
}

export default Home;