import React from 'react';
import Compra from './Compra.js';
import './css/main.css'

class ListaCompras extends React.Component{
	constructor(props){
		super(props);
		this.state = {newItemValue: '', unsaved:false, itens: JSON.parse(localStorage.getItem("itens")) || {}};
		this.handleAdd = this.handleAdd.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleChangeNameItem = this.handleChangeNameItem.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}
	componentDidMount(){
		window.onbeforeunload = () => this.state.unsaved || undefined;
	}
	render() {
	  return (
	  	<>
		  	<div className="w3-row bottom-form">
		  		<input 	onChange={(e) => this.handleChangeNewItem(e)} className="w3-input w3-hover-border-blue w3-col l4 m8 s10" 
		  				type="text" name="Nome do item" />
		        <button id="add-button" className="w3-button w3-col l2 m2 s2" onClick={this.handleAdd}></button>
		        {this.state.unsaved && <button className="w3-button w3-animate-zoom w3-col l2 m2 s12" onClick={this.handleSave}>Salvar</button>}
		     </div>
		     <ul className="w3-ul w3-card w3-col l4 m12 s12 margin">
		     		{Object.keys(this.state.itens).sort().map((item, index) => (
	     				index % 3 === 0 && <Compra key={item} name={item} qtd={this.state.itens[item].qtd} onRemove={this.handleRemove} 
	     										onBlur={this.handleChangeNameItem} />
				     ))}
		     </ul>
		     <ul className="w3-ul w3-card w3-col l4 m12 s12 margin">
		     		{Object.keys(this.state.itens).sort().map((item, index) => (
	     				index % 3 === 1 && <Compra key={item} name={item} qtd={this.state.itens[item].qtd} onRemove={this.handleRemove} 
	     										onBlur={this.handleChangeNameItem} />
				     ))}
		     </ul>
		     <ul className="w3-ul w3-card w3-col l4 m12 s12 margin">
		     		{Object.keys(this.state.itens).sort().map((item, index) => (
	     				index % 3 === 2 && <Compra key={item} name={item} qtd={this.state.itens[item].qtd} onRemove={this.handleRemove} 
	     										onBlur={this.handleChangeNameItem} />
				     ))}
		     </ul>
		  		
		</>
	  );
	}
	handleChangeNewItem(e){
		this.setState({newItemValue: e.target.value});
	}
	handleAdd(){
		this.setState({unsaved:true});
		if(!this.state.itens[this.state.newItemValue]){
			this.setState(state => ({
		        itens: {
		            ...state.itens,
		            [this.state.newItemValue]: {qtd: 1},
		        },
		    }));
		}
		else {
			this.setState(state => ({
		        itens: {
		            ...state.itens,
		            [this.state.newItemValue]: {qtd: state.itens[this.state.newItemValue].qtd+1}
		        },
		    }));
		}
	}
	/*
	?: Achar uma maneira melhor de manipular a atualização no dicionário, principalmente no uso de delete.
	?: Pesquisar sobre o uso do ...;
	*/
	handleRemove(itemName) {
		this.setState({unsaved:true});
		this.setState(state => {
			const copyItens = {...state.itens};
			const item = state.itens[itemName];
			if(item.qtd === 1){
				delete copyItens[itemName];
				return {
			        itens: copyItens
			    };
			} else {
				return ({
			        itens: {...state.itens, [itemName]: {qtd: item.qtd-1}}
			    });
			}
		})
	}
	handleChangeNameItem(oldName, newName){
		if(this.state.itens[newName] || newName === oldName)return false;
		const copyItens = {...this.state.itens};
		const item = this.state.itens[oldName];
		delete copyItens[oldName];
		copyItens[newName] = item;
		this.setState({itens: copyItens});
		this.setState({unsaved:true});
		return true;
	}
	handleSave(){
		localStorage.clear();
		localStorage.setItem("itens", JSON.stringify(this.state.itens));
		this.setState({unsaved:false});
	}
}


export default ListaCompras;