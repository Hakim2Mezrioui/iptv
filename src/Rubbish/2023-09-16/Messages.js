import classes from "./Message.module.css";

const Messages = () => {
    return(
        <div className="">
            <div className={classes.message}>
                <h1>exemple@gmail.com</h1>
                <p>
                    Le lorem ipsum est, en imprimerie, 
                    une suite de mots sans signification 
                    utilisée à titre provisoire pour calibrer
                    une mise en page, le texte définitif venant 
                    remplacer le faux-texte dès qu'il est prêt ou 
                    que la mise en page est achevée. Généralement, 
                    on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                </p>
            </div>
        </div>
    )
}

export default Messages;