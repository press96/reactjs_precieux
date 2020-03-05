import React from 'react';
import './App.css';

function App() {
  return (

    <div>
        <div class="navdbar">
            <div class="navbar_base" >

            </div>
        </div>
        <div className="App">
            <p>
                <h2> DEJA UN COMPTE SEPHORA ? </h2>
            </p>
            <p>
                Connectez-vous pour retrouver vos avantages. 
            </p>
            <form >
                <label>
                    <input type="email" name="name" placeholder="Email*" class="champs"/>
                </label>
                <p/>
                <label>
                    <input type="password" name="password" placeholder ="Mot de passe*" class="champs" /> 
                </label>
                <p/>
                <input type="submit" value="Me connecter" class="button"/> <h6><a href="forgetPasswordController" class="forget">Mot de passe oublié ?</a> </h6>
            </form>

            <h2> PAS ENCORE DE COMPTE ? </h2>
            - Créez un compte pour profiter de tous les avantages. <br/>
            - Rejoignez le <a href ="#">programme de fidélité</a> dès votre premier achat. <p/>
            
            <input type="submit" value="Créer un compte" class="button"/>
        </div>
    </div>
  );
}

export default App;
