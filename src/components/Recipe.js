import React, { useContext, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import { ModalContext } from '../context/ModalContext';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Recipe = ({ recipe }) => {

    // modal configuration material-ui
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    // extract context values
    const { information, setIdrecipe, setRecipe } = useContext(ModalContext);

    // show the ingredients
    const showIngredients = (information) => {
        let ingredients = [];
        for (let i = 1; i < 16; i++) {
            if(information[`strIngredient${i}`]) {
                ingredients.push(
                    <li>{information[`strIngredient${i}`]} {information[`strMeasure${i}`]}</li>
                )
            }
        }

        return ingredients;

    }

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{recipe.strDrink}</h2>
                <img className="card-img-top" src={recipe.strDrinkThumb} alt={`Image of ${recipe.strDrink}`} />
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            setIdrecipe(recipe.idDrink);
                            handleOpen();
                        }}
                    >
                        Details
                    </button>
                    <Modal
                        open={open}
                        onClose={() => {
                            setIdrecipe(null);
                            setRecipe({});
                            handleClose();
                        }}
                    >
                        <div
                            style={modalStyle}
                            className={classes.paper}
                        >
                            <h2>{information.strDrink}</h2>
                            <h3 className="mt-4">Instructions</h3>
                            <p>
                                {information.strInstructions}
                            </p>
                            <img className="img-fluid my-4" src={information.strDrinkThumb} />
                            <h3>Ingedients</h3>
                            <ul>
                                {showIngredients(information)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Recipe;