import React, { useState, useContext } from 'react';
import { CategoriesContext } from '../context/CategoriesContext';
import { RecipesContext } from '../context/RecipesContext';

const Form = () => {

    const [search, setSearch] = useState({
        name: '',
        category: ''
    });

    const { categories } = useContext(CategoriesContext);
    const { setSearchrecipes } = useContext(RecipesContext);

    // function to read the content
    const getData = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form
            className="col-12"
            onSubmit={e => {
                e.preventDefault();
                setSearchrecipes(search);
            }}
        >
            <fieldset className="text-center">
                <legend>Search drinks by Category or ingredients</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Search by Ingredient"
                        onChange={getData}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="category"
                        onChange={getData}
                    >
                        <option value="">-- Select Category --</option>
                        {categories.map(category => (
                            <option
                                key={category.strCategory}
                                value={category.strCategory}
                            >
                                {category.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Search Drinks"
                    />
                </div>
            </div>
        </form>
    );
}

export default Form;