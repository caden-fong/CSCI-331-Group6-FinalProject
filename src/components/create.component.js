import React, { Component } from 'react';
import './../App.css';
import { useNavigate } from 'react-router';
import axios from 'axios';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}


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

    this.onChangeStrength = this.onChangeStrength.bind(this);
    this.onChangeDexterity = this.onChangeDexterity.bind(this);
    this.onChangeConstitution = this.onChangeConstitution.bind(this);
    this.onChangeIntelligence = this.onChangeIntelligence.bind(this);
    this.onChangeWisdom = this.onChangeWisdom.bind(this);
    this.onChangeCharisma = this.onChangeCharisma.bind(this);
    
    this.state = {
      classObject: {
        _id: 0,
        class: [{}],
        classFeature: [{}],
        name: '',
        subclass: [{}],
        subclassFeature: [{}]
      },
      name: 'NoName',
      level: 1,
      race: 'Human',
      class:'Barbarian',
      subclass: 'Path of the Berserker',
      background: 'Acolyte',
      proficiencyBonus: 0,
      hitPoints: 0,
      speed: 0,
      hitDice: {
        quantity: 0,
        dice: ''
      },
      alignment: 'Lawful Good',
      stats: {
        strength: 8,
        dexterity: 8,
        constitution: 8,
        intelligence: 8,
        wisdom: 8,
        charisma: 8
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
      personalityTraits: 'Click to choose your personality trait',
      ideals: 'Click to choose your ideal',
      bonds: 'Click to choose your bond',
      flaws: 'Click to choose your flaw',
      proficiencies: [],
      features: [],
      spells: [],
      sources: ["PHB", "TCE"],
      fluff: "",
      subclassDescription: '',
      backgroundObject: {},
      backgroundsArray: [],
      backgroundDescription: '',
      isLoading: 3,
      characteristics: [],
      spellArray: [],
      spellList: []
      
    }

    
      
      
  }

  componentDidMount() {
    axios.get('/classes/'+this.state.class)
      .then(response => {
        this.setState({
          classObject: response.data,
          fluff: response.data.class[0].fluff[0].entries[0],
        });
        let subclassFluff = response.data.subclassFeature.filter( subclass => subclass.name == this.state.subclass);
        this.setState({ 
          subclassDescription: subclassFluff[0].entries[0],
          isLoading: this.state.isLoading-1
        });
      })
      .catch(function (error) {
        console.log(error);
      })
    axios.get('/backgrounds/')
      .then(response => {
        this.setState({ backgroundArray: response.data });
        let newbackground = response.data.find( background => background.name == this.state.background);
        let newcharacteristics = newbackground.entries.find(entry => entry.name == "Suggested Characteristics");
        this.setState({ 
          backgroundObject: newbackground,
          characteristics: newcharacteristics,
          backgroundDescription: newcharacteristics.entries[0]
        });
        this.setState({ 
          isLoading: this.state.isLoading - 1
        });
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('/spells/source/PHB')
      .then(response => {
        this.setState({ spellArray: response.data });
        let newSpellList = this.state.spellArray
          .filter(spell => { 
            return (spell.classes.fromClassList.some( sp => sp.name == "Cleric") 
                  && spell.level == 1)
          });
        this.setState({ 
          spellList: newSpellList,
          isLoading: this.state.isLoading - 1
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
  onChangeRace(e) {
    this.setState({race : e.target.value})
  }
  onChangeClass(e) {
    axios.get('/classes/'+e.target.value)
      .then(response => {
        this.setState({
          classObject: response.data,
          class: e.target.value,
        });
        this.setState({ fluff: this.state.classObject.class[0].fluff[0].entries[0] });
        let classes = this.state.classObject.subclass.filter( subclass => this.state.sources.includes(subclass.source));
        let newSubclass = classes[0];
        let subclassFluff = this.state.classObject.subclassFeature.find( subclass => subclass.name == newSubclass.name);
        this.setState({ subclass: newSubclass, subclassDescription: subclassFluff.entries[0]});
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  onChangeSubclass(e) { 
    let subclassFluff = this.state.classObject.subclassFeature.find( subclass => subclass.name == e.target.value);
    this.setState({ subclass: e.target.value, subclassDescription: subclassFluff.entries[0]});
  }

  onChangeBackground(e) {
    let newbackground = this.state.backgroundArray.find( background => background.name == e.target.value);
    this.setState({ 
      background: e.target.value,
      backgroundObject: newbackground, 
      backgroundDescription: newbackground.entries[1].entries[0]
    });
  }
  onChangeAlignment(e) { this.setState({ alignment: e.target.value }) }
  onChangeSavingThrows(e) {}
  onChangeSkills(e) {
    let newSkill = lowerFirstLetter(e.target.id);
    let skillBlock = this.state.skills;
    skillBlock[newSkill] = e.target.checked;
    this.setState({ skills : skillBlock })
  }
  onChangePersonalityTraits(e) {
    let newTrait = this.state.characteristics.entries[1].rows[e.target.value-1][1] 
    this.setState({ 
      personalityTraits: newTrait
    })
  }
  onChangeIdeals(e) {
    let newIdeal = this.state.characteristics.entries[2].rows[e.target.value-1][1] 
    this.setState({ 
      ideals: newIdeal
    })
  }
  onChangeBonds(e) {
    let newBond = this.state.characteristics.entries[3].rows[e.target.value-1][1] 
    this.setState({ 
      bonds: newBond
    })
  }
  onChangeFlaws(e) {
    let newFlaw = this.state.characteristics.entries[4].rows[e.target.value-1][1] 
    this.setState({ 
      flaws: newFlaw
    })
  }
  onChangeProficiencies(e) {}
  onChangeFeatures(e) {}
  onChangeSpells(e) {
    if (e.target.checked) {
      let newList = this.state.spells;
      let newSpell = this.state.spellList.find(spell => spell.name == e.target.id);
      newList.push(newSpell);
      this.setState({ spells : newList });
    } else {
      let newList = this.state.spells;
      let removedSpellIndex = this.state.spellList.indexOf(spell => spell.name == e.target.id);
      newList.splice(removedSpellIndex, 1);
      this.setState({ spells : newList });
    }
    console.log(this.state.spells);
 
  }

  onChangeStrength(e) {
    let newStats = this.state.stats
    newStats.strength = e.target.value
    this.setState({ stats : newStats })
    console.log(newStats);
  }
  onChangeDexterity(e) {
    let newStats = this.state.stats
    newStats.dexterity = e.target.value
    this.setState({ stats : newStats })
  }
  onChangeConstitution(e) {
    let newStats = this.state.stats
    newStats.constitution = e.target.value
    this.setState({ stats : newStats })
  }
  onChangeIntelligence(e) {
    let newStats = this.state.stats
    newStats.intelligence = e.target.value
    this.setState({ stats : newStats })
  }
  onChangeWisdom(e) {
    let newStats = this.state.stats
    newStats.wisdom = e.target.value
    this.setState({ stats : newStats })
  }
  onChangeCharisma(e) {
    let newStats = this.state.stats
    newStats.charisma = e.target.value
    this.setState({ stats : newStats })
  }


  onSubmit(e) {
    e.preventDefault();

    const character = {
      name: this.state.name,
      level: this.state.level,
      race: this.state.race,
      class: this.state.class,
      background: this.state.background,
      proficiencyBonus:  this.state.proficiencyBonus,
      hitPoints:  this.state.hitPoints,
      speed:  this.state.speed,
      hitDice: this.state.hitDice,
      alignment: this.state.alignment,
      stats: this.state.stats,
      savingThrows: this.state.savingThrows,
      skills: this.state.skills,
      personalityTraits: this.state.personalityTraits,
      ideals: this.state.ideals,
      bonds: this.state.bonds,
      flaws: this.state.flaws,
      proficiencies: this.state.proficiencies,
      features: this.state.features,
      spells: this.state.spells
    };

  
    console.log('Character:');
    console.log(character);
    console.log('ID: ' + this.props.user.id);

    axios.post('/characters/create/'+this.props.user.id, character)
      .then(res => {this.props.navigate("/profile")})
      .catch(function (error) {
        console.log('Error: create component: ' + error.response.data);
      })
    }

    renderLevelOptions() {
      return (<><option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option>16</option>
        <option>17</option>
        <option>18</option>
        <option>19</option>
        <option>20</option></>
        );
    }

    renderRaceOptions() {
      return (<>
        <option>Dwarf</option>
        <option>Elf</option>
        <option>Halfling</option>
        <option>Human</option>
        <option>Dragonborn</option>
        <option>Gnome</option>
        <option>Half-Elf</option>
        <option>Half-Orc</option>
        <option>Tiefling</option>
      </>);
    }

    renderSubClassOptions() {
      let classes = this.state.classObject.subclass.filter( subclass => this.state.sources.includes(subclass.source));
      return classes.map((subclass, index) => {
        return <option key={index}>{subclass.name}</option>;
      })
    }

    renderBackgroundOptions() {
      return (<>
        <option>Acolyte</option>
        <option>Charlatan</option>
        <option>Criminal</option>
        <option>Entertainer</option>
        <option>Folk Hero</option>
        <option>Guild Artisan</option>
        <option>Hermit</option>
        <option>Noble</option>
        <option>Outlander</option>
        <option>Sage</option>
        <option>Sailor</option>
        <option>Soldier</option>
        <option>Urchin</option>
      </>);
    }

    renderStatOptions() {
      return (<><option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option></>
        );
    }

    renderSavingThrowOptions() {
      return Object.keys(this.state.savingThrows).map((stat) => {
        return (
          <div 
                className="form-check"
                onChange={this.onChangeSavingThrows}
          >
          <input className="form-check-input" type="checkbox" value="" id={stat} />
          <label className="form-check-label" for={stat}>
          {capitalizeFirstLetter(stat)}
          </label>
          </div>
        )
      }) 
    }
    renderSkillOptions() {
      return Object.keys(this.state.skills).map((skill, index) => {
        return (
          <div 
                className="form-check"
                onChange={this.onChangeSkills}
          >
          <input className="form-check-input" type="checkbox" value="" id={skill} />
          <label className="form-check-label" for={skill}>
          {capitalizeFirstLetter(skill)}
          </label>
          </div>
        )
      })
    }
    renderPersonalityTraitOptions() {
      return this.state.characteristics.entries[2].rows.map((trait, index) => {
        return <option key={index}>{trait[0]}</option>;
      })
    }
    renderIdealOptions() {
      return this.state.characteristics.entries[2].rows.map((ideal, index) => {
        return <option key={index}>{ideal[0]}</option>;
      })
    }
    
    renderBondOptions() {
      return this.state.characteristics.entries[2].rows.map((bond, index) => {
        return <option key={index}>{bond[0]}</option>;
      })
    }

    renderFlawOptions() {
      return this.state.characteristics.entries[2].rows.map((flaw, index) => {
        return <option key={index}>{flaw[0]}</option>;
      })
    }
    renderProficiencyOptions() {}
    renderFeatureOptions() {}
    renderSpellOptions() {
      return this.state.spellList.map((spell) => {
        return (
          <div 
                className="form-check"
                onChange={this.onChangeSpells}
          >
          <input className="form-check-input" type="checkbox" value="" id={spell.name} />
          <label className="form-check-label" for={spell.name}>
          {spell.name}
          </label>
          </div>
        )
      })
    }
    renderAlignmentOptions() {
      return (<>
        <option>Lawful Good</option>
        <option>Neutral Good</option>
        <option>Chaotic Good</option>
        <option>Lawful Neutral</option>
        <option>True Neutral</option>
        <option>Chaotic Neutral</option>
        <option>Lawful Evil</option>
        <option>Neutral Evil</option>
        <option>Chaotic Evil</option>
      </>);
    }

    render() {
    if(!this.props.user.id) {
      return null;
    }

    if (this.state.isLoading > 0) {
      return (
        <div className="container create">
        <p>Create a Character</p>
          <div className="row creatrow">
            <div className="col-sm creat">
            </div>
            <div className="col-sm creat">
              Loading
            </div>
            <div className="col-sm creat">
            </div>
          </div>
          <div className="row creatrow">
            <div className="col-sm creat2">
            </div>
            <div className="col-sm creat2">
              Please
            </div>
            <div className="col-sm creat2">
            </div>
          </div>
          <div className="row creatrow">
            <div className="col-sm creat5">
            </div>
            <div className="col-sm creat5">
              Wait...
            </div>
            <div className="col-sm creat5">
            </div>
          </div>
        </div>
      )
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
              <small>{this.state.subclassDescription}</small>
            </div>
            <div className="col-sm creat2">
              <label>Background</label>
              <select 
                className="form-select"
                onChange={this.onChangeBackground}
              >
                { this.renderBackgroundOptions() }
              </select>
              <small>{ this.state.backgroundDescription }</small>
            </div>
          </div>
          <div className="row creatrow">
            <div className="col-sm creat3">
              <label>Strength</label>
              <select 
                className="form-select"
                onChange={this.onChangeStrength}
              >
                { this.renderStatOptions() }
              </select>
              <small>Click to choose stat number </small>
            </div>
            <div className="col-sm creat3">
              <label>Dexterity</label>
              <select 
                className="form-select"
                onChange={this.onChangeDexterity}
              >
                { this.renderStatOptions() }
              </select>
              <small>Click to choose stat number </small>
            </div>
            <div className="col-sm creat3">
              <label>Intelligence</label>
              <select 
                className="form-select"
                onChange={this.onChangeIntelligence}
              >
                { this.renderStatOptions() }
              </select>
              <small>Click to choose stat number </small>
            </div>
            <div className="col-sm creat3">
              <label>Wisdom</label>
              <select 
                className="form-select"
                onChange={this.onChangeWisdom}
              >
                { this.renderStatOptions() }
              </select>
              <small>Click to choose stat number </small>
            </div>
            <div className="col-sm creat3">
              <label>Charisma</label>
              <select 
                className="form-select"
                onChange={this.onChangeCharisma}
              >
                { this.renderStatOptions() }
              </select>
              <small>Click to choose stat number </small>
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
              <label>Saving Throws </label>
                { this.renderSavingThrowOptions() }
              <small>Click to choose your saving throws</small>
            </div>
            <div className="col-sm creat4">
              <label>Personality Traits</label>
              <select 
                className="form-select"
                onChange={this.onChangePersonalityTraits}
              >
                { this.renderPersonalityTraitOptions() }
              </select>
              <small>{this.state.personalityTraits}</small>
            </div>            
          </div>
          <div className="row creatrow">

            <div className="col-sm creat4">
              <label>Ideals</label>
              <select 
                className="form-select"
                onChange={this.onChangeIdeals}
              >
                { this.renderIdealOptions() }
              </select>
              <small>{this.state.ideals}</small>
            </div>
            
            <div className="col-sm creat2">
              <label>Bonds</label>
              <select 
                className="form-select"
                onChange={this.onChangeBonds}
              >
                { this.renderBondOptions() }
              </select>
              <small> {this.state.bonds}</small>
            </div>
            <div className="col-sm creat2">
              <label>Flaws</label>
              <select 
                className="form-select"
                onChange={this.onChangeFlaws}
              >
                { this.renderFlawOptions() }
              </select>
              <small>{this.state.flaws} </small>
            </div>
          </div>
          <div className="row creatrow">
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