import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, {Component} from "react";
import './style.css'

class App extends Component {
    
    constructor(props){
        super(props)
            this.state = {
             nome:'',
             email: '',
             senha: '',
             error: ''

         }

         this.cadastrar = this.cadastrar.bind(this);
        }


        //colocar o e (evento) para renderizar o evento no prevetdefault
        cadastrar(e){
            const {nome, email, senha} = this.state;


            if(nome !== '' && email !== '' && senha !== '') {
                alert(`Seja bem vindo ao sistema ${nome} `)
            } else {
                this.setState({error: "Ops, parece que está faltando algo"})
            }

            

            //funçao para  quando atualizar a pagina os dados não sumirem
            e.preventDefault();
        }
    
    render() {
        return(
        <div className="box">

            <div className="fundo">
            <h1>
                 <img src="seta-direita.gif" />
                 Novo usuário

            </h1>

            
            {this.state.error && <p>{this.state.error}</p>}

            <form onSubmit={this.cadastrar}>

            <div className="opcao">  
                <label>Nome</label>
            <input type="text" value={this.state.nome} onChange={ (e) => this.setState({nome: e.target.value })}/><br/>
            </div> 


            <div className="opcao">  
            <label>Email</label>
            <input type="text" value={this.state.email} onChange={ (e) => this.setState({email: e.target.value })}/><br/>
            </div> 


            <div className="opcao"> 
            <label>Senha</label>
            <input type="password" value={this.state.senha} onChange={ (e) => this.setState({senha: e.target.value })}/><br/>
            </div>  

            <div className="botao">
            <button type="submit">Cadastrar</button>
            </div>



            </form>
            </div>
        </div>
        );
    }

}

export default App;
