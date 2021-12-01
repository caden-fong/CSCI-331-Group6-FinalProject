import React, { Component } from 'react';
import './../App.css';
import { useNavigate } from 'react-router';
import axios from 'axios';

class Create extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLevel = this.onChangeLevel.bind(this);
    this.onChangeRace = this.onChangeRace.bind(this);
    this.onChangeClass = this.onChangeClass.bind(this);
    this.onChangeBackground = this.onChangeBackground.bind(this);
    this.onChangeAlignment = this.onChangeAlignment.bind(this);
    this.onChangeStats = this.onChangeStats.bind(this);
    this.onChangeSavingThrows = this.onChangeSavingThrows.bind(this);
    this.onChangeSkills = this.onChangeSkills.bind(this);
    this.onChangePersonalityTraits = this.onChangePersonalityTraits.bind(this);
    this.onChangeIdeals = this.onChangeIdeals.bind(this);
    this.onChangeBonds = this.onChangeBonds.bind(this);
    this.onChangeFlaws = this.onChangeFlaws.bind(this);
    this.onChangeProficiencies = this.onChangeProficiencies.bind(this);
    this.onChangeFeatures = this.onChangeFeatures.bind(this);
    this.onChangeSpells = this.onChangeSpells.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
      classObject: {},
      name: '',
      level: 1,
      race: '',
      class:'Artificer',
      background: '',
      proficiencyBonus: 0,
      hitPoints: 0,
      speed: 0,
      hitDice: {
        quantity: 0,
        dice: ''
      },
      alignment: '',
      stats: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
      },
      savingThrows: {
        strength: false,
        dexterity: false,
        constitution: false,
        intelligence: false,
        wisdom: false,
        charisma: false
      },
      skills: {
        acrobatics: false,
        animalHandling: false,
        arcana: false,
        athletics: false,
        deception: false,
        history: false,
        insight: false,
        medicine: false,
        nature: false,
        perception: false,
        performance: false,
        persuasion: false,
        religion: false,
        sleightOfHand: false,
        stealth: false,
        survival: false
      },
      personalityTraits: '',
      ideals: '',
      bonds: '',
      flaws: '',
      proficiencies: {},
      features: {},
      spells: {}
    }

  }

  onChangeName(e) {
    this.state.name = e.target.value;
  }
  onChangeLevel(e) {}
  onChangeRace(e) {}
  onChangeClass(e) {
    axios.get('/classes/'+e.target.value)
      .then(response => {
        console.log(response.data);
        this.setState({classObject: response.data, class: e.target.value})  
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  onChangeBackground(e) {}
  onChangeAlignment(e) {}
  onChangeStats(e) {}
  onChangeSavingThrows(e) {}
  onChangeSkills(e) {}
  onChangePersonalityTraits(e) {}
  onChangeIdeals(e) {}
  onChangeBonds(e) {}
  onChangeFlaws(e) {}
  onChangeProficiencies(e) {}
  onChangeFeatures(e) {}
  onChangeSpells(e) {}

  onSubmit(e) {
    e.preventDefault();

    const character = {
      name: this.state.name,
      level: 1,
      race: '',
      class: 'Artificer',
      background: '',
      proficiencyBonus: 0,
      hitPoints: 0,
      speed: 0,
      hitDice: {
        quantity: 0,
        dice: ''
      },
      alignment: '',
      stats: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
      },
      savingThrows: {
        strength: false,
        dexterity: false,
        constitution: false,
        intelligence: false,
        wisdom: false,
        charisma: false
      },
      skills: {
        acrobatics: false,
        animalHandling: false,
        arcana: false,
        athletics: false,
        deception: false,
        history: false,
        insight: false,
        medicine: false,
        nature: false,
        perception: false,
        performance: false,
        persuasion: false,
        religion: false,
        sleightOfHand: false,
        stealth: false,
        survival: false
      },
      personalityTraits: '',
      ideals: '',
      bonds: '',
      flaws: '',
      proficiencies: {},
      features: {},
      spells: {}
    };
  
    console.log('Character:');
    console.log(character);
    console.log('ID: ' + this.props.user.id);

    axios.post('/characters/create/'+this.props.user.id, character)
      .then(res => console.log(res.data))
      .catch(function (error) {
        console.log('Error: create component: ' + error.response.data);
      })
    
    // window.location = '/';
    }

  

    render() {
    if(!this.props.user.id) {
      return null;
    }
    return (
      <div className="container create">
        <p>Create a Character</p>
        <form onSubmit={this.onSubmit}>
          <div className="row creatrow">
            <div className="col-sm creat">
              <label>Name</label>
              <input 
                className="form-control"
                type="text"
                onChange={this.onChangeName}
              ></input>
              <small>Choose a character name</small>
            </div>
            <div className="col-sm creat">
              <label>Level</label>
              <select className="form-select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <small>Click to choose a level</small>
            </div>
            <div className="col-sm creat">
              <label>Race</label>
              <select className="form-select">
                <option>Human</option>
              </select>
              <small>Click to choose a race</small>
            </div>
          </div>
          <div className="row creatrow">
            <div className="col-sm creat2">
              <label>Actual Class</label>
              <select 
                className="form-select"
                onChange={this.onChangeClass}
                >
                <option>Artificer</option>
                <option>Barbarian</option>
                <option>Bard</option>
                <option>Cleric</option>
                <option>Druid</option>
                <option>Fighter</option>
                <option>Monk</option>
                <option>Paladin</option>
                <option>Ranger</option>
                <option>Rogue</option>
                <option>Sorcerer</option>
                <option>Warlock</option>
                <option>Wizard</option>
              </select>
              <small>Click to choose a class</small>
            </div>
            <div className="col-sm creat2">
              <label>Background</label>
              <select className="form-select">
                <option>class</option>
              </select>
              <small>Click to choose a background</small>
            </div>
            <div className="col-sm creat2">
              One of three columns
            </div>
          </div>
          <div className="row creatrow">
            <div className="col-sm creat3">
              <label>Class</label>
              <select className="form-select">
                <option>class</option>
              </select>
              <small>Click to choose a class</small>
            </div>
            <div className="col-sm creat3">
              <label>Background</label>
              <select className="form-select">
                <option>class</option>
              </select>
              <small>Click to choose a background</small>
            </div>
            <div className="col-sm creat3">
              One of three columns
            </div>
          </div>
          <div className="row creatrow">
            <div className="col-sm creat4">
              <label>Class</label>
              <select className="form-select">
                <option>class</option>
              </select>
              <small>Click to choose a class</small>
            </div>
            <div className="col-sm creat4">
              <label>Background</label>
              <select className="form-select">
                <option>class</option>
              </select>
              <small>Click to choose a background</small>
            </div>
            <div className="col-sm creat4">
              One of three columns
            </div>
          </div>
          <div className="row creatrow">
            <div className="col-sm creat5">
              <label>Class</label>
              <select className="form-select">
                <option>class</option>
              </select>
              <small>Click to choose a class</small>
            </div>
            <div className="col-sm creat5">
              <label>Background</label>
              <select className="form-select">
                <option>class</option>
              </select>
              <small>Click to choose a background</small>
            </div>
            <div className="col-sm creat5">
              <input type="submit" value="Submit" className="btn btn-dark" />
            </div>
          </div>
         </form> 
      </div>
    )
  }
}

export default (props) => {
  const navigate = useNavigate();
  return (<Create {...props} navigate={navigate}/>);
}