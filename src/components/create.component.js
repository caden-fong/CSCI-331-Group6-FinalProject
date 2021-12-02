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
    this.onChangeSubclass = this.onChangeSubclass.bind(this);
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
      classObject: {
        _id: 0,
        class: [{}],
        classFeature: [{}],
        name: '',
        subclass: [{}],
        subclassFeature: [{}]
      },
      name: '',
      level: 1,
      race: '',
      class:'Barbarian',
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
      spells: {},
      sources: ["PHB", "TCE"],
      fluff: ""
      
    }

    
      
      
  }

  componentDidMount() {
    axios.get('/classes/'+this.state.class)
      .then(response => {
        this.setState({
          classObject: response.data,
          fluff: response.data.class[0].fluff[0].entries[0] 
        });  
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChangeName(e) {
    this.setState({name : e.target.value})
  }

  onChangeLevel(e) {}
  onChangeRace(e) {}
  onChangeClass(e) {
    axios.get('/classes/'+e.target.value)
      .then(response => {
        this.setState({
          classObject: response.data,
          class: e.target.value,
        });
        this.setState({ fluff: this.state.classObject.class[0].fluff[0].entries[0] });
      })
      .catch(function (error) {
        console.log(error);
      })
      
  }
  onChangeSubclass(e) {}
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
      class: 'Barbarian',
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
      .then(res => {this.props.navigate("/profile")})
      .catch(function (error) {
        console.log('Error: create component: ' + error.response.data);
      })
    
    // window.location = '/';
    }

    renderLevelOptions() {}
    renderRaceOptions() {}

    renderSubClassOptions() {
      let classes = this.state.classObject.subclass.filter( subclass => this.state.sources.includes(subclass.source));
      return classes.map((subclass, index) => {
        return <option key={index}>{subclass.name}</option>;
      })
    }

    renderBackgroundOptions() {
      return <option>No backgrounds</option>;
    }

    renderStatOptions() {}
    renderSavingThrowOptions() {}
    renderSkillOptions() {}
    renderPersonalityTraitOptions() {}
    renderIdealOptions() {}
    renderBondOptions() {}
    renderFlawOptions() {}
    renderProficiencyOptions() {}
    renderFeatureOptions() {}
    renderSpellOptions() {}
    renderAlignmentOptions() {}

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
              >
              </input>
              <small>Choose a character name</small>
            </div>
            <div className="col-sm creat">
              <label>Level</label>
              <select 
                className="form-select"
                onChange={this.onChangeLevel}
              >
                { this.renderLevelOptions() }
              </select>
              <small>Click to choose a level</small>
            </div>
            <div className="col-sm creat">
              <label>Race</label>
              <select 
                className="form-select"
                onChange={this.onChangeRace}
              >
                { this.renderRaceOptions() }
              </select>
              <small>Click to choose a race</small>
            </div>
          </div>
          <div className="row creatrow">
            <div className="col-sm creat2">
              <label>Class</label>
              <select 
                className="form-select"
                onChange={this.onChangeClass}
              >
                <option key="Barbarian">Barbarian</option>
                <option key="Bard">Bard</option>
                <option key="Cleric">Cleric</option>
                <option key="Druid">Druid</option>
                <option key="Fighter">Fighter</option>
                <option key="Monk">Monk</option>
                <option key="Paladin">Paladin</option>
                <option key="Ranger">Ranger</option>
                <option key="Rogue">Rogue</option>
                <option key="Sorcerer">Sorcerer</option>
                <option key="Warlock">Warlock</option>
                <option key="Wizard">Wizard</option>
              </select>
              <small>{this.state.fluff}</small>
            </div>
            <div className="col-sm creat2">
              <label>Subclass</label>
              <select 
                className="form-select"
                onChange={this.onChangeSubclass}
              >
                { this.renderSubClassOptions() }
              </select>
              <small>Click to choose a subclass</small>
            </div>
            <div className="col-sm creat2">
              <label>Background</label>
              <select 
                className="form-select"
                onChange={this.onChangeBackground}
              >
                { this.renderBackgroundOptions() }
              </select>
              <small>Click to choose a background</small>
            </div>
          </div>
          <div className="row creatrow">
            <div className="col-sm creat3">
              <label>Alignment</label>
              <select 
                className="form-select"
                onChange={this.onChangeAlignment}
              >
                { this.renderAlignmentOptions() }
              </select>
              <small>Click to choose an alignment</small>
            </div>
            <div className="col-sm creat3">
              <label>Stats</label>
              <select 
                className="form-select"
                onChange={this.onChangeStats}
              >
                { this.renderStatOptions() }
              </select>
              <small>Click to choose some stats </small>
            </div>
            <div className="col-sm creat3">
              <label>Saving Throws </label>
              <select 
                className="form-select"
                onChange={this.onChangeSavingThrows}
              >
                { this.renderSavingThrowOptions() }
              </select>
            </div>
          </div>
          <div className="row creatrow">
            <div className="col-sm creat4">
              <label>Skills</label>
              <select 
                className="form-select"
                onChange={this.onChangeSkills}
              >
                { this.renderSkillOptions() }
              </select>
              <small>Click to choose your skill proficiencies</small>
            </div>
            <div className="col-sm creat4">
              <label>Personality Traits</label>
              <select 
                className="form-select"
                onChange={this.onChangePersonalityTraits}
              >
                { this.renderPersonalityTraitOptions() }
              </select>
              <small>Click to choose personality traits</small>
            </div>
            <div className="col-sm creat4">
              <label>Ideals</label>
              <select 
                className="form-select"
                onChange={this.onChangeIdeals}
              >
                { this.renderIdealOptions() }
              </select>
              <small>Click to choose your ideals</small>
            </div>
          </div>
          <div className="row creatrow">
            <div className="col-sm creat2">
              <label>Bonds</label>
              <select 
                className="form-select"
                onChange={this.onChangeBonds}
              >
                { this.renderBondOptions() }
              </select>
              <small>Click to choose your bonds</small>
            </div>
            <div className="col-sm creat2">
              <label>Flaws</label>
              <select 
                className="form-select"
                onChange={this.onChangeFlaws}
              >
                { this.renderFlawOptions() }
              </select>
              <small>Click to choose your bonds</small>
            </div>
            <div className="col-sm creat2">
              <label>Proficiencies</label>
              <select 
                className="form-select"
                onChange={this.onChangeProficiencies}
              >
                { this.renderProficiencyOptions() }
              </select>
              <small> Click to choose your other Proficiencies </small>
            </div>
          </div>
          <div className="row creatrow">
            <div className="col-sm creat2">
              <label>Features</label>
              <select 
                className="form-select"
                onChange={this.onChangeFeatures}
              >
                { this.renderFeatureOptions() }
              </select>
              <small>Click to choose your features</small>
            </div>
            <div className="col-sm creat2">
              <label>Spells</label>
              <select 
                className="form-select"
                onChange={this.onChangeSpells}
              >
                { this.renderSpellOptions() }
              </select>
              <small>Click to choose your spells</small>
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