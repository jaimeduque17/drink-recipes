import React from 'react';

const Form = () => {
    return (
        <form
            className="col-12"
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
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="category"
                    >
                        <option value="">-- Select Category --</option>
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